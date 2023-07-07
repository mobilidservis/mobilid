<template>
  <div
    class="w-screen h-screen flex items-center justify-center z-50 fixed top-0 right-0 p-10"
 v-if="modal" >
    <div
      class="bg-white w-full rounded-lg h-full drop-shadow-2xl p-10 flex flex-col overflow-scroll"
    >
      <div>
        <h1 class="text-3xl text-main-red font-bold text-center">
          Booking Service
        </h1>
        <p class="text-body-text text-center text-xl mt-5">
          Isi data di bawah ini untuk melakukan proses booking service
        </p>
      </div>

      <div class="flex flex-col mt-10">
        <p class="text-xl font-bold">Informasi Anda</p>
        <div class="grid lg:grid-cols-3 grid-cols-1 mt-4 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Nama Anda"
            id="name"
            class="rounded-lg border px-3 py-4 focus:outline focus:outline-main-red"
          />
          <input
            type="text"
            name="email"
            placeholder="Email Aktif"
            id="email"
            class="rounded-lg border px-3 py-4 focus:outline focus:outline-main-red"
          />
          <input
            type="number"
            name="phone"
            placeholder="Nomor Telfon"
            id="phone"
            class="rounded-lg border px-3 py-4 focus:outline focus:outline-main-red"
          />
        </div>
        <div class="grid grid-cols-1 mt-4 gap-6">
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="3"
            placeholder="Alamat Anda"
            class="rounded-lg border px-3 py-4 focus:outline focus:outline-main-red"
          ></textarea>
        </div>
      </div>
      <div class=" flex flex-col mt-10">
                <p class=" text-xl font-bold">Informasi Mobil Anda</p>
                <div class=" grid lg:grid-cols-3 grid-cols-1 mt-4 gap-6">
                    <input type="text" name="name" placeholder="Brand" id="name" class=" rounded-lg border px-3 py-4 focus:outline focus:outline-main-red">
                    <input type="text" name="email" placeholder="Model" id="email" class=" rounded-lg border px-3 py-4 focus:outline focus:outline-main-red">
                    <input type="number" name="phone" placeholder="Tahun" id="phone" class=" rounded-lg border px-3 py-4 focus:outline focus:outline-main-red">
                </div>
                <div class=" grid grid-cols-1 mt-4 gap-6">
                <textarea name="address" id="address" cols="30" rows="3" placeholder="Masalah Mobil" class=" rounded-lg border px-3 py-4 focus:outline focus:outline-main-red"></textarea>
                   
                </div>
            </div>
    <div class=" flex justify-center mt-10">
        <button class=" bg-main-red px-8 py-2 rounded-lg text-white" @click="$emit('on-close')">Booking Sekarang</button></div>
    </div>

  </div>
</template>

<script setup lang="ts">
  defineProps({
  modal: {
    type: Boolean,
  },
});
defineEmits(['on-close', 'submit'])
</script>
