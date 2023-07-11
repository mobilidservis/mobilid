<template>
  <div>
    <div class="w-full flex justify-between mb-5 items-center">
      <h3 class="font-bold text-2xl">
        Daftar Model <span class="uppercase">{{ data.brand.name }}</span>
      </h3>
      <NuxtLink :to="`/admin/model/add/${route.params.id}`">
        <button class="bg-gray-800 px-4 py-2 rounded-lg text-white">
          Tambah Data
        </button></NuxtLink
      >
    </div>
    <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">No.</th>
            <th scope="col" class="px-6 py-3">Nama Model</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            v-for="(item, i) in data.model"
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
              
              <NuxtLink :to="`/admin/model/update/${item.id}`">
                <div
                  class="w-10 aspect-square p-1 border border-blue-500 rounded-lg flex items-center justify-center"
                >
                  <Icon name="ic:outline-edit" color="blue" />
                </div>
              </NuxtLink>
              <div
                class="w-10 aspect-square p-1 border border-red-500 rounded-lg flex items-center justify-center cursor-pointer"
                @click="deleteModel(item.id)"
              >
                <Icon name="ic:outline-delete-forever" color="red" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Brand } from "~/model/Brand";
import { Model } from "~/model/Model";

interface Data {
  model: Model[];
  brand: Brand;
}

const data: Data = reactive({
  model: [],
  brand: {} as Brand,
});

const router = useRouter();
const route = useRoute();

onMounted(() => {
  getBrand();
  getModels();
});

const getBrand = async () => {
  const refs = doc(firestoreDb, "brand", String(route.params.id));
  getDoc(refs).then((a) => {
    data.brand = a.data() as Brand;
  });
};

const getModels = async () => {
  data.model = [];
  const refs = collection(firestoreDb, "model");
  const q = query(
    refs,
    where("brand", "==", doc(firestoreDb, "brand", String(route.params.id)))
  );
  getDocs(q).then((a) => {
    const temp = [] as any;
    a.docs.forEach((b) => temp.push({ id: b.data().id, name: b.data().name }));
    data.model = temp;
  });
};

const deleteModel = async (id: string) => {
  await deleteDoc(doc(firestoreDb, "model", String(id)));
  getModels();
};
</script>
