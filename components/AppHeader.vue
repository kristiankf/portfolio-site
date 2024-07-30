<template>
    <nav class="sticky top-0 z-50 dark:bg-dark bg-light shadow-sm transition-colors duration-500">
        <div class="maximum-width title-text flex justify-between items-center py-4">
            <!-- logo -->
            <div class="">
                <img src="/images/logo-white.png" alt="" class="max-w-[80px]" v-if="themeStore.theme === 'dark'" />
                <img src="/images/logo-black.png" alt="" class="max-w-[80px]" v-else />
            </div>

            <!-- links -->
            <div class="flex justify-between items-center gap-5 ">
                <div>About Me</div>
                <div>Education & Skills</div>
                <div>Career</div>
                <div>Portfolio</div>
                <div>Contact Me</div>
            </div>

            <!-- theme and cv -->
            <div class="flex justify-between items-center gap-5">
                <UiThemeIcon />
                <button class="rounded-md px-5  py-2 border theme-border" type="button">Resume</button>
            </div>
        </div>
    </nav>
</template>

<script setup>
const themeStore = useThemeStore()
</script>

<style scoped>
/* .router-link-exact-active {
    @apply text-mam-500
} */
</style>