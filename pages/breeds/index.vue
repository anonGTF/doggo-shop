<template>
  <div>
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
            :is-img-direct="false"
            button-text="See more"
            @btnClick="openModal(breed)"
          />
        </BCol>
      </BRow>
    </BContainer>
    <BModal 
      v-model="modal" 
      centered 
      hide-footer 
      hide-header
      size="lg"
      bodyClass="p-0"
    >
      <BCard no-body class="overflow-hidden">
        <BRow class="g-0">
          <BCol md="6">
            <BCardImg
              :src="selectedBreedImage"
              alt="Image"
              class="rounded-0"
              height="500"
            />
          </BCol>
          <BCol md="6" class="d-flex flex-column">
            <BCardBody class="flex-grow-1">
              <BCardText class="fw-bold fs-1 mb-0">
                {{ selectedBreed.name }}
              </BCardText>
              <BCardText class="mb-0 d-flex align-items-center">
                <IMdiStarCircle class="text-yellow" />
                <p class="mb-0 mx-1">{{ selectedBreed.review }}</p> 
                <p class="mb-0 fw-bold">·</p>
                <p class="mb-0 ms-1">Rp{{ selectedBreed.startPrice }} ~ {{ selectedBreed.endPrice }}</p>
              </BCardText>
              <BCardText>
                <p>Find a suitable sub breed of {{ selectedBreed.name }} here:</p>
                <BButton 
                  v-for="subbreed in selectedBreed.subbreeds" 
                  :key="subbreed" 
                  variant="outline-success" 
                  class="me-1 mb-1"
                  :to="`/breeds/${selectedBreed.name}/${subbreed}`"
                >
                  {{ subbreed }}
                </BButton>
                <p v-if="selectedSubbreedLength === 0" class="fst-italic fs-6">There is no sub breed of {{ selectedBreed.name }}</p>
              </BCardText>
            </BCardBody>
            <BCardFooter class="d-flex flex-column justify-content-center">
              <p class="text-center mb-1 mt-0">Or just...</p>
              <BButton 
                variant="primary" 
                class="mb-2"
                :to="`/breeds/${selectedBreed.name}`"
              >
                  Explore {{ selectedBreed.name }} collections!
              </BButton>
            </BCardFooter>
          </BCol>
        </BRow>
      </BCard>
    </BModal>
  </div>
</template>

<script setup>
  import IMdiStarCircle from '~icons/mdi/star-circle'
  
  const breedList = ref([])
  const { data: breedsResponse, error } = await useFetch("https://dog.ceo/api/breeds/list/all")
  
  const breeds = Object.keys(breedsResponse.value.message)
  breeds.forEach(breed => {
    breedList.value.push({
      name: breed,
      image: `https://dog.ceo/api/breed/${breed}/images/random`,
      startPrice: "100k",
      endPrice: "300k",
      review: 4.5,
      subbreeds: breedsResponse.value.message[breed]
    })
  })

  const modal = ref(false)
  const selectedBreed = ref({})
  const selectedBreedImage = ref("")
  const openModal = async (breed) => {
    modal.value = !modal.value
    selectedBreed.value = breed
    const { data:image, error } = await useFetch(selectedBreed.value.image)
    selectedBreedImage.value = image.value.message
  }
  const selectedSubbreedLength = computed(() => (Object.keys(selectedBreed.value).length == 0) ? 0 : selectedBreed.value.subbreeds.length)
</script>

<style scoped>

</style>