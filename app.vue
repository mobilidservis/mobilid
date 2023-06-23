<template>
  <div v-scroll="handleScroll" class="relative overflow-scroll hsc">
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


</script>
