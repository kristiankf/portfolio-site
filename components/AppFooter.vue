<template>
    <div class="bg-black text-light">
        <div class="maximum-width flex items-center justify-center py-20 ">
            <div class="">
                <p class="flex gap-4 items-center">
                    <a href="https://github.com/kristiankf" target="_blank" rel="noopener noreferrer">
                        <Icon name="hugeicons:github" class="text-2xl hover:text-primary transition-colors" />
                    </a>
                    <a href="https://x.com/Krs_wale" target="_blank" rel="noopener noreferrer">
                        <Icon name="hugeicons:new-twitter" class="text-2xl hover:text-primary transition-colors" />
                    </a>
                    <a href="https://linkedin.com/in/christianamoakohene" target="_blank" rel="noopener noreferrer">
                        <Icon name="hugeicons:linkedin-02" class="text-2xl hover:text-primary transition-colors" />
                    </a>
                    <!-- <Icon name="" /> -->
                </p>
                <p class="text-sm mt-5">
                    © {{ date.getFullYear() }} - kris<span class="text-primary">wale</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const date = new Date()
</script>

<style lang="scss" scoped></style>