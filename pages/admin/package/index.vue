<template>
  <div>
    <div class="w-full flex justify-between mb-5 items-center">
    <h3 class=" font-bold text-2xl">Daftar Paket Service</h3>
    <NuxtLink to="/admin/package/add">
      <button class="bg-gray-800 px-4 py-2 rounded-lg text-white">Tambah Data</button></NuxtLink>
    </div>
    <div class=" w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 gap-y-5">
      <div v-for="item in data.packages" class=" w-full border border-gray-800 rounded-lg overflow-hidden flex flex-col justify-center">
        <img :src="item.photo_url" alt="" srcset="">
        <input v-model="item.order" placeholder="order" type="text" class=" text-center m-2  rounded-lg border px-3 py-4 focus:outline focus:outline-gray-700" id="">
        <div class=" flex space-x-3 p-2">
      <button class="bg-gray-800 w-40 px-4 py-2 rounded-lg text-white" @click="editData(item.id, item)">
      <Spinner :loading="data.loading" label="Simpan"/>
    </button>
    <button class="border border-red-800 w-40 px-4 py-2 rounded-lg text-red-800" @click="deletePackage(item.id)">
      <Spinner :loading="data.loading" label="Hapus"/>

    </button></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { collection, deleteDoc, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { Package } from "~/model/Package";

interface Data {
  packages: Package[];
  loading: boolean
}

const data: Data = reactive({
  packages: [],
  loading: false
});

onMounted(() => {
  getPackages();
});

const getPackages = async () => {
  data.packages = []
  const refs = collection(firestoreDb, "package");
  const q = query(refs, orderBy("order", "asc"));
  getDocs(q).then((a) => {
    a.forEach((b) => {
      data.packages.push(b.data() as Package);
    });
  });
};


const editData = async (id:string, packages:any) => {
  data.loading = true
  try {
    setDoc(doc(firestoreDb, "package", String(id)), packages, {
      merge: true,
    });
  data.loading = false

  } catch (error) {
  data.loading = false

    console.log(error);
  }
};

const deletePackage = async (id:string) => {
  data.loading = true
 await deleteDoc(doc(firestoreDb, "package", String(id)))
 getPackages()
 data.loading = false

};

</script>
