<template>
  <div class="flex flex-col">
    <img :src="props?.image" alt="" class=" w-[60px] aspect-square"/>
    <p class=" font-semibold text-main-gold text-xl my-3">{{ props?.title }}</p>
    <p class=" text-white opacity-70">{{ props?.content }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  props: {
    type: Object,
  },
});
</script>
