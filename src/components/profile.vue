<script setup>
import { useProfileStore } from '../stores/profile';


let profileStore = useProfileStore().user;
</script>

<template>
    <div class="w-[700px] h-[400px] bg-blue-500 mx-auto rounded-md mt-16">
        <p class="font-bold text-center underline text-[30px] pt-5 text-gray-200">Profile</p>
        <div class="w-[350px] mx-auto text-gray-300 font-semi-bold text-[20px]">
            <img src="@/assets/images/userIcon2.png" alt="" class="w-[50px] h-[50px]"> 
            <p>Created at: {{profileStore.created_at}}</p>
            <p>ID: {{profileStore.id}}</p>
            <p>Name: {{profileStore.FullName}}</p>
            <p>Email: {{profileStore.Email}}</p>
        </div>
    </div>
</template>