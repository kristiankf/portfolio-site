<template>
  <div :class="{ dark: themeStore.theme === 'dark' }" class="">
    <div class="dark:bg-dark bg-light app-text font-inter transition-colors duration-500">
      <AppHeader :key="$route.fullPath" />
      <NuxtPage />
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
const themeStore = useThemeStore()

onMounted(() => {
  themeStore.switchTheme(themeStore.selectedTheme)
})
</script>