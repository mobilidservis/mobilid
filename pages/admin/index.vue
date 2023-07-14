<template>
  <div>
    <div class="mb-4 w-full flex justify-between">
      <div>
        <button
          @click="toggleFilter"
          id="dropdownActionButton"
          data-dropdown-toggle="dropdownAction"
          class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
        >
          Filter
          <svg
            class="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdownAction"
          :class="data.filterModal ? 'absolute' : 'hidden'"
          class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownActionButton"
          >
            <li>
              <a
                @click="getBooking()"
                class="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Terbaru</a
              >
            </li>
            <li>
              <a
                class="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Terlam</a
              >
            </li>
            <li>
              <a
                class="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Activate account</a
              >
            </li>
          </ul>
          <div class="py-1">
            <a
              class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Delete User</a
            >
          </div>
        </div>
      </div>
      <button
        class="bg-gray-800 w-40 px-4 py-2 rounded-lg text-white"
        @click="exportFile"
      >
        Download Data
      </button>
    </div>
    <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Tanggal</th>
            <th scope="col" class="px-6 py-3">Nama</th>
            <th scope="col" class="px-6 py-3">Telepon</th>
            <th scope="col" class="px-6 py-3">Alamat</th>
            <th scope="col" class="px-6 py-3">Mobil</th>
            <th scope="col" class="px-6 py-3">Masalah</th>
            <th scope="col" class="px-6 py-3">Status</th>
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
              {{ new Date(item.createdAt).getDate() }}/{{
                new Date(item.createdAt).getMonth()
              }}/{{ new Date(item.createdAt).getFullYear() }}
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
              {{ item.brand }} - {{ item.model }} - {{ item.year }}
            </td>
            <td class="px-6 py-4">
              {{ item.problem }}
            </td>
            <td class="px-6 py-4">
              <span
                class="border text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
                :class="statusChip(item.status).class"
                >{{ statusChip(item.status).label }}</span
              >
            </td>
            <td class="px-6 py-4">
              <NuxtLink :to="`/admin/booking/${item.id}`">
                <div
                  class="w-10 aspect-square p-1 border border-blue-500 rounded-lg flex items-center justify-center"
                >
                  <Icon name="ic:outline-edit" color="blue" />
                </div>
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
     
    </div>
  </div>
</template>

<script lang="ts" setup>
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { Booking } from "~/model/Booking";
import { utils, writeFileXLSX } from "xlsx";

interface Data {
  bookings: Booking[];
  showData: Booking[];
  filterModal: boolean;
}

const data: Data = reactive({
  bookings: [],
  showData: [],
  filterModal: false,
});


onMounted(async () => {
  getBooking();
});

const toggleFilter = () => {
  data.filterModal = !data.filterModal;
};

const exportFile = () => {
  const excelData = [];

  for (let i = 0; i < data.bookings.length; i++) {
    const el = data.bookings[i];
    excelData.push({
      Tanggal:
        new Date(el.createdAt).getDate() +
        "-" +
        new Date(el.createdAt).getMonth() +
        "-" +
        new Date(el.createdAt).getFullYear(),
      Nama: el.name,
      Telpon: el.phone,
      Email: el.email,
      Alamat: el.address,
      Brand: el.brand,
      Model: el.model,
      Tahun: el.year,
      Masalah: el.problem,
      Status: el.status,
    });
  }

  const ws = utils.json_to_sheet(excelData);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "Data");
  writeFileXLSX(
    wb,
    `service mobil booking - ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}.xlsx`
  );
};

const getBooking = async () => {
  const refs = collection(firestoreDb, "booking");
  const q = query(refs, orderBy("createdAt", "asc"));
  getDocs(q).then((a) => {
    a.forEach((b) => {
      data.bookings.push(b.data() as Booking);
    });
  });
};
</script>
