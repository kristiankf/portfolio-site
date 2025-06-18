<script setup>
const props = defineProps({
    error: Object
})

const themeStore = useThemeStore()

// Handle error based on status code
const handleError = () => {
    clearError({ redirect: '/' })
}

// Get error message based on status code
const getErrorMessage = (statusCode) => {
    switch (statusCode) {
        case 404:
            return "Oops! The page you're looking for doesn't exist."
        case 500:
            return "Something went wrong on our end. Please try again."
        case 403:
            return "Access denied. You don't have permission to view this page."
        default:
            return "An unexpected error occurred. Please try again."
    }
}

// Get error title based on status code
const getErrorTitle = (statusCode) => {
    switch (statusCode) {
        case 404:
            return "Page Not Found"
        case 500:
            return "Server Error"
        case 403:
            return "Access Denied"
        default:
            return "Error"
    }
}
</script>

<template>
    <div class="" :class="{ dark: themeStore.theme === 'dark' }">
        <div class="min-h-screen dark:bg-dark bg-light transition-colors duration-500">
            <!-- Header -->
            <AppHeader />

            <!-- Error Content -->
            <div class="flex items-center justify-center min-h-[calc(100vh-80px)]">
                <div class="maximum-width text-center px-4">
                    <!-- Error Icon -->
                    <div class="mb-8">
                        <div class="w-32 h-32 mx-auto mb-6 rounded-full alt-bg flex items-center justify-center">
                            <Icon name="hugeicons:alert-01" class="text-6xl text-primary" />
                        </div>
                    </div>

                    <!-- Error Code -->
                    <h1 class="title-style text-8xl md:text-9xl font-bold text-primary mb-4">
                        {{ error?.statusCode || '404' }}
                    </h1>

                    <!-- Error Title -->
                    <h2 class="title-style text-2xl md:text-3xl mb-4">
                        {{ getErrorTitle(error?.statusCode) }}
                    </h2>

                    <!-- Error Message -->
                    <p class="app-text text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                        {{ error?.statusMessage || 'An unexpected error occurred. Please try again.' }}
                    </p>

                    <!-- Action Buttons -->
                    <!-- <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button @click="handleError"
                        class="rounded-md px-8 py-3 bg-primary text-white font-medium hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl">
                        Go Back Home
                    </button>

                    <button @click="() => window.history.back()"
                        class="rounded-md px-8 py-3 border theme-border title-text font-medium hover:bg-alt-bg active:scale-95 transition-all duration-200">
                        Go Back
                    </button>
                </div> -->

                    <!-- Additional Help -->
                    <div class="mt-12 pt-8 border-t theme-border">
                        <p class="app-text text-sm">
                            If you continue to experience issues, please
                            <a href="mailto:camoakohene84@gmail.com"
                                class="text-primary hover:underline transition-colors duration-200">
                                contact me
                            </a>
                            for assistance.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <AppFooter />
        </div>
    </div>

</template>

<style scoped>
/* Custom animations for error page */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.maximum-width {
    animation: fadeInUp 0.6s ease-out;
}
</style>
