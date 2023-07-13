<template>
  <div @scroll="handleScroll" class="relative overflow-scroll">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const app = firebaseApp;

const scroll = useScroll()

const handleScroll = (event: any) => {
    const scrollTop = window.scrollY
    scroll.value = scrollTop
};

if (process.client) {
  window.addEventListener('scroll', handleScroll);
} 

</script>
