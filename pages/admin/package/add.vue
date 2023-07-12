<template>
  <div>
    <div class="flex flex-col my-10">
      <p class="text-xl font-bold">Tambah Paket Service</p>
      <div class="grid lg:grid-cols-3 grid-cols-1 mt-4 gap-6">
        <input
          @change="getImage"
          type="file"
          placeholder="Foto"
          class="rounded-lg border px-3 py-4 focus:outline focus:outline-main-red"
        />
        <input
          v-model="data.package.order"
          type="number"
          min="1"
          name="name"
          placeholder="Order"
          class="rounded-lg border px-3 py-4 focus:outline focus:outline-main-red"
        />
      </div>
    </div>
    <div class=" flex space-x-3">
      <button class="bg-gray-800 w-40 px-4 py-2 rounded-lg text-white" @click="addData">
      <Spinner :loading="data.loading" label="Simpan"/>
    </button>
    <button class="border border-gray-800 w-40 px-4 py-2 rounded-lg text-gray-800" @click="$router.go(-1)">
      Kembali
    </button></div>
  </div>
</template>

<script setup lang="ts">
import {  doc, setDoc } from "firebase/firestore";
import { Package } from "~/model/Package";

interface Data {
  package: Package;
  image: File,
  loading: boolean
}

const data: Data = reactive({
  package: {} as Package,
  image: {} as File,
  loading: false
});

const router = useRouter();

const getImage = (event:any) => {
  if (event.target.files && event.target.files[0]) {
        const fileType = event.target.files[0].type.toString();
        
        if(fileType.indexOf('image') != 0){
            alert('Please Choose an Image'); return;
        }
        data.image = event.target.files[0];
      }
}

const addData = async () => {
  data.loading = true
  try {
    let id = generateId();
    await setDoc(doc(firestoreDb, "package", id), {
      id,
      order: data.package.order,
    });

   await updatePackagePhoto(data.image as File, id as string);


   setTimeout(() => {
    router.push({path: '/admin/package'})
   }, 1000);
   data.loading = false
   
  } catch (error) {
   data.loading = false
    console.log(error);
  }
};
</script>
