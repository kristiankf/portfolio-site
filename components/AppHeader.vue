<template>
    <nav class="sticky top-0 z-50 dark:bg-dark bg-light shadow-sm transition-colors duration-500">
        <div class="maximum-width title-text flex justify-between items-center py-4">
            <!-- logo -->
            <NuxtLink href="/" class="">
                <img src="/images/logo-white.png" alt="" class="max-w-[80px]" v-if="themeStore.theme === 'dark'" />
                <img src="/images/logo-black.png" alt="" class="max-w-[80px]" v-else />
            </NuxtLink>

            <!-- links -->
            <div class="flex justify-between items-center gap-5 ">
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
                <a href="/cv/AMOAKOHENE-CHRISTIAN-CV.pdf" target="_blank">
                    <button class="rounded-md px-5  py-2 border theme-border" type="button">Resume
                    </button>
                </a>
            </div>
        </div>
    </nav>
</template>

<script setup>
const themeStore = useThemeStore()
const hash = ref('')
const route = useRoute()

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

<style scoped></style>