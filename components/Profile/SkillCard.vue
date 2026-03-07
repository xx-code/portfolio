<script lang="ts" setup>
const { title, subtitle, icon, skills  } = defineProps<{
    title: string,
    subtitle: string,
    icon: string,
    skills: {
        name: string, 
        percentage:number, 
    }[]
}>()

function getLevel(perc: number) {
    if (perc <= 50) {
        return 'Novice'
    } else if (perc <= 75) {
        return 'Advanced'
    } else {
        return 'Expert'
    }
}

function interpolateColor(percentage: number) {
    const startColor = { r: 0, g: 255, b: 163 }; // Rose (#FF69B4)
    const endColor = { r: 77, g: 158, b: 255 };   // Ton bleu (#4D9EFF)

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * (percentage / 100));
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * (percentage / 100));
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * (percentage / 100));

    return `rgb(${r}, ${g}, ${b})`;
}

</script>

<template>
    <Terminal :title="title">
        <div class="flex items-center gap-2">
            <UIcon class="skill-card-icon" :name="icon" />
            <div class="skill-card-title">{{ title }}</div>
        </div>
        <p class="skill-card-sub">{{ subtitle }}</p>

        <div v-for="skill in skills" :key="skill.name" class="skill-item">
        <span class="skill-name">{{ skill.name }}</span>
        <div class="skill-bar-track">
            <div class="skill-bar-fill" 
                :style="{width:`${skill.percentage}%`, backgroundColor: interpolateColor(skill.percentage)}" />
            </div>
        <span class="skill-level">{{ getLevel(skill.percentage) }}</span>
        </div>
    </Terminal>
    
</template>

<style lang="scss" scoped>
.skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(12px, 2vw, 18px);
    align-content: start;
  }

  .skill-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: clamp(12px, 2vw, 18px) clamp(12px, 1.8vw, 16px);
    transition: border-color 0.2s, transform 0.2s;
    animation: fadeUp 0.5s ease both;
  }
  .skill-card:hover { border-color: #3a3a3a; transform: translateY(-2px); }

  .skill-card-icon {
    font-size: clamp(14px, 2vw, 18px);
    margin-bottom: 8px;
    display: block;
  }

  .skill-card-title {
    font-size: clamp(9px, 1.2vw, 11px);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 4px;
    font-weight: 600;
  }

  .skill-card-sub {
    font-size: clamp(10px, 1.2vw, 11px);
    color: var(--text-dim);
    margin-bottom: 10px;
    line-height: 1.4;
  }

//   .card-frontend { border-top: 2px solid var(--accent-cyan); }
//   .card-backend   { border-top: 2px solid var(--accent-yellow); }
//   .card-arch      { border-top: 2px solid var(--accent-pink); }
//   .card-devops    { border-top: 2px solid var(--accent-blue); }

  .skill-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  .skill-item:last-child { margin-bottom: 0; }

  .skill-name {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: clamp(11px, 1.5vw, 13px);
    color: var(--text);
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .skill-bar-track {
    width: 40px;
    height: 3px;
    background: var(--border);
    border-radius: 2px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .skill-bar-fill {
    height: 100%;
    border-radius: 2px;
    animation: growBar 1s ease both;
    animation-delay: 0.3s;
  }

//   .fill-cyan   { background: var(--accent-cyan); }
//   .fill-yellow { background: var(--accent-yellow); }
  .fill-pink   { background: pink; }
//   .fill-blue   { background: var(--accent-blue); }

  .skill-level {
    font-size: clamp(8px, 1vw, 9px);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--muted);
    width: 40px;
    text-align: right;
    flex-shrink: 0;
  }

  /* ── Animations ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes growBar { from { width: 0; } }

  .skill-card:nth-child(1) { animation-delay: 0.10s; }
  .skill-card:nth-child(2) { animation-delay: 0.17s; }
  .skill-card:nth-child(3) { animation-delay: 0.24s; }
  .skill-card:nth-child(4) { animation-delay: 0.31s; }
</style>