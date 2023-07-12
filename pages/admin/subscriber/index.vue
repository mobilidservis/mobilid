<template>
<div>
    <div class="w-full flex justify-between mb-5 items-center">
    <h3 class=" font-bold text-2xl">Daftar Pelanggan</h3>
    </div>
    <div class="relative overflow-x-auto sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
        class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
        >
        <tr>
            <th scope="col" class="px-6 py-3">No.</th>
            <th scope="col" class="px-6 py-3">Email</th>
        </tr>
        </thead>
        <tbody>
        <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            v-for="(item, i) in data.subcribers"
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
            {{ item.email }}
            </th>
           
        </tr>
        </tbody>
    </table>
    </div>
</div>
</template>

<script lang="ts" setup>
import { collection, getDocs, query } from "firebase/firestore";

interface Subcriber {
    id: string,
    email: string
}

interface Data {
    subcribers: Subcriber[];
}


const data : Data = reactive({
subcribers: [],
});

onMounted(() => {
getSubscribers();
});

const getSubscribers = async () => {
data.subcribers = []
const refs = collection(firestoreDb, "subscriber");
const q = query(refs);
getDocs(q).then((a) => {
    a.forEach((b) => {
    data.subcribers.push(b.data() as Subcriber);
    });
});
};

</script>
