<template>
    <div>
        <div class="bg-white shadow rounded-3xl">

<router-link :to="{name: 'mealdetails', params: {id: meal.idMeal}}">
 <img :src="meal.strMealThumb" :alt="meal.strMeal" class=" rounded-t-2xl h-48 w-full object-cover"/>
</router-link>
<div class="p-3">
 <h3 class="p-3 font-bold">{{ meal.strMeal }}</h3>
 <div class="p-3 flex gap-2 items-center justify-between">
   <you-tube-button :href="meal.strYoutube">Youtube</you-tube-button>
    <router-link :to="{name: 'mealdetails', params: {id: meal.idMeal}}" class="px-2 rounded border-2 py-[2px] bg-gray-400 border-gray-600  hover:text-white hover:bg-gray-700 transition-colors duration-200">View</router-link>
 </div>
</div>
</div>
    </div>
</template>

<script setup>
import YouTubeButton from '../components/YouTubeButton.vue';
const { meal }  = defineProps({
    required: true,
    meal: Object
})
</script>

