<template>
  <div class=" w-full  md:h-[420px] rounded-md relative overflow-hidden px-10 flex justify-center items-center">
    <img class=" absolute top-0 right-0 w-full h-full bg-cover -z-10" :src="promo?.image" alt="">
    <div class=" flex space-x-3 justify-center px-20 py-16 items-center">
        <h2 class=" text-white text-2xl md:text-[40px] font-bold">{{ promo?.title }}</h2>
        <div class=" flex flex-col">
        <p class=" text-white text-xs md:text-base">Diskon sampai dengan</p>
        <h2 class=" text-main-gold text-4xl md:text-8xl font-semibold">{{ promo?.persentage }}%</h2>

        </div>

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  promo: {
    type: Object,
  },
});
</script>
