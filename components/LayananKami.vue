<template>
    <div class=" flex">
        <LayananCard v-for="i in data.layanan" :props="i"/>
    </div>
</template>

<script setup lang="ts">
const data = reactive({
    layanan: [{
        image: '/image/image 10.png',
        title: 'SERVICE BERKALA',
        content: 'Proses perawatan dan perbaikan rutin kendaraan yang meliputi penggantian pelumas pada mesin untuk menjaga performa mesin.'
    },
    {
        image: '/image/image 10.png',
        title: 'SERVICE BERKALA',
        content: 'Proses perawatan dan perbaikan rutin kendaraan yang meliputi penggantian pelumas pada mesin untuk menjaga performa mesin.'
    },
    {
        image: '/image/image 10.png',
        title: 'SERVICE BERKALA',
        content: 'Proses perawatan dan perbaikan rutin kendaraan yang meliputi penggantian pelumas pada mesin untuk menjaga performa mesin.'
    }]
})
</script>