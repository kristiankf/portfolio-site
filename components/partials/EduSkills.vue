<template>
    <div class="maximum-width">
        <div class="toolkit-intro" v-reveal>
            <UiSexyTitle>THE TOOLKIT</UiSexyTitle>
            <h2 class="title-style mt-4 text-3xl sm:text-4xl">A practical stack for building and running software.</h2>
            <p class="mt-4 max-w-2xl leading-7 app-text">I choose tools to fit the workflow and the people using the product—from the first idea through launch and ongoing operations.</p>
        </div>

        <div class="toolkit-layout mt-10 md:mt-14">
            <aside class="toolkit-education" v-reveal>
                <div class="toolkit-section-heading">
                    <span class="toolkit-heading-icon"><Icon name="hugeicons:book-open-01" /></span>
                    <div>
                        <p class="eyebrow">FOUNDATION</p>
                        <h3 class="mt-1 font-jakarta text-xl font-semibold title-text">Education & credentials</h3>
                    </div>
                </div>

                <div class="toolkit-education-list">
                    <article v-for="(item, index) in education" :key="item.id" class="toolkit-education-item">
                        <span class="toolkit-timeline-dot" :class="{ 'toolkit-timeline-dot-last': index === education.length - 1 }"></span>
                        <div>
                            <p class="font-semibold title-text">{{ item?.institution }}</p>
                            <p class="mt-1 text-sm leading-6 app-text">
                                <span v-if="item?.degree">{{ item.degree }} · </span>{{ item?.program }}
                            </p>
                            <p class="mt-2 text-xs app-text">{{ formatDate(item?.date_started) }}{{ item?.date_completed ? ` – ${formatDate(item.date_completed)}` : '' }}</p>
                        </div>
                    </article>
                </div>
            </aside>

            <div class="toolkit-groups">
                <article
                    v-for="(group, index) in groups"
                    :key="group.id"
                    class="toolkit-group-card"
                    v-reveal
                    :style="{ '--reveal-delay': `${index * 70}ms` }"
                >
                    <header class="toolkit-group-heading">
                        <span class="toolkit-heading-icon"><Icon :name="group.icon" /></span>
                        <div>
                            <h3 class="font-jakarta text-lg font-semibold title-text">{{ group.title }}</h3>
                            <p class="mt-1 text-xs leading-5 app-text">{{ group.description }}</p>
                        </div>
                        <span class="toolkit-count">{{ group.skills.length }}</span>
                    </header>

                    <div class="toolkit-skill-grid">
                        <div v-for="item in group.skills" :key="item.id" class="toolkit-skill-tile">
                            <span class="toolkit-skill-icon"><Icon :name="item.icon_name" /></span>
                            <span>{{ item.name }}</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    groups: {
        type: Array,
        required: true,
    },
    education: {
        type: Array,
        required: true,
    },
})
</script>
