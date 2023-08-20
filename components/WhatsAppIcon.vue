<template>
  <div>
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"> -->
    <div
      class="floating_btn w-28 md:w-36 aspect-square right-5 bottom-2 md:right-10 md:bottom-5 drop-shadow-lg"
    >
      <a alt="whatsapp" target="_blank" href="https://wa.me/+6285817853206">
        <img src="/Daco_5201641.png" alt="" srcset="" />
        <!-- <div class="contact_icon">
        <i class="fa fa-whatsapp my-float"></i>
      </div> -->
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
a {
  text-decoration: none;
}
.floating_btn {
  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

@keyframes pulsing {
  to {
    box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
  }
}

.contact_icon {
  background-color: #42db87;
  color: #fff;
  width: 60px;
  height: 60px;
  font-size: 30px;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translatey(0px);
  animation: pulse 1.5s infinite;
  box-shadow: 0 0 0 0 #42db87;
  -webkit-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  font-weight: normal;
  font-family: sans-serif;
  text-decoration: none !important;
  transition: all 300ms ease-in-out;
}
</style>
