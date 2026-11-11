<template>
    <div class="about-profile-grid items-center">
        <div class="about-photo-wrap" v-reveal>
            <div class="about-photo-orbit"></div>
            <div class="about-photo-frame">
                <img src="/images/christian-min.png" alt="Christian Amoakohene" />
            </div>
            <div class="about-photo-label"><span class="status-dot"></span> Christian Amoakohene · Ghana</div>
        </div>

        <div class="max-w-2xl" v-reveal style="--reveal-delay: 120ms">
            <UiSexyTitle>SOFTWARE ENGINEER · BUILDER · PARTNER</UiSexyTitle>
            <h1 class="mt-6 font-jakarta text-4xl sm:text-5xl font-semibold leading-[1.08] tracking-tight title-text">
                I build software around the way people really work.
            </h1>
            <p class="mt-7 text-base leading-8 app-text">
                I'm Christian Amoakohene, a full-stack software engineer based in Ghana. I work with small and
                medium-sized businesses to understand their operations, connect scattered tools, and shape custom
                software with the people who use it.
            </p>
            <p class="mt-4 leading-7 app-text">
                I use AI to move faster through exploration, prototyping, and development, then carefully shape and
                validate the product so it feels clear, familiar, and easy to use from day one. The technology should
                feel like it has always belonged in your business.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
                <NuxtLink to="/contact" class="button-primary">Let's talk about your workflow
                    <Icon name="hugeicons:arrow-up-right-01" />
                </NuxtLink>
            </div>
            <div class="mt-8 flex gap-4" aria-label="Social profiles">
                <a class="social-link" href="https://github.com/kristiankf" target="_blank" rel="noopener noreferrer"
                    aria-label="GitHub">
                    <Icon name="hugeicons:github" />
                </a>
                <a class="social-link" href="https://x.com/Krs_wale" target="_blank" rel="noopener noreferrer"
                    aria-label="X">
                    <Icon name="hugeicons:new-twitter" />
                </a>
                <a class="social-link" href="https://linkedin.com/in/christianamoakohene" target="_blank"
                    rel="noopener noreferrer" aria-label="LinkedIn">
                    <Icon name="hugeicons:linkedin-02" />
                </a>
            </div>
        </div>
    </div>
</template>
