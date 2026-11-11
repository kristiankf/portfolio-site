export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('reveal', {
        mounted(element) {
            element.classList.add('reveal')

            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
                element.classList.add('is-visible')
                return
            }

            const observer = new IntersectionObserver(([entry]) => {
                if (!entry.isIntersecting) return
                element.classList.add('is-visible')
                observer.unobserve(element)
            }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' })

            observer.observe(element)
            element._revealObserver = observer
        },
        unmounted(element) {
            element._revealObserver?.disconnect()
            delete element._revealObserver
        },
    })
})
