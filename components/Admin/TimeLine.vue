<template>
  <div>
    <ol class="items-center flex" >
      <li class="relative mb-6 sm:mb-0 w-full flex-nowrap"  v-for="(a, i) in props?.timeline" :key="i">
        <div class="flex items-center">
          <div
            class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-whitebg-blue-900 sm:ring-8 ring-gray-900 shrink-0"
          >
            <svg
              class="w-2.5 h-2.5 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
              />
            </svg>
          </div>
          <div 
            class="hidden sm:flex w-full h-0.5 bg-gray-700"
          ></div>
        </div>
        <div class="mt-3 sm:pr-8">
          <h3 class="text-lg font-semibold text-gray-900 uppercase">
           {{ a.status }}
          </h3>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-400"
            >{{ formatDate(String(new Date(a.date))) }}</time
          >
          <p class="text-base font-normal text-gray-500">
            {{ a.update }}
          </p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
interface Timeline {
  status: string;
  date: Date;
  update: string
}
defineProps({
  props: {
    type: Object,
  },
});
</script>
