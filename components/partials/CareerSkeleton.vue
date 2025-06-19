<template>
    <div class="flex flex-col md:flex-row gap-5 lg:gap-20 maximum-width animate-pulse">
        <div class="md:w-[300px] shrink-0">
            <div class="h-6 w-32 bg-gray-300 rounded mb-4"></div>
            <div class="h-8 w-60 bg-gray-300 rounded mb-8"></div>
            <div class="mt-10 w-full">
                <div class="overflow-x-scroll w-full pb-4">
                    <ul class="flex md:block gap-1 w-full">
                        <li v-for="i in 3" :key="i" class="h-8 w-40 bg-gray-200 rounded mb-2"></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="w-full">
            <div class="h-6 w-80 bg-gray-200 rounded mb-4"></div>
            <div class="h-4 w-40 bg-gray-200 rounded mb-2"></div>
            <div class="h-4 w-32 bg-gray-200 rounded mb-2"></div>
            <div class="h-4 w-24 bg-gray-200 rounded mb-4"></div>
            <div class="flex gap-2 mb-4">
                <div v-for="i in 4" :key="i" class="h-6 w-16 bg-gray-200 rounded-full"></div>
            </div>
            <div class="space-y-3">
                <div v-for="i in 3" :key="i" class="h-4 w-full bg-gray-100 rounded"></div>
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