<template>
  <div class="flex flex-col flex-grow min-h-full">
     <div class="flex flex-col">
      <h1 class="font-bold text-3xl flex justify-center pt-14">Discover Delicious Delights</h1>
      <div class="flex flex-col md:flex-row w-screen">
        <mealcard/>
      </div>
     <footer class="flex justify-center bg-gray-800 text-white pt-5 pb-2">
        <div class="flex flex-col gap-2">
        <div class="flex gap-3 items-center">
        <i class="fa-brands fa-instagram"></i>
        <p>Follow as on Instagram</p>
         </div>
        <div class="flex gap-3 items-center">
          <i class="fa-brands fa-facebook"></i>
          <p>Follow as on FaceBook</p>
        </div>
        <div class="flex gap-3 items-center">
          <i class="fa-brands fa-twitter"></i>
          <p>Follow as on Twitter</p>
        </div>
        <div class=" pt-8  text-bold">
        &copy; 2023, All Rights Reserved.
      </div>
      </div>
     </footer>
     </div>
  </div>
</template>

<script setup>
import mealcard from '../components/mealcard.vue';
import { computed,onMounted,ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient';


 
 const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
 const ingredients = ref([]);

 onMounted( async () => {
  const response = await axiosClient.get('/list.php?i=list')

   console.log(response.data);
   ingredients.value = response.data;
 })

</script>

