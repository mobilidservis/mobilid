<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
const app = firebaseApp;

const scroll = useScroll()

// const handleScroll = (event: any) => {
//     const scrollTop = window.scrollY
//     scroll.value = scrollTop
// };


</script>
