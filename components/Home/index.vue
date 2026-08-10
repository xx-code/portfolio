<script setup lang="ts">
import type { PageType } from '~/app.vue';

const emit = defineEmits<{
    (e: 'navigate', page: PageType): void
}>()
const { locale } = useI18n()
const currentRole = locale.value === 'fr' ? "Developpeur Principal — MTY Group" : "Lead Developer — MTY Group"

</script>

<template>
    <div class="h-full w-full flex justify-center items-center p-10">
        <div class="home-wrapper">

            <!-- Corner marks - architectural detail -->
            <span class="corner corner--tl"/>
            <span class="corner corner--br"/>

            <!-- Header block -->
            <div class="name-block">
                <div class="name-eyebrow">
                    <span class="eyebrow-line" />
                    <span class="eyebrow-text">{{ locale === 'fr' ? 'PORTFOLIO' : 'PORTFOLIO' }}</span>
                </div>
                <h1 class="name-title wrap-anywhere">
                    {{ $t('home.hello_message') }}
                </h1>
                <h2 class="role-label">
                    <span class="role-accent">▐</span>
                    {{ currentRole }}
                </h2>
            </div>

            <!-- Divider -->
            <div class="h-divider" aria-hidden="true">
                <span class="h-divider__line"/>
                <span class="h-divider__dot"/>
                <span class="h-divider__line h-divider__line--short" />
            </div>

            <!-- Traits -->
            <div class="traits-block">
                <div class="trait">
                    <span class="trait-index">01</span>
                    <span class="trait-arrow">→</span>
                    <span class="trait-text">{{ $t('home.fullstack_architect_label') }}</span>
                </div>
                <div class="trait">
                    <span class="trait-index">02</span>
                    <span class="trait-arrow">→</span>
                    <span class="trait-text">{{ $t('home.product_engineer_label') }}</span>
                </div>
                <div class="trait">
                    <span class="trait-index">03</span>
                    <span class="trait-arrow">→</span>
                    <span class="trait-text">{{ $t('home.product_builder_label') }}</span>
                </div>
            </div>

            <!-- Links -->
            <div class="links-block">
                <a href="https://github.com/xx-code" target="_blank" class="link-item">
                    <UIcon name="i-lucide-github" class="w-4 h-4" />
                    <span>github.com/xx-code</span>
                </a>
                <span class="links-sep">/</span>
                <a href="https://www.linkedin.com/in/auguste-aka-junior-tiemele" target="_blank" class="link-item">
                    <UIcon name="i-lucide-linkedin" class="w-4 h-4" />
                    <span>linkedin.com</span>
                </a>
            </div>

            <!-- CTA Buttons -->
            <Navbar primary-page="Home" :on-click="page => emit('navigate', page)" />
        </div>
    </div>
</template>

<style lang="scss" scoped>

/* ─── Wrapper ───────────────────────────────────────────── */
.home-wrapper {
    position: relative;
    max-width: 620px;
    width: 100%;
    padding: 2.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

/* ─── Corner marks (architectural) ─────────────────────── */
.corner {
    position: absolute;
    width: 14px;
    height: 14px;
    pointer-events: none;
    opacity: 0.5;
}
.corner--tl {
    top: 0; left: 0;
    border-top: 1px solid var(--accent);
    border-left: 1px solid var(--accent);
}
.corner--br {
    bottom: 0; right: 0;
    border-bottom: 1px solid var(--accent);
    border-right: 1px solid var(--accent);
}

/* ─── Name / Title block ────────────────────────────────── */
.name-block {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.name-eyebrow {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.25rem;
}
.eyebrow-line {
    display: inline-block;
    width: 28px;
    height: 1px;
    background: var(--accent);
}
.eyebrow-text {
    font-size: 0.65rem;
    letter-spacing: 0.22em;
    color: var(--accent);
    text-transform: uppercase;
}

.name-title {
    font-size: clamp(1.8rem, 5vw, 3rem);
    font-weight: 400;
    color: var(--white);
    line-height: 1.1;
    letter-spacing: -0.02em;
}

.role-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: var(--text-dim);
    letter-spacing: 0.05em;
    margin-top: 0.1rem;
}
.role-accent {
    color: var(--accent2);
    font-size: 1rem;
    line-height: 1;
}

/* ─── Divider ───────────────────────────────────────────── */
.h-divider {
    display: flex;
    align-items: center;
    gap: 6px;
    opacity: 0.4;
}
.h-divider__line {
    height: 1px;
    flex: 1;
    background: var(--border);
}
.h-divider__line--short {
    flex: 0 0 24px;
}
.h-divider__dot {
    width: 4px;
    height: 4px;
    background: var(--accent);
    flex-shrink: 0;
    transform: rotate(45deg);
}

/* ─── Traits ────────────────────────────────────────────── */
.traits-block {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
}

.trait {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
}
.trait-index {
    font-size: 0.6rem;
    color: var(--muted);
    letter-spacing: 0.1em;
    flex-shrink: 0;
    width: 18px;
}
.trait-arrow {
    color: var(--accent2);
    font-size: 0.85rem;
    flex-shrink: 0;
}
.trait-text {
    font-size: 0.95rem;
    color: var(--text);
    letter-spacing: 0.01em;
}

/* ─── Links ─────────────────────────────────────────────── */
.links-block {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
}
.link-item {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.72rem;
    color: var(--text-dim);
    text-decoration: none;
    letter-spacing: 0.03em;
    transition: color 0.18s ease;

    &:hover {
        color: var(--accent);
    }
}
.links-sep {
    color: var(--muted);
    font-size: 0.8rem;
}

/* ─── CTA Buttons ───────────────────────────────────────── */
</style>