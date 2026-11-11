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

const { canonicalUrl, imageUrl } = usePageSeo({
    title: 'Christian Amoakohene | Full-Stack Software Engineer',
    description: 'Meet Christian Amoakohene, a Ghana-based full-stack software engineer who builds practical workflow software, e-commerce platforms, learning products, and operations tools.',
    path: '/about',
    type: 'profile',
})

useHead({
    script: [{
        key: 'person-structured-data',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Christian Amoakohene',
            url: canonicalUrl,
            image: imageUrl,
            jobTitle: 'Full-Stack Software Engineer',
            description: 'Ghana-based software engineer building bespoke workflow software and practical digital products for businesses.',
            address: { '@type': 'PostalAddress', addressCountry: 'GH' },
            sameAs: [
                'https://github.com/kristiankf',
                'https://www.linkedin.com/in/christianamoakohene',
                'https://x.com/Krs_wale',
            ],
            knowsAbout: [
                'Custom software development',
                'Workflow analysis',
                'Business process automation',
                'Artificial intelligence',
                'Full-stack development',
            ],
        }),
    }],
})
</script>
