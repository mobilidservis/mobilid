<template>
  <div class="flex flex-col" id="hubungikami">
    <hr />
    <div
      class="flex flex-col lg:flex-row lg:space-x-8 lg:space-y-0 space-y-4 p-8 md:p-md-screen"
    >
      <div class="basis-5/12 flex flex-col order-1 lg:order-1">
        <div class="flex justify-between">
          <div class="basis-5/12 lg:basis-7/12">
            <img
              src="/image/logo.webp"
              class="w-[40px]"
              alt=""
              srcset=""
            />
          </div>
          <div class="w-full flex justify-between basis-7/12 lg:basis-5/12">
            <a alt="facebook" target="_blank" href="https://www.facebook.com/profile.php?id=100094504038278&mibextid=ZbWKwL">
              <img :src="fbIcon" class="w-8" alt="" />
            </a>
            <a  alt="whatsapp" target="_blank" href="https://wa.me/+6285281246971">
              <img :src="waIcon" class="w-8" alt="" />
            </a>
            <a alt="instagram" target="_blank" href="https://instagram.com/servicemobilid?igshid=MzNlNGNkZWQ4Mg==">
              <img :src="igIcon" class="w-8" alt="" />
            </a>
            <a alt="tiktok" target="_blank" href="https://vt.tiktok.com/ZSLf1A1qf/">
              <img :src="tiktok" class="w-8" alt="" />
            </a>
            
            <a alt="twitter" target="_blank" href="https://twitter.com/Servicemobilid?t=QfLLPgnJ0hUZ4n7Ody0jFw&s=09">
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
            v-model="data.email"
          />
          <button class="bg-main-red text-white rounded-r-lg p-4" @click="subscribe">
            <Spinner :loading="data.loading" label="Berlangganan"/>
          </button>
        </div>
      </div>

      <div class="basis-2/12 flex flex-col space-y-3 w-full order-3 lg:order-2">
        <p class=" text-center md:text-start mb-2">Legal</p>
        <a class=" text-center md:text-start text-main-red" href="#">Tentang Kami</a>
        <a class=" text-center md:text-start text-main-red" href="#">Kebijakan Privasi</a>
        <a class=" text-center md:text-start text-main-red" href="#">Syarat dan Ketentuan</a>
      </div>
      <div class="basis-5/12 flex flex-col order-2 lg:order-3">
        <div class="flex space-x-2">
          <img :src="locationIcon" alt="" srcset="" />
          <a href="https://maps.app.goo.gl/S7z6Jx1pG6htiTcP7" alt="alamat servicemobil.id"
            > Jl. Patra No.3, RT.3/RW.2, Duri Kepa, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11510</a
          >
        </div>
        <a href="https://maps.app.goo.gl/S7z6Jx1pG6htiTcP7" alt="alamat servicemobil.id">
          <div class="container-iframe mt-4">
            <iframe
            title="alamat service mobil"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.91319114574924!2d106.7790416!3d-6.1827795!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6f97dd7ad73%3A0x273bbb8b700b99ce!2sRQ8H%2BRJP%2C%20Jl.%20Patra%20No.3%2C%20RT.3%2FRW.2%2C%20Duri%20Kepa%2C%20Kec.%20Kb.%20Jeruk%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011510!5e0!3m2!1sen!2sid!4v1695900157095!5m2!1sen!2sid"
              class="responsive-iframe"
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
import tiktok from "/image/Group 6.svg";
import locationIcon from "/image/Group 13.svg";
import { doc, setDoc } from "firebase/firestore";

const data = reactive({email: '', loading: false})

const subscribe = async () => {
  try {
    data.loading = true
    let id = generateId();
    await setDoc(doc(firestoreDb, "subscriber", id), {
      id,
      email: data.email,
    });
    data.email = ''
    data.loading = false
  } catch (error) {
    data.loading = false
    console.log(error);
  }
}

</script>
