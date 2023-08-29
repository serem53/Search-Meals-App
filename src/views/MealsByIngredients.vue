<template>
    <div>
        <div class=" pt-14 px-5">
        <input type="text" class="rounded-xl border-2 border-gray-200 w-full focus:border-orange-400 " 
        v-model="ing" 
        @change="searchbyIngredients"
     placeholder="Search For An Ingredient"/>
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
import { onMounted,ref,computed } from 'vue';
import store from '../store';
import MealItem from '../components/MealItem.vue';

 const ing = ref(''); 

const meals = computed(() => store.state.mealsByIngredients);


function searchbyIngredients() {

    store.dispatch('searchMealsByIngredients',ing.value);
}
onMounted(() => {
 searchbyIngredients();
})
</script>

