<script setup>
import Nav from '@/components/Nav.vue';
import {ref} from 'vue';
import { useProfileStore } from './stores/profile';
import {supabase} from './includes/supabase';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();

let SW = ref(window.innerWidth);
let show = ref(true);
let minW = 768;

window.addEventListener('resize', () =>{
    SW = window.innerWidth;
    if(SW >= minW)
        show.value = true;
    else
        show.value = false;
})

//CHECK IF USER IS LOGGED IN 
let profileStore = useProfileStore();
function getToken(){
    if(profileStore.user.id == undefined){
          let token = localStorage.getItem('sb-wtptxhzbzaymsoitlnwz-auth-token');
        if(token != null){
          let user = JSON.parse(token);
          let id = user.user.id;
          getUser(id);
        }
      }
    }
async function getUser(id){
    try{
        const {data:profile, error} = await supabase.from('users').select('id,FullName,Email,AvatarNum,created_at').eq('id',id);
        if(error){
            throw error;
        }else{
            profileStore.user.id = profile[0].id;
            profileStore.user.FullName = profile[0].FullName;
            profileStore.user.Email = profile[0].Email;
            profileStore.user.AvatarNum = profile[0].AvatarNum;
            profileStore.user.created_at = profile[0].created_at;
            if(route.path == '/'){
                router.push('/projects');
            }
        }
    }catch(error){
        console.log(error);
    }
}
getToken();



console.log(route.path);

</script>

<template>
    <div v-if="show">
        <Nav></Nav>
        <router-view></router-view>
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
