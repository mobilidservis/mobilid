<template>
  <div
    class="top-0 h-full bg-[url(/image/Picsart_23-07-03_20-06-24-128.webp)] bg-center bg-cover bg-no-repeat"
    id="header"
  >
  <div class="bg-black w-full h-full bg-opacity-70">
    <div class="items-center flex flex-col h-full py-44">
      <h1
        class="text-white font-extrabold text-3xl lg:text-[64px] text-center lg:leading-[59.84px]"
      >
        <span class="text-main-gold"> Bengkel </span>Online, <br />
        Mekanisme<span class="text-main-red"> Handal</span>
      </h1>

      <p
        class="text-white lg:text-xl font-semibold text-center mt-6 px-4 lg:px-0"
      >
        Berkomitmen untuk memberikan layanan yang
        <span class="text-main-gold">luar biasa</span>, memastikan mobil Anda
        <br />
        menerima <span class="text-main-gold"> perawatan yang layak</span>.
      </p>

      <button
        class="mt-6 px-4 py-2 bg-main-red rounded-lg text-white font-semibold text-center"
      @click="toggleBooking">
        Booking Service Sekarang
      </button>
    </div>
  </div>
</div>
<BookingForm :modal="bookingModal" @on-close="toggleBooking"/>
</template>

<script setup lang="ts">
  let bookingModal = ref(false)

  const toggleBooking = () => {
    bookingModal.value = !bookingModal.value
  }
</script>
