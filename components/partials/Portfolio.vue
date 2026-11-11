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
        <div class="mx-auto">
            <Carousel ref="carouselRef" v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" snapAlign="start"
                :transition="500" v-model="currentSlide">
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
        default: 'A few things I’ve helped bring to life.',
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

const settings = {
    itemsToShow: 2,
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

const next = () => carouselRef.value?.next()
const prev = () => carouselRef.value?.prev()

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
        padding-inline: 5px;
    }
}
</style>
