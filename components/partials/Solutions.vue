<template>
    <div class="maximum-width">
        <div class="solutions-heading" v-reveal>
            <div>
                <UiSexyTitle>HOW I CAN HELP</UiSexyTitle>
                <h2 class="title-style mt-4 max-w-2xl text-3xl sm:text-4xl">Make the work easier. Keep the human part.</h2>
            </div>
            <p class="max-w-md leading-7 app-text">
                Small and medium-sized businesses often juggle disconnected apps, duplicated data, and manual steps. I analyze how the work actually flows, then build alongside your team so the solution fits your operations and feels natural to use.
            </p>
        </div>

        <div class="mt-12 grid gap-4 md:grid-cols-3">
            <article v-for="(item, index) in offers" :key="item.title" class="solution-card" v-reveal :style="{ '--reveal-delay': `${index * 100}ms` }">
                <div class="solution-icon"><Icon :name="item.icon" class="text-2xl" /></div>
                <p class="eyebrow mt-8">0{{ index + 1 }} / {{ item.label }}</p>
                <h3 class="mt-3 font-jakarta text-xl font-semibold title-text">{{ item.title }}</h3>
                <p class="mt-3 leading-7 app-text">{{ item.description }}</p>
            </article>
        </div>

        <div class="process-panel mt-6" v-reveal>
            <div class="process-intro">
                <p class="eyebrow">A CLEAR PATH FROM IDEA TO IMPACT</p>
                <h3 class="mt-3 font-jakarta text-2xl font-semibold title-text">Thoughtful at every step.</h3>
            </div>
            <div class="process-steps">
                <div v-for="(step, index) in steps" :key="step.title" class="process-step" :style="{ '--step-delay': `${index * 180}ms` }">
                    <span class="process-number">0{{ index + 1 }}</span>
                    <span><strong class="title-text block">{{ step.title }}</strong><small class="app-text">{{ step.description }}</small></span>
                    <span v-if="index < steps.length - 1" class="step-connector" aria-hidden="true"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const offers = [
    {
        label: 'CUSTOM TOOLS',
        icon: 'hugeicons:dashboard-square-01',
        title: 'Bespoke operations software',
        description: 'Bring the tasks, information, and people spread across spreadsheets and apps into a system shaped around your process.',
    },
    {
        label: 'AI FOR YOUR WORKFLOW',
        icon: 'hugeicons:workflow-square-10',
        title: 'AI that helps your team move faster',
        description: 'Apply AI to repetitive, information-heavy work where it can save time, surface useful context, and fit naturally into the process.',
    },
    {
        label: 'DIGITAL PRODUCTS',
        icon: 'hugeicons:code',
        title: 'Tools that feel familiar from day one',
        description: 'Give your team clear, relatable software that makes projects, customers, and day-to-day work easier to manage.',
    },
]

const steps = [
    { title: 'Understand', description: 'Map the current process, people, tools, and pain points.' },
    { title: 'Shape', description: 'Agree together on the right solution and useful outcomes.' },
    { title: 'Build', description: 'Develop with your team and refine against real work.' },
    { title: 'Improve', description: 'Launch, learn from use, and keep making it better.' },
]
</script>
