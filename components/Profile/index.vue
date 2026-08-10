<script lang="ts" setup>
import type { PageType } from '~/app.vue';

const emit = defineEmits<{
    (e: 'navigate', page: PageType): void
}>()

const resumes = useResumes()

</script>

<template>
    <div class="h-full p-10 overflow-hidden">
        <div class="flex justify-center mb-5">
            <Navbar primary-page="Profile" :on-click="page => emit('navigate', page)" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 h-full tracking-widest">
            <div class="col-auto h-full overflow-auto custom-scrollbar">
                <div class="section-label">// work history</div>
                <ProfileWorkCard 
                    v-for="resume in resumes"
                    :key="resume.title"
                    :title="resume.title" 
                    :place="resume.place" 
                    :start-date="resume.startDate"
                    :end-date="resume.endDate"
                    :tags="resume.tags.map(i => ({ title: i.title, color: i.color}))" />
            </div>
            <div class="col-auto h-full overflow-auto custom-scrollbar">
                <div class="section-label">// skills</div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <ProfileSkillCard 
                        title="Frontend"
                        subtitle="What you see"
                        icon="i-lucide-monitor-cloud"
                        :skills="[
                            { name: 'Vue/Nuxt.js', percentage: 75 },
                            { name: 'TypeScript', percentage: 80 },
                            { name: 'TailWind Css', percentage: 40 },
                        ]" /> 

                    <ProfileSkillCard 
                        title="Backend"
                        subtitle="Under the hood"
                        icon="i-lucide-settings"
                        :skills="[
                            { name: 'Kotlin/Spring-Boot', percentage:  30 },
                            { name: 'Dotnet/Aspnet', percentage: 75 },
                            { name: 'SQL', percentage: 75 },
                        ]" /> 
                    <ProfileSkillCard 
                        title="Architecture"
                        subtitle="How it 's build"
                        icon="i-lucide-pencil-ruler"
                        :skills="[
                            { name: 'Domain-driven', percentage: 75 },
                            { name: 'Clean Architecture', percentage: 80 },
                            { name: 'Api Design', percentage: 75 },
                            { name: 'Microservices', percentage: 0 },
                            { name: 'Event-driven', percentage: 8 },
                        ]" />
                    <ProfileSkillCard 
                        title="Ops"
                        subtitle="Shipping It"
                        icon="i-lucide-workflow"
                        :skills="[
                            { name: 'Docker/K8s', percentage: 40 },
                            { name: 'CI/CD', percentage: 55 },
                            { name: 'Security', percentage: 20 },
                            { name: 'Observability', percentage: 20 },
                        ]" />
                    <ProfileSkillCard 
                        title="Mobile"
                        subtitle="What we have in our pocket"
                        icon="i-lucide-tablet-smartphone"
                        :skills="[
                            { name: 'Swift/SwiftUi', percentage: 75 },
                            { name: 'Kotlin/Android', percentage: 20 },
                        ]" />
                </div>  
            </div>
        </div>
    </div> 
</template>

<style scoped lang="scss">
    /* ── Section titles ── */
    .section-label {
        font-size: clamp(9px, 1.5vw, 11px);
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--muted);
        margin-bottom: clamp(20px, 3vw, 32px);
        display: flex;
        align-items: center;
        padding-block: 5px;
        gap: 12px;
    }
    .section-label::after {
        content: '';
        flex: 1;
        height: 1px;
        background: var(--border);
    }

    @layer utilities {
    /**Chrome and safari */
    .custom-scrollbar::-webkit-scrollbar {
        width: 6px; 
    }

    /**Chrome and safari */
    .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.3); 
        border-left: 1px solid rgba(255, 255, 255, 0.05);
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
        background: var(--accent2);
        border-radius: 10px;
        box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); 
    }

    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #60a5fa; 
    }

    /* Version Firefox */
    .custom-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: #3b82f6 rgba(0, 0, 0, 0.3);
    }
}
</style>