<script setup lang="ts">
const { title, place, startDate, tags, defaultOpen, endDate = undefined } = defineProps<{
    title: string
    place: string
    tags: {title: string, color: string}[]
    startDate: Date
    endDate?: Date
    defaultOpen?: boolean
}>()

const { locale, t } = useI18n()

const isOpen = ref(defaultOpen)

const endDateStr = computed(() => {
    return endDate ? formatDate(locale.value, startDate) : t('global.now')
})

</script>

<template>
    <div class="job">
        <div class="flex items-start justify-between"> 
            <div class="flex items-start">
                <UButton 
                    class="mr-1.5"
                    :icon="isOpen ? 'i-lucide-chevron-down' : 'i-lucide-chevron-right'"
                    :variant="isOpen ? 'solid' : 'ghost'"
                    :color="isOpen ? 'primary' : 'neutral'"
                    @click="() => { isOpen = !isOpen}"
                />
                <div>
                    <span :class="isOpen ? 'font-bold' : ''">{{ title }}</span>
                    <p class="job-company">{{ place }}</p>
                </div>
            </div>

            <div class="job-period">
                <span>
                    {{ formatDateMonth(locale, startDate) }}
                </span>
                <span v-if="endDateStr === t('global.now')">
                    - {{ endDateStr }}
                </span>
            </div>   
        </div>

        <div v-if="isOpen" class="job-tags">
            <span v-for="tag in tags" :key="tag.title" class="tag rounded-lg"  :style="{color: tag.color, backgroundColor: `${tag.color}20`}" >
                {{ tag.title}}
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.job {
    padding-left: 18px;
    padding-bottom: clamp(22px, 3vw, 34px);
    animation: fadeUp 0.5s ease both;
}

.job-title {
    font-size: clamp(12px, 1.8vw, 14px);
    font-weight: 600;
    color: #fff;
    line-height: 1.4;
}

.job-company {
    font-size: clamp(11px, 1.5vw, 12px);
    color: var(--accent2);
    margin-top: 2px;
}

.job-period {
    display: inline-block;
    margin-top: 5px;
    font-size: clamp(12px, 1.2vw, 10px);
    letter-spacing: 0.1em;
    color: var(--muted);
    background: var(--bg);
    border: 1px solid var(--border);
    padding: 2px 8px;
    border-radius: 2px;
}

.job-desc {
    margin-top: 8px;
    font-size: clamp(12px, 1.6vw, 13px);
    line-height: 1.65;
    color: #8a8a8a;
}

.job-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 8px;
}

.tag {
    font-size: clamp(9px, 1.2vw, 10px);
    padding: 2px 7px;
    border-radius: 2px;
    letter-spacing: 0.05em;
}


.job:nth-child(1) { animation-delay: 0.05s; }
.job:nth-child(2) { animation-delay: 0.12s; }
.job:nth-child(3) { animation-delay: 0.19s; }
.job:nth-child(4) { animation-delay: 0.26s; }
</style>