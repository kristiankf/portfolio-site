<template>
    <div class="maximum-width animate-pulse">
        <div class="h-6 w-32 bg-gray-300 rounded mb-4"></div>
        <div class="h-8 w-60 bg-gray-300 rounded mb-8"></div>
        <div class="mt-10 md:mt-20 flex flex-col sm:flex-row gap-5 lg:gap-20">
            <div class="sm:w-[500px] space-y-8">
                <div v-for="i in 2" :key="i" class="flex gap-4">
                    <div class="flex flex-col items-center">
                        <div class="size-[14px] bg-gray-300 rounded-full mb-2"></div>
                        <div class="w-[2px] h-10 bg-gray-300"></div>
                    </div>
                    <div class="pb-10">
                        <div class="h-4 w-40 bg-gray-200 rounded mb-2"></div>
                        <div class="h-3 w-32 bg-gray-200 rounded mb-2"></div>
                        <div class="h-3 w-24 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>
            <div class="sm:w-[600px]">
                <div class="h-4 w-80 bg-gray-200 rounded mb-6"></div>
                <div class="flex flex-wrap gap-2 md:gap-4 mt-5 md:mt-10">
                    <div v-for="i in 8" :key="i" class="h-8 w-24 bg-gray-200 rounded-full"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-pulse {
    animation: pulse 1.5s infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}
</style>