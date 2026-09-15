<script setup lang="ts">
const { title } = defineProps<{
    title: string
}>()

const openWindow = ref(false)

</script>

<template>
    <div>
        <div>
            <UButton 
                @click="() => { openWindow = !openWindow }"
            >
                <NuxtImg 
                    src="https://blocks.astratic.com/img/general-img-landscape.png"
                    width="50"
                    height="50"
                    :alt="title"
                />
            </UButton>
            <p class="">{{ title }}</p>
        </div>
        

        <div v-if="openWindow" class="absolute right-8">
            <Terminal :title="title">
                <div class="h-full w-full bg-white">
                    
                </div>
            </Terminal> 
        </div>
    </div>
</template>