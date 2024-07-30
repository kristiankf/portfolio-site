<template>
    <div class="maximum-width flex gap-20 items-center">
        <div class="w-1/2">
            <form @submit.prevent="submitForm" class="space-y-4 title-text">
                <!-- name -->
                <div class="">
                    <input type="text" class="w-full rounded-lg p-4 alt-bg" placeholder="Name" v-model="form.name"
                        required>
                </div>

                <!-- email -->
                <div class="">
                    <input type="email" name="" id="" class="w-full rounded-lg p-4 alt-bg" placeholder="Email"
                        v-model="form.email" required>
                </div>

                <!-- message -->
                <div class="">
                    <textarea rows="5" name="" id="" class="w-full rounded-lg p-4 alt-bg" v-model="form.message"
                        required placeholder="Message"></textarea>
                </div>

                <!-- submit -->
                <div class="!mt-10">
                    <button type="submit" :disabled="result === 'Please wait...'"
                        class=" text-white w-full rounded-lg p-4 transition-colors cursor-pointer"
                        :class="[status === 'success' ? 'bg-green-500 hover:bg-green-500' : status === 'error' ? 'bg-red-400 hover-bg-red-400' : 'bg-primary hover:bg-primary/80']">
                        {{ result }}
                    </button>
                </div>
            </form>
        </div>
        <div class="w-1/2">
            <div class="space-y-14">
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
    subject: "New Message from Kriswale.com",
    name: "",
    email: "",
    message: "",
});
const result = ref('Send Message')
const status = ref('info')

const submitForm = async () => {
    result.value = "Please wait...";
    try {
        const response = await $fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: form.value,
        });

        // console.log(response); // You can remove this line if you don't need it

        result.value = response.message;
        if (response.success) status.value = 'success';

    } catch (error) {
        // console.log(error); // Log for debugging, can be removed
        status.value = "error";
        result.value = "Something went wrong!";
    } finally {
        // Reset form after submission
        form.value.name = "";
        form.value.email = "";
        form.value.message = "";

        // Clear result and status after 5 seconds
        setTimeout(() => {
            result.value = "Send Message";
            status.value = "info";
        }, 5000);
    }
};

</script>

<style lang="scss" scoped></style>