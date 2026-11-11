<template>
    <div class="maximum-width flex flex-col-reverse sm:flex-row gap-10 md:gap-20 sm:items-center">
        <div class="sm:w-1/2">
            <form @submit.prevent="submitForm" class="mt-10 sm:mt-0 space-y-4 title-text w-full">
                <!-- name -->
                <div class="">
                    <input type="text" name="name" aria-label="Your name" class="w-full rounded-lg p-4 alt-bg" placeholder="Name" v-model="form.name"
                        required>
                </div>

                <!-- email -->
                <div class="">
                    <input type="email" name="email" aria-label="Your email address" class="w-full rounded-lg p-4 alt-bg" placeholder="Email"
                        v-model="form.email" required>
                </div>

                <!-- message -->
                <div class="">
                    <textarea rows="5" name="message" aria-label="Your message" class="w-full rounded-lg p-4 alt-bg" v-model="form.message"
                        required placeholder="Message"></textarea>
                </div>

                <!-- submit -->
                <div class="!mt-10">
                    <button type="submit" :disabled="status === 'sending'"
                        class="text-white w-full rounded-lg p-4 transition-colors cursor-pointer disabled:cursor-wait"
                        :class="[status === 'success' ? 'bg-green-600' : status === 'error' ? 'bg-red-500' : 'bg-primary hover:bg-primary/80']">
                        {{ result }} <Icon v-if="status === 'idle'" name="hugeicons:mail-send-01" class="ml-1 inline-block" />
                    </button>
                </div>
                <p v-if="feedback" class="text-sm app-text" role="status" aria-live="polite">{{ feedback }}</p>
            </form>
        </div>
        <div class="sm:w-1/2">
            <div class="space-y-8 sm:space-y-14">
                <!-- address -->
                <div class="flex gap-4 items-center">
                    <div class="  dark:bg-[#EAE6FE] bg-[#e5e0fa]  rounded-2xl p-4 flex items-center justify-center">
                        <Icon name="material-symbols-light:location-on-outline" class="text-2xl text-primary"></Icon>
                    </div>
                    <div class="">
                        <p class="title-text mb-1">Address</p>
                        <p class="text-sm">Adepa Loop, Tabora - Ghana</p>
                    </div>
                </div>

                <!-- phone -->
                <div class="flex gap-4 items-center">
                    <div class="  dark:bg-[#EAE6FE] bg-[#e5e0fa]  rounded-2xl p-4 flex items-center justify-center">
                        <Icon name="material-symbols-light:phone-in-talk-outline" class="text-2xl text-primary"></Icon>
                    </div>
                    <div class="">
                        <p class="title-text mb-1">Phone</p>
                        <p class="text-sm"><a href="tel:+233208232081" class="hover:text-primary transition-colors">+233
                                208 232 081</a>
                        </p>
                    </div>
                </div>

                <!-- email -->
                <div class="flex gap-4 items-center">
                    <div class="  dark:bg-[#EAE6FE] bg-[#e5e0fa]  rounded-2xl p-4 flex items-center justify-center">
                        <Icon name="material-symbols-light:mail-outline" class="text-2xl text-primary"></Icon>
                    </div>
                    <div class="">
                        <p class="title-text mb-1">Email</p>
                        <p class="text-sm"><a href="mailto:camoakohene84@gmail.com"
                                class="hover:text-primary transition-colors">camoakohene84@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const form = ref({
    access_key: config.public.web3formsAccessKey,
    subject: "New Message from KrisOps",
    name: '',
    email: '',
    message: '',
})
const result = ref('Send Message')
const status = ref('idle')
const feedback = ref('')

const submitForm = async () => {
    status.value = 'sending'
    result.value = 'Please wait...'
    feedback.value = ''

    try {
        const response = await $fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: form.value,
        })

        if (response.success) {
            status.value = 'success'
            result.value = 'Message sent'
            feedback.value = 'Thanks for reaching out. I’ll get back to you soon.'
            form.value.name = ''
            form.value.email = ''
            form.value.message = ''
        } else {
            status.value = 'error'
            result.value = 'Try again'
            feedback.value = response.message || 'Your message could not be sent. Please try again.'
        }
    } catch {
        status.value = 'error'
        result.value = 'Try again'
        feedback.value = 'Something went wrong. Please try again or email me directly.'
    }

    window.setTimeout(() => {
        status.value = 'idle'
        result.value = 'Send Message'
        feedback.value = ''
    }, 5000)
}
</script>

<style lang="scss" scoped></style>
