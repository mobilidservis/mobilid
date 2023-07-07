<template>
  <div class="parallelogram-bg lg:px-md-screen px-8 py-[150px] w-full">
    <div class="flex flex-col lg:flex-row lg:space-x-6 items-center">
      <div class="basis-1/2">
        <h2 class="font-bold text-xl text-main-red">Keunggulan Kami</h2>
        <h1 class="text-[32px] text-white my-4 font-bold">
          Kenapa Anda Harus Memilih Kami Untuk Merawat Mobil Anda?
        </h1>
      </div>
      <div class="basis-1/2">
        <p class=" text-white opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
      </div>
    </div>
    <div class="flex flex-col lg:flex-row lg:space-x-6 items-center space-y-4">
      <div class="basis-1/2">
       
        <div class=" grid md:grid-cols-2 grid-cols-1 gap-y-6 mt-4">
        <KeunggulanKamiIcon v-for="i in iconHero" :props="i"/>
        </div>
      </div>
      <div class="basis-1/2">
        <div class="lg:w-[580px] w-full aspect-square relative">
            <div class="rounded-md overflow-hidden w-full h-full">
              <img
                :src="masBengkel"
                class="w-full h-full object-cover"
                alt=""
                srcset=""
              />
            </div>
            <div
              class="-z-10 lg:w-[580px] w-full top-3 left-3 aspect-square rounded-md overflow-hidden bg-main-gold absolute"
            ></div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import masBengkel from "@/assets/image/image 9.png";

const iconHero = [
  {
    title: "Mekanik Berpengalaman",
    image: "/image/mechanic.svg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    title: "Service di Depan Mata Anda",
    image: "/image/body-repair.svg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    title: "Teknologi Tercanggih",
    image: "/image/wrench.svg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    title: "Garansi",
    image: "/image/guarantee.svg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
];
</script>
