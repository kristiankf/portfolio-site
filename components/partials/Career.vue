<template>
    <div class="flex flex-col md:flex-row gap-5 lg:gap-20 maximum-width">
        <div class="md:w-[300px] shrink-0">
            <div class="">
                <UiSexyTitle>
                    career path
                </UiSexyTitle>

                <h2 class="title-style mt-4">Work Experience</h2>
            </div>

            <div class="mt-10 w-full">
                <div class="overflow-x-scroll w-full pb-4">
                    <ul class="md:space-y-2 title-text flex md:block gap-1 w-full">
                        <template v-for="experience in experience" :key="experience.id">
                            <li class="text-sm md:text-base py-2 md:py-3 px-3 md:px-5 flex shrink-0 justify-between items-center rounded-md hover:alt-bg cursor-pointer"
                                @click="selected = experience.company_name"
                                :class="{ 'text-primary alt-bg': selected === experience.company_name }">
                                <span class="">{{ experience.company_name }}</span>
                                <Icon name="heroicons:chevron-right" v-if="selected === experience.company_name"
                                    class="hidden md:block" />
                            </li>
                        </template>
                    </ul>
                </div>

            </div>
        </div>

        <div class="w-full">
            <div class="text-sm">
                <p class="text-xl mb-2 title-text font-light">{{ selectedCareer?.role }} | <a
                        :href="selectedCareer?.link" target="_blank"
                        :class="[selectedCareer?.link ? 'underline' : 'cursor-default pointer-events-none']">{{
                            selectedCareer?.company_name }}</a></p>
                <p class="">{{ selectedCareer.location }}</p>
                <p class="my-5 font-medium">{{ formatDate(selectedCareer?.start_date) }} · Full-time</p>
                <div class="flex gap-2 text-xs flex-wrap">
                    <template v-for="tech in selectedCareer?.skills" :key="tech.id">
                        <span class="border theme-border px-2 py-0.5 rounded-[4px]">
                            <Icon :name="tech.icon_name" class="text-sm relative top-0.5 mr-1" /> <span
                                class="text-sm">{{
                                    tech.name }}</span>
                        </span>
                    </template>
                </div>
            </div>
            <hr class="mb-8 mt-4">
            <ul class="space-y-3">
                <template v-for="role in selectedCareer?.descriptions" :key="role.id">
                    <li>- {{ role?.content }}</li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    experience: {
        type: Array,
        required: true,
    },
})

// console.log(props.experience)

const selected = ref(props.experience[0].company_name)

const selectedCareer = computed(() => {
    return props.experience.find(experience => experience.company_name === selected.value)
})


// const careers = [
//     {
//         name: "Datrix Tech Solutions",
//         slug: 'datrix',
//         fullName: 'Datrix Tech Solutions',
//         link: 'https://datrixtechsolutions.com',
//         location: 'ARS, Ogbojo - Ghana',
//         duration: 'September 2023',
//         jobType: 'Full-time',
//         techStach: ['React', 'Next', 'Vue.js', 'tailwindCSS', 'Nuxt'],
//         roles: [
//             'Creating interactive interfaces, responsive and resolution compatible web applications',
//             'Collaborate with back-end developers to optimize performance, and ensure cross-browser compatibility',
//             'Delivering web apps with intuitive designs and efficient functionality',
//         ]
//     },
//     {
//         name: "Lean Icon Technology",
//         slug: 'leanIcon',
//         fullName: 'Lean Icon Technology and Training',
//         link: 'https://leanicontechnology.com',
//         location: 'Kotobabi, Accra - Ghana',
//         duration: 'January 2022',
//         jobType: 'Full-time',
//         techStach: ['Vue.js', 'tailwindCSS', 'Nuxt'],
//         roles: [
//             'Improving overall website performance for mobile users',
//             'Collaborate with back-end developers and web designers to improve usability',
//             'Search Engine Optimization to increase and improve website visibility and reach',
//         ]
//     },
//     {
//         name: "Freelance",
//         slug: 'freelance',
//         fullName: 'Freelancing',
//         link: '',
//         location: 'Remote',
//         duration: 'June 2021',
//         jobType: 'Whenever available',
//         techStach: ['Wordpress', ' HTML', 'CSS', 'Javascript'],
//         roles: [
//             'Good looking website for Clients',
//             'Small projects with Vanilla Html and CSS',
//             'Figuring out the coding lifestyle and career decisions',
//         ]
//     },
// ]

// onMounted(() => {
//     selectedCareer.value = careers.find(career => career.slug === selected.value)
// })
</script>

<style lang="scss" scoped></style>