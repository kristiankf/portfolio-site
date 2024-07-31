<template>
    <div class="maximum-width">
        <UiSexyTitle>
            learning path
        </UiSexyTitle>

        <h2 class="title-style mt-4">Education & Skills</h2>

        <div class="mt-10 md:mt-20 flex flex-col sm:flex-row gap-5 lg:gap-20 ">
            <div class="sm:w-[500px]">
                <div class="flex gap-4">
                    <div class="line flex flex-col items-center justify-center">
                        <div class="size-[14px] shrink-0 dark:bg-light bg-dark rounded-full"></div>
                        <div class="w-[2px] h-full dark:bg-light bg-dark"></div>
                    </div>
                    <div class="edu pb-10">
                        <p class="title-text font-bold">University of Ghana</p>
                        <p class="text-sm mb-4 mt-1">Bachelor's degree - Computer Science</p>
                        <p class="text-sm">2016 - 2020</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="line flex flex-col items-center justify-center">
                        <div class="size-[14px] shrink-0 dark:bg-light bg-dark rounded-full"></div>
                        <div class="w-[2px] h-full dark:bg-light bg-dark"></div>
                    </div>
                    <div class="edu pb-10">
                        <p class="title-text font-bold">Certificate</p>
                        <p class="text-sm mb-4 mt-1">Certified SAFe® 6 DevOps Practitioner</p>
                        <p class="text-sm">March 2023</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="line flex flex-col items-center ">
                        <div class="size-[14px] shrink-0 dark:bg-light bg-dark rounded-full"></div>
                        <!-- <div class="w-[2px] h-full dark:bg-light bg-dark"></div>
                        <div class="size-[14px] shrink-0 dark:bg-light bg-dark rounded-full"></div> -->
                    </div>
                    <div class="edu pb-10">
                        <p class="title-text font-bold">Certificate</p>
                        <p class="text-sm mb-4 mt-1">Professional Scrum Master I</p>
                        <p class="text-sm">May 2024</p>
                    </div>
                </div>
            </div>
            <div class="sm:w-[600px]">
                <p class="leading-8">
                    For {{ yearsOfExperience() }}+ years, I have been continuously learning in the field of front-end
                    and experimenting with new
                    technologies and frameworks, and here you can see a summary of my skills.
                </p>

                <!-- skills -->
                <div class="flex flex-wrap gap-2 md:gap-4 mt-5 md:mt-10">
                    <template v-for="item in skills" :key="item.skill">
                        <div class="flex  border theme-border p-3 px-4 rounded-full items-center gap-2">
                            <Icon :name="item.logo" class="text-xl" /> <span class="text-sm font-semibold">{{ item.skill
                                }}</span>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const skills = [
    { skill: "Tailwind CSS", logo: "logos:tailwindcss-icon" },
    { skill: "TypeScript", logo: "logos:typescript-icon" },
    { skill: "Vue JS", logo: "logos:vue" },
    { skill: "React JS", logo: "logos:react" },
    { skill: "Angular", logo: "logos:angular-icon" },
    { skill: "Nuxt", logo: "logos:nuxt-icon" },
    { skill: "Next JS", logo: "logos:nextjs-icon" },
    { skill: "GIT", logo: "logos:git-icon" },
    { skill: "NPM", logo: "logos:npm" },
    { skill: "Search Engine Optimization", logo: "tabler:seo" },
    { skill: "HTML", logo: "logos:html-5" },
    { skill: "CSS", logo: "logos:css-3" },
    { skill: "JavaScript", logo: "logos:javascript" },
]
</script>

<style lang="scss" scoped></style>