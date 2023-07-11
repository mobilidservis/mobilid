<template>
  <div class="w-full flex justify-center py-28">
    <div
      class="w-full px-10 md:px-0 md:w-80 flex flex-col space-y-6 justify-center"
    >
      <p class="font-semibold text-center">
        Sign in to <span class="font-bold">ServiceMobil.id</span>
      </p>

      <div class="w-full flex flex-col space-y-4">
        <input
          ref="email"
          type="email"
          name="email"
          class="py-2 px-4 rounded-xl font-semibold border-main-red border-2"
          placeholder="Email"
          v-model="data.email"
        />

        <input
          ref="password"
          type="password"
          name="password"
          class="py-2 px-4 rounded-xl font-semibold border-main-red border-2"
          placeholder="Password"
          v-model="data.password"
        />
      </div>
      <button
        class="py-2 px-4 rounded-xl font-semibold bg-main-red text-white hover:bg-main-gold flex justify-center"
        @click="signIn()"
      >
        Sign In
      </button>
      <p
        class="text-main-red hover:text-main-gold text-center cursor-pointer"
        @click="resetPass()"
      >
        Reset Password
      </p>
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
});

onStartTyping(() => {
  if (email.value) {
    email.value.focus();
  }
});

const router = useRouter();


const signIn = async () => {
  try {
   await signInUser(data.email, data.password)
  } catch (error: any) {
    console.log(error);
  }
  
  router.push({path: '/admin'})
};

const resetPass = () => {
  try {
    resetPassword(data.email);
  } catch (error) {
    console.log(error);
  }
};
</script>
