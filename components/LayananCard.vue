<template>
  <div class="w-full aspect-square relative overflow-hidden">
    <img
      :src="props?.image"
      alt=""
      class="w-full aspect-square object-cover object-center top-0 right-0 absolute -z-10"
    />
   
    
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
