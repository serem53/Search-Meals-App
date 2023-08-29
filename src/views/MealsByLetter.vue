<template>
    <div class=" min-h-screen flex flex-col flex-grow w-auto">
      <div class="flex justify-center pt-14">
        <header class="text-xl max-w-md ">Click on any letter from A to Z, and instantly see meal names that start with that letter. Easily find your favorite dishes and discover new ones with just a click!</header>
      </div>
        <div class="flex flex-wrap  gap-5  mt-14 justify-center w-auto ">
      <router-link :to="{name: 'Byletter', params: {letter}}" v-for="letter of letters" :key="letter" class=" flex items-center text-bold  text-2xl md:w-8 hover:bg-gray-600 duration-200">
         {{ letter }}
       </router-link>
     </div>

 
     <div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
       <!-- meal card -->
       <div v-for="meal of meals" :key="meal.idMeal">
       <meal-item :meal="meal" />
      </div>
        </div>
     </div>
    </div>
</template>

<script setup>
import MealItem from '../components/MealItem.vue';
import { computed,onMounted,watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const route = useRoute();
const meals= computed(() => store.state. mealsByLetter);

watch(route, () => {
    searchMealsByLetter();
})

    function searchMealsByLetter() {
store.dispatch('searchMealsByLetter', route.params.letter);
}

onMounted(() => {
     searchMealsByLetter();
})

</script>

