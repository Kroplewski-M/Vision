<script setup>
import RegisterForm from '@/components/registerForm.vue';

</script>

<template>
    <div class="w-[100vw] h-[100vh] bg-gray-200">
        <section class="grid place-content-center">
            <div class="w-[500px] pb-10 rounded-md bg-[#0080FF] mt-16">
                <h1 class="font-bold text-gray-200 text-[40px] text-center font-serif italic">Register</h1>
                <RegisterForm></RegisterForm>
                <p class="text-center text-[20px] font-semibold text-gray-200 mt-10">Or log in...</p>
                <div class="w-[100px] mx-auto mt-10">
                        <button class="w-[100%] h-[30px] rounded-md bg-[#333333] text-gray-200 font-semibold hover:text-[#333333] hover:bg-gray-200">Log in</button>
                    </div>
            </div>
        </section>
        
    </div>

</template>
