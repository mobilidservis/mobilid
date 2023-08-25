<template>
  <div
    class="w-screen h-screen flex items-center justify-center z-50 fixed top-0 right-0 p-10"
    v-if="modal"
  >
    <form @submit.prevent="addData()" class="w-[95%] h-[95%] relative">
      <img
        @click="$emit('on-close')"
        class="h-6 absolute -top-3 -right-3 cursor-pointer z-20"
        src="/image/close.svg"
        alt=""
      />
      <div
        class="w-full h-full overflow-scroll drop-shadow-2xl p-10 flex flex-col bg-white rounded-lg"
      >
        <div>
          <h1 class="text-3xl text-main-red font-bold text-center">
            Booking Service
          </h1>
          <p class="text-body-text text-center text-xl mt-5">
            Isi data di bawah ini untuk melakukan proses booking service
          </p>
        </div>

        <div class="flex flex-col mt-6">
          <p class="text-xl font-bold">Informasi Anda</p>
          <div class="grid lg:grid-cols-3 grid-cols-1 mt-4 gap-6">
            <input
            required
              v-model="data.booking.name"
              type="text"
              name="name"
              placeholder="Nama Anda"
              id="name"
              class="rounded-lg border px-3 py-4 focus:outline focus:outline-main-red"
            />
            <input
            required
              v-model="data.booking.email"
              type="text"
              name="email"
              placeholder="Email Aktif"
              id="email"
              class="rounded-lg border px-3 py-4 focus:outline focus:outline-main-red"
            />
            <input
            required
              v-model="data.booking.phone"
              type="number"
              name="phone"
              placeholder="Nomor Telepon"
              id="phone"
              class="rounded-lg border px-3 py-4 focus:outline focus:outline-main-red"
            />
          </div>
          <div class="grid grid-cols-1 mt-4 gap-6">
            <textarea
            required
              v-model="data.booking.address"
              name="address"
              id="address"
              cols="30"
              rows="1"
              placeholder="Alamat Anda"
              class="rounded-lg border px-3 py-4 focus:outline focus:outline-main-red"
            ></textarea>
          </div>
        </div>
        <div class="flex flex-col mt-6">
          <p class="text-xl font-bold">Informasi Mobil Anda</p>
          <div class="grid lg:grid-cols-3 grid-cols-1 mt-4 gap-6">
            <AutoComplete
            required
              :placeholder="'Brand'"
              :options="data.brands"
              v-model="data.brand"
            />
            <AutoComplete
            required
              :placeholder="'Model'"
              :options="data.models"
              v-model="data.model"
            />

            <input
            required
              v-model="data.booking.year"
              type="number"
              name="phone"
              placeholder="Tahun"
              id="phone"
              class="rounded-lg border px-3 py-4 focus:outline focus:outline-main-red"
            />
          </div>
          <div class="grid grid-cols-1 mt-4 gap-6">
            <textarea
            required
              v-model="data.booking.problem"
              name="address"
              id="address"
              cols="30"
              rows="1"
              placeholder="Masalah Mobil"
              class="rounded-lg border px-3 py-4 focus:outline focus:outline-main-red"
            ></textarea>
          </div>
        </div>
        <div class="flex justify-center mt-10">
          <button
            class="bg-main-red px-8 py-2 rounded-lg text-white flex items-center"
            type="submit"
          >
            <Spinner :loading="data.loading" label="Booking Sekarang" />
          </button>
        </div>
      </div>
 </form>
  </div>
</template>

<script setup lang="ts">
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { Booking } from "~/model/Booking";
import { Brand } from "~/model/Brand";
import { Model } from "~/model/Model";

defineProps({
  modal: {
    type: Boolean,
  },
});

const emit = defineEmits(["on-close"]);

interface Data {
  booking: Booking;
  brands: Brand[];
  brand: Brand;
  models: Model[];
  model: Model;
  loading: boolean;
}

const data: Data = reactive({
  booking: {} as Booking,
  brands: [],
  brand: {} as Brand,
  models: [],
  model: {} as Model,
  loading: false,
});

watch(
  () => data.brand,
  (a) => {
    getModels(a.id);
  }
);

onMounted(() => {
  getBrands();
});

const getBrands = async () => {
  const refs = collection(firestoreDb, "brand");
  const q = query(refs);
  getDocs(q).then((a) => {
    a.forEach((b) => {
      data.brands.push(b.data() as Brand);
    });
  });
};

const getModels = async (id: string) => {
  const refs = collection(firestoreDb, "model");
  const q = query(
    refs,
    where("brand", "==", doc(firestoreDb, "brand", String(id)))
  );
  getDocs(q).then((a) => {
    const temp = [] as any;
    a.docs.forEach((b) => temp.push({ id: b.data().id, name: b.data().name }));
    data.models = temp;
  });
};

const addData = async () => {
  try {
    data.loading = true;
    let id = generateId();
    await setDoc(doc(firestoreDb, "booking", id), {
      id,
      name: data.booking.name,
      email: data.booking.email,
      phone: "0" + data.booking.phone,
      address: data.booking.address,
      brand: data.brand.name,
      createdAt: Date.now(),
      model: data.model.name,
      year: data.booking.year,
      problem: data.booking.problem,
      status: "baru",
    });
    data.loading = false;

    emit("on-close");
  } catch (error) {
    data.loading = false;
    console.log(error);
  }
};
</script>
