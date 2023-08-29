<template>
    <div class="md:w-[800px] mx-auto flex flex-col md:pb-20 pb-56">
      <h1 class="font-bold text-5xl mb-5 flex justify-center mt-14">{{ meal.strMeal }}</h1> 
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="md:w-screen h-[400px]  object-cover md:px-[200px]"/>
        <div class=" text-lg py-2 px-4 flex justify-between pt-12">
          <div>
        <strong class="font-bold ">Category:</strong> {{ meal.strCategory }} 
        </div>
        <div>
           <strong class="font-bold"> Area: </strong> {{ meal.strArea }} 
        </div>
        <div>
         <strong class="font-bold"> Tags:</strong> {{ meal.strTags }} 
        </div>
        </div>
          <div class="py-4 px-12">
            <h1 class="font-bold text-xl">INSTRUCTIONS</h1>
            <p>{{ meal.strInstructions}}</p>
          </div>
        <div class="grid grid-cols-2 pt-6 px-20">
          <div>
            <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                <ul>
                    <li v-for="(el, ind) in newArray" :key="ind">
                      <template v-if="meal[`strIngredient${ind + 1}`]" >
                     {{ ind + 1 }}. {{ meal[`strIngredient${ind+1}`] }}
                    </template>
                    </li>

                </ul>

          </div>
          <div>
            <h2 class="text-2xl font-semibold mb-3">Measures</h2>
            <ul>
              <li v-for="(el, ind) in newArray" :key="ind">
              <template v-if="meal[`strMeasure${ind+1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind+1}`] }}
            </template>

              </li>
            </ul>
          </div>
          <div class=" flex gap-4 items-baseline pt-12 flex-col md:flex-row ">
            <you-tube-button :href="meal.strYoutube" class="w-[300px]">Watch Youtube Video</you-tube-button>
            <a :href="meal.strSource" target="_blank" class="px-2 rounded border-2 py-[2px]
             bg-gray-400 border-gray-600  hover:text-white hover:bg-gray-700 transition-colors duration-200">View source</a>
          </div>
        </div>
    </div>
</template>

<script setup>
import YouTubeButton from '../components/YouTubeButton.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

  const route = useRoute();
  const meal = ref({});
  
  const newArray = new Array(40);
 console.log( meal);
  onMounted(() => {
   axiosClient.get(`/lookup.php?i=${route.params.id}`)
   .then(({data}) => {
   
    meal.value = data.meals[0] || {}
    console.log( meal);
   })
  })
</script>

