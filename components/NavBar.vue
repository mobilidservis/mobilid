<template>
    <div class=" fixed top-0 z-50 px-8 md:px-16 w-full h-28 flex flex-wrap justify-between items-center" :class="scroll<50 || `bg-white transition delay-150 duration-300 ease-in-out`" id="navbar" >
        <div id="logo">
        <img src="https://res.cloudinary.com/dwlgplrj9/image/upload/v1687463186/servicemobil/logo_ok_sm_id_ririyp.png" class=" w-[60px]" alt="" srcset="">
        </div>
        
        <div class=" lg:flex items-center space-x-10 hidden">
            <a class="font-epilogue text-center" :class="scroll<50 ? `text-white`: `text-main-red transition delay-150 duration-300 ease-in-out`" href="#header">Home</a>
            <a class="font-epilogue text-center" :class="scroll<50 ? `text-white`: `text-main-red transition delay-150 duration-300 ease-in-out`" href="#tentangkami">Tentang Kami</a>
            <a class="font-epilogue text-center" :class="scroll<50 ? `text-white`: `text-main-red transition delay-150 duration-300 ease-in-out`" href="#keunggulankami">Keunggulan Kami</a>
            <a class="font-epilogue text-center" :class="scroll<50 ? `text-white`: `text-main-red transition delay-150 duration-300 ease-in-out`" href="#carakerjakami">Cara Kerja Kami</a>
            <a class="font-epilogue text-center" :class="scroll<50 ? `text-white`: `text-main-red transition delay-150 duration-300 ease-in-out`" href="#home">Layanan Kami</a>
        </div>
        <div class=" hidden lg:flex">
        <a href="#hubungikami" class=" border-2 rounded-lg px-4 py-2 font-semibold font-epilogue text-center" :class="scroll<50 ? `text-white  border-white`: `text-main-red border-main-red transition delay-150 duration-300 ease-in-out`">Hubungi Kami</a>
        </div>
    </div>
</template>

<script lang="ts" setup>
const scroll = useScroll()


</script>