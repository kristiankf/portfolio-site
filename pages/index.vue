<template>
    <div class="">
        <section class="maximum-width  py-20 md:py-36" id="about-me">
            <PartialsAboutMe />
        </section>

        <section class="py-20 md:py-36 alt-bg" id="edu-skills">
            <PartialsEduSkills :skills="skillsRes.data.value" :education="educationRes.data.value" />
        </section>

        <section class="py-20 md:py-36" id="career">
            <PartialsCareer :experience="experienceRes.data.value" />
        </section>

        <section class="py-20 md:py-36 alt-bg" id="portfolio">
            <PartialsPortfolio :projects="projectsRes.data.value" />
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
    useFetch(`${apiBaseUrl}/education/`, { key: 'education' }),
    useFetch(`${apiBaseUrl}/skills/`, { key: 'skills' }),
    useFetch(`${apiBaseUrl}/experience/`, { key: 'experience' }),
    useFetch(`${apiBaseUrl}/projects/`, { key: 'projects' }),
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