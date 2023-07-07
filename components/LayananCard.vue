<template>
  <div class="w-full aspect-square relative overflow-hidden">
    <img
      :src="props?.image"
      alt=""
      class="w-full aspect-square top-0 right-0 absolute -z-10"
    />
    <div class="w-full aspect-square lg:p-14 md:p-6 p-14 flex flex-col justify-between">
      <div class="">
        <img class="w-14" :src="toolsIcon" alt="" />
        <p class="text-xl font-semibold text-main-gold mt-2">Layanan Kami</p>
      </div>

      <div class="text-white">
        <h2 class="lg:text-4xl text-4xl md:text-lg font-bold">{{ props?.title }}</h2>
        <p class="opacity-70 md:text-sm">{{ props?.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import toolsIcon from "/image/Group 10.svg";

defineProps({
  props: {
    type: Object,
  },
});
</script>
