<template>
    <div class="maximum-width animate-pulse">
        <div class="flex justify-between items-end sm:items-center gap-5 mb-10">
            <div>
                <div class="h-6 w-32 bg-gray-300 rounded mb-4"></div>
                <div class="h-8 w-60 bg-gray-300 rounded"></div>
            </div>
            <div class="flex gap-2">
                <div class="h-10 w-10 bg-gray-200 rounded-2xl"></div>
                <div class="h-10 w-10 bg-gray-200 rounded-2xl"></div>
            </div>
        </div>
        <div class="mx-auto flex gap-4">
            <div v-for="i in 3" :key="i" class="h-64 w-64 bg-gray-200 rounded-lg"></div>
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