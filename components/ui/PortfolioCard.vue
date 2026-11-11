<template>
    <article class="portfolio-card">
        <a v-if="content?.live_link" :href="content.live_link" target="_blank" rel="noopener noreferrer"
            class="portfolio-card-image-link" :aria-label="`Visit ${content.title} (opens in a new tab)`">
            <img :src="content?.image_url" :alt="`${content?.title} project preview`" class="portfolio-card-image">
            <span class="portfolio-card-open">View project
                <Icon name="hugeicons:arrow-up-right-01" />
            </span>
        </a>
        <div v-else class="portfolio-card-image-link">
            <img :src="content?.image_url" :alt="`${content?.title} project preview`" class="portfolio-card-image">
            <span class="portfolio-card-open">Product case study</span>
        </div>

        <div class="portfolio-card-copy">
            <div class="portfolio-card-heading">
                <h3 class="font-jakarta text-lg sm:text-xl font-semibold title-text">{{ content?.title }}</h3>
                <div v-if="content?.metric" class="portfolio-card-metric">
                    <strong>{{ content.metric }}</strong>
                    <span>{{ content.metric_label }}</span>
                </div>
            </div>
            <p v-if="content?.summary" class="mt-3 text-sm leading-6 app-text">{{ content.summary }}</p>
            <p v-if="content?.result" class="portfolio-card-result">
                <Icon name="hugeicons:checkmark-circle-02" /> {{ content.result }}
            </p>
            <div class="flex gap-2 flex-wrap items-center mt-4">
                <span v-for="tech in content?.skills" :key="tech.id" class="portfolio-card-tag">{{ tech.name }}</span>
            </div>
        </div>
    </article>
</template>

<script setup>
const { content } = defineProps({
    content: Object
})
</script>

<style scoped>
.portfolio-card {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 1px solid rgb(126 116 241 / 17%);
    border-radius: 23px;
    background: rgb(255 255 255 / 66%);
    text-align: left;
    transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
}

.dark .portfolio-card {
    background: rgb(255 255 255 / 3%);
}

.portfolio-card:hover {
    transform: translateY(-5px);
    border-color: rgb(126 116 241 / 48%);
    box-shadow: 0 20px 50px rgb(52 47 104 / 12%);
}

.portfolio-card-image-link {
    position: relative;
    display: block;
    overflow: hidden;
    aspect-ratio: 1.58;
    background: #eeecf6;
}

.portfolio-card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .65s cubic-bezier(.2, .7, .2, 1);
}

.portfolio-card:hover .portfolio-card-image {
    transform: scale(1.035);
}

.portfolio-card-open {
    position: absolute;
    right: 14px;
    bottom: 14px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    border: 1px solid rgb(255 255 255 / 54%);
    border-radius: 999px;
    padding: 8px 12px;
    color: #29264a;
    background: rgb(255 255 255 / 88%);
    font-size: 11px;
    font-weight: 700;
    backdrop-filter: blur(10px);
}

.portfolio-card-copy {
    padding: 19px 20px 21px;
}

.portfolio-card-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
}

.portfolio-card-metric {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #655ec5;
    line-height: 1.1;
    text-align: right;
}

.portfolio-card-metric strong {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 20px;
}

.portfolio-card-metric span {
    max-width: 112px;
    margin-top: 4px;
    color: #77748e;
    font-size: 9px;
}

.portfolio-card-result {
    display: flex;
    gap: 7px;
    align-items: flex-start;
    margin-top: 12px;
    color: #34304e;
    font-size: 12px;
    line-height: 1.5;
}

.portfolio-card-result :deep(svg) {
    flex: 0 0 auto;
    margin-top: 2px;
    color: #6b9c82;
}

.portfolio-card-tag {
    border: 1px solid rgb(126 116 241 / 16%);
    border-radius: 999px;
    padding: 5px 9px;
    color: #716d8a;
    font-size: 10px;
    line-height: 1.2;
}

@media (prefers-reduced-motion: reduce) {

    .portfolio-card,
    .portfolio-card-image {
        transition: none;
    }
}
</style>
