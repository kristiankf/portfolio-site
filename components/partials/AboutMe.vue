<template>
    <div class="flex gap-20 items-center ">
        <div class="w-1/2">
            <div class="mb-5">
                <UiSexyTitle>
                    my name is
                </UiSexyTitle>
            </div>
            <div class="space-y-10 max-w-[500px]">
                <p class="font-bold text-4xl title-text font-jakarta">
                    Christian <span class="text-primary">Amoakohene.</span>
                </p>
                <p class="leading-8">
                    I am a frontend web developer with {{ yearsOfExperience() }}+ years of experience in crafting
                    dynamic and responsive
                    websites and web apps. Skilled in using frameworks like Vue.js, React.js, and Angular, I focus on
                    delivering high-quality, user-friendly interfaces while staying at the cutting edge of industry
                    trends.
                </p>
                <p class="flex gap-4 items-center">
                    <Icon name="hugeicons:github" class="text-2xl" />
                    <Icon name="hugeicons:new-twitter" class="text-2xl" />
                    <Icon name="hugeicons:linkedin-02" class="text-2xl" />
                    <!-- <Icon name="" /> -->
                </p>
            </div>
        </div>
        <div class="w-1/2">
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