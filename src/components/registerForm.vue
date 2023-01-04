<script setup>
import {ref} from 'vue';
let selectedAvatar = ref(2);

</script>

<template>
    <vee-form action="" class="w-[320px] mx-auto mt-10 text-center">
        <div class="w-[270px] mx-auto mb-[10px]">
            <p class="text-[20px] font-semibold text-gray-100 mb-[15px]">Choose an avatar:</p>
            <ul class="flex space-x-5">
                <li @click.prevent="selectedAvatar=0">
                <img src="@/assets/images/avatars/defaultAvatar1.png" alt="" :class="selectedAvatar == 0 ? 'border-gray-200 border-solid border-2': ''"
                class="w-[50px] h-[50px] hover:cursor-pointer hover:border-solid hover:border-2 hover:border-gray-300 rounded-full"></li>
                <li @click.prevent="selectedAvatar=1">
                <img src="@/assets/images/avatars/defaultAvatar2.png" alt="" :class="selectedAvatar == 1 ? 'border-gray-200 border-solid border-2': ''"
                class="w-[50px] h-[50px] hover:cursor-pointer hover:border-solid hover:border-2 hover:border-gray-300 rounded-full"></li>
                <li @click.prevent="selectedAvatar=2">
                <img src="@/assets/images/avatars/defaultAvatar3.png" alt="" :class="selectedAvatar == 2 ? 'border-gray-200 border-solid border-2': ''"
                class="w-[50px] h-[50px] hover:cursor-pointer hover:border-solid hover:border-2 hover:border-gray-300 rounded-full"></li>
                <li @click.prevent="selectedAvatar=3">
                <img src="@/assets/images/avatars/defaultAvatar4.png" alt="" :class="selectedAvatar == 3 ? 'border-gray-200 border-solid border-2': ''"
                class="w-[50px] h-[50px] hover:cursor-pointer hover:border-solid hover:border-2 hover:border-gray-300 rounded-full"></li>
                </ul>
        </div>
        <label for="name" class="text-gray-100 font-semibold text-[20px] mr-[10px]">Full Name:</label>
        <vee-field type="text" name="name" id="" placeholder="John Doe" class="w-[300px] h-[34px] rounded-md pl-[10px] font-semibold text-[#333333] mb-[5px]" />

        <label for="email" class="text-gray-100 font-semibold text-[20px] mr-[10px]">Email:</label>
        <input type="email" name="email" id="" placeholder="Email" class="w-[300px] h-[34px] rounded-md pl-[10px] font-semibold text-[#333333] mb-[5px]">
        
        <label for="password" class="text-gray-100 font-semibold text-[20px] mr-[10px] ">Password:</label>
        <input type="password" name="password" id="" placeholder="Password" class="w-[265px] h-[34px] rounded-md pl-[10px] font-semibold text-[#333333] mb-[5px]">

        <label for="conPassword" class="text-gray-100 font-semibold text-[20px] mr-[10px] ">Confirm password:</label>
        <input type="password" name="conPassword" id="" placeholder="Confirm Password" class="w-[265px] h-[34px] rounded-md pl-[10px] font-semibold text-[#333333] mb-[5px]">
        <div class="w-[100px] mx-auto mt-10">
            <button class="w-[100%] h-[30px] rounded-md bg-gray-200 text-[#333333] font-semibold hover:bg-[#333333] hover:text-gray-200">Register</button>
        </div>
    </vee-form>


</template>