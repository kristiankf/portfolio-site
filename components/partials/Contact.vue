<template>
    <div class="maximum-width flex gap-20 items-center">
        <div class="w-1/2">
            <form action="" class="space-y-4 title-text">
                <!-- name -->
                <div class="">
                    <input type="text" class="w-full rounded-lg p-4 alt-bg" placeholder="Name">
                </div>

                <!-- email -->
                <div class="">
                    <input type="email" name="" id="" class="w-full rounded-lg p-4 alt-bg" placeholder="Email">
                </div>

                <!-- message -->
                <div class="">
                    <textarea rows="5" name="" id="" class="w-full rounded-lg p-4 alt-bg"
                        placeholder="Message"></textarea>
                </div>

                <!-- submit -->
                <div class="!mt-10">
                    <input type="submit" value="Send Message"
                        class="bg-primary text-white w-full rounded-lg p-4 hover:bg-primary/80 cursor-pointer">
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
                        <p class="text-sm"><a href="tel:+233208232081">+233 208 232 081</a></p>
                    </div>
                </div>

                <!-- email -->
                <div class="flex gap-4 items-center">
                    <div class="  dark:bg-[#EAE6FE] bg-[#e5e0fa]  rounded-2xl p-4 flex items-center justify-center">
                        <Icon name="material-symbols-light:mail-outline" class="text-2xl text-primary"></Icon>
                    </div>
                    <div class="">
                        <p class="title-text mb-1">Email</p>
                        <p class="text-sm"><a href="mailto:camoakohene84@gmail.com">camoakohene84@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>