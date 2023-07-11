<template>
  <div>
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li v-for="side in sidebar">
          <NuxtLink :to="side.to">
            <a
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span class="ml-3">{{ side.title }}</span>
            </a>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sidebar = [
  { title: "Dashboard", to: "/admin" },
  { title: "Brand", to: "/admin/brand" },
  
];
</script>
