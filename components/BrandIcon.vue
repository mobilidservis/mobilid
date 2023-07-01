<template>
    <div class=" h-32 bg-white border rounded-lg custom-shadow flex items-center justify-center py-4 px-20">
        <img class="" :src="icon" alt="">
    </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
  },
});
</script>