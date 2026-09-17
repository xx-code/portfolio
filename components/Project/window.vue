<script setup lang="ts">
import { useDraggable } from '@vueuse/core'

const props = defineProps<{
    title: string
    x?: number
    y?: number
    zIndex?: number
}>()

const emit = defineEmits<{
    (e: 'close'): void
    // eslint-disable-next-line @typescript-eslint/unified-signatures
    (e: 'focus'): void 
}>()

const windowRef = useTemplateRef('windowRef')
const handleRef = useTemplateRef('handleRef')

// Only the title bar is draggable, not the whole window
const { style } = useDraggable(windowRef, {
    initialValue: { x: props.x ?? 80, y: props.y ?? 80 },
    handle: handleRef,
})
</script>

<template>
    <div
        ref="windowRef"
        :style="[style, { zIndex: zIndex ?? 10 }]"
        class="fixed w-[420px] rounded-lg overflow-hidden shadow-2xl border border-black/10 bg-neutral-50"
        @mousedown="emit('focus')"
    >
    <!-- Title bar -->
        <div
            ref="handleRef"
            class="relative flex items-center gap-2 px-3 py-2.5 bg-neutral-200/90 border-b border-black/10 cursor-grab active:cursor-grabbing select-none"
            >
            <button
                type="button"
                class="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors"
                aria-label="Close window"
                @click.stop="emit('close')"
            />
            <span class="w-3 h-3 rounded-full bg-amber-400" />
            <span class="w-3 h-3 rounded-full bg-emerald-500" />

            <span
                class="absolute left-1/2 -translate-x-1/2 text-xs text-neutral-600 pointer-events-none"
            >
                {{ title }}
            </span>
        </div>

        <!-- Content -->
        <div class="p-5 bg-neutral-50">
            <slot />
        </div>
    </div>
</template>