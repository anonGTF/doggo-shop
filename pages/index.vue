<template>
  <BContainer class="bg-yellow d-flex flex-column vh-100" fluid>
    <BRow class="flex-grow-1">
      <BCol cols="12" sm="8" class="d-flex align-items-center justify-content-center">
        <div class="mx-sm-5">
          <p class="fw-bold lh-1 hero">Find your best <br> accompanying friend!</p>
          <div class="d-md-flex mt-4">
            <p class="fs-1 mb-0 fw-normal me-2">I am looking for </p>
            <VueWriter 
              :array="dogList" 
              class="fs-1 fw-bold text-decoration-underline" 
            />
          </div>
          <BButton to="/breeds" size="lg" class="px-4 mt-2 mt-sm-0 bg-dark-blue">
            <span class="fw-bold">Search!</span>
          </BButton>
        </div>
      </BCol>
      <BCol cols="12" sm="4" class="d-flex align-items-center">
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

<style lang="scss" scoped>

$default-font-size: 4rem;
$font-size-small: $default-font-size * 0.4;
$font-size-medium: $default-font-size * 0.6;
$font-size-large: $default-font-size * 1;

@mixin responsive-font-size($size) {
  font-size: $size;
}

.hero {
  font-size: $default-font-size;

  @media (max-width: 576px) {
    @include responsive-font-size($font-size-small);
  }

  @media (min-width: 576px) and (max-width: 768px) {
    @include responsive-font-size($font-size-medium);
  }

  @media (min-width: 768px) and (max-width: 992px) {
    @include responsive-font-size($font-size-large);
  }

  @media (min-width: 992px) {
    font-size: $default-font-size;
  }
}

</style>