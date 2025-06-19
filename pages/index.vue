<template>
    <div class="">
        <section class="maximum-width  py-20 md:py-36" id="about-me">
            <PartialsAboutMe />
        </section>

        <section class="py-20 md:py-36 alt-bg" id="edu-skills">
            <PartialsEduSkillsSkeleton
                v-if="skillsRes.status.value === 'pending' || educationRes.status.value === 'pending' || skillsRes.status.value === 'idle' || educationRes.status.value === 'idle'" />
            <PartialsEduSkills v-else :skills="skillsRes.data.value" :education="educationRes.data.value" />
        </section>

        <section class="py-20 md:py-36" id="career">
            <PartialsCareerSkeleton
                v-if="experienceRes.status.value === 'pending' || experienceRes.status.value === 'idle'" />
            <PartialsCareer v-else :experience="experienceRes.data.value" />
        </section>

        <section class="py-20 md:py-36 alt-bg" id="portfolio">
            <PartialsPortfolioSkeleton
                v-if="projectsRes.status.value === 'pending' || projectsRes.status.value === 'idle'" />
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
    useFetch(`${apiBaseUrl}/education/`, { key: 'education', lazy: true, }),
    useFetch(`${apiBaseUrl}/skills/`, { key: 'skills', lazy: true }),
    useFetch(`${apiBaseUrl}/experience/`, { key: 'experience', lazy: true }),
    useFetch(`${apiBaseUrl}/projects/`, { key: 'projects', lazy: true }),
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