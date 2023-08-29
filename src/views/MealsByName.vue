<template>
  <div class="flex flex-col flex-grow min-h-screen">
    <div class="p-8 gap-8 flex flex-col justify-center">
      <div class="flex items-center px-5 pt-8 gap-2 flex-col">
        <input
          type="text"
          class="rounded-xl border-2 border-gray-200 w-full focus:border-orange-400"
          v-model="keyword"
          @change="searchMeals"
          @click="getnoresults"
          placeholder="Search For Meals"
        />
      
      </div>

      <div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- meal card -->
          <div v-for="meal of meals" :key="meal.idMeal">
            <meal-item :meal="meal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import MealItem from '../components/MealItem.vue';
import store from '../store';

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);


function searchMeals() {
  store.dispatch('searchMeals', keyword.value);
}

</script>
