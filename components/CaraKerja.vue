<template>
  <div id="carakerjakami" class="py-28">
    <div class="lg:px-md-screen px-8 mb-28">
      <div class="flex justify-center mb-20">
        <h1
          class="text-center font-bold text-3xl lg:text-[40px] title-underline-long"
        >
          Bagaimana Cara Kerja Kami?
        </h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 gap-y-14 lg:gap-y-0">
        <div
          class="w-full border-2 rounded-lg py-10 px-4 relative flex flex-col space-y-6 custom-shadow"
          v-for="i in works"
        >
          <div class="w-full absolute flex justify-center -top-8 right-0">
            <img :src="i.icon" alt="" class="w-[60px] aspect-square -top-8" />
          </div>

          <p class=" text-center font-bold text-2xl text-main-gold">{{ i.title }}</p>
          <p class=" text-center text-body-text">{{ i.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const works = [
  {
    icon: "/image/phone 1.svg",
    title: "Hubungi Kami",
    content:
      "Isi keterangan dan permasalahan kendaraan Anda, atau hubungi kami di nomor 085281246971",
  },
  {
    icon: "/image/calendar 1.svg",
    title: "Penjadwalan Mekanik",
    content:
      "Silakan tentukan waktu dan lokasi yang anda inginkan kepada mekanik kami",
  },
  {
    icon: "/image/car.svg",
    title: "Diagnosa & Estimasi",
    content:
      "Kami akan mengecek kendaraan anda serta memberikan diagnosa & estimasi biaya secara transparan",
  },
  {
    icon: "/image/screwdriver.svg",
    title: "Perbaikan",
    content:
      "Perbaikan akan dilakukan setelah Anda menyetujui rincian biaya yang dikenakan",
  },
];
</script>
