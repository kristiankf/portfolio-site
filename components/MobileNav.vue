<template>
    <div
        class="fixed top-0 bottom-0 left-0 right-0 h-full w-full title-text bg-light dark:bg-black contain-width px-0 flex flex-col justify-between">
        <div class="p-4 ">
            <!-- logo -->
            <div class="logo w-fit mx-auto py-5">
                <NuxtLink to="/" aria-label="KrisOps home" class="brand-wordmark" @click="$emit('close')">
                    <span>Kris</span><span class="brand-wordmark-accent">Ops</span>
                </NuxtLink>
            </div>

            <hr class="max-w-[400px] mx-auto mt-5">

            <!-- links -->
            <div class="links max-w-[400px] mx-auto">
                <ul class=" ">
                    <template v-for="link in links" :key="link.name">
                        <NuxtLink :to="link.to" @click="$emit('close')" :class="{ '!text-primary': route.path === link.to }">
                            <li class="font-medium p-4 border-b hover:text-primary"> {{ link.name }}</li>
                        </NuxtLink>
                    </template>
                </ul>
            </div>
        </div>

        <!-- close button -->
        <button type="button" aria-label="Close navigation" class="absolute top-4 right-4 hover:cursor-pointer" @click="$emit('close')">
            <Icon name="heroicons:x-mark" class="text-4xl" />
        </button>
    </div>
</template>

<script setup>
const route = useRoute()

const links = [
    { name: 'Home', to: '/' },
    { name: 'Solutions', to: '/solutions' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
]
</script>

<style scoped></style>
