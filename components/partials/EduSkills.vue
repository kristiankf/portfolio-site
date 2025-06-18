<template>
    <div class="maximum-width">
        <UiSexyTitle>
            learning path
        </UiSexyTitle>

        <h2 class="title-style mt-4">Education & Skills</h2>

        <div class="mt-10 md:mt-20 flex flex-col sm:flex-row gap-5 lg:gap-20 ">
            <div class="sm:w-[500px]">
                <template v-for="(item, index) in education" :key="item.id">
                    <div class="flex gap-4">
                        <div class="line flex flex-col items-center">
                            <div class="size-[14px] shrink-0 dark:bg-light bg-dark rounded-full"></div>
                            <div v-if="index !== education.length - 1" class="w-[2px] h-full dark:bg-light bg-dark">
                            </div>
                        </div>
                        <div class="edu pb-10">
                            <p class="title-text font-bold">{{ item?.institution }}</p>
                            <p class="text-sm mb-4 mt-1"><span v-if="item?.degree">{{ item?.degree }} - </span>{{
                                item?.program }}</p>
                            <p class="text-sm">{{ formatDate(item?.date_started) }}{{ item?.date_completed ? ` -
                                ${formatDate(item?.date_completed)}` : '' }}</p>
                        </div>
                    </div>
                </template>

            </div>
            <div class="sm:w-[600px]">
                <p class="leading-8">
                    For {{ yearsOfExperience() }}+ years, I have been continuously learning in the field of front-end
                    and experimenting with new
                    technologies and frameworks, and here you can see a summary of my skills.
                </p>

                <!-- skills -->
                <div class="flex flex-wrap gap-2 md:gap-4 mt-5 md:mt-10">
                    <template v-for="item in skills" :key="item?.name">
                        <div class="flex  border theme-border p-3 px-4 rounded-full items-center gap-2">
                            <Icon :name="item.icon_name" class="text-xl" /> <span class="text-sm font-semibold">{{
                                item?.name
                                }}</span>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    skills: {
        type: Array,
        required: true,
    },
    education: {
        type: Array,
        required: true,
    },
})

console.log(props.skills)
console.log(props.education)

// const skills = [
//     { skill: "Tailwind CSS", logo: "logos:tailwindcss-icon" },
//     { skill: "TypeScript", logo: "logos:typescript-icon" },
//     { skill: "Vue JS", logo: "logos:vue" },
//     { skill: "React JS", logo: "logos:react" },
//     { skill: "Angular", logo: "logos:angular-icon" },
//     { skill: "Nuxt", logo: "logos:nuxt-icon" },
//     { skill: "Next JS", logo: "logos:nextjs-icon" },
//     { skill: "GIT", logo: "logos:git-icon" },
//     { skill: "NPM", logo: "logos:npm" },
//     { skill: "Search Engine Optimization", logo: "tabler:seo" },
//     { skill: "HTML", logo: "logos:html-5" },
//     { skill: "CSS", logo: "logos:css-3" },
//     { skill: "JavaScript", logo: "logos:javascript" },
//     { skill: "Python", logo: "logos:python" },
//     { skill: "Django", logo: "logos:django" },
//     { skill: "Django Rest Framework", logo: "devicon-plain:djangorest" },
// ]
</script>

<style lang="scss" scoped></style>