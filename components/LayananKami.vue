<template>
  <div class="flex flex-col md:flex-row">
    <LayananCard v-for="i in data.layanan" :props="i" />
  </div>
  <div class="p-md-screen">
    <div class="flex justify-center mb-10">
      <h1
        class="text-center font-bold text-3xl md:text-[40px] title-underline-long2"
      >
        Brands Yang Pernah Kami Layani
      </h1>
    </div>

    <div class="flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
      <div class="flex flex-col space-y-4">
        <BrandIcon v-for="i in data.brands.firstRow" :icon="i" />
      </div>
      <div class="flex flex-col space-y-4">
        <BrandIcon v-for="i in data.brands.secondRow" :icon="i" />
      </div>
      <div class="flex flex-col space-y-4">
        <BrandIcon v-for="i in data.brands.thirdRow" :icon="i" />
      </div>
      <div class="flex flex-col space-y-4">
        <BrandIcon v-for="i in data.brands.fourthRow" :icon="i" />
      </div>
      <div class="flex flex-col space-y-4">
        <BrandIcon v-for="i in data.brands.fifthRow" :icon="i" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = reactive({
  layanan: [
    {
      image: "/image/image 10.png",
      title: "SERVICE BERKALA",
      content:
        "Proses perawatan dan perbaikan rutin kendaraan yang meliputi penggantian pelumas pada mesin untuk menjaga performa mesin.",
    },
    {
      image: "/image/image 11.png",
      title: "MESIN",
      content:
        "Perawatan dan perbaikan engine sistem meliputi engine electrical diagnosis, mecanical engine serta sistem pelumasan dan pendinginan mesin.",
    },
    {
      image: "/image/image 12.png",
      title: "ELECTRICAL",
      content:
        "Perbaikan dan perawatan Air Conditioner, electrical wiring system dan electrical component",
    },
  ],
  brands: {
    firstRow: ["/image/BMW.png"],
    secondRow: ["/image/g10.png", "/image/MINI_logo 1.png"],
    thirdRow: ["/image/Audi-Logo_2016.png", "/image/KIA_logo3.png", "/image/Volvo_logo1 1.png"],
    fourthRow: ["/image/image 252.png", "/image/Volkswagen_logo_2019.png"],
    fifthRow: ["/image/Group.png"],
  },
});
</script>
