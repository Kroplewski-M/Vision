<script setup>
import {ref} from 'vue';
import {supabase} from '../includes/supabase';

let selectedAvatar = ref(2);
let loading = ref(false);

const schema = {
    name: "required|min:3|max:50|alpha_spaces",
    email: "required|max:50|email",
    password: "required|min:5",
    confirmPassword: "required|password_mismatch:@password",
};

async function register(values, {resetForm}){
    loading.value = true;
    try{
        const {data,error} = await supabase.auth.signUp({
            email: values.email,
            password: values.password,
        })
        if(error){ JSON.stringify(error);}
        else{
            console.log("Auth added");
            console.log(data);
            addUser(values,data);
        }
        }catch(error){
            alert(error);
    }finally{
        resetForm();
    }

}
async function addUser(values,dataID){
    try{
        const {data,error} = await supabase.from('users').insert([{id:dataID.user.id,FullName:values.name,Email:values.email,AvatarNum:selectedAvatar.value }]);
        if(error){
            throw error;
        }else{
            console.log('user added to table');
        }
    }catch(error){
        console.log(error);
    }finally{
        loading.value = false;
    }
}
</script>

<template>
    <vee-form action="" @submit="register" :validation-schema="schema" class="w-[320px] mx-auto mt-10 text-center">
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
        <vee-field type="text" name="name" id="" placeholder="John Doe" class="w-[300px] h-[34px] rounded-md pl-[10px] font-semibold text-[#333333] mb-[15px]" />
        <ErrorMessage name="name" class="text-red-600 block text-left ml-[10px] font-semibold absolute -mt-[15px]"/>
        <label for="email" class="text-gray-100 font-semibold text-[20px] mr-[10px]">Email:</label>
        <vee-field type="email" name="email" id="" placeholder="Email" class="w-[300px] h-[34px] rounded-md pl-[10px] font-semibold text-[#333333] mb-[15px]" />
        <ErrorMessage name="email" class="text-red-600 block text-left ml-[10px] font-semibold absolute -mt-[15px]"/>
        
        <label for="password" class="text-gray-100 font-semibold text-[20px] mr-[10px] ">Password:</label>
        <vee-field type="password" name="password" id="" placeholder="Password" class="w-[265px] h-[34px] rounded-md pl-[10px] font-semibold text-[#333333] mb-[15px]" />
        <ErrorMessage name="password" class="text-red-600 block text-left ml-[30px] font-semibold absolute -mt-[15px]"/>

        <label for="conPassword" class="text-gray-100 font-semibold text-[20px] mr-[10px] ">Confirm password:</label>
        <vee-field type="password" name="confirmPassword" id="" placeholder="Confirm Password" class="w-[265px] h-[34px] rounded-md pl-[10px] font-semibold text-[#333333] mb-[15px]" />
        <ErrorMessage name="confirmPassword" class="text-red-600 block text-left ml-[30px] font-semibold absolute -mt-[15px]"/>

        <button class="w-[100%] h-[40px] rounded-md bg-gray-200 text-[#333333] font-semibold hover:bg-[#333333] hover:text-gray-200 mt-10"
        :disabled="loading">Register</button>
    </vee-form>


</template>