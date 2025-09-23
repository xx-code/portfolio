<script setup lang="ts">

function surline(txt: string) {
    const words = txt.split('*'); 
    return words
}


</script>

<template>
    <div id="about-me">
        <div class="flex flex-col container">
            <div class="mb-8">
                <h1 class="text-4xl font-bold text-gray-500">{{ $t('AboutMe.about_me') }}</h1>
                <br/>
                <div class="paragraph col-12">
                    <p class="leading-relaxed">
                        <span v-for="value in surline($t('AboutMe.para_1'))" :key="value" :class="[
                            value.startsWith('$') && value.endsWith('$') ?
                            'text-pink-200 font-semibold': '']" >
                            {{ value.replaceAll('$', '')}}
                        </span>
                    </p>
                    <br/>
                    <p class="leading-relaxed">
                        <span v-for="value in surline($t('AboutMe.para_2'))" :key="value" :class="[
                            value.startsWith('$') && value.endsWith('$') ?
                            'text-blue-200 font-semibold': '']" >
                            {{ value.replaceAll('$', '')}}
                        </span>
                    </p>
                    <br/>
                    <p class="leading-relaxed">
                        <span v-for="value in surline($t('AboutMe.para_3'))" :key="value" :class="[
                            value.startsWith('$') && value.endsWith('$') ?
                            'text-pink-200 font-semibold': '']" >
                            {{ value.replaceAll('$', '')}}
                        </span>
                    </p>
                </div>
            </div>
            <AboutMeTimeLine /> 
            <!-- <div class="">
                <div class="bubble">
                    <div class="bubble-wrapper">
                        <div class="bubble-A">
                            <h1>A</h1>
                        </div>
                        <div class="bubble-B"></div>
                        <div class="bubble-C"></div>
                        <div class="bubble-D"></div>
                    </div>
                <div>
            </div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
#about-me {
    background: radial-gradient(circle at top left, #1e1e20, #0e0e10);
    color: white;
    // opacity: 0;
    transition: opacity ease-in-out 100ms;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>