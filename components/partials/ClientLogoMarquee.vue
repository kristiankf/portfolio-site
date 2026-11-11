<template>
    <div class="maximum-width client-marquee-content">
        <div class="client-marquee-heading" v-reveal>
            <div>
                <UiSexyTitle>CLIENTS & TEAMS</UiSexyTitle>
                <h2 class="title-style mt-4 text-2xl sm:text-3xl">Good work is built together.</h2>
            </div>
            <p class="max-w-sm leading-7 app-text">A few of the teams and businesses I've had the pleasure of working
                with.</p>
        </div>

        <div class="client-marquee-window" role="region" aria-label="Clients and teams">
            <div class="client-marquee-track">
                <ul class="client-marquee-list" aria-label="Client logos">
                    <li v-for="client in clients" :key="client.name" class="client-logo-tile">
                        <img :src="client.logo" :alt="client.name" loading="lazy" />
                    </li>
                </ul>
                <ul class="client-marquee-list" aria-hidden="true">
                    <li v-for="client in clients" :key="`repeat-${client.name}`" class="client-logo-tile">
                        <img :src="client.logo" alt="" loading="lazy" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const clients = [
    { name: 'Nnuro', logo: '/images/clients/nnuro.webp' },
    { name: 'The Very Demure Shopping with Frimpomaa', logo: '/images/clients/very-demure-shopping.png' },
    { name: 'Datrix Tech Solutions', logo: '/images/clients/datrix.png' },
    { name: 'Lean Icon Technology', logo: '/images/clients/lean-icon.png' },
    { name: 'AyaData', logo: '/images/clients/ayadata.webp' },
]
</script>
