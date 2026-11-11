<template>
    <main>
        <section class="home-hero">
            <div class="maximum-width home-hero-grid">
                <div class="home-hero-copy" v-reveal>
                    <UiSexyTitle>AI-ASSISTED SOFTWARE · BUILT AROUND YOUR WORK</UiSexyTitle>
                    <h1 class="home-title mt-7">Your business deserves software that <span>just fits.</span></h1>
                    <p class="mt-7 max-w-2xl text-base sm:text-lg leading-8 app-text">
                        Still switching between apps, re-entering data, or handling important work manually? I analyze
                        how your business actually runs, then build bespoke, AI-powered solutions with your team—so the
                        tools work together and the software feels familiar from day one.
                    </p>
                    <p class="mt-4 max-w-2xl text-sm leading-7 app-text">AI helps me move faster. Your people and your
                        process shape what we build.</p>

                    <div class="mt-9 flex flex-wrap items-center gap-3">
                        <NuxtLink to="/solutions" class="button-primary">Explore solutions & work
                            <Icon name="hugeicons:arrow-up-right-01" />
                        </NuxtLink>
                        <NuxtLink to="/contact" class="button-secondary home-hero-secondary">Let's map your workflow
                        </NuxtLink>
                    </div>

                    <div class="home-hero-proof mt-9">
                        <span>
                            <Icon name="hugeicons:workflow-square-10" /> Workflow analysis
                        </span>
                        <i></i>
                        <span>
                            <Icon name="hugeicons:artificial-intelligence-04" /> AI where it helps
                        </span>
                        <i></i>
                        <span>
                            <Icon name="hugeicons:code" /> Built with your team
                        </span>
                    </div>
                    <p class="home-ambition mt-6"><span>THE AMBITION</span> Up to 100× more efficient operations.</p>
                </div>

                <div class="home-hero-art" v-reveal style="--reveal-delay: 130ms">
                    <UiWorkflowCube />
                    <div class="cube-art-caption"><span class="status-dot"></span> One connected way of working</div>
                </div>
            </div>
        </section>

        <section class="client-wall-section">
            <PartialsClientWall />
        </section>

        <section class="section-space featured-projects-section alt-bg">
            <div class="maximum-width home-section-heading" v-reveal>
                <div>
                    <UiSexyTitle>FEATURED PROJECTS</UiSexyTitle>
                    <h2 class="title-style mt-4 text-3xl sm:text-4xl">Software that fits the way people work.</h2>
                    <p class="mt-4 max-w-2xl leading-7 app-text">Scroll through a few products built to make learning,
                        business operations, and team workflows easier.</p>
                </div>
                <NuxtLink to="/solutions#work" class="text-sm font-semibold text-primary hover:underline">See the
                    approach
                    <Icon name="hugeicons:arrow-up-right-01" />
                </NuxtLink>
            </div>

            <div class="maximum-width mt-12">
                <PartialsFeaturedProjects :projects="featuredProjects" />
            </div>
        </section>

        <section class="section-space">
            <PartialsPortfolio :projects="homeProjects" link-to="/solutions#projects" />
        </section>

        <section class="alt-bg">
            <PartialsWorkflowCta />
        </section>
    </main>
</template>

<script setup>
import { featuredProjects, projects } from '~/data/portfolio'

const { canonicalUrl } = usePageSeo({
    title: 'Bespoke Workflow Software for Growing Businesses | KrisOps',
    description: 'KrisOps helps small and medium-sized businesses replace scattered apps and manual processes with bespoke software built around their workflows. Based in Ghana, working worldwide.',
    path: '/',
})

const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, '')
useHead({
    script: [{
        key: 'website-structured-data',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'KrisOps',
            url: canonicalUrl,
            description: 'Bespoke workflow software and solutions for growing businesses.',
            inLanguage: 'en',
            publisher: { '@type': 'Person', name: 'Christian Amoakohene', url: `${siteUrl}/about` },
        }),
    }],
})

const homeProjects = projects.slice(0, 5)
</script>
