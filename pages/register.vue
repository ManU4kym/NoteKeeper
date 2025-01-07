<template>
    <div class=" grid grid-cols-1 bg-zinc-900 h-1/2 md:bg-black md:h-full  md:flex md:h-screen">
        <!-- side bar -->

        <div class=" w-[409px] md:w-[516px] h-full  bg-zinc-900 p-8">
            <div class=" p- m-[50px]">
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
            <div class="p-6 m-[200px]  align-center justify-center items-center  block">
                <div
                    class="md:text-white md:tracking-tighter md:block hidden md:font-light md:w-[437.1px] md:h-[380px]">
                    December 3rd, 2024 <br>

                    Just got back from the most surreal night shift at the hospital. A full moon always brings out the
                    interesting cases, but last night was something else. Had a patient come in convinced they'd been
                    bitten by a werewolf - turned out to be their neighbor's very large, very normal German Shepherd.
                    Can't blame them though; at 3 AM, everything feels a bit supernatural. Dr. Chen and I couldn't stop
                    laughing about it during our coffee break.

                    The sunrise from the hospital rooftop made the whole crazy night worth it. There's this magical
                    moment just before the city wakes up, when everything is bathed in soft purple light. Watched a
                    flock of birds sweep across the sky while finishing my last cup of coffee. Even after five years,
                    these quiet moments still remind me why I chose this path. Though next time, I'm definitely bringing
                    my thermal socks - December mornings are no joke!
                </div>
            </div>
        </div>
        <!-- /Introduction -->
    </div>
</template>



<script setup>


useHead({
    title: 'Login'
})

</script>