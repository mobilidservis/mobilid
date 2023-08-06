<template>
  <div class="flex">
    <div class="basis-3/12 p-8">
      <div class="rounded-full overflow-hidden cursor-pointer aspect-square">
        <label class=" z-40 cursor-pointer" for="file"> 
        <img :src="useUserLogin().value.photo_url" alt="" />
      </label>
        <input @change="getImage" type="file" accept="image/png, image/gif, image/jpeg"  id="file" class="hidden" />
      </div>
    </div>
    <div class="basis-9/12 flex flex-col">
     <div>
      <p class="text-xl font-bold">Pengaturan Pengguna</p>
      <div class="grid lg:grid-cols-3 grid-cols-1 mt-4 gap-6">
        <input
          v-model="data.user.name"
          type="text"
          name="name"
          placeholder="Nama"
          id="name"
          class="rounded-lg border px-3 py-4 focus:outline focus:outline-gray-700"
        />
      </div>
    </div>
    <div class=" flex space-x-3 mt-5">
      <button class="bg-gray-800 w-40 px-4 py-2 rounded-lg text-white" @click="editData">
        <Spinner :loading="data.loading" label="Simpan"/>
    </button>
    </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { UserLogin } from "~/model/UserLogin";

interface Data {
  image: File;
  loading: boolean;
  user: UserLogin;
}

const data: Data = reactive({
  user: useUserLogin().value,
  image: {} as File,
  loading: false,
});

const getImage = (event: any) => {
  if (event.target.files && event.target.files[0]) {
    const fileType = event.target.files[0].type.toString();

    if (fileType.indexOf("image") != 0) {
      alert("Please Choose an Image");
      return;
    }
    data.image = event.target.files[0];
  }
  editPhoto();
};

const editPhoto = async () => {
  try {
    await updateAvatarPhoto(data.image as File, userLogin.value.uid as string);
    storeDataUser(data.user as User)
  } catch (error) {
    console.log(error);
  }
};

const editData = async () => {
  try {
    data.loading = true
    setDoc(
      doc(firestoreDb, "user_account", String(userLogin.value.uid)),
      data.user,
      {
        merge: true,
      }
    );
    storeDataUser(data.user as User)
    data.loading = false
  } catch (error) {
    data.loading = false
    console.log(error);
  }
};
</script>
