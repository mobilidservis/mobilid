<template>
<div>
    <div class="flex flex-col my-10">
    <p class="text-xl font-bold">Edit Model</p>
    <div class="grid lg:grid-cols-3 grid-cols-1 mt-4 gap-6">
        <input
        v-model="data.model.name"
        type="text"
        name="name"
        placeholder="Nama Brand"
        id="name"
        class="rounded-lg border px-3 py-4 focus:outline focus:outline-main-red"
        />
    </div>
    </div>
    <div class=" flex space-x-3">
    <button class="bg-gray-800 w-40 px-4 py-2 rounded-lg text-white" @click="editData">
    Simpan
    </button>
    <button class="border border-gray-800 w-40 px-4 py-2 rounded-lg text-gray-800" @click="$router.go(-1)">
      Cancel
    </button>
</div>
</div>
</template>

<script setup lang="ts">
import {  doc, getDoc, setDoc } from "firebase/firestore";
import { Model } from "~/model/Model";

interface Data {
model: Model;
}

const data: Data = reactive({
model: {} as Model,
});

const router = useRouter();
const route = useRoute();

onMounted(() => {
getModel();
});

const getModel = async () => {
const refs = doc(firestoreDb, "model", String(route.params.id));
getDoc(refs).then((a) => {
    data.model = a.data() as Model;
});
};

const editData = async () => {
try {
    setDoc(doc(firestoreDb, "model", String(route.params.id)), data.model, {
    merge: true,
    });
    router.push({ path: `/admin/model/${route.params.id}` });
} catch (error) {
    console.log(error);
}
};
</script>
