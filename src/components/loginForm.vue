<script setup>
import {supabase} from '../includes/supabase';
import {ref} from 'vue';

let loading = ref(false);
const schema = {
    email: 'required',
    password: 'required',
}
function login(values){
    console.log(values);
}
</script>

<template>
    <vee-form action="" @submit="login" :validation-schema="schema" class="w-[400px] mx-auto mt-10">
        <label for="email" class="text-gray-100 font-semibold text-[20px] mr-[10px]">Email:</label>
        <vee-field type="email" name="email" id="email" placeholder="Email" class="w-[300px] h-[34px] rounded-md pl-[10px] font-semibold text-[#333333] mb-[25px]" />
        <ErrorMessage name="email" class="text-red-600 block text-left ml-[65px] font-semibold absolute -mt-[25px]"/>
        
        <label for="password" class="text-gray-100 font-semibold text-[20px] mr-[10px] ">Password:</label>
        <vee-field type="password" name="password" id="password" placeholder="Password" class="w-[265px] h-[34px] rounded-md pl-[10px] font-semibold text-[#333333]" />
        <ErrorMessage name="password" class="text-red-600 block text-left ml-[65px] font-semibold absolute"/>

        <div class="w-[100px] mx-auto mt-10">
            <button class="w-[100%] h-[30px] rounded-md bg-gray-200 text-[#333333] font-semibold hover:bg-[#333333] hover:text-gray-200">Log in</button>
        </div>
    </vee-form>

</template>