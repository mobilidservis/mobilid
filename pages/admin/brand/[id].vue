<template>
  <div>
    <div class="flex flex-col my-10">
      <p class="text-xl font-bold">Edit Brand</p>
      <div class="grid lg:grid-cols-3 grid-cols-1 mt-4 gap-6">
        <input
          v-model="data.brand.name"
          type="text"
          name="name"
          placeholder="Nama Brand"
          id="name"
          class="rounded-lg border px-3 py-4 focus:outline focus:outline-gray-700"
        />
      </div>
    </div>
    <div class=" flex space-x-3">
      <button class="bg-gray-800 w-40 px-4 py-2 rounded-lg text-white" @click="editData">
      Simpan
    </button>
    <button class="border border-gray-800 w-40 px-4 py-2 rounded-lg text-gray-800" @click="$router.go(-1)">
      Kembali
    </button></div>
  </div>
</template>

<script setup lang="ts">
import { collection, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";
import { Brand } from "~/model/Brand";

interface Data {
  brand: Brand;
}

const data: Data = reactive({
  brand: {} as Brand,
});

const router = useRouter();
const route = useRoute();

onMounted(() => {
  getBrand();
});

const getBrand = async () => {
  const refs = doc(firestoreDb, "brand", String(route.params.id));
  getDoc(refs).then((a) => {
    data.brand = a.data() as Brand;
  });
};

const editData = async () => {
  try {
    setDoc(doc(firestoreDb, "brand", String(route.params.id)), data.brand, {
      merge: true,
    });
    router.push({ path: "/admin/brand" });
  } catch (error) {
    console.log(error);
  }
};
</script>
