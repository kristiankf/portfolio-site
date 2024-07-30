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
                <Nuxt-Link to="#about-me">About Me</Nuxt-Link>
                <Nuxt-Link to="#edu-skills">Education & Skills</Nuxt-Link>
                <Nuxt-Link to="#career">Career</Nuxt-Link>
                <Nuxt-Link to="#portfolio">Portfolio</Nuxt-Link>
                <Nuxt-Link to="#contact-me">Contact Me</Nuxt-Link>
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
.router-link-exact-active {
    @apply text-primary
}
</style>