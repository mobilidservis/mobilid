<template>
  <div class="flex flex-col justify-center items-center border border-white rounded-lg py-8">
    <img :src="props?.image" alt="" class=" w-[60px] aspect-square"/>
    <p class=" font-semibold text-center text-main-gold text-xl my-3">{{ props?.title }}</p>
   
  </div>
</template>

<script setup lang="ts">
defineProps({
  props: {
    type: Object,
  },
});
</script>
