<template>
  <div>
    <div class="w-full flex justify-between mb-5 items-center">
    <h3 class=" font-bold text-2xl">Daftar Brand</h3>
    <NuxtLink to="/admin/brand/add">
      <button class="bg-gray-800 px-4 py-2 rounded-lg text-white">Tambah Data</button></NuxtLink>
    </div>
    <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">No.</th>
            <th scope="col" class="px-6 py-3">Nama Brand</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            v-for="(item, i) in data.brands"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ i + 1 }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white uppercase"
            >
              {{ item.name }}
            </th>
            <td class="px-6 py-4 flex space-x-3">
              <NuxtLink :to="`/admin/model/${item.id}`">
                <div class=" w-10 aspect-square p-1 border border-green-500 rounded-lg flex items-center justify-center">
                  <Icon class=" w-10" name="ic:outline-open-in-full" color="green" />
                  </div>
              </NuxtLink>
              <NuxtLink :to="`/admin/brand/${item.id}`">
                <div class=" w-10 aspect-square p-1 border border-blue-500 rounded-lg flex items-center justify-center">
                  <Icon  name="ic:outline-edit" color="blue" />
                  </div>
              </NuxtLink>
              <div class=" w-10 aspect-square p-1 border border-red-500 rounded-lg flex items-center justify-center cursor-pointer" @click="deleteBrand(item.id)">
                  <Icon  name="ic:outline-delete-forever" color="red" />
                  </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { Brand } from "~/model/Brand";

interface Data {
  brands: Brand[];
}

const data: Data = reactive({
  brands: [],
});

onMounted(() => {
  getbrands();
});

const getbrands = async () => {
  data.brands = []
  const refs = collection(firestoreDb, "brand");
  const q = query(refs);
  getDocs(q).then((a) => {
    a.forEach((b) => {
      data.brands.push(b.data() as Brand);
    });
  });
};

const deleteBrand = async (id:string) => {
 await deleteDoc(doc(firestoreDb, "brand", String(id)))
 getbrands()
};

</script>
