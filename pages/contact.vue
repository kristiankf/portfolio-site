<template>
    <main>
        <section class="page-hero alt-bg">
            <div class="maximum-width" v-reveal>
                <UiSexyTitle>LET'S MAKE WORK FLOW</UiSexyTitle>
                <h1 class="page-title">Where does your process get stuck?</h1>
                <p class="page-lede">Are your operations split across multiple apps, or still slowed down by manual
                    work? Tell me how your team works today and what you want to make easier.</p>
            </div>
        </section>
        <section class="section-space">
            <PartialsContact />
        </section>
    </main>
</template>

<script setup>
usePageSeo({
    title: 'Discuss Your Business Workflow | KrisOps',
    description: 'Talk with Christian Amoakohene about scattered apps, manual tasks, or a business process you want bespoke software to make easier.',
    path: '/contact',
})
</script>
