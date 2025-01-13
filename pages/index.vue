<template>
    <div class=" grid grid-cols-1 bg-zinc-900 h-1/2 md:bg-black md:h-full  md:flex md:h-screen">
        <!-- side bar -->

        <div class="  md:w-[516px] h-full  bg-zinc-900 p-8 flex flex-col justify-center">
            <div class=" p- m-[50px]">
                <Logo />
                <h1 class="text-white font-bold text-lg mt-6">Sign up for a free account</h1>
                <p class="text-zinc-300 text-sm leading-6">Already regitered? <NuxtLink to="/login"
                        class=" font-bold text-[#FFAC00] underline">Log
                        in</NuxtLink> to
                    Your account
                </p>

            </div>
        </div>
        <!-- /sidebar -->
        <!-- notes -->
        <div>
            <div class="p-6 m-[200px]  align-center justify-center items-center  block">
                <div
                    class="md:text-white md:tracking-tighter md:block hidden md:font-light md:w-[437.1px] md:h-[380px]">

                </div>
            </div>
        </div>
        <!-- /notes -->

    </div>
</template>



<script setup>
import swal from 'sweetalert2'

useHead({
    title: 'Dashboard'
})

definePageMeta({
    middleware: ['auth']
})
</script>