<script setup lang="ts">
const { isPrompt = false } = defineProps<{
    isPrompt?: boolean 
}>()
</script>

<template>
    <div :clase="'term-line'">
        <span v-if="isPrompt" class="term-prompt">❯</span><span v-if="isPrompt">&nbsp;</span>
        <slot /> 
    </div>
</template>

<style lang="scss" scoped>
    .term-prompt { color: var(--accent); }
</style>