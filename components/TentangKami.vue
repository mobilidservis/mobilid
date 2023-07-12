<template>
  <div id="tentangkami" class=" py-16">
    <div class="lg:px-md-screen px-8 lg:mb-28">
      <div
        class="flex flex-col lg:flex-row lg:py-20 py-10 items-center space-y-5 lg:space-x-6"
      >
        <div class="basis-1/2">
          <div class="lg:w-[580px] w-full aspect-square relative">
            <div class="rounded-md overflow-hidden w-full h-full">
              <img
                :src="tentangKamiImg"
                class="w-full h-full object-cover"
                alt=""
                srcset=""
              />
            </div>
            <div
              class="-z-10 lg:w-[580px] w-full top-3 right-3 aspect-square rounded-md overflow-hidden bg-main-red absolute"
            ></div>
          </div>
        </div>
        <div class="basis-1/2">
          <div class="flex flex-col">
            <h2 class="font-bold text-sm lg:text-xl text-main-red md:mt-5">Tentang Kami</h2>
            <h1 class="lg:text-[32px] text-xl font-bold lg:leading-10">
              Kami Menawarkan
              <span class="text-main-gold">Perawatan Otomatif Terbaik</span>
            </h1>
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 my-6">
              <TagStar v-for="i in data.tag" :tag="i" />
            </div>
            <p class="text-body-text text-justify lg:text-start">
              Jangan tunggu kendaraan anda memberi tanda, tapi cek lah secara berkala, kendaraan anda sehat anda pun senang, servicemobil.id siap memberikan pelayanan terbaik untuk anda.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-center mb-10">
          <h1
            class="text-center font-bold text-3xl lg:text-[40px] title-underline"
          >
          Paket service
          </h1>
        </div>

        <div class="">
          <PaketCard :img="data.paket"/>
        </div>
      </div>
    </div>
  </div>
  <KeungulanKami />
</template>

<script setup lang="ts">
import tentangKamiImg from "/image/Picsart_23-07-03_20-13-37-718.jpg";

const data = reactive({
  tag: ["Berkualitas", "Berkomitmen", "Sigap"],
  paket: ["/paket/WhatsApp Image 2023-07-08 at 20.11.58.jpeg", "/paket/WhatsApp Image 2023-07-08 at 20.12.00.jpeg",  "/paket/WhatsApp Image 2023-07-08 at 20.12.01.jpeg", "/paket/WhatsApp Image 2023-07-08 at 20.12.01 (1).jpeg", "/paket/WhatsApp Image 2023-07-08 at 20.12.02 (1).jpeg", "/paket/WhatsApp Image 2023-07-08 at 20.12.02.jpeg", "/paket/WhatsApp Image 2023-07-11 at 09.28.52.jpeg"]
});
</script>
