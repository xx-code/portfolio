<script setup lang="ts">
import type { PageType } from '~/app.vue';

const emit = defineEmits<{
    (e: 'navigate', page: PageType): void
}>()

const { locale, t } = useI18n()

const dateNow = ref(new Date())

</script>

<template>
    <div class="h-full p-10 overflow-hidden">
        <div class="flex justify-center mb-5">
            <Navbar primary-page="Projects" :on-click="page => emit('navigate', page)" />
        </div>

        <div class="flex flex-col w-full h-215 bg-cyan-500 rounded-2xl">
            <div class="flex px-5 py-1 bg-black/25 w-full">
                <p>portefolio_os</p>

                <div class="flex-1 text-center">
                    <p>{{ formatDateMonth(locale, dateNow) }}</p>
                </div>

                <div class="flex items-center gap-4">
                    <UIcon name="i-lucide-wifi"/>
                    <UIcon name="i-lucide-volume-2" />
                    <UIcon name="i-lucide-battery-full" />
                </div>
            </div> 

            <div class="flex-1 relative">
                <ProjectExe 
                    title="Agni"
                />
            </div>

            <div class="flex justify-center pb-4">
                <div class="flex items-center px-5 py-1 bg-black/25 rounded-2xl">
                    <div class="h-[80%] w-[1px] bg-gray-400" orientation="vertical"/>
                    <UButton 
                        icon="i-lucide-layout-grid"
                        size="xl"
                    />
                </div>
            </div>
        </div>


    </div>
    
</template>
