<template>
  <div class="w-full flex justify-center py-28">
    <form
      @submit="resetPass()"
      v-if="!data.reset"
      class="w-full px-10 md:px-0 md:w-80 flex flex-col space-y-6 justify-center"
    >

      <div class="w-full flex flex-col space-y-4">
        <input
          required
          ref="email"
          type="email"
          name="email"
          class="py-2 px-4 rounded-xl font-semibold border-main-red border-2"
          placeholder="Email"
          v-model="data.email"
        />
      </div>
      <button
        type="submit"
        class="py-2 px-4 rounded-xl font-semibold bg-main-red text-white hover:bg-main-gold flex justify-center"
      >
        Reset Password
      </button>
      <NuxtLink to="/login">
        <p class="text-main-red hover:text-main-gold text-center cursor-pointer">
        Kembali login
      </p>
      </NuxtLink>
    </form>
    <div v-else>
      Permintaan reset password telah dikirim, cek pada email {{ data.email }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onStartTyping } from "@vueuse/core";

definePageMeta({
  layout: false,
});

const email = ref<HTMLInputElement | null>(null);

const data = reactive({
  email: "",
  password: "",
  reset: false,
});

onStartTyping(() => {
  if (email.value) {
    email.value.focus();
  }
});

const router = useRouter();


const resetPass = () => {
  try {
    data.reset = true;
    resetPassword(data.email);
  } catch (error) {
    console.log(error);
  }
  setTimeout(() => {
    router.push({ path: "/login" });
  }, 5000);
};
</script>
