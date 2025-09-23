<script setup>
</script>

<template>
    <div class="welcome">
        <div class="welcome-wrapper">
            <div class="para text-gray-500" >
                <HomeLettersDisplaying 
                    :letters="$t('Home.hello').split('')" 
                    :high-letters="[]" />
            </div>
            <div class="para text-white">
                <HomeLettersDisplaying 
                    :letters="$t('Home.name_job').split('')" 
                    :high-letters="[{letter: 'T', style: '#ED1E79'}, {letter: 'A', style: '#0C83FD'}]" />
            </div>
            <div class="para text-white">
                <HomeLettersDisplaying 
                    :letters="$t('Home.job').split('')"
                    :high-letters="[{letter: 'D', style: '#0C83FD'}, {letter: 'F', style: '#ED1E79'}]" />
            </div>
        </div>
        <p class="font-bold text-xl" style="color: #2563EB;">
            {{ $t('Home.job_info') }}
        </p>
    </div>
</template>

<style scoped lang="scss">
.welcome {
    .welcome-wrapper {
        
        .para {
            line-height: 53px;
            margin-bottom: 0;
            width: fit-content;
            cursor: default;
            position: relative;
            
        }
    }
    .job-info {
        color: #626262;
        font-size: 18px;
        margin-bottom: 0;
        margin-top: 34px;
        @media (max-width: 768px) {
            font-size: 16px;
        }
    }
}
.logo-wrapper {
    width: 400px;
    @media (max-width: 1299px) {
        width: 350px;
    }
    @media (max-width: 1146px) {
        width: 320px;
    }
    @media (max-width: 1103px) {
        width: 275px;
    }
    @media (max-width: 992px) {
        width: 225px;
    }
    @media (max-width: 851px) {
        width: 200px;
    }
    @media (max-width: 793px) {
        width: 180px;
    }
    
    img {
        width: 100%;
        transform: rotate(-17deg);
        margin-left: -15px;
        margin-top: -55px;
        // @include rotate-logo(2s, 1) {
        //     from {
        //         transform: rotate(0deg) scaleX(1.3) scaleY(1.3);
        //     }
        //     to {
        //         transform: rotate(343deg) scaleX(1) scaleY(1);
        //     }
        // }
        @media (max-width: 1299px) {
            margin-left: -15px;
        }
        @media (max-width: 1146px) {
        }
        @media (max-width: 1103px) {
            margin-top: -52px;
        }
        @media (max-width: 992px) {
            margin-top: -45px;
            margin-left: -25px;
        }
        @media (max-width: 851px) {
            margin-top: -40px;
            margin-left: -30px;
        }
        @media (max-width: 793px) {
            margin-left: -55px;
        }
        @media (max-width: 769px) {
            display: none;
        }
    }
}
</style>