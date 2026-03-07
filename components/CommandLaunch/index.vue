<script lang="ts" setup>
import sleep from '~/utils/sleep'

const { cmd, output} = defineProps<{
    cmd: string,
    output: string
}>()

const emit = defineEmits<{
    (e: 'ready', isReady: boolean): void
}>()

const isRun = ref(false)

const writedCmd = ref("")

onMounted(async () => {
    for (const char of cmd) {
        writedCmd.value += char 
        if (char === ' ') { 
            await sleep(150) 
        } else {
            await sleep(125) 
        }  
    }
    isRun.value = true
    await sleep(500) 
    emit('ready', true)
})
</script>

<template>
    <div class="h-full flex justify-center items-center">
        <Terminal class="w-120" title="auguste@profile">
            <TerminalLine :is-prompt="true">
                <TerminalLineCmd>
                    {{ writedCmd }}
                </TerminalLineCmd>
                <TerminalCursor v-if="!isRun"/>
            </TerminalLine>

            <TerminalLine v-if="isRun" type="output" >
                <TerminalLineOutput>
                    ✓ {{ output }} 
                </TerminalLineOutput>
                <TerminalCursor />
            </TerminalLine>
        </Terminal>
    </div> 
</template>

<style>

</style>