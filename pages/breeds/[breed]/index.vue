<template>
  <div>
    <BContainer class="bg-yellow d-flex flex-column pt-1" fluid>
      <BRow class="mt-5 pt-5 mx-5 mb-3">
        <h1>All Breeds / {{ breed }}</h1>
        <p class="fs-4 d-flex"><span class="bg-white">✨Pick the best <span class="fw-bold">{{ breed }}</span>. Only in our shop 🐶</span></p>
      </BRow>
      <BRow class="mx-5">
        <BCol cols="2" class="mb-3" v-for="dog in dogList" :key="dog.name">
          <DogCard 
            :name="dog.name"
            :img-src="dog.image"
            :start-price="dog.startPrice"
            :end-price="dog.endPrice"
            :review="dog.review"
            :is-img-direct="true"
            button-text="See detail"
          />
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup>
  import { uniqueNamesGenerator, names } from 'unique-names-generator'
  const { breed } = useRoute().params
  const dogList = ref([])
  const { data: imageResponse, error } = await useFetch(`https://dog.ceo/api/breed/${breed}/images/random/24`)
  
  const breedImages = imageResponse.value.message
  breedImages.forEach(img => {
    dogList.value.push({
      name: uniqueNamesGenerator({
        dictionaries: [names]
      }),
      image: img,
      startPrice: "100k",
      endPrice: "300k",
      review: 4.5,
    })
  })
</script>

<style scoped>

</style>