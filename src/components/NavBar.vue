<template>
  <div class="flex flex-col flex-grow">
    <div class="h-[100px]">
        <header class=" bg-white shadow md:h-16 h-[150px] flex justify-between ">
          <div class="px-1 md:px-4 pt-4 pb-3 h-14">
    <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5 ring-4 
                                             rounded-3xl shadow-2xl brightness-200 saturate-200
                                               transition-colors 
                                                  shadow-amber-900 ring-amber-900 ">
      Home
    </router-link>
          </div> 
 
     
   <div class="flex md:flex-row flex-col  md:gap-4 gap-4  pt-4  w-56 md:w-auto  items-end md:items-center">
    <div class="">
    <router-link :to="{name: 'byname'}" class="inline-flex items-center h-full px-5 ring-2 
                                             rounded-3xl shadow-2xl brightness-200 saturate-200
                                              hover:text-black duration-200 transition-colors 
                                                shadow-amber-900 ring-amber-900 ">
      Search Meals
    </router-link>
  </div>
  
  <div>
    <router-link :to="{name: 'Byletter'}" class="inline-flex items-center h-full px-5 ring-2
                                             rounded-3xl shadow-2xl brightness-200 saturate-200
                                            hover:text-black duration-200 transition-colors 
                                                shadow-amber-900 ring-amber-900 ">
      Meals By Letter
    </router-link>
  </div>
    <diV>
    <router-link :to="{name: 'byingredients'}" class="inline-flex items-center h-full px-5 ring-2 
                                             rounded-3xl shadow-2xl brightness-200 saturate-200
                                              hover:text-black duration-200 transition-colors 
                                                shadow-amber-900 ring-amber-900 ">
      Meals By Ingredients
    </router-link> 
    </diV>
    </div>

    </header>
    </div>
  </div>
</template>

<script setup>

</script>

