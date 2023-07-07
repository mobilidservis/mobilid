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
                src="https://res.cloudinary.com/dwlgplrj9/image/upload/v1687457860/servicemobil/image_8_krqb3h.png"
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
            <h2 class="font-bold text-xl text-main-red md:mt-5">Tentang Kami</h2>
            <h1 class="text-[32px] font-bold">
              Kami Menawarkan
              <span class="text-main-gold">Perawatan Otomatif Terbaik</span>
            </h1>
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 my-6">
              <TagStar v-for="i in data.tag" :tag="i" />
            </div>
            <p class="text-body-text text-justify lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-center mb-10">
          <h1
            class="text-center font-bold text-3xl lg:text-[40px] title-underline"
          >
            Promo Bulan Ini
          </h1>
        </div>

        <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <PromoBanner v-for="i in data.promo" :promo="i" />
        </div>
      </div>
    </div>
  </div>
  <KeungulanKami />
</template>

<script setup lang="ts">
const data = reactive({
  tag: ["Berkualitas", "Berkomitmen", "Sigap"],
  promo: [
    {
      image: "/image/image 13.png",
      persentage: 50,
      title: "PROMO BULAN JUNI",
    },
    {
      image: "/image/image 14.png",
      persentage: 50,
      title: "PROMO BULAN JUNI",
    },
  ],
});
</script>
