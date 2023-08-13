<template>
  <div ref="el" class="w-full max-w-screen-2xl mx-auto relative">
   <Banner/>
   <TentangKami/>
   <CaraKerja/>
    <LayananKami/>
   <Footer/>
   <WhatsAppIcon/>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
</script>
