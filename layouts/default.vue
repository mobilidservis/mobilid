<template>
  <div class="DefaultLayout">
          
<nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
<AdminNavBar/>
</nav>

<aside id="logo-sidebar" :class="menu ? 'translate-x-0' : 'sm:translate-x-0'" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
  <AdminSideBar/>
</aside>

<div class="sm:ml-64 px-4 py-14 lg:p-md-screen">
 <div class=" py-10">
  <slot /></div>
</div>
   
  </div>
</template>

<script setup lang="ts">
import AdminNavBar from '~/components/Admin/AdminNavBar.vue';

const menu = useOpenMenu()


</script>