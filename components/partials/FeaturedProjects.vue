<template>
    <div class="featured-projects">
        <div class="featured-projects-stack">
            <div v-for="(project, index) in projects" :key="project.id" class="featured-project-item alt-bg"
                :style="{ '--stack-offset': `${index * 15}px`, '--mobile-stack-offset': `${index * 8}px`, zIndex: index + 1 }" v-reveal>
                <article class="featured-project-card">
                    <div class="featured-project-visual">
                        <img :src="project.image" :alt="project.alt" loading="lazy" />
                        <span class="featured-project-label">{{ project.label }}</span>
                        <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer"
                            class="featured-project-link">
                            {{ project.linkLabel || 'View project' }}
                            <Icon name="hugeicons:arrow-up-right-01" />
                        </a>
                        <span v-else class="featured-project-internal">Internal product</span>
                    </div>

                    <div class="featured-project-copy">
                        <div class="featured-project-tags">
                            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
                        </div>
                        <h3 class="mt-6 font-jakarta text-2xl sm:text-3xl font-semibold title-text">{{ project.title }}
                        </h3>
                        <p class="mt-4 leading-7 app-text">{{ project.summary }}</p>
                        <div class="featured-project-outcome">
                            <span class="featured-project-check">
                                <Icon name="hugeicons:checkmark-circle-02" />
                            </span>
                            <p class="leading-6 title-text">{{ project.result }}</p>
                        </div>
                        <div v-if="project.metric" class="featured-project-metric">
                            <strong>{{ project.metric }}</strong>
                            <span>{{ project.metricLabel }}</span>
                        </div>
                    </div>
                </article>

                <aside class="featured-project-value" :aria-label="`Value delivered for ${project.title}`">
                    <div class="featured-project-value-icon">
                        <Icon name="hugeicons:workflow-square-10" />
                    </div>
                    <div>
                        <p class="featured-project-value-label">THE VALUE</p>
                        <p class="mt-2 font-jakarta text-base sm:text-lg font-medium leading-7 title-text">{{
                            project.value }}</p>
                        <p class="mt-2 text-xs app-text">{{ project.title }} · outcome summary</p>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    projects: {
        type: Array,
        required: true,
        validator: (projects) => projects.every((project) => project.id && project.title && project.image && project.value),
    },
})
</script>
