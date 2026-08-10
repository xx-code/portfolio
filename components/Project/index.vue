<script setup lang="ts">
import type { PageType } from '~/app.vue';


const emit = defineEmits<{
    (e: 'navigate', page: PageType): void
}>()
// Définition du type Project
// interface Project {
//     id: string
//     title: string
//     description: string
//     imageUrl?: string
//     link?: string
//     techs?: string[]
// }

// Données statiques (remplace plus tard par un fetch si tu veux)
// const projects: Project[] = [
//     {
//         id: 'p1',
//         title: 'Portfolio Nuxt 3',
//         description: 'Un site personnel moderne construit avec Nuxt 3 et TailwindCSS.',
//         imageUrl: '/images/projet1.png',
//         link: '#',
//         techs: ['Nuxt 3', 'TailwindCSS', 'TypeScript'],
//     },
//     {
//         id: 'p2',
//         title: 'API Machine Learning',
//         description: 'API de ML performante pour la classification d’images.',
//         imageUrl: '/images/projet2.png',
//         link: '#',
//         techs: ['Python', 'FastAPI', 'PyTorch'],
//     },
//     {
//         id: 'p3',
//         title: 'App Mobile',
//         description: 'Application mobile cross-platform en Flutter.',
//         imageUrl: '/images/projet3.png',
//         link: '#',
//         techs: ['Flutter', 'Dart'],
//     },
// ]
</script>

<template>
    <div class="h-full p-10 overflow-hidden">
        <div class="flex justify-center mb-5">
            <Navbar primary-page="Projects" :on-click="page => emit('navigate', page)" />
        </div>

        <div class="flex justify-center items-center h-full">
            <h1 class="text-5xl">
                (Coming Soon)
            </h1>
        </div>
    </div>
    
</template>
