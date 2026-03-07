<script setup lang="ts">
export type PageType = 'Home' | 'Projects' | 'Blog' | 'Profile'
const currentPage = ref<PageType>('Home')
const isReady = ref(false)
const prompt = ref<{
    cmd: string,
    output: string
}>({ cmd: 'yarn run dev-auguste', output: 'Ready to build something great'}) 

function navigate(page: PageType) {
    if (page === currentPage.value)
        return
    isReady.value = false
    switch(page) {
        case 'Home':
            prompt.value = {cmd: 'yarn run dev-auguste', output: 'Ready to build something great'} 
            currentPage.value = 'Home'
            break
        case 'Profile':
            prompt.value = {cmd: 'yarn test auguste@profile', output: 'Check what you need'} 
            currentPage.value = 'Profile'
            break
        case 'Projects':
            prompt.value = {cmd: 'yarn test auguste@projects', output: 'Projects border is ready'} 
            currentPage.value = 'Projects'
            break
        case 'Blog':
            prompt.value = {cmd: 'yarn run blog', output: 'Ready to read my idea'} 
            currentPage.value = 'Blog'
            break
    }
}



</script>

<template>
   <div class="h-[100vh] w-[100vw]">
      <Transition name="glitch-out">
         <div v-if="!isReady" class="h-full w-full">
            <div class="scanlines" aria-hidden="true" />
            <CommandLaunch 
               :cmd="prompt.cmd" 
               :output="prompt.output"
               @ready="v => isReady = v" />
         </div>
         
         <div v-else class="h-full w-full">
            <Home v-if="currentPage === 'Home'" @navigate="page => navigate(page)" />
            <Profile v-else-if="currentPage === 'Profile'" @navigate="page => navigate(page)" />
            <Project v-else-if="currentPage === 'Projects'" @navigate="page => navigate(page)" />
            <Blog v-else-if="currentPage === 'Blog'" @navigate="page => navigate(page)" />
         </div>
      </Transition>
      <!-- <Home />
      <AboutMe />
      <Skills />
      <Project /> -->
    </div>
</template>

<style lang="scss" scoped>
/* ─── Scanline overlay ──────────────────────────────────── */
.scanlines {
    pointer-events: none;
    position: fixed;
    inset: 0;
    z-index: 10;
    background: repeating-linear-gradient(
        to bottom,
        transparent 0px,
        transparent 3px,
        rgba(0, 0, 0, 0.08) 3px,
        rgba(0, 0, 0, 0.08) 4px
    );
    opacity: 0.4;
}

/* ─── Glitch-out leave transition ───────────────────────── */
.glitch-out-leave-active {
    animation: glitch-leave 0.85s steps(1) forwards;
}

@keyframes glitch-leave {
    0%   { opacity: 1; transform: translate(0, 0) skewX(0deg); filter: none; }
    10%  { opacity: 1; transform: translate(-4px, 0) skewX(-2deg); filter: hue-rotate(90deg) brightness(1.4); }
    15%  { opacity: 0; transform: translate(6px, -2px) skewX(3deg); clip-path: inset(30% 0 20% 0); }
    20%  { opacity: 1; transform: translate(-2px, 0) skewX(0deg); filter: hue-rotate(180deg) brightness(2); }
    28%  { opacity: 1; transform: translate(5px, 1px) skewX(-4deg); filter: hue-rotate(0deg) brightness(1); clip-path: inset(10% 0 60% 0); }
    35%  { opacity: 0; transform: translate(0, 0); clip-path: inset(0 0 0 0); filter: none; }
    40%  { opacity: 1; transform: translate(-6px, 0) skewX(2deg); filter: brightness(3) saturate(0); }
    50%  { opacity: 0; transform: translate(4px, -1px); clip-path: inset(50% 0 10% 0); }
    55%  { opacity: 1; transform: translate(0, 0); filter: none; clip-path: inset(0 0 0 0); }
    65%  { opacity: 0; transform: translate(3px, 2px) skewX(-1deg); filter: hue-rotate(270deg); }
    75%  { opacity: 1; transform: translate(-3px, 0); filter: brightness(2); clip-path: inset(5% 0 80% 0); }
    85%  { opacity: 0; transform: translate(0, 0) scaleY(0.95); filter: none; clip-path: inset(0); }
    92%  { opacity: 1; transform: translate(0, 0) scaleY(1.02); filter: brightness(4); }
    100% { opacity: 0; transform: translate(0, 0); filter: none; }
}
</style>