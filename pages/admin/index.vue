<template>
  <div>
    <div class="mb-4 w-full flex justify-between">
      <div>
      
       <input type="text" v-model="search" placeholder="Cari data"
         
          class="rounded-lg border px-3 py-4 focus:outline focus:outline-gray-700">
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
            <th scope="col" class="px-6 py-3 cursor-pointer flex items-center" @click="getBooking(!data.sort)">Tanggal  <Icon   name="uil:sort" size="14px" color="gray" /></th>
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
            v-for="(item, i) in data.showData"
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
    <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span class="font-semibold text-gray-900">{{data.startData}}-{{ data.endData }}</span> of <span class="font-semibold text-gray-900">{{ data.dataTable.length }}</span></span>
        <ul class="inline-flex -space-x-px text-sm h-8">
            <li>
                <a @click="data.pageActive == 1 ? data.pageActive = 1 : data.pageActive--, pageData()"  class="flex cursor-pointer items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <span v-for="i in data.maxPage">
              <li>
                <a @click="data.pageActive = i, pageData()" class="flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ i }}</a>
            </li>
            </span>
            <li>
                <a @click="data.pageActive == data.maxPage ? data.pageActive = data.maxPage : data.pageActive++, pageData()" class="flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
    </nav>
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
  pageActive: number
  maxPage: number
  showPerPage: number
  startData: number
  endData: number
  showPerPageOptions: number[],
  sort: boolean
  arrayTmp: Booking[]
  dataTable: Booking[]
  search: string
}

const data: Data = reactive({
  bookings: [],
  showData: [],
  arrayTmp: [],
  dataTable: [],
  filterModal: false,
  pageActive: 1,
  maxPage: 10,
  showPerPage: 5,
  startData: 0,
  endData: 0,
  showPerPageOptions: [5, 10, 20],
  sort: true,
  search: ''
});

const search = ref('')

onMounted(async () => {
   getBooking(true);
});

watch(search, (newSearch) => {
  searchAction()
})

const pageData = () => {
  
  data.showData = []
  data.dataTable = search.value == '' ?  data.bookings : data.arrayTmp
  let page = ((data.pageActive - 1) * data.showPerPage)
  if (data.pageActive * data.showPerPage > data.dataTable.length) {
    data.startData = page + 1
    data.endData = data.dataTable.length
    for (let i = page; i < data.dataTable.length; i++) {
      const el = data.dataTable[i];
     data.showData.push(el)
    }
  } else{
    data.startData = page + 1
    data.endData = data.showPerPage * data.pageActive
    for (let i = page; i < data.showPerPage * data.pageActive; i++) {
      const el = data.dataTable[i];
      
     data.showData.push(el)
    }
  }

 data.maxPage = Math.ceil(data.dataTable.length / data.showPerPage)
 data.showPerPageOptions.push
}

const searchAction = () => {
  
      data.arrayTmp = []
      for (let index = 0; index < data.bookings.length; index++) {
        const element = data.bookings[index]
        let tmp = Object.values(element)
        let tmpValue = ""
        for (let i = 0; i < tmp.length; i++) {
          const el = tmp[i]
          tmpValue = tmpValue + el + " "
        }
        if (tmpValue.toLowerCase().includes(search.value.toLowerCase())) {
          data.arrayTmp.push(element)
          // this.items.filter((a,b) => b == index)
        }
      }
     pageData()
    }

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

const getBooking = (sort: boolean) => {
  data.sort = sort
  data.bookings = []
  const refs = collection(firestoreDb, "booking");
  const q = sort ? query(refs, orderBy("createdAt", "desc")) : query(refs, orderBy("createdAt", "asc"));
  
  getDocs(q).then((a) => {
    a.forEach((b) => {
      data.bookings.push(b.data() as Booking);
    });
   
  }).finally(() => pageData());
  
};
</script>
