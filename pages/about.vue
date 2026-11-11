<template>
    <main>
        <section class="section-space alt-bg">
            <div class="maximum-width">
                <PartialsAboutMe />
            </div>
        </section>
        <section class="section-space">
            <div class="maximum-width mb-12" v-reveal>
                <UiSexyTitle>WHERE I'VE BUILT</UiSexyTitle>
                <h2 class="title-style mt-4 text-3xl sm:text-4xl">Experience turning complex work into usable tools.
                </h2>
            </div>
            <PartialsCareer :experience="experience" />
        </section>
        <section class="section-space alt-bg">
            <PartialsEduSkills :groups="skillGroups" :education="education" />
        </section>
        <PartialsWorkflowCta />
    </main>
</template>

<script setup>
import { education, experience, skillGroups } from '~/data/portfolio'

useSeoMeta({
    title: 'About | KrisOps · Christian Amoakohene',
    description: 'Meet Christian Amoakohene, a Ghana-based software engineer who builds AI-assisted products around the way businesses work.',
})
</script>
