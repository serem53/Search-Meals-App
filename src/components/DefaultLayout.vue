<template>
   <div  class=" bg-gray-200 h-full flex flex-col pb-8">
     <nav-bar/>
   <main>
     
    <router-view/>
   </main>
</div>
</template>

<script setup>
import NavBar from './NavBar.vue';
</script>


