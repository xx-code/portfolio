<script setup lang="ts">
const { label } = defineProps<{
    label: string,
}>();

const emit = defineEmits(['click'])

</script>

<template>
    <div>
        <button class="button"  @onclick="emit('click')">{{ label }}</button>
    </div> 
</template>

<style scoped lang="scss">
.button {
    padding: 19px 40px;
    background: none;
    border: none;
    color: #0C83FD;
    font-weight: bold;
    font-size: 1.2rem;
    &:focus {
        outline: none;
    }
    @media (max-width: 768px) {
        padding: 12px 32px;
        font-size: 1rem;
    }
}
</style>