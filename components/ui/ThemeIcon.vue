<template>
    <div class="cursor-pointer hover:scale-125 active:scale-100 transition-transform flex items-center">
        <Icon name="heroicons:sun" class="text-2xl" v-show="themeStore.theme === 'dark'"
            @click="themeStore.switchTheme('light')" />
        <Icon name="heroicons:moon" class="text-2xl" @click="themeStore.switchTheme('dark')"
            v-show="themeStore.theme === 'light'" />
    </div>
</template>

<script setup>
const themeStore = useThemeStore()
</script>