<template>
    <div class=" h-32 bg-white border rounded-lg custom-shadow flex items-center justify-center px-4">
        <img class=" h-24 w-auto" :src="icon" alt="">
    </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
  },
});
</script>