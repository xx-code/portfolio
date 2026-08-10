<script setup lang="ts">
import type { PageType } from '~/app.vue';

const emit = defineEmits<{
    (e: 'navigate', page: PageType): void
}>()
</script>


<template>
    <div class="h-full p-10 overflow-hidden">
        <div class="flex justify-center mb-5">
            <Navbar primary-page="Blog" :on-click="page => emit('navigate', page)" />
        </div>
        <div class="flex justify-center items-center h-full">
            <h1 class="text-5xl">
                (Coming Soon)
            </h1>
        </div>
    </div>
</template>