<template>
    <footer class="bg-black text-light">
        <div class="maximum-width py-12 md:py-16">
            <div class="footer-main">
                <div>
                    <NuxtLink to="/" class="brand-wordmark footer-wordmark"><span>Kris</span><span class="brand-wordmark-accent">Ops</span></NuxtLink>
                    <p class="mt-3 max-w-xs text-sm leading-6 text-white/55">Bespoke software built around the way you work.</p>
                </div>
                <nav class="footer-nav" aria-label="Footer navigation">
                    <NuxtLink v-for="link in links" :key="link.to" :to="link.to">{{ link.name }}</NuxtLink>
                </nav>
                <div class="flex gap-4">
                    <a href="https://github.com/kristiankf" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="hugeicons:github" class="text-xl hover:text-primary transition-colors" /></a>
                    <a href="https://x.com/Krs_wale" target="_blank" rel="noopener noreferrer" aria-label="X"><Icon name="hugeicons:new-twitter" class="text-xl hover:text-primary transition-colors" /></a>
                    <a href="https://linkedin.com/in/christianamoakohene" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="hugeicons:linkedin-02" class="text-xl hover:text-primary transition-colors" /></a>
                </div>
            </div>
            <div class="mt-10 border-t border-white/10 pt-5 text-xs text-white/45">
                © {{ date.getFullYear() }} KrisOps · Ghana
            </div>
        </div>
    </footer>
</template>

<script setup>
const date = new Date()
const links = [
    { name: 'Solutions', to: '/solutions' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
]
</script>
