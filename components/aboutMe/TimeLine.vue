<script setup lang="ts">
import useResumes from '~/composables/useResumes';

const resumes = useResumes()

</script>

<template>
    <div class="time-line">
        <div class="time-line-wrapper">
            <div class="time-line-bar">
                <AboutMeTimeBar v-for="resume in resumes" :key="resume.id" :time-line-info="resume" />
            </div>

            <div class="time-bar" />

            <div class="label">
                <span class="label-left" >{{ $t('AboutMe.after_high_school') }}</span>
                <span class="label-right" >{{ $t('AboutMe.now') }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.time-line {
    position: relative;
    .time-line-wrapper {
        .time-bar {
            position: absolute;
            width: 100%;
            height: 1px;
            background-color: #0C83FD;
            &::after {
                content: '';
                position: absolute;
                top: -5px;
                height: 10px;
                width: 1px;
                background-color: #0C83FD;
            }
            &::before {
                content: '';
                position: absolute;
                right: 0;
                top: -5px;
                height: 10px;
                width: 1px;
                background-color: #0C83FD;
            }
        }
        .label {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
            .label-right {
                color: white;
                font-size: 14px;
            }

            .label-left {
                color: white;
                font-size: 14px;
            }
        }
        .time-line-bar {
            display: flex;
            flex-direction: column;
            align-items: center; 
        }
    }
}
</style>