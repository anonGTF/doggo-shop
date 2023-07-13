<template>
  <div>
    <BContainer class="bg-yellow d-flex flex-column pt-1" fluid>
      <BRow class="mt-5 pt-5 mx-sm-5 mb-3">
        <h1>All Breeds / {{ breed }}</h1>
        <p class="fs-4 d-flex"><span class="bg-white">✨Pick the best <span class="fw-bold">{{ breed }}</span>. Only in our shop 🐶</span></p>
      </BRow>
      <BRow v-if="subbreedList.length === 0" class="mx-sm-5">
        <BCol cols="6" md="4" lg="3" xl="2" class="mb-3 px-1 px-md-2" v-for="dog in dogList" :key="dog.name">
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
      <BRow v-else class="mx-sm-5 flex-grow-1">
        <BCarousel :interval="2500" controls indicators ride="carousel">
          <BCarouselSlide 
            v-for="slide in slideList" 
            :key="slide"
            :img-src="slide.imageSrc" 
            :caption="slide.name"
            img-height="400"
          />
        </BCarousel>
        <div class="mt-2 d-flex justify-content-center flex-wrap">
          <BButton 
            v-for="slide in slideList" 
            :key="slide" 
            variant="success" 
            class="me-1 mb-1"
            :to="`/breeds/${breed}/${slide.name}`"
          >
            {{ slide.name }}
          </BButton>
        </div>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup>
  import { uniqueNamesGenerator, names } from 'unique-names-generator'
  const { breed } = useRoute().params

  const dogList = ref([])
  const slideList = ref([])

  const subbreedList = ref([])
  const { data: subbreedResponse } = await useFetch(`https://dog.ceo/api/breed/${breed}/list`)
  subbreedList.value = subbreedResponse.value.message

  if (subbreedList.value.length > 0) {
    subbreedList.value.forEach(async (subbreed) => {
      const { data: imageResponse } = await useFetch(`https://dog.ceo/api/breed/${breed}/${subbreed}/images/random`)
      const image = imageResponse.value.message

      slideList.value.push({
        name: subbreed,
        imageSrc: image
      })
    })
  } else {
    const { data: imageResponse } = await useFetch(`https://dog.ceo/api/breed/${breed}/images/random/24`)  
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
  }
</script>

<style scoped>

</style>