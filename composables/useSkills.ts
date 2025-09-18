export interface SkillType {
    id: string,
    title: string,
    description: string,
    icon: string,
    level: number,
    isCurrentlyUseful: boolean
}

const data: Array<SkillType> = [
    {
        id: '0',
        title: 'Nodejs',
        description: '',
        icon: 'i-devicon-nodejs',
        level: 4,
        isCurrentlyUseful: true
    },
    {
        id: '1',
        title: 'React',
        description: '',
        icon: 'i-devicon-react',
        level: 4,
        isCurrentlyUseful: false
    },
    {
        id: 'next',
        title: 'Nextjs',
        description: '',
        icon: 'i-devicon-nextjs',
        level: 4,
        isCurrentlyUseful: false
    },
    {
        id: 'vue',
        title: 'Vuejs',
        description: '',
        icon: 'i-devicon-vuejs',
        level: 4,
        isCurrentlyUseful: true
    },
    {
        id: 'nuxt',
        title: 'Nuxtjs',
        description: '',
        icon: 'i-devicon-nuxtjs',
        level: 4,
        isCurrentlyUseful: true
    },
    {
        id: '2',
        title: 'Sass',
        description: '',
        icon: 'i-devicon-sass',
        level: 3,
        isCurrentlyUseful: true
    },
    {
        id: '3',
        title: 'Html5',
        description: '',
        icon: 'i-devicon-html5',
        level: 4,
        isCurrentlyUseful: true
    },
    {
        id: '4',
        title: 'Javascript',
        description: '',
        icon: 'i-devicon-typescript',
        level: 4,
        isCurrentlyUseful: true
    },
    {
        id: '5',
        title: 'Python',
        description: '',
        icon: 'i-devicon-python',
        level: 3,
        isCurrentlyUseful: true
    },
    {
        id: '6',
        title: 'Java',
        description: '',
        icon: 'i-devicon-java',
        level: 2,
        isCurrentlyUseful: false
    },
    {
        id: '7',
        title: 'css3',
        description: '',
        icon: 'i-devicon-css3',
        level: 4,
        isCurrentlyUseful: true
    },
    {
        id: '15',
        title: 'FastApi',
        description: '',
        icon: 'i-devicon-fastapi',
        level: 3,
        isCurrentlyUseful: true
    },
    {
        id: 'dotnet',
        title: 'Dotnet',
        description: '',
        icon: 'i-devicon-dot-net',
        level: 4,
        isCurrentlyUseful: true
    },
    {
        id: 'csharp',
        title: 'C#',
        description: '',
        icon: 'i-devicon-csharp',
        level: 4,
        isCurrentlyUseful: true
    },
    {
        id: '9',
        title: 'Android',
        description: '',
        icon: 'i-devicon-androidstudio',
        level: 2,
        isCurrentlyUseful: false
    },
    {
        id: 'kotlin',
        title: 'Kotlin',
        description: '',
        icon: 'i-devicon-kotlin',
        level: 2,
        isCurrentlyUseful: false
    },
    {
        id: 'swift',
        title: 'Swift',
        description: '',
        icon: 'i-devicon-swift',
        level: 2,
        isCurrentlyUseful: false
    },
    {
        id: '12',
        title: 'mysql',
        description: '',
        icon: 'i-devicon-mysql',
        level: 3,
        isCurrentlyUseful: false
    },
    {
        id: 'postgre',
        title: 'Postgresql',
        description: '',
        icon: 'i-devicon-postgresql',
        level: 3,
        isCurrentlyUseful: true 
    },
    {
        id: 'mongodb',
        title: 'MongoDb',
        description: '',
        icon: 'i-devicon-mongodb',
        level: 3,
        isCurrentlyUseful: false
    },
]

export function useSkills(): Ref<SkillType[]>  {
    const results = ref<SkillType[]>(data)

    return results
}