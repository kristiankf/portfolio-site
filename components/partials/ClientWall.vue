<template>
    <div class="maximum-width">
        <div class="client-wall-heading" v-reveal>
            <div>
                <UiSexyTitle>CLIENTS & TEAMS</UiSexyTitle>
                <h2 class="title-style mt-4 text-2xl sm:text-3xl">Work I’m proud to have helped bring to life.</h2>
            </div>
            <p class="max-w-sm leading-7 app-text">A selection of businesses, teams, and products I’ve worked with.</p>
        </div>

        <div class="client-wall-grid" v-reveal style="--reveal-delay: 100ms">
            <div v-for="(client, index) in clients" :key="client" class="client-wordmark" :style="{ '--brand-delay': `${index * 45}ms` }">
                <span>{{ client }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const clients = [
    'AyaData',
    'Datrix Tech Solutions',
    'Lean Icon Technology',
    'The Very Demure Shopping with Frimpomaa',
    'Black Konnect',
    'Skuldent',
    'HR Phelo',
    'BluePrint Care',
    'Bibiaa',
    'Litt Digital Academy',
    'Gh Compare',
    'Modern Auto Motors',
    'Nnuro',
    'Product Growth Institute',
]
</script>
