<script setup lang="ts">
import type { PageType } from '~/app.vue'

const emit = defineEmits<{
  (e: 'navigate', page: PageType): void
}>()

const { locale } = useI18n()

const dateNow = ref(new Date())

// Shared z-index counter so clicking any window brings it to front
const desktopZIndex = ref(10)
provide('desktopZIndex', desktopZIndex)

const projects = [
    {
        title: 'devops_dash',
        icon: 'i-lucide-server',
        description:
        'Monitoring temps réel pour clusters K8s avec alerting configurable.',
        tags: ['Vue/Nuxt', 'Docker', 'Grafana'],
        links: [
        { label: 'source', icon: 'i-lucide-github', url: 'https://github.com' },
        { label: 'demo', icon: 'i-lucide-external-link', url: 'https://example.com' },
        ],
        x: 220,
        y: 70,
    },
    {
        title: 'ui_kit_v2',
        icon: 'i-lucide-component',
        description: 'Librairie de composants Vue partagée entre les projets front.',
        tags: ['Vue', 'TypeScript', 'Storybook'],
        links: [
        { label: 'source', icon: 'i-lucide-github', url: 'https://github.com' },
        ],
        x: 260,
        y: 110,
    },
    {
        title: 'reco_engine',
        icon: 'i-lucide-bot',
        description: 'Système de recommandation basé sur du collaborative filtering.',
        tags: ['Python', 'PyTorch', 'Jupyter'],
        links: [
        { label: 'source', icon: 'i-lucide-github', url: 'https://github.com' },
        ],
        x: 300,
        y: 150,
    },
]
</script>

<template>
    <div class="h-full p-10 overflow-hidden">
        <div class="flex justify-center mb-5">
            <Navbar
                primary-page="Projects"
                :on-click="(page) => emit('navigate', page)"
            />
        </div>

        <div
            class="flex flex-col w-full h-[95%] rounded-2xl overflow-hidden relative bg-gradient-to-br from-slate-600 via-slate-500 to-slate-400"
        >
            <!-- Top bar -->
            <div class="flex items-center px-5 py-2 bg-black/25 w-full backdrop-blur-sm">
                <p class="text-sm text-white/90">portfolio_os</p>
                <div class="flex-1 text-center">
                    <p class="text-sm text-white/90">
                        {{ formatDateMonth(locale, dateNow) }}
                    </p>
                </div>
                <div class="flex items-center gap-4 text-white/90">
                    <UIcon name="i-lucide-wifi" />
                    <UIcon name="i-lucide-volume-2" />
                    <UIcon name="i-lucide-battery-full" />
                </div>
            </div>

            <!-- Desktop surface -->
            <div class="flex-1 relative p-6">
                <div class="flex flex-wrap gap-7 w-fit">
                    <ProjectExe
                        v-for="project in projects"
                        :key="project.title"
                        v-bind="project"
                    />
                </div>
            </div>

        <!-- Dock -->
            <div class="flex justify-center pb-4">
                <div class="flex items-center gap-2 px-4 py-2 bg-black/25 rounded-2xl backdrop-blur-sm">
                    <span
                        v-for="project in projects"
                        :key="`dock-${project.title}`"
                        class="flex items-center justify-center w-9 h-9 rounded-lg bg-white/85"
                    >
                        <UIcon :name="project.icon" class="w-4 h-4 text-neutral-700" />
                    </span>

                <div class="h-6 w-px bg-white/30 mx-1" />
                    <UButton icon="i-lucide-layout-grid" size="lg" color="neutral" variant="ghost" />
                </div>
            </div>
        </div>
    </div>
</template>