<template>
  <div >
    <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">No.</th>
            <th scope="col" class="px-6 py-3">Nama</th>
            <th scope="col" class="px-6 py-3">Telepon</th>
            <th scope="col" class="px-6 py-3">Alamat</th>
            <th scope="col" class="px-6 py-3">Mobil</th>
            <th scope="col" class="px-6 py-3">Tahun</th>
            <th scope="col" class="px-6 py-3">Masalah</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            v-for="(item, i) in data.bookings"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ i + 1 }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ item.name }}
            </th>
            <td class="px-6 py-4 uppercase">
              {{ item.phone }}
            </td>
            <td class="px-6 py-4 uppercase">
              {{ item.address }}
            </td>
            <td class="px-6 py-4 uppercase">
              {{ item.brand }} - {{ item.model }}
            </td>
            <td class="px-6 py-4 uppercase">
              {{ item.year }}
            </td>
            <td class="px-6 py-4">
              {{ item.problem }}
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Detail</a
              >
            </td>
          </tr>
        </tbody>
      </table>
     
    </div>
  </div>
</template>

<script lang="ts" setup>
import { collection, getDocs, query } from "firebase/firestore";
import { Booking } from "~/model/Booking";

interface Data {
  bookings: Booking[];
}

const data: Data = reactive({
  bookings: [],
});

onMounted(() => {
  getBooking();
});

const getBooking = async () => {
  const refs = collection(firestoreDb, "booking");
  const q = query(refs);
  getDocs(q).then((a) => {
    a.forEach((b) => {
      data.bookings.push(b.data() as Booking);
    });
  });
};
</script>
