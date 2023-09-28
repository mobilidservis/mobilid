<template>
  <div class="flex flex-col md:flex-row" id="layanankami">
    <LayananCard v-for="i in data.layanan" :props="i" />
  </div>
  <div class="lg:p-md-screen p-10">
    <div class="flex justify-center mb-10">
      <h1
        class="text-center font-bold text-3xl lg:text-[40px] title-underline-long2"
      >
        Brands Yang Pernah Kami Layani
      </h1>
    </div>

    <div class="hidden lg:flex flex-col lg:flex-row items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
      <div class=" lg:basis-3/12 flex flex-col w-full space-y-4">
        <BrandIcon v-for="i in data.brands.firstRow" :icon="i" />
      </div>
      <div class=" lg:basis-3/12 flex flex-col w-full space-y-4">
        <BrandIcon v-for="i in data.brands.secondRow" :icon="i" />
      </div>
      <div class=" lg:basis-3/12 flex flex-col w-full space-y-4">
        <BrandIcon v-for="i in data.brands.thirdRow" :icon="i" />
      </div>
      <div class=" lg:basis-3/12 flex flex-col w-full space-y-4">
        <BrandIcon v-for="i in data.brands.fourthRow" :icon="i" />
      </div>
      <div class=" lg:basis-3/12 flex flex-col w-full space-y-4">
        <BrandIcon v-for="i in data.brands.fifthRow" :icon="i" />
      </div>
    </div>
    <div class="lg:hidden">
      <div class=" grid grid-cols-3 gap-3 w-full">
        <BrandIcon  v-for="i in [...data.brands.firstRow, ...data.brands.secondRow, ...data.brands.thirdRow, ...data.brands.fourthRow, ...data.brands.fifthRow]"  :icon="i" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = reactive({
  layanan: [
    {
      image: "/image/mekanik1.png",
      title: "SERVICE BERKALA",
      content:
        "Proses perawatan dan perbaikan rutin kendaraan yang meliputi penggantian pelumas pada mesin untuk menjaga performa mesin.",
    },
    {
      image: "/image/mekanik2.png",
      title: "MESIN",
      content:
        "Perawatan dan perbaikan engine sistem meliputi engine electrical diagnosis, mecanical engine serta sistem pelumasan dan pendinginan mesin.",
    },
    {
      image: "/image/mekanik3.png",
      title: "ELECTRICAL",
      content:
        "Perbaikan dan perawatan Air Conditioner, electrical wiring system dan electrical component",
    },
    {
      image: "/image/mekanik4.png",
      title: "ELECTRICAL",
      content:
        "Perbaikan dan perawatan Air Conditioner, electrical wiring system dan electrical component",
    },
    {
      image: "/image/mekanik5.png",
      title: "ELECTRICAL",
      content:
        "Perbaikan dan perawatan Air Conditioner, electrical wiring system dan electrical component",
    },
  ],
  brands: {
    firstRow: ["/image/toyota-logos-brands-logotypes-0.png"],
    secondRow: ["/image/daihatsu-vector-logo-idngrafis.png", "/image/nissan-2020-new-logo.jpg"],
    thirdRow: ["/image/Chevrolet-logo.png", "/image/Suzuki.png", "/image/Mitsubishi_logo.svg.png"],
    fourthRow: ["/image/Honda-Emblem.png", "/image/Mazda-logo-1997-1920x1080.png"],
    fifthRow: ["/image/Ford-Motor-Company-Logo.png"],
  },
});

</script>
