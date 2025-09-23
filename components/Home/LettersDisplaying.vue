<script lang="ts" setup>
export type TargetLetter = {
    letter: string, 
    style: string
}
const  { letters, highLetters } = defineProps<{
    letters: string[],
    highLetters: TargetLetter[]
}>();

const switchColor = (letter: string, targetLetters: TargetLetter[]): string => {
    for(let i = 0; i < targetLetters.length; i++){
        if (letter === targetLetters[i].letter) {
            return targetLetters[i].style
        }
    };
    return ''
};

</script>

<template>
    <div>
        <span 
            v-for="letter in letters" :key="letter"
            class="letter" 
            :style="{color: switchColor(letter, highLetters)}"
            >{{ letter }}</span>
    </div>
</template>

<style lang="scss" scoped>
.letter {
    position: relative;
    cursor: default;
    color: "white";
    font-weight: bolder;
    font-size: 4.15rem;
    top: 0;
    transition: top cubic-bezier(.17,.67,.83,.67) 200ms;
    &:hover {
        top: 8px;
        color: #0C83FD !important;
    }
    @media (max-width: 1199px) {
        font-size: 3.75rem;
    }
    @media (max-width: 1029px) {
        font-size: 3.25rem;
        line-height: 48px;
    }
    @media (max-width: 998px) {
        font-size: 2.75rem;
        line-height: 43px;
    }
    @media (max-width: 796px) {
        font-size: 2.50rem;
        line-height: 38px;
    }
    @media (max-width: 750px) {
        font-size: 2.25rem;
        line-height: 33px;
    }
    @media (max-width: 450px) {
        font-size: 2rem;
        line-height: 28px;
    }
}
.blue-letter {
    color: #0C83FD !important;
}
.pink-letter {
    color: #ED1E79 !important;
}
</style>