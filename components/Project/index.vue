<script setup lang="ts">
// Définition du type Project
interface Project {
    id: string
    title: string
    description: string
    imageUrl?: string
    link?: string
    techs?: string[]
}

// Données statiques (remplace plus tard par un fetch si tu veux)
const projects: Project[] = [
    {
        id: 'p1',
        title: 'Portfolio Nuxt 3',
        description: 'Un site personnel moderne construit avec Nuxt 3 et TailwindCSS.',
        imageUrl: '/images/projet1.png',
        link: '#',
        techs: ['Nuxt 3', 'TailwindCSS', 'TypeScript'],
    },
    {
        id: 'p2',
        title: 'API Machine Learning',
        description: 'API de ML performante pour la classification d’images.',
        imageUrl: '/images/projet2.png',
        link: '#',
        techs: ['Python', 'FastAPI', 'PyTorch'],
    },
    {
        id: 'p3',
        title: 'App Mobile',
        description: 'Application mobile cross-platform en Flutter.',
        imageUrl: '/images/projet3.png',
        link: '#',
        techs: ['Flutter', 'Dart'],
    },
]
</script>

<template>
    <section id="project" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-6 py-12">
        <div class="w-full max-w-6xl">
            <h2 class="text-4xl font-bold text-center mb-12">{{ $t("Project.title") }}</h2>

            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="proj in projects"
                    :key="proj.id"
                    class="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                    <div v-if="proj.imageUrl" class="h-48 w-full overflow-hidden">
                        <img :src="proj.imageUrl" :alt="proj.title" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>

                    <div class="flex flex-col flex-1 p-6">
                        <h3 class="text-2xl font-semibold mb-2">{{ proj.title }}</h3>
                        <p class="text-gray-300 flex-1">{{ proj.description }}</p>

                        <div v-if="proj.techs" class="flex flex-wrap gap-2 mt-4">
                            <span
                                v-for="tech in proj.techs"
                                :key="tech"
                                class="bg-gray-700 text-sm px-3 py-1 rounded-full"
                            >
                                {{ tech }}
                            </span>
                        </div>

                        <div class="mt-6">
                            <a
                                v-if="proj.link"
                                :href="proj.link"
                                target="_blank"
                                class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                                Voir le projet
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
