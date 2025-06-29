<template>
    <div class="">
        <section class="maximum-width  py-20 md:py-36" id="about-me">
            <PartialsAboutMe />
        </section>

        <section class="py-20 md:py-36 alt-bg" id="edu-skills">
            <PartialsEduSkillsSkeleton
                v-if="skillsRes.status.value === 'pending' || educationRes.status.value === 'pending' || skillsRes.status.value === 'idle' || educationRes.status.value === 'idle'" />
            <div v-else-if="skillsRes.error.value || educationRes.error.value" class="maximum-width text-center">
                <div class="w-32 h-32 mx-auto mb-6 rounded-full alt-bg flex items-center justify-center">
                    <Icon name="hugeicons:alert-01" class="text-6xl text-primary" />
                </div>
                <h3 class="title-style text-2xl mb-4">Something went wrong</h3>
                <p class="app-text">Failed to load education and skills data. Please try again later.</p>
            </div>
            <PartialsEduSkills v-else :skills="skillsRes.data.value" :education="educationRes.data.value" />
        </section>

        <section class="py-20 md:py-36" id="career">
            <PartialsCareerSkeleton
                v-if="experienceRes.status.value === 'pending' || experienceRes.status.value === 'idle'" />
            <div v-else-if="experienceRes.error.value" class="maximum-width text-center">
                <div class="w-32 h-32 mx-auto mb-6 rounded-full alt-bg flex items-center justify-center">
                    <Icon name="hugeicons:alert-01" class="text-6xl text-primary" />
                </div>
                <h3 class="title-style text-2xl mb-4">Something went wrong</h3>
                <p class="app-text">Failed to load career data. Please try again later.</p>
            </div>
            <PartialsCareer v-else :experience="experienceRes.data.value" />
        </section>

        <section class="py-20 md:py-36 alt-bg" id="portfolio">
            <PartialsPortfolioSkeleton
                v-if="projectsRes.status.value === 'pending' || projectsRes.status.value === 'idle'" />
            <div v-else-if="projectsRes.error.value" class="maximum-width text-center">
                <div class="w-32 h-32 mx-auto mb-6 rounded-full alt-bg flex items-center justify-center">
                    <Icon name="hugeicons:alert-01" class="text-6xl text-primary" />
                </div>
                <h3 class="title-style text-2xl mb-4">Something went wrong</h3>
                <p class="app-text">Failed to load portfolio data. Please try again later.</p>
            </div>
            <PartialsPortfolio v-else :projects="projectsRes.data.value" />
        </section>

        <section class="py-20 md:py-36" id="contact-me">
            <PartialsContact />
        </section>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const apiBaseUrl = config.public.apiBaseUrl
const [educationRes, skillsRes, experienceRes, projectsRes] = await Promise.all([
    useFetch(`${apiBaseUrl}/education/`, { key: 'education', lazy: true, server: false }),
    useFetch(`${apiBaseUrl}/skills/`, { key: 'skills', lazy: true, server: false }),
    useFetch(`${apiBaseUrl}/experience/`, { key: 'experience', lazy: true, server: false }),
    useFetch(`${apiBaseUrl}/projects/`, { key: 'projects', lazy: true, server: false }),
])

// Check if any individual fetch failed
if (
    educationRes.error.value ||
    skillsRes.error.value ||
    experienceRes.error.value ||
    projectsRes.error.value
) {
    throw createError({
        statusCode: 500,
        statusMessage: 'Failed to load portfolio data. Please try again later.'
    })
}

// console.log(educationRes.data.value)
// console.log(skillsRes.data.value)
// console.log(experienceRes.data.value)
// console.log(projectsRes.data.value)
</script>