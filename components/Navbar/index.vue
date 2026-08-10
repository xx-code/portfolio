<script setup lang="ts">
import type { PageType } from '~/app.vue';

const { onClick, primaryPage } = defineProps<{
    primaryPage: PageType
    onClick: (page: PageType) => void
}>()

</script>

<template>
    <div class="cta-block">
        <CtaButton 
            :is-primary="primaryPage === 'Home'" 
            icon="i-lucide-home"
            :label="$t('home.profile_label')" 
            @click="onClick('Home')"/>

        <CtaButton 
            :is-primary="primaryPage === 'Profile'" 
            icon="i-lucide-contact"
            :label="$t('home.project_skill')" 
            @click="onClick('Profile')"/>

        <CtaButton 
            :is-primary="primaryPage === 'Projects'" 
            icon="i-lucide-briefcase-business"
            :label="$t('home.project_label')"
            @click="onClick('Projects')"/>
        
        <CtaButton 
            :is-primary="primaryPage === 'Blog'" 
            icon="i-lucide-megaphone"
            :label="$t('home.bloc_label')" 
            @click="onClick('Blog')"/>
    </div>
</template>

<style lang="scss" scoped>
    .cta-block {
        display: flex;
        gap: 0.6rem;
        flex-wrap: wrap;
    }
</style>