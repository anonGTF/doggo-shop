<template>
  <BContainer class="bg-yellow d-flex flex-column pt-1" fluid>
    <BRow class="mt-5 pt-5 mx-5 mb-3">
      <h1>All Breeds</h1>
      <p class="fs-4 d-flex"><span class="bg-white">✨Find your next pet-ner based on their breed 🐶</span></p>
    </BRow>
    <BRow class="mx-5">
      <BCol cols="2" class="mb-3" v-for="breed in breedList" :key="breed.name">
        <DogCard 
          :name="breed.name"
          :img-src="breed.image"
          :start-price="breed.startPrice"
          :end-price="breed.endPrice"
          :review="breed.review"
        />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup>
  const breedList = ref([])
  const { data: breedsResponse, error } = await useFetch("https://dog.ceo/api/breeds/list/all")
  const breeds = Object.keys(breedsResponse.value.message)
  breeds.forEach( async (breed) => {
    const { data: imageResponse, error } = await useFetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    breedList.value.push({
      name: breed,
      image: imageResponse.value.message,
      startPrice: "100k",
      endPrice: "300k",
      review: 4.5
    })
  });
</script>

<style scoped>

</style>