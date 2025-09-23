<script lang="ts" setup>
const { skill } = defineProps<{
    skill: SkillType
}>()

</script>

<template>
    <div class="group relative bg-gray-900 rounded-2xl p-4 flex flex-col items-center justify-center 
           hover:bg-gray-800 hover:scale-105 transition-transform duration-300 shadow-lg">
        <UButton :icon="skill.icon" size="xl" class="mb-3 group-hover:text-blue-400" />
        <p class="text-lg font-semibold">{{ skill.title }}</p>
        <p class="text-sm opacity-70 text-center">{{ skill.description }}</p>
        <!-- Level bar -->
        <div class="w-full bg-gray-700 rounded-full h-2 mt-3">
            <div :style="{ width: skill.level * 20 + '%' }" class="bg-blue-500 h-2 rounded-full"></div>
        </div>
    </div> 
</template>