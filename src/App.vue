<script setup>
import Nav from '@/components/Nav.vue';
import Login from '@/views/logInView.vue';
import Register from '@/views/registerView.vue';
import {ref} from 'vue';


let SW = ref(window.innerWidth);
let show = ref(true);
let minW = 768;

window.addEventListener('resize', (event) =>{
    SW = window.innerWidth;
    if(SW >= minW)
        show.value = true;
    else
        show.value = false;
})

</script>

<template>
    <div v-if="show">
        <Nav></Nav>
        <Login></Login>
        <!-- <Register></Register> -->
    </div>
    <div v-else>
        <div class="w-[100vw] h-[100vh] place-content-center grid">
            <div class="w-[300px] h-[400px] bg-blue-400 rounded-md place-content-center grid ">
                <p class="text-gray-100 text-[25px] text-center font-serif italic pt-[13px] hover:cursor-pointer -mt-10">
                Vision</p>
                <p class="text-gray-200 font-semibold text-center mt-10">Sorry you need to have a minimum screen width of <span class="text-black">768</span>px</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
