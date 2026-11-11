<template>
    <main>
        <section class="page-hero alt-bg">
            <div class="maximum-width" v-reveal>
                <UiSexyTitle>SOFTWARE SOLUTIONS FOR GROWING BUSINESSES</UiSexyTitle>
                <h1 class="page-title">Your apps are scattered. Your workflow shouldn’t be.</h1>
                <p class="page-lede">I partner with small and medium-sized businesses to analyze their operations, reduce manual work, and build products around the way the team actually works—with AI applied where it makes a real difference.</p>
            </div>
        </section>

        <section id="services" class="section-space">
            <PartialsSolutions />
        </section>

        <section id="work" class="section-space featured-projects-section alt-bg">
            <div class="maximum-width mb-12" v-reveal>
                <UiSexyTitle>FEATURED PROJECTS</UiSexyTitle>
                <h2 class="title-style mt-4 text-3xl sm:text-4xl">Clearer workflows, built into the product.</h2>
                <p class="mt-4 max-w-2xl leading-7 app-text">A few examples of software shaped around the people who use it and the work they need to get done.</p>
            </div>
            <div class="maximum-width"><PartialsFeaturedProjects :projects="featuredProjects" /></div>
        </section>

        <section id="projects" class="section-space alt-bg">
            <PartialsPortfolio :projects="projects" title="More products and platforms I’ve helped build." />
        </section>

        <section class="section-space client-marquee-section">
            <PartialsClientLogoMarquee />
        </section>

        <section class="section-space">
            <div class="maximum-width home-cta" v-reveal>
                <div>
                    <UiSexyTitle>START WITH YOUR WORKFLOW</UiSexyTitle>
                    <h2 class="title-style mt-4 text-3xl sm:text-4xl">Let’s see what we can make easier.</h2>
                    <p class="mt-4 max-w-2xl leading-7 app-text">We’ll map the process, understand what your team needs, and decide together what to build.</p>
                </div>
                <NuxtLink to="/contact" class="button-primary shrink-0">Let’s talk <Icon name="hugeicons:arrow-up-right-01" /></NuxtLink>
            </div>
        </section>
    </main>
</template>

<script setup>
import { featuredProjects, projects } from '~/data/portfolio'

useSeoMeta({
    title: 'Solutions | KrisOps',
    description: 'Workflow-first bespoke software for small and medium-sized businesses. See case studies in operations, e-commerce, and AI-assisted software.',
})
</script>
