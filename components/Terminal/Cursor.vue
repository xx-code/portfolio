<template>
    <span class="cursor" />
</template>

<style lang="scss" scoped>
.cursor {
    display: inline-block;
    width: 2px;
    height: 14px;
    background: var(--accent);
    vertical-align: middle;
    animation: blink 1.2s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}
</style>