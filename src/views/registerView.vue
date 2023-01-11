<script setup>
import RegisterForm from '@/components/registerForm.vue';
import {ref,watch} from 'vue';

let registerPromt = ref('');

watch(registerPromt, ()=>{
    if(registerPromt.value == 'Error'){
        setTimeout(()=>{
            registerPromt.value = '';
        },3000)
    }
})

function promt(value){
    registerPromt.value = value;
}
</script>

<template>
    <div class="w-[100vw] h-[100vh] bg-gray-200">
        <section class="grid place-content-center">
            <div class="w-[500px] pb-10 rounded-md bg-[#0080FF] mt-16">
                <div v-if="registerPromt == 'creatingAccount'" class="w-[500px] h-[30px] absolute -mt-[35px]">
                    <div class="w-[300px] h-[30px] bg-green-500 rounded-md mx-auto">
                        <p class="font-semibold text-center pt-[2px]">Creating account... Please wait</p>
                    </div>
                </div>
                <div v-if="registerPromt == 'Error'" class="w-[500px] h-[30px] absolute -mt-[35px]">
                    <div class="w-[300px] h-[30px] bg-red-600 rounded-md mx-auto">
                        <p class="font-semibold text-center pt-[2px]">Error Occured... Please try again</p>
                    </div>
                </div>
                <div v-if="registerPromt == 'Success'" class="w-[500px] h-[30px] absolute -mt-[35px]">
                    <div class="w-[300px] h-[30px] bg-green-700 rounded-md mx-auto">
                        <p class="font-semibold text-center pt-[2px]">Account created... Redirecting</p>
                    </div>
                </div>
                <h1 class="font-bold text-gray-200 text-[40px] text-center font-serif italic">Register</h1>
                <RegisterForm @promt="promt"></RegisterForm>
                <p class="text-center text-[20px] font-semibold text-gray-200 mt-10">Or log in...</p>
                <div class="w-[100px] mx-auto mt-10">
                        <button class="w-[100%] h-[30px] rounded-md bg-[#333333] text-gray-200 font-semibold hover:text-[#333333] hover:bg-gray-200">Log in</button>
                    </div>
            </div>
        </section>
        
    </div>

</template>
