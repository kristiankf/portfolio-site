<template>
    <div
        class="fixed top-0 bottom-0 left-0 right-0 h-full w-full title-text bg-light dark:bg-black contain-width px-0 flex flex-col justify-between">
        <div class="p-4 ">
            <!-- logo -->
            <div class="logo w-fit mx-auto py-5">
                <NuxtLink href="/" class="">
                    <img src="/images/logo-white.png" alt="logo" class="max-w-[80px]"
                        v-show="themeStore.theme === 'dark'" />
                    <img src="/images/logo-black.png" alt="logo" class="max-w-[80px]"
                        v-show="themeStore.theme === 'light'" />
                </NuxtLink>
            </div>

            <hr class="max-w-[400px] mx-auto mt-5">

            <!-- links -->
            <div class="links max-w-[400px] mx-auto">
                <ul class=" ">
                    <template v-for="link in links" :key="link.name">
                        <NuxtLink :href="`#${link.idLink}`" :class="{ '!text-primary': hash === (`#${link.idLink}`) }">
                            <li class="font-medium p-4 border-b hover:text-primary"> {{ link.name }}</li>
                        </NuxtLink>
                    </template>
                </ul>
                <div class="w-fit mx-auto pt-10">
                    <a href="/cv/AMOAKOHENE-CHRISTIAN-CV.pdf" target="_blank" class="">
                        <button class="rounded-md px-5  py-2 border theme-border" type="button">Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>

        <!-- close button -->
        <div class="absolute top-4 right-4 hover:cursor-pointer" @click="$emit('close')">
            <Icon name="heroicons:x-mark" class="text-4xl" />
        </div>
    </div>
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