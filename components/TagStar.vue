<template>
  <div class="flex border-2 p-3 space-x-2 justify-center rounded-md">
    <img :src="starIcon" alt="" />
    <p class="font-semibold text-main-gold">{{ tag }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  tag: {
    type: String,
  },
});
import starIcon from "@/assets/icon/IcRoundStarBorder 1.svg";

</script>
