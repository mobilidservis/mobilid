<template>
  <div>
    <div class="flex flex-col my-10">
      <p class="text-xl font-bold">Detail Booking</p>
      <div
        class="bg-gray-800 border border-gray-800 p-6 rounded-lg mt-6 text-gray-400"
      >
        <div class="flex justify-between items-center w-full">
          <div>
            <p>Tanggal</p>
            <span class="font-bold">
              {{ new Date(data.booking.createdAt).getDate() }}/{{
                new Date(data.booking.createdAt).getMonth()
              }}/{{ new Date(data.booking.createdAt).getFullYear() }}
            </span>
          </div>
          <div>
            <span
              class="border text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
              :class="statusChip(data.booking.status).class"
              >{{ statusChip(data.booking.status).label }}</span
            >
          </div>
        </div>

        <div class="grid lg:grid-cols-3 grid-cols-1 mt-4 gap-6">
          <div>
            <p>Nama</p>
            <span class="font-bold">
              {{ data.booking.name }}
            </span>
          </div>
          <div>
            <p>Telepon</p>
            <span class="font-bold">
              {{ data.booking.phone }}
            </span>
          </div>
          <div>
            <p>Email</p>
            <span class="font-bold">
              {{ data.booking.email }}
            </span>
          </div>

          <div>
            <p>Brand</p>
            <span class="font-bold uppercase">
              {{ data.booking.brand }}
            </span>
          </div>
          <div>
            <p>Model</p>
            <span class="font-bold uppercase">
              {{ data.booking.model }}
            </span>
          </div>
          <div>
            <p>Tahun</p>
            <span class="font-bold">
              {{ data.booking.year }}
            </span>
          </div>
        </div>
      </div>
      <div class="p-6 rounded-lg mt-6 border border-gray-800">
        <p class="font-bold">Detail Masalah</p>
        <span>
          {{ data.booking.problem }}
        </span>
      </div>
      <div class="p-6 rounded-lg mt-6 border border-gray-800 overflow-scroll">
        <p class="font-bold mb-8">Detail Transaksi</p>
       
       <AdminTimeLine :props="data"/>
      </div>
    </div>
    <div>
    </div>
    
    <div class="flex space-x-3">
      <button
        v-if="data.booking.status == 'baru'"
        class="bg-green-500 w-40 px-4 py-2 rounded-lg text-white"
        @click="updateData('proses')"
      >
        <Spinner :loading="data.loading" label="Proses" />
      </button>
      <button
        v-if="data.booking.status == 'proses'"
        class="bg-gray-800 w-40 px-4 py-2 rounded-lg text-white"
        @click="updateData('selesai')"
      >
        <Spinner :loading="data.loading" label="Selesai" />
      </button>
      <button
      v-if="data.booking.status == 'selesai' && data.booking.paymentStatus !== 'lunas'"
        class="bg-gray-800 w-40 px-4 py-2 rounded-lg text-white"
        @click="updateData('lunas')"
      >
        <Spinner :loading="data.loading" label="Lunas" />
      </button>
      <button
        class="border border-gray-800 w-40 px-4 py-2 rounded-lg text-gray-800"
        @click="$router.go(-1)"
      >
        Kembali
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { Booking } from "~/model/Booking";

interface Timeline {
  status: string;
  date: any;
  update: string
}


interface Data {
  booking: Booking;
  loading: boolean;
  timeline: Timeline[]
}

const data: Data = reactive({
  booking: {} as Booking,
  loading: false,
  timeline: []
});

const router = useRouter();
const route = useRoute();

onMounted(() => {
  getBooking();
});

const getBooking = async () => {
  data.timeline = []
  const refs = doc(firestoreDb, "booking", String(route.params.id));
  await getDoc(refs).then((a) => {
    data.booking = a.data() as Booking;
  });

  updateTimeline()
  
};

const updateTimeline = () => {
  if (data.booking.status == 'selesai') {
    data.timeline.push({status: 'baru', date: data.booking.createdAt, update: data.booking.email} as Timeline)
    data.timeline.push({status: 'proses', date: data.booking.proccessUpdateAt, update: data.booking.proccessUpdateBy} as Timeline)
    data.timeline.push({status: 'selesai', date: data.booking.finishUpdateAt, update: data.booking.finishUpdateBy} as Timeline)
  } else if (data.booking.status == 'proses') {
    data.timeline.push({status: 'baru', date: data.booking.createdAt, update: data.booking.email} as Timeline)
    data.timeline.push({status: 'proses', date: data.booking.proccessUpdateAt, update: data.booking.proccessUpdateBy} as Timeline)
  } else {
    data.timeline.push({status: 'baru', date: data.booking.createdAt, update: data.booking.email} as Timeline)
  }

  if (data.booking.paymentStatus == 'lunas') {
    data.timeline.push({status: 'lunas', date: data.booking.paymentUpdateAt, update: data.booking.paymentUpdateBy} as Timeline)
  }
}

const updateData = async (status: string) => {
  data.loading = true;
 
  if (status == 'proses') {
    data.booking.status = status;
    data.booking.proccessUpdateBy = userLogin.value.email!
    data.booking.proccessUpdateAt = Date.now();
  } else if (status == 'selesai') {
    data.booking.status = status;
    data.booking.finishUpdateBy = userLogin.value.email!
    data.booking.finishUpdateAt =Date.now();
  } else if(status == 'lunas') {
    data.booking.paymentStatus = status;
    data.booking.paymentUpdateBy = userLogin.value.email!
    data.booking.paymentUpdateAt = Date.now();
  }
  
  try {
    setDoc(doc(firestoreDb, "booking", String(route.params.id)), data.booking, {
      merge: true,
    });
    getBooking();
    data.loading = false;
  } catch (error) {
    data.loading = false;
    console.log(error);
  }
};

const updateDataPayment = async (status: string) => {
  data.loading = true;
  data.booking.paymentStatus = status;
  data.booking.paymentUpdateBy = userLogin.value.email!
  data.booking.paymentUpdateAt = Date.now();

  try {
    setDoc(doc(firestoreDb, "booking", String(route.params.id)), data.booking, {
      merge: true,
    });
    getBooking();
    data.loading = false;
  } catch (error) {
    data.loading = false;
    console.log(error);
  }
};
</script>
