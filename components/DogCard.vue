<template>
  <BCard
    :img-src="realImgSrc"
    :img-alt="name"
    :img-width="200"
    :img-height="200"
    img-top
    tag="article"
    class="shadow-on-hover"
  >
    <BCardText class="fw-normal mb-0 fs-5">
      {{ name }}
    </BCardText>
    <BCardText class="fw-bold mb-0">
      Rp {{ startPrice }} ~ {{ endPrice }}
    </BCardText>
    <BCardText class="d-flex align-items-center">
      <IMdiStarCircle class="text-yellow" />
      <p class="mb-0 ms-1">{{ review }}</p>
    </BCardText>
    <template #footer>
      <div class="d-grid gap-2">
        <BButton class="bg-dark-blue" @click="onBtnClicked">{{ buttonText }}</BButton>
      </div>
    </template>
  </BCard>
</template>

<script setup>
  import IMdiStarCircle from '~icons/mdi/star-circle'

  const { name, imgSrc, startPrice, endPrice, review, isImgDirect, buttonText } = defineProps({
    name: String,
    imgSrc: String,
    startPrice: String,
    endPrice: String,
    review: Number,
    isImgDirect: Boolean,
    buttonText: String
  })

  const emit = defineEmits(['btnClick'])
  const onBtnClicked = () => {
    emit('btnClick')
  }

  const realImgSrc = ref("")
  if (isImgDirect) {
    realImgSrc.value = imgSrc
  } else {
    const { data:image, error } = await useFetch(imgSrc)
    realImgSrc.value = image.value.message
  }
</script>

<style scoped>

.shadow-on-hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}
.shadow-on-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
</style>