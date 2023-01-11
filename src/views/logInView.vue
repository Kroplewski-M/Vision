<script setup>
import loginForm from '@/components/loginForm.vue';
import {ref,watch} from 'vue';

let promt = ref('');

function setPromt(promtValue){
    promt.value = promtValue;
}

watch(promt, ()=>{
    if(promt.value == 'error'){
        setTimeout(()=>{
            promt.value = '';
        },3000)
    }
})
</script>

<template>
    <div class="w-[100%] h-[100vh] bg-gray-200">
        <section class="grid place-content-center w-[100vw] h-[80vh]">
            <div class="w-[500px] h-[500px] rounded-md bg-[#0080FF] mt-16">
                <div v-if="promt == 'logginIn'" class="w-[500px] h-[30px] absolute -mt-[35px]">
                        <div class="w-[300px] h-[30px] bg-green-500 rounded-md mx-auto">
                            <p class="font-semibold text-center pt-[2px]">Loggin in... Please wait</p>
                        </div>
                </div>
                <div v-if="promt == 'error'" class="w-[500px] h-[30px] absolute -mt-[35px]">
                        <div class="w-[300px] h-[30px] bg-red-600 rounded-md mx-auto">
                            <p class="font-semibold text-center pt-[2px]">Error occured... Please try again</p>
                        </div>
                </div>
                <h1 class="font-bold text-gray-200 text-[40px] text-center font-serif italic">Login</h1>
                <loginForm @promt="setPromt"></loginForm>
                <p class="text-center text-[20px] font-semibold text-gray-200 mt-10">Or create an account...</p>
                <div class="w-[100px] mx-auto mt-10">
                        <button class="w-[100%] h-[30px] rounded-md bg-[#333333] text-gray-200 font-semibold hover:text-[#333333] hover:bg-gray-200">Register</button>
                    </div>
            </div>
        </section>
        
    </div>

</template>
