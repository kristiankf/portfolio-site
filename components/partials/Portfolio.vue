<template>
    <div class="maximum-width">
        <div class="flex justify-between items-end sm:items-center gap-5 mb-10">
            <div class="">
                <UiSexyTitle>{{ props.eyebrow }}</UiSexyTitle>
                <h2 class="title-style mt-4 text-3xl sm:text-4xl">{{ props.title }}</h2>
            </div>

            <!-- controls -->
            <div class="">
                <NuxtLink v-if="props.linkTo" :to="props.linkTo"
                    class="mr-2 block mb-3 self-center text-sm font-semibold text-primary hover:underline">See all work
                    <Icon name="hugeicons:arrow-up-right-01" />
                </NuxtLink>
                <div class="flex gap-2">
                    <button @click="prev" aria-label="Previous projects"
                        class="  dark:bg-[#EAE6FE] bg-[#d7d0fa] hover:scale-110 transition-transform rounded-2xl p-3 flex items-center justify-center">
                        <Icon name="heroicons:chevron-left" class="text-xl text-primary"></Icon>
                    </button>
                    <button @click="next" aria-label="Next projects"
                        class="  dark:bg-[#EAE6FE] bg-[#d7d0fa] hover:scale-110 transition-transform rounded-2xl p-3 flex items-center justify-center">
                        <Icon name="heroicons:chevron-right" class="text-xl text-primary"></Icon>
                    </button>

                </div>
            </div>
        </div>
        <div ref="carouselContainer" class="mx-auto" @mouseenter="isHovering = true" @mouseleave="isHovering = false"
            @focusin="isFocused = true" @focusout="onFocusOut" @touchstart.passive="pauseAutoplay">
            <Carousel ref="carouselRef" v-bind="settings" :breakpoints="breakpoints" :wrap-around="true"
                snapAlign="start" :transition="500" v-model="currentSlide">
                <template #slides>
                    <Slide v-for="portfolio in projects" :key="portfolio?.id" class="">
                        <UiPortfolioCard :content="portfolio" />
                    </Slide>


                </template>

            </Carousel>

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    projects: {
        type: Array,
        required: true,
    },
    eyebrow: {
        type: String,
        default: 'SELECTED WORK',
    },
    title: {
        type: String,
        default: "A few things I've helped bring to life.",
    },
    linkTo: {
        type: String,
        default: undefined,
    },
})

// console.log(props.projects)

const emit = defineEmits(['currentSlide'])

const currentSlide = ref(0)
const carouselRef = ref(null)
const isHovering = ref(false)
const isFocused = ref(false)
const isCarouselVisible = ref(false)
const carouselContainer = ref(null)
let autoplayTimer
let resumeTimer
let visibilityObserver

const settings = {
    itemsToShow: 1,
    snapAlign: 'start',
}
const breakpoints = {
    1024: {
        itemsToShow: 3,
        snapAlign: 'start'
    },
    768: {
        itemsToShow: 3,
        snapAlign: 'start'
    },
    600: {
        itemsToShow: 2,
        snapAlign: 'start'
    },
}

const pauseAutoplay = () => {
    isFocused.value = true
    clearTimeout(resumeTimer)
    resumeTimer = window.setTimeout(() => { isFocused.value = false }, 10000)
}

const onFocusOut = (event) => {
    if (event.currentTarget.contains(event.relatedTarget)) return
    clearTimeout(resumeTimer)
    isFocused.value = false
}

const next = () => {
    pauseAutoplay()
    carouselRef.value?.next()
}
const prev = () => {
    pauseAutoplay()
    carouselRef.value?.prev()
}

onMounted(() => {
    const isMobile = window.matchMedia('(max-width: 599px)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isMobile || prefersReducedMotion) return

    visibilityObserver = new IntersectionObserver(([entry]) => {
        isCarouselVisible.value = entry.isIntersecting
    }, { threshold: 0.2 })
    if (carouselContainer.value) visibilityObserver.observe(carouselContainer.value)

    autoplayTimer = window.setInterval(() => {
        if (isCarouselVisible.value && !isHovering.value && !isFocused.value && document.visibilityState === 'visible') {
            carouselRef.value?.next()
        }
    }, 3000)
})

onBeforeUnmount(() => {
    clearInterval(autoplayTimer)
    clearTimeout(resumeTimer)
    visibilityObserver?.disconnect()
})

watch(currentSlide, () => {
    emit('currentSlide', currentSlide.value)
})

</script>

<style scoped>
.carousel__item {
    text-align: left;
}

.carousel__slide {
    padding-block: 15px;
    padding-inline: 15px;
    text-align: left;
    align-items: stretch;
}

@media screen and (max-width: 600px) {
    .carousel__slide {
        padding-inline: 0;
        padding-block: 8px;
    }
}
</style>
