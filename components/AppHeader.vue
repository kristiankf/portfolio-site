<template>
    <nav class="sticky top-0 z-50 dark:bg-dark bg-light shadow-sm transition-colors duration-500">
        <div class="maximum-width title-text flex justify-between items-center py-4">
            <!-- logo -->
            <NuxtLink href="/" class="">
                <img src="/images/logo-white.png" alt="logo" class="max-w-[80px]"
                    v-show="themeStore.theme === 'dark'" />
                <img src="/images/logo-black.png" alt="logo" class="max-w-[80px]"
                    v-show="themeStore.theme === 'light'" />
            </NuxtLink>

            <!-- links -->
            <div class="justify-between items-center gap-5 md:flex hidden text-sm lg:text-base ">
                <template v-for="link in links" :key="link.idLink">
                    <NuxtLink :href="`#${link.idLink}`" :class="{ '!text-primary': hash === (`#${link.idLink}`) }">
                        {{ link.name }}
                        <!-- {{ route.hash }} -->
                    </NuxtLink>
                </template>
            </div>

            <!-- theme and cv -->
            <div class="flex justify-between items-center gap-5">
                <UiThemeIcon />
                <a href="https://drive.google.com/file/d/1gV4msDEQodcvqLnx_O7dxrwAEWEmJfe_/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer" class="md:block hidden">
                    <button class="rounded-md px-5  py-2 border theme-border active:scale-90 transition-transform"
                        type="button">Resume
                    </button>
                </a>
                <!-- hamburgar -->
                <div class="md:hidden flex items-center">
                    <Icon name="hugeicons:hamburger-01" class="text-4xl cursor-pointer"
                        @click="() => { showMobileNav = true }" />
                </div>
            </div>
        </div>

        <!-- mobile nav -->
        <div class="md:hidden">
            <Transition name="mobile">
                <MobileNav v-if="showMobileNav" @close="showMobileNav = false" />
            </Transition>
        </div>
    </nav>
</template>

<script setup>
const themeStore = useThemeStore()
const hash = ref('')
const route = useRoute()
const showMobileNav = ref(false)

const links = [
    { name: 'About Me', idLink: 'about-me' },
    { name: 'Education & Skills', idLink: 'edu-skills' },
    { name: 'Career', idLink: 'career' },
    { name: 'Portfolio', idLink: 'portfolio' },
    { name: 'Contact Me', idLink: 'contact-me' },
]

watch(() => route.hash, (newRoute) => {
    hash.value = newRoute
})

onMounted(() => {
    hash.value = route.hash
})
</script>

<style scoped>
.mobile-enter-active,
.mobile-leave-active {
    transition: transform 0.3s ease-in-out;
    transform: translateX(0)
}

.mobile-enter-from,
.mobile-leave-to {
    transform: translateX(100%);
}
</style>