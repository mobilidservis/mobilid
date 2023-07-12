<template>
<swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :pagination="{
    clickable: true,
    }"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :modules="[Pagination, Autoplay]"
    class="mySwiper"
    :breakpoints=" {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }"
    
>
    <swiper-slide v-for="a in img">
    <div class=" pb-14">
        <img class="" :src="a.photo_url" alt="" srcset="">
    </div>
    </swiper-slide>
    
</swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide, } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


// import './style.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

defineProps({
  img: {
    type: Array,
  },
});
</script>
