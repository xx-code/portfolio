<script lang="ts" setup>
const { title } = defineProps<{
    title: string
}>()
</script>

<template>
    <div class="terminal">
        <div class="terminal-bar">
            <div class="term-dot"/>
            <div class="term-dot"/>
            <div class="term-dot"/>
            <span class="term-title">{{ title }}</span>
        </div>

        <div class="terminal-body">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.terminal {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    .terminal-bar {
        padding: 12px 16px;
        background: #161B22;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        gap: 8px;
        .term-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%; 
        }
        :nth-child(1) {
            background: #FF5F57;
        }
        :nth-child(2) {
            background: #FEBC2E;
        }
        :nth-child(3) {
            background: #28C840;
        }

        .term-title {
            margin-left: auto;
            font-size: 11px;
            color: var(--text-dim);
            // font-family: 'JetBrains Mono', monospace;
        }
    }

    .terminal-body {
        padding: 24px;
        font-size: 12px;
        line-height: 1.9;

        .term-line {
            display: flex;
            gap: 8px;
        }
    }


}
</style>