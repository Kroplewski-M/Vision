<script setup>
</script>

<template>
    <div class="w-[300px] h-[150px] bg-[#4fa5fc] rounded-md absolute right-10 mr-[10px] mt-5">
        <div class="arrow-up absolute right-0 -top-3"></div>
        <img src="@/assets/images/close.png" alt="" class="w-[20px] float-right mt-[10px] mr-[10px] hover:cursor-pointer">
        <h1 class="font-bold text-gray-100 text-[20px] text-center mt-[30px]">You are not logged in!</h1>
        <div class=" w-[80%] mx-auto mt-5">
            <button class="w-[100%] h-[40px] bg-gray-200 rounded-md font-semibold text-[#222222]">Log in now!</button>
        </div>
    </div>
</template>

<style>
.arrow-up {
  width: 0; 
  height: 0; 
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  
  border-bottom: 15px solid #4fa5fc;
}
</style>