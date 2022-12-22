<script setup>

</script>

<template>
    <div class="w-[100vw] h-[100vh] bg-gray-200">
        <section class="grid place-content-center w-[100vw] h-[80vh]">
            <div class="w-[500px] h-[500px] rounded-md bg-[#0080FF] mt-16">
                <h1 class="font-bold text-gray-200 text-[40px] text-center font-serif italic">Register</h1>
                <form action="" class="w-[400px] mx-auto mt-10">
                    <label for="email" class="text-gray-100 font-semibold text-[20px] mr-[10px]">Email:</label>
                    <input type="email" name="email" id="" placeholder="Email" class="w-[300px] h-[34px] rounded-md pl-[10px] font-semibold text-[#333333] mb-5">
        
                    <label for="password" class="text-gray-100 font-semibold text-[20px] mr-[10px] ">Password:</label>
                    <input type="password" name="password" id="" placeholder="Password" class="w-[265px] h-[34px] rounded-md pl-[10px] font-semibold text-[#333333]">
                    <div class="w-[100px] mx-auto mt-10">
                        <button class="w-[100%] h-[30px] rounded-md bg-gray-200 text-[#333333] font-semibold hover:bg-[#333333] hover:text-gray-200">Log in</button>
                    </div>
                </form>

                <p class="text-center text-[20px] font-semibold text-gray-200 mt-10">Or log in...</p>
                <div class="w-[100px] mx-auto mt-10">
                        <button class="w-[100%] h-[30px] rounded-md bg-[#333333] text-gray-200 font-semibold hover:text-[#333333] hover:bg-gray-200">Log in</button>
                    </div>
            </div>
        </section>
        
    </div>

</template>
