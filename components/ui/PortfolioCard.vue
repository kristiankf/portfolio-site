<template>
    <div class="rounded-lg overflow-hidden bg-white dark:bg-black w-[500px] transition-colors duration-500 title-text">
        <a :href="content?.live_link" target="_blank">
            <div class="w-full aspect-[9/7] relative group overflow-hidden">
                <img :src="content?.image_url" :alt="content?.title"
                    class="size-full object-cover object-center group-hover:scale-105 transition-transform duration-300">
                <div class="absolute top-0 bottom-0 left-0 right-0 bg-black/20 dark:bg-black/40"></div>
            </div>
        </a>

        <div class="p-3 sm:p-5 flex flex-col justify-between gap-2">
            <p class="text-sm md:text-base">{{ content?.title }}</p>
            <div class="flex gap-1 flex-wrap items-center my-2">
                <template v-for="tech in content?.skills" :key="tech.id">
                    <span class="border text-[10px] theme-border px-2 py-0.5 rounded-[4px]">{{ tech.name }}</span>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
const { content } = defineProps({
    content: Object
})
</script>

<style lang="scss" scoped></style>