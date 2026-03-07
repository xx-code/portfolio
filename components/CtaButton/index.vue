<script lang="ts" setup>
const { isPrimary = false, icon, label } = defineProps<{
    isPrimary?: boolean,
    icon: string,
    label: string
}>()
</script>

<template>
    <button :class="['cta-btn', isPrimary ? 'cta-btn--primary' : ''] ">
        <UIcon :name="icon" class="w-4 h-4" />
        <span>{{ label }}</span>
        <span class="cta-btn__edge" />
    </button>
</template>

<style lang="scss" scoped>
.cta-block {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
}

.cta-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.55rem 1.1rem;
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text-dim);
    font-size: 0.72rem;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    cursor: pointer;
    overflow: hidden;
    transition: color 0.2s ease, border-color 0.2s ease;

    /* Angular cut corner — top-right */
    clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--accent);
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.22s ease, opacity 0.22s ease;
        z-index: 0;
    }

    span, svg {
        position: relative;
        z-index: 1;
    }

    &:hover {
        color: var(--surface);
        border-color: var(--accent);

        &::before {
            opacity: 1;
            transform: scaleX(1);
        }
    }

    /* The tiny corner accent mark */
    &__edge {
        position: absolute;
        top: -1px;
        right: -1px;
        width: 8px;
        height: 8px;
        background: var(--border);
        clip-path: polygon(100% 0, 100% 100%, 0 0);
        z-index: 2;
        transition: background 0.2s ease;
    }

    &:hover .cta-btn__edge {
        background: var(--accent);
    }
}

/* Primary button variant */
.cta-btn--primary {
    border-color: var(--accent);
    color: var(--accent);

    .cta-btn__edge {
        background: var(--accent);
    }

    &:hover {
        color: var(--surface);
    }
}
</style>