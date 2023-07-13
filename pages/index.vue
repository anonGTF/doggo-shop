<template>
  <BContainer class="bg-yellow d-flex flex-column vh-100" fluid>
    <BRow class="flex-grow-1">
      <BCol cols="8" class="d-flex align-items-center justify-content-center">
        <div class="mx-5">
          <p class="fw-bold lh-1" style="font-size: 4em;">Find your best <br> accompanying friend!</p>
          <div class="d-flex mt-4">
            <p class="fs-1 fw-normal me-2">I am looking for </p>
            <VueWriter 
              :array="dogList" 
              class="fs-1 fw-bold text-decoration-underline" 
            />
          </div>
          <BButton to="/breeds" size="lg" class="px-4 bg-dark-blue">
            <span class="fw-bold">Search!</span>
          </BButton>
        </div>
      </BCol>
      <BCol cols="4" class="d-flex align-items-center">
        <BImg src="/dog_home.png" fluid alt="Dog image" />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup>
  import VueWriter from 'vue-writer'

  const dogList = ref([
    "affenpinscher.",
    "basenji.",
    "bulldog.",
    "chihuahua.",
    "corgi.",
    "dalmatian.",
    "hound.",
    "husky.",
    "labrador.",
    "pitbull.",
    "poodle.",
    "shiba.",
    "terrier.",
  ])
</script>

<style scoped>
</style>