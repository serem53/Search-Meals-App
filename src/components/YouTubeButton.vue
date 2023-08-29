<template>
    <div>
        <a :href="href" target="_blank" class="px-2 rounded border-2 py-[2px] 
        bg-red-700 text-white border-red-700 hover:bg-black hover:border-black 
        transition-colors duration-200">

    <slot></slot>
    </a>

    </div>
</template>

<script setup>
defineProps( {
href: String
})
</script>

