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
            <a  alt="whatsapp" target="_blank" href="https://wa.me/+6285817853206">
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
          <a href="https://goo.gl/maps/95x5byzcVpRdh9cT7" alt="alamat servicemobil.id"
            >Jl. Ciledug Raya no 22 RT 010 RW 04 Ulujami, Pesanggrahan, Kota
            Jakarta Selatan</a
          >
        </div>
        <a href="https://goo.gl/maps/95x5byzcVpRdh9cT7" alt="alamat servicemobil.id">
          <div class="container-iframe mt-4">
            <iframe
            title="alamat service mobil"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.209232018893!2d106.76570907483605!3d-6.236128661067781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0df1a492aa3%3A0x3f10f05a0f3f6746!2sJl.%20Ciledug%20Raya%20No.19%2C%20RT.13%2FRW.5%2C%20Cipulir%2C%20Kec.%20Kby.%20Lama%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012230!5e0!3m2!1sen!2sid!4v1688736026658!5m2!1sen!2sid"
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
