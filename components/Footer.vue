<template>
  <div class="flex flex-col">
    <hr />
    <div class="flex flex-col md:flex-row md:space-x-8 md:space-y-0 space-y-4 p-8 md:p-md-screen">
      <div class="basis-5/12 flex flex-col">
        <div class="flex justify-between">
          <div class="basis-1/2">
            <img
              src="https://res.cloudinary.com/dwlgplrj9/image/upload/v1687463186/servicemobil/logo_ok_sm_id_ririyp.png"
              class="w-[40px]"
              alt=""
              srcset=""
            />
          </div>
          <div class="w-full flex justify-between basis-1/2">
            <a href="#">
              <img :src="fbIcon" class="w-8" alt="" />
            </a>
            <a href="#">
              <img :src="waIcon" class="w-8" alt="" />
            </a>
            <a href="#">
              <img :src="igIcon" class="w-8" alt="" />
            </a>
            <a href="#">
              <img :src="twtIcon" class="w-8" alt="" />
            </a>
          </div>
        </div>
        <p class="font-medium text-lg mt-6">
          Tidak mau ketinggalan informasi terbaru dari kami?
        </p>
        <div class="w-full flex mt-2">
          <input
            type="text"
            class="w-full px-4 py-2 h-14 border-2 rounded-s-lg focus:border-none focus:outline focus:outline-main-red"
            placeholder="Masukkan Email Kamu"
          />
          <button class="bg-main-red text-white rounded-r-lg p-4">
            Berlangganan
          </button>
        </div>
      </div>

      <div class="basis-2/12 flex flex-col space-y-3 w-full">
        <p class="mb-2">Legal</p>
            <a class="text-main-red" href="#">Tentang Kami</a>
            <a class="text-main-red" href="#">Kebijakan Privasi</a>
            <a class="text-main-red" href="#">Syarat dan Ketentuan</a>
      </div>
      <div class="basis-5/12 flex flex-col">
        <div class="flex space-x-2">
          <img :src="locationIcon" alt="" srcset="" />
          <a href="https://goo.gl/maps/4avJXk2qCU4YmqmX8"
            >Jl. Wr Supratman No.68 Kampung Utan. Ciputat Timur, Cempaka Putih,
            Kota Tangerang Selatan, Banten 15412</a
          >
        </div>
        <a href="https://goo.gl/maps/4avJXk2qCU4YmqmX8">
        <div
          class="w-full rounded-md overflow-hidden h-48 mt-4 flex items-center justify-center"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1844.6007509374624!2d106.74619669006525!3d-6.2951292043841525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f158e4ec7de5%3A0x95cdb39ab8120225!2sBengkel%20Online%20-%20Supercar.id!5e0!3m2!1sid!2sid!4v1687956589565!5m2!1sid!2sid"
            width="600"
            height="450"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </a>
      </div>
    </div>
    <div class="h-10 bg-main-red w-full flex justify-center items-center">
      <p class="text-white text-sm font-medium">
        Copyright &copy; 2023. PT SERVIS MOBIL INDONESIA
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import fbIcon from "/image/Group 3.svg";
import waIcon from "/image/Group 5.svg";
import igIcon from "/image/Group 4.svg";
import twtIcon from "/image/Group 2.svg";
import locationIcon from "/image/Group 13.svg";
</script>
