<script lang="ts" setup>

const skills = useSkills()

</script>

<template>
    <div id="skills">
        <div class="flex flex-col container">
            <div class="mb-8">
                <h1 class="text-4xl font-bold text-gray-500">{{ $t('Skill.skills_title') }}</h1>
                <div class="flex mt-2 gap-2">
                    <div class="flex-1 mt-4">
                        <h2 class="text-xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                            {{ $t('Skill.tools') }}
                        </h2>
                        <TransitionGroup 
                            name="fade" 
                            tag="div" 
                            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                            <SkillsCard 
                                v-for="skill in skills.filter(i => !i.isCurrentlyUseful)" 
                                :key="skill.id"
                                :skill="skill"
                             />
                        </TransitionGroup>
                    </div>
                    <div class="flex-1 mt-4">
                        <h2 class="text-xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                            {{ $t('Skill.tools_use') }}
                        </h2>
                        <TransitionGroup 
                            name="fade" 
                            tag="div"
                            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                            <SkillsCard 
                                v-for="skill in skills.filter(i => i.isCurrentlyUseful)" 
                                :key="skill.id" 
                                :skill="skill"
                            />
                        </TransitionGroup> 
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<style scoped lang="scss">
#skills {
    // background-color: #0E0E10;
    background: radial-gradient(circle at top left, #1e1e20, #0e0e10);
    position: relative;
    color: white;
    // opacity: 0;
    transition: opacity ease-in-out 100ms;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#skills::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url('images/noise.jpg');
  opacity: 0.05;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>