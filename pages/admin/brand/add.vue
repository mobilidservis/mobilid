<template>
  <div>
    <div class="flex flex-col my-10">
      <p class="text-xl font-bold">Tambah Brand</p>
      <div class="grid lg:grid-cols-3 grid-cols-1 mt-4 gap-6">
        <input
          v-model="data.brand.name"
          type="text"
          name="name"
          placeholder="Nama Brand"
          id="name"
          class="rounded-lg border px-3 py-4 focus:outline focus:outline-main-red"
        />
      </div>
    </div>
    <div class=" flex space-x-3">
      <button class="bg-gray-800 w-40 px-4 py-2 rounded-lg text-white" @click="addData">
      Simpan
    </button>
    <button class="border border-gray-800 w-40 px-4 py-2 rounded-lg text-gray-800" @click="$router.go(-1)">
      Cancel
    </button></div>
  </div>
</template>

<script setup lang="ts">
import {  doc, setDoc } from "firebase/firestore";
import { Brand } from "~/model/Brand";

interface Data {
  brand: Brand;
}

const data: Data = reactive({
  brand: {} as Brand,
});

const router = useRouter();

const addData = async () => {
  try {
    let id = generateId();
    await setDoc(doc(firestoreDb, "brand", id), {
      id,
      name: data.brand.name,
    });
    router.push({path: '/admin/brand'})
  } catch (error) {
    console.log(error);
  }
};
</script>
