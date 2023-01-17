<script setup>
import { useProfileStore } from '../stores/profile';


let profileStore = useProfileStore().user;
</script>

<template>
    <div class="w-[700px] h-[400px] bg-blue-500 mx-auto rounded-md mt-16">
        <p class="font-bold text-center underline text-[30px] pt-5 text-gray-200">Profile</p>
        <div class="w-[360px] mx-auto text-gray-300 font-semi-bold text-[20px] flex flex-col space-y-2">
            <div class="w-[50px] mx-auto">
                <img src="@/assets/images/userIcon2.png" alt="" class="w-[50px] h-[50px]"> 
            </div>
            <p>Created at: <span class="font-bold text-gray-200 pl-[10px]">{{profileStore.created_at}}</span></p>
            <p>ID: <span class="font-bold text-gray-200 pl-[10px]">{{profileStore.id}}</span></p>
            <p>Name: <span class="font-bold text-gray-200 pl-[10px]">{{profileStore.FullName}}</span></p>
            <p>Email: <span class="font-bold text-gray-200">{{profileStore.Email}}</span></p>
        </div>
        <div class="w-[200px] mx-auto pt-10">
            <button class="w-[200px] h-[35px] rounded-md bg-gray-200 hover:bg-gray-300 font-bold">Log Out</button>
        </div>
    </div>
</template>