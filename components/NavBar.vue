<template>
    <div class=" fixed top-0 z-50 px-8 md:px-16 w-full lg:h-28 h-20 flex flex-wrap justify-between items-center" :class="scroll<50 || `bg-white transition delay-150 duration-300 ease-in-out`" id="navbar" >
        <div id="logo">
       <a href="/">
        <img src="/image/logo.png" class=" lg:w-[60px] w-[40px]" alt="" srcset="">
       </a>
        </div>
        
        <div class=" lg:flex items-center space-x-10 hidden">
            <a class="font-epilogue text-center" :class="scroll<50 ? `text-white`: `text-main-red transition delay-150 duration-300 ease-in-out`" href="#header">Home</a>
            <a class="font-epilogue text-center" :class="scroll<50 ? `text-white`: `text-main-red transition delay-150 duration-300 ease-in-out`" href="#tentangkami">Tentang Kami</a>
            <a class="font-epilogue text-center" :class="scroll<50 ? `text-white`: `text-main-red transition delay-150 duration-300 ease-in-out`" href="#keunggulankami">Keunggulan Kami</a>
            <a class="font-epilogue text-center" :class="scroll<50 ? `text-white`: `text-main-red transition delay-150 duration-300 ease-in-out`" href="#carakerjakami">Cara Kerja Kami</a>
            <a class="font-epilogue text-center" :class="scroll<50 ? `text-white`: `text-main-red transition delay-150 duration-300 ease-in-out`" href="#layanankami">Layanan Kami</a>
        </div>

      

        <div class=" hidden lg:flex">
        <a href="#hubungikami" class=" border-2 rounded-lg px-4 py-2 font-semibold font-epilogue text-center" :class="scroll<50 ? `text-white  border-white`: `text-main-red border-main-red transition delay-150 duration-300 ease-in-out`">Hubungi Kami</a>
        </div>
        <div class="lg:hidden flex">
            <Icon @click="openModal" name="basil:menu-outline" :color="scroll>50 || data.modal ? '#CC0000' : '#FFF'" />
        </div>
    </div>
    <div :class="data.modal ? 'flex fixed top-0 z-30' : 'hidden'" class="flex-col space-y-3 w-full lg:hidden bg-white pt-24 pb-5 px-8">
            <a class="font-epilogue text-end text-main-red" @click="openModal" href="#header">Home</a>
            <a class="font-epilogue text-end text-main-red" @click="openModal" href="#tentangkami">Tentang Kami</a>
            <a class="font-epilogue text-end text-main-red" @click="openModal" href="#keunggulankami">Keunggulan Kami</a>
            <a class="font-epilogue text-end text-main-red" @click="openModal" href="#carakerjakami">Cara Kerja Kami</a>
            <a class="font-epilogue text-end text-main-red" @click="openModal" href="#layanankami">Layanan Kami</a>
        </div>
</template>

<script lang="ts" setup>
const scroll = useScroll()

const data = reactive({
    modal: false
})

const openModal = () => data.modal = !data.modal

</script>