<script setup lang="ts">
import type { TimeLineResumeType } from '~/composables/useResumes';
import dayjs from 'dayjs';

const { 
    timeLineInfo,
} = defineProps<{
    timeLineInfo: TimeLineResumeType
}>();
 
</script>

<template>
    <UModal>
            <div class="bar">
                <UPopover mode="hover">
                    <div 
                        class="bar-content" 
                        :style="{ backgroundColor: timeLineInfo.color, 
                                    width: `${timeLineInfo.widthBarInPercent}%`,
                                    left: `${timeLineInfo.startPointInPercent}%`}" >
                        <span style="color: color"> 
                            {{ dayjs(timeLineInfo.timeInYear.startTime).get('year')  }}
                        </span> 
                    </div> 
                    <template #content>
                        <p class="text-xs text-gray-500 p-2">{{ timeLineInfo.title }}</p>
                    </template>
                </UPopover> 
            </div>


                <!-- content bar -->
        <template #content>
            <div class="p-5">
                <div class="info-time-wrapper">
                    <h2 class="text-xl" :style="{ color: timeLineInfo.color}">
                        {{ `${dayjs(timeLineInfo.timeInYear.startTime).format('MMM YYYY') } - ${ timeLineInfo.timeInYear.endTime ? dayjs(timeLineInfo.timeInYear.endTime).format('MMM YYYY') : $t('now')}`}}
                    </h2>
                    <div class="para">
                        <h3 class="text-xl font-bold text-gray-800">{{ timeLineInfo.title }}</h3>
                        <p class="mt-2 leading-relaxed">{{ timeLineInfo.content }}</p>
                    </div>
                </div>
            </div>
        </template>
    </UModal> 
</template>

<style lang="scss" scoped>
.bar {
    cursor: pointer;
    position: relative;
    width: 98%;
    height: 5px;
    margin-bottom: 20px;
    .bar-content{
        position: absolute;
        height: 5px;
        width: 0;
        transition: width ease-in 350ms;
        span {
            top: -18px;
            position: absolute;
            font-size: 12px;
        }
    }
}

.info-time {
    // width: 600px;
    // @media (max-width: 630px) {
    //     width: 300px;
    // }
    // @media (max-width: 340px) {
    //     width: 220px;
    // }
    // .info-time-wrapper {
    //     padding:  30px;
    //     background-color: white;
    //     border-radius: 15px;
    //     // h2 {
    //     //     font-size: 45px;
    //     //     margin-bottom: 20px;
    //     //     font-weight: bold;
    //     //     @media (max-width: 630px) {
    //     //         font-size: 32px;
    //     //     }
    //     //     @media (max-width: 340px) {
    //     //         font-size: 24px;
    //     //     }
    //     // }
    //     .para {
    //         // h3 {
    //         //     font-size: 28px;
    //         //     color: #0C83FD;
    //         //     font-weight: bold;
    //         //     @media (max-width: 630px) {
    //         //         font-size: 22px;
    //         //     }
    //         //     @media (max-width: 340px) {
    //         //         font-size: 18px;
    //         //     }
    //         // }
    //         // p {
    //         //     @media (max-width: 630px) {
    //         //         font-size: 16px;
    //         //     }
    //         //     @media (max-width: 340px) {
    //         //         font-size: 14px;
    //         //     }
    //         // }
    //     }
    // }
}
</style>