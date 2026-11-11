<template>
    <nav class="sticky top-0 z-50 dark:bg-dark bg-light shadow-sm transition-colors duration-500">
        <div class="maximum-width title-text flex justify-between items-center py-4">
            <!-- logo -->
            <NuxtLink to="/" aria-label="KrisOps home" class="brand-wordmark">
                <span>Kris</span><span class="brand-wordmark-accent">Ops</span>
            </NuxtLink>

            <!-- links -->
            <div class="justify-between items-center gap-5 md:flex hidden text-sm lg:text-base ">
                <template v-for="link in links" :key="link.to">
                    <NuxtLink :to="link.to" :class="{ '!text-primary': route.path === link.to }">
                        {{ link.name }}
                    </NuxtLink>
                </template>
            </div>

            <!-- theme and menu -->
            <div class="flex justify-between items-center gap-5">
                <UiThemeIcon />
                <!-- mobile menu -->
                <div class="md:hidden flex items-center">
                    <button type="button" aria-label="Open navigation" class="mobile-menu-button" @click="showMobileNav = true">
                        <Icon name="heroicons:bars-3" class="text-3xl cursor-pointer" />
                    </button>
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
const route = useRoute()
const showMobileNav = ref(false)

const links = [
    { name: 'Home', to: '/' },
    { name: 'Solutions', to: '/solutions' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
]
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
