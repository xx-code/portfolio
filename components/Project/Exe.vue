<script setup lang="ts">
export interface ProjectLink {
    label: string
    icon: string
    url: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
    title: string
    icon: string
    descriptionFr: string
    descriptionEn: string
    tags: string[]
    links?: ProjectLink[]
    x?: number
    y?: number
}>()

const openWindow = ref(false)
const { locale } = useI18n()

// Shared counter injected from the desktop (index.vue) so any window
// clicked/opened jumps above the others instead of z-index fighting.
const desktopZIndex = inject<Ref<number>>('desktopZIndex', ref(10))
const myZIndex = ref(desktopZIndex.value)

function bringToFront() {
  desktopZIndex.value += 1
  myZIndex.value = desktopZIndex.value
}

function open() {
  openWindow.value = true
  bringToFront()
}
</script>

<template>
    <div>
        <button
            type="button"
            class="flex flex-col items-center gap-1.5 w-20 group"
            @dblclick="open"
        >
            <span
                class="flex items-center justify-center w-12 h-12 rounded-xl bg-white/90 shadow-sm group-hover:bg-white group-active:scale-95 transition-all duration-100"
            >
                <UIcon :name="icon" class="w-6 h-6 text-neutral-700" />
            </span>
            <span class="text-xs text-white/90 drop-shadow text-center leading-tight">
                {{ title }}
            </span>
        </button>

        <Transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
        >
            <ProjectWindow
                v-if="openWindow"
                :title="`${title} -- file manager`"
                :x="x"
                :y="y"
                :z-index="myZIndex"
                @close="openWindow = false"
                @focus="bringToFront"
            >
                <h3 class="text-lg font-medium text-neutral-900 mb-1">
                {{ title }}
                </h3>
                <p class="text-sm text-neutral-500 leading-relaxed mb-4">
                {{ locale == 'fr' ? descriptionFr : descriptionEn }}
                </p>

                <div v-if="tags?.length" class="flex flex-wrap gap-1.5 mb-4">
                    <span
                        v-for="tag in tags"
                        :key="tag"
                        class="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800"
                    >
                        {{ tag }}
                    </span>
                </div>

                <div
                v-if="links?.length"
                    class="flex gap-4 pt-3 border-t border-neutral-200"
                >
                    <a
                        v-for="link in links"
                        :key="link.url"
                        :href="link.url"
                        target="_blank"
                        rel="noopener"
                        class="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-800 transition-colors"
                    >
                        <UIcon :name="link.icon" class="w-3.5 h-3.5" />
                        {{ link.label }}
                    </a>
                </div>
            </ProjectWindow>
        </Transition>
    </div>
</template>