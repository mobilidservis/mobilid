<template>
  <div ref="el" class="w-full max-w-screen-2xl mx-auto relative">
   <Banner/>
   <TentangKami/>
   <CaraKerja/>
   <!-- <PaketCard/> -->
    <LayananKami/>
   <Footer/>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

</script>
