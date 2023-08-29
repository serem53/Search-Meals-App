<template>
    <div class="pt-12 px-4 flex flex-col md:gap-[200px] md:flex-row md:justify-evenly">
       <div v-for="item in items" :key="item" class=" pb-4">
             <img :src="item.image" alt="discover meals" class="rounded-xl h-[200px] w-[250px]"/>
              <P class=" md:w-[250px] font-semibold">{{ item.description }}</P>
       </div>
    </div>
</template>

<script setup>
import meal2 from '../assets/images/meal2.jpeg'
import meal3 from '../assets/images/meal3.jpeg'
import meal4 from '../assets/images/meal4.jpeg'


const items = [
    {image: meal2,
    description: '"Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people eat together." – Guy Fieri'
    },
    { image: meal3,
      description: '"Cooking is like love. It should be entered into with abandon or not at all." – Harriet van Horne'
    },
    {  image: meal4,
       description: '"Let food be thy medicine and medicine be thy food." – Hippocrates'
    },
]

</script>

