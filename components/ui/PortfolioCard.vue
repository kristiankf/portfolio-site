<template>
    <div class="rounded-lg overflow-hidden bg-white dark:bg-black w-[500px] transition-colors duration-500 title-text">
        <div class="w-full aspect-square relative group">
            <img :src="content.image" :alt="content.name" class="size-full object-cover object-center">
            <div class="absolute top-0 bottom-0 left-0 right-0 bg-black/20 dark:bg-black/40"></div>
        </div>

        <div class="p-5">
            <p>{{ content.name }}</p>
            <div class="flex gap-3 items-center mt-4">
                <span class="border text-xs theme-border px-2 py-0.5 rounded-[4px]">{{ content.techStack }}</span>
                <a :href="content.link" target="_blank" class="flex items-center">
                    <Icon name="material-symbols:link" class="text-2xl" />
                </a>
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