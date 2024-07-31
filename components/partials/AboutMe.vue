<template>
    <div class="flex gap-5 lg:gap-20 items-center ">
        <div class="md:w-1/2 mx-auto text-center md:text-left">
            <div class="mb-5 w-fit mx-auto md:mx-0">
                <UiSexyTitle>
                    my name is
                </UiSexyTitle>
            </div>
            <div class="space-y-10 max-w-[500px]">
                <p class="font-bold text-4xl title-text font-jakarta">
                    Christian <span class="text-primary">Amoakohene.</span>
                </p>

                <div class="relative aspect-[4/5] max-w-[200px] mx-auto md:hidden">
                    <div
                        class=" rounded-2xl overflow-hidden size-full relative z-10 bg-[url('/images/img-bg.png')] bg-cover bg-no-repeat">
                        <img src="/images/christian-min.png" alt="my image" class="full absolute bottom-0 -left-3">
                    </div>
                    <div class="absolute bg-primary rounded-lg top-0 left-0 right-0 bottom-0  -rotate-12"></div>
                </div>

                <p class="leading-8">
                    I am a frontend web developer with {{ yearsOfExperience() }}+ years of experience in crafting
                    dynamic and responsive
                    websites and web apps. Skilled in using frameworks like Vue.js, React.js, and Angular, I focus on
                    delivering high-quality, user-friendly interfaces while staying at the cutting edge of industry
                    trends.
                </p>
                <p class="flex gap-4 items-center w-fit mx-auto md:mx-0">
                    <a href="https://github.com/kristiankf" target="_blank" rel="noopener noreferrer">
                        <Icon name="hugeicons:github" class="text-2xl hover:text-primary transition-colors" />
                    </a>
                    <a href="https://x.com/Krs_wale" target="_blank" rel="noopener noreferrer">
                        <Icon name="hugeicons:new-twitter" class="text-2xl hover:text-primary transition-colors" />
                    </a>
                    <a href="https://linkedin.com/in/christianamoakohene" target="_blank" rel="noopener noreferrer">
                        <Icon name="hugeicons:linkedin-02" class="text-2xl hover:text-primary transition-colors" />
                    </a>
                    <!-- <Icon name="" /> -->
                </p>
            </div>
        </div>
        <div class="w-1/2 hidden md:block">
            <div class="relative aspect-[4/5] max-w-[300px] mx-auto">
                <div
                    class=" rounded-2xl overflow-hidden size-full relative z-10 bg-[url('/images/img-bg.png')] bg-cover bg-no-repeat">
                    <img src="/images/christian-min.png" alt="my image" class="full absolute bottom-0 -left-3">
                </div>
                <div class="absolute bg-primary rounded-lg top-0 left-0 right-0 bottom-0  -rotate-12"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>