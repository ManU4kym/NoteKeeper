<template>
    <div class=" flex bg-black h-screen">
        <!-- side bar -->

        <div class=" w-[516px] h-full bg-zinc-900 p-8">
            <div class="p-8 m-6">
                <Logo />
                <h1 class="text-white font-bold text-lg mt-6">Sign up for a free account</h1>
                <p class="text-zinc-300 text-sm leading-6">Already regitered? <span
                        class=" font-bold text-[#FFAC00] underline">Log
                        in</span> to
                    Your account
                </p>
                <div class="mt-11">
                    <label class="text-zinc-300  text-sm block mb-2 " for="">Email Address</label>
                    <input type="email "
                        class="block w-full rounded-md text-white p-2 border border-[#3F3F46] bg-[#27272A] placeholder:text-zinc-500"
                        placeholder="you@example.com">
                </div>

                <div class="mt-7">
                    <label class="text-zinc-300  text-sm block mb-2 " for="">Password</label>
                    <input type="password"
                        class="block w-full rounded-md text-white p-2 border border-[#3F3F46] bg-[#27272A] placeholder:text-zinc-500"
                        placeholder="*********">
                </div>
                <div class="">
                    <button class="bg-[#FFAC00]  font-bold w-full flex justify-center mt-8 p-4 rounded-3xl">
                        <sign />
                    </button>
                </div>
            </div>
        </div>
        <!-- /sidebar -->

        <!-- Introduction -->
        <div>
            <div class="text-white">
                some content
            </div>
        </div>
        <!-- /Introduction -->
    </div>
</template>