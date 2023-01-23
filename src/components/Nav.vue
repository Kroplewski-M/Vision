<script setup>
    import profilePrompt from '@/components/profilePrompt.vue';
    import { useProfileStore } from '../stores/profile';

    import { ref } from 'vue';

    let showPrompt = ref(false);

    let profileStore = useProfileStore();

    let defaultAvatar1 = new URL('../assets/images/avatars/defaultAvatar1.png', import.meta.url).href;
    let defaultAvatar2 = new URL('../assets/images/avatars/defaultAvatar2.png', import.meta.url).href;
    let defaultAvatar3 = new URL('../assets/images/avatars/defaultAvatar3.png', import.meta.url).href;
    let defaultAvatar4 = new URL('../assets/images/avatars/defaultAvatar4.png', import.meta.url).href;
    let errorAvatar = new URL('../assets/images/userIcon2.png', import.meta.url).href;


    function getAvatar(){
        if(profileStore.user.AvatarNum == 1){
            return defaultAvatar1;
        }
        else if(profileStore.user.AvatarNum == 2){
            return defaultAvatar2;
        }
        else if(profileStore.user.AvatarNum == 3){
            return defaultAvatar3;
        } else if(profileStore.user.AvatarNum == 4){
            return defaultAvatar4;
        }
        else{
            return errorAvatar
        }
    }
    
 
</script>


<template>
<nav class="w-[100vw] h-[70px] bg-[#0080FF]">
        <p class="text-gray-100 text-[30px] font-serif italic pt-[13px] hover:cursor-pointer w-[100px] mx-auto">
        Vision</p>
        <div v-if="profileStore.user.id != undefiend">
            <img :src='getAvatar()' alt="" class="w-[50px] h-[50px] mt-[5px] absolute right-10 top-1 hover:cursor-pointer" @click.prevent='showPrompt= !showPrompt'> 
            <profilePrompt v-if="showPrompt"></profilePrompt>
        </div>
        <div v-else>
            <button class="w-[100px] h-[35px] rounded-md bg-[#333333] text-gray-200 font-semibold hover:text-[#333333] hover:bg-gray-200 absolute right-10 top-5">Login</button>
        </div>
    </nav>
</template>

