<script setup>
    import profilePrompt from '@/components/profilePrompt.vue';
    import { ref } from 'vue';

    let showPrompt = ref(false);
</script>


<template>
<nav class="w-[100vw] h-[70px] bg-[#0080FF]">
        <p class="text-gray-100 text-[30px] font-serif italic pt-[13px] hover:cursor-pointer w-[100px] mx-auto">
        Vision</p>
        <img src="@/assets/images/userIcon2.png" alt="" class="w-[50px] h-[50px] mt-[5px] absolute right-10 top-1 hover:cursor-pointer" @click.prevent='showPrompt= !showPrompt'> 
        <profilePrompt v-if="showPrompt"></profilePrompt>
    </nav>
</template>

