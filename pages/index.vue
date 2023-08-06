<template>
  <div ref="el" class="w-full max-w-screen-2xl mx-auto relative">
   <Banner/>
   <TentangKami/>
   <CaraKerja/>
    <LayananKami/>
   <Footer/>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

useSeoMeta({
  title: 'Servicemobil.id',
  ogTitle: 'Service Mobil Indonesia',
  description: 'Selamat datang di servicemobil.id, layanan mobil terbaik, termurah, dan terpercaya di Indonesia, dengan fokus pelayanan di Jakarta dan Yogyakarta. Kami berkomitmen untuk memberikan pengalaman yang luar biasa kepada pelanggan kami dalam hal perawatan dan perbaikan mobil. Dengan tim mekanik berpengalaman dan terlatih, kami menawarkan solusi lengkap untuk semua kebutuhan kendaraan Anda.',
  ogDescription: 'Selamat datang di servicemobil.id, layanan mobil terbaik, termurah, dan terpercaya di Indonesia, dengan fokus pelayanan di Jakarta dan Yogyakarta. Kami berkomitmen untuk memberikan pengalaman yang luar biasa kepada pelanggan kami dalam hal perawatan dan perbaikan mobil. Dengan tim mekanik berpengalaman dan terlatih, kami menawarkan solusi lengkap untuk semua kebutuhan kendaraan Anda.',
})

useHead({
  title: 'Servicemobil.id',
  // meta: [
  //   { name:"google-site-verification", content:"O_kzaKX7eAXQ7qeMX3y8Pu_Bk5MwIBHQDUjmaeLnCZI" }
  // ],
})

</script>
