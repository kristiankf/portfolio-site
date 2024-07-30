<template>
    <div class="flex gap-20 maximum-width">
        <div class="w-[300px] shrink-0">
            <div class="">
                <UiSexyTitle>
                    career path
                </UiSexyTitle>

                <h2 class="title-style mt-4">Work Experience</h2>
            </div>

            <div class="mt-10">
                <ul class="space-y-2 title-text">
                    <template v-for="career in careers" :key="career.slug">
                        <li class="py-3 px-5 flex justify-between items-center rounded-md hover:alt-bg cursor-pointer"
                            @click="selected = career.slug"
                            :class="{ 'text-primary alt-bg': selected === career.slug }">
                            <span class="">{{ career.name }}</span>
                            <Icon name="heroicons:chevron-right" v-if="selected === career.slug" />
                        </li>
                    </template>
                </ul>
            </div>
        </div>

        <div class="w-full">
            <div class="text-sm">
                <p class="text-xl mb-2 title-text font-light">Front-end Developer | <a :href="selectedCareer?.link"
                        target="_blank"
                        :class="[selectedCareer.link ? 'underline' : 'cursor-default pointer-events-none']">{{
                            selectedCareer.fullName }}</a></p>
                <p class="">{{ selectedCareer.location }}</p>
                <p class="my-5 font-medium">{{ selectedCareer.duration }} · {{ selectedCareer.jobType }}</p>
                <div class="flex gap-2 text-xs">
                    <template v-for="tech in selectedCareer.techStach" :key="tech">
                        <span class="border theme-border px-2 py-0.5 rounded-[4px]">{{ tech }}</span>
                    </template>
                </div>
            </div>
            <hr class="my-8">
            <ul class="space-y-3">
                <template v-for="role in selectedCareer.roles" :key="role">
                    <li>- {{ role }}</li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script setup>
const selected = ref('datrix')

const selectedCareer = computed(() => {
    return careers.find(career => career.slug === selected.value)
})


const careers = [
    {
        name: "Datrix Tech Solutions",
        slug: 'datrix',
        fullName: 'Datrix Tech Solutions',
        link: 'https://datrixtechsolutions.com',
        location: 'ARS, Ogbojo - Ghana',
        duration: 'September 2023',
        jobType: 'Full-time',
        techStach: ['React', 'Next', 'Vue.js', 'tailwindCSS', 'Nuxt'],
        roles: [
            'Creating interactive interfaces, responsive and resolution compatible web applications',
            'Collaborate with back-end developers to optimize performance, and ensure cross-browser compatibility',
            'Delivering web apps with intuitive designs and efficient functionality',
        ]
    },
    {
        name: "Lean Icon Technology",
        slug: 'leanIcon',
        fullName: 'Lean Icon Technology and Training',
        link: 'https://leanicontechnology.com',
        location: 'Kotobabi, Accra - Ghana',
        duration: 'January 2022',
        jobType: 'Full-time',
        techStach: ['Vue.js', 'tailwindCSS', 'Nuxt'],
        roles: [
            'Improving overall website performance for mobile users',
            'Collaborate with back-end developers and web designers to improve usability',
            'Search Engine Optimization to increase and improve website visibility and reach',
        ]
    },
    {
        name: "Freelance",
        slug: 'freelance',
        fullName: 'Freelancing',
        link: '',
        location: 'Remote',
        duration: 'June 2021',
        jobType: 'Whenever available',
        techStach: ['Wordpress', ' HTML', 'CSS', 'Javascript'],
        roles: [
            'Good looking website for Clients',
            'Small projects with Vanilla Html and CSS',
            'Figuring out the coding lifestyle and career decisions',
        ]
    },
]

// onMounted(() => {
//     selectedCareer.value = careers.find(career => career.slug === selected.value)
// })
</script>

<style lang="scss" scoped></style>