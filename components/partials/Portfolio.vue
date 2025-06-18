<template>
    <div class="maximum-width">
        <div class="flex justify-between items-end sm:items-center gap-5 mb-10">
            <div class="">
                <UiSexyTitle>my works</UiSexyTitle>
                <h2 class="title-style mt-4">Featured Portfolios</h2>
            </div>

            <!-- controls -->
            <div class="flex gap-2">
                <button @click="prev"
                    class="  dark:bg-[#EAE6FE] bg-[#d7d0fa] hover:scale-110 transition-transform rounded-2xl p-3 flex items-center justify-center">
                    <Icon name="heroicons:chevron-left" class="text-xl text-primary"></Icon>
                </button>
                <button @click="next"
                    class="  dark:bg-[#EAE6FE] bg-[#d7d0fa] hover:scale-110 transition-transform rounded-2xl p-3 flex items-center justify-center">
                    <Icon name="heroicons:chevron-right" class="text-xl text-primary"></Icon>
                </button>

            </div>
        </div>
        <div class="mx-auto">
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" snapAlign="start"
                :transition="500" :autoplay="3000" :pauseAutoplayOnHover="true" v-model="currentSlide">
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
})

console.log(props.projects)

const portfolioData = [
    { name: 'Nnuro', image: '/images/portfolio/nnuro.png', link: 'https://nnuro.com/', techStack: 'Vue' },
    { name: 'Modern Auto Motors', image: '/images/portfolio/mam.png', link: 'https://mam.co.bw/', techStack: 'Nuxt' },
    { name: 'Bibiaa', image: '/images/portfolio/bibiaa.png', link: 'https://bibiaaonline.com/', techStack: 'Next' },
    { name: 'Litt Digital Academy', image: '/images/portfolio/lda.png', link: 'https://littdigitalacademy.org/', techStack: 'Nuxt' },
    { name: 'GhCompare', image: '/images/portfolio/ghcompare.png', link: 'https://ghcompare.com/', techStack: 'Vue' },
    { name: 'Product Growth Institute', image: '/images/portfolio/pgi.png', link: 'https://www.productgrowthinstitute.org/', techStack: 'Nuxt' },
    { name: 'Skuldent', image: '/images/portfolio/skuldent.png', link: 'https://skuldent.netlify.app/', techStack: 'Nuxt' },
]

const emit = defineEmits(['currentSlide'])

const currentSlide = ref(0)

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

const next = () => {
    currentSlide.value > portfolioData?.length - 1 ? currentSlide.value = 0 : currentSlide.value = currentSlide.value + 1
}
const prev = () => {
    currentSlide.value < 0 ? currentSlide.value = portfolioData?.length - 1 : currentSlide.value = currentSlide.value - 1
}

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