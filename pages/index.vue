<template>
    <div class=" grid grid-cols-1 bg-zinc-900 h-1/2 md:bg-zinc-900 md:h-full  md:flex md:h-screen">
        <!-- side bar -->

        <div class="  md:w-[316px] h-full bg-black  p-8">
            <div class="">
                <Logo />
                <p class="text-[#C2C2C5] mt-[58px] text-xs mb-4 font-bold">Today</p>

                <div class="ml-2 bg-[#A1842C] rounded-lg">
                    <div class="p-2 ">
                        <h3 class="text-[#F4F4F5]  text-sm font-bold">Just finished reading</h3>

                    </div>

                    <div class="leading p-2-none ml-2">
                        <span class="text-xs text-[#F4F4F5] mr-4">Today</span>
                        <span class="text-xs text-[#D6D6D6]">The Midnight Library...</span>

                    </div>
                </div>
                <div class="ml-2">
                    <div class="p-2">
                        <h3 class="text-[#F4F4F5] text-sm font-bold">Just finished reading</h3>

                    </div>

                    <div class="leading-none ml-2">
                        <span class="text-xs text-[#F4F4F5] mr-4">Today</span>
                        <span class="text-xs text-[#D6D6D6]">The Midnight Library...</span>

                    </div>
                </div>


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