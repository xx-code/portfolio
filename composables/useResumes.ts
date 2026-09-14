export type TypeResume = 'work' | 'study' 

export interface ResumeType {
    title: string,
    detail: string,
    startDate: Date,
    endDate?: Date,
    isCurrent: boolean,
    place: string,
    type: TypeResume,
    tags: {title: string, color: string}[]
}

const resumeData: Array<ResumeType> = [
    {
        title: 'Junior FullStack',
        startDate: new Date(2018, 6),
        endDate: new Date(2018, 9),
        isCurrent: false,
        place: 'Orion',
        detail: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro',
        type: 'work',
        tags: [
            { title: 'Reactjs/React-Native', color: '#61DAFB' },
            { title: 'TypeScript', color: '#3178C6' },
        ]
    },
    {
        title: 'Bachelor in computer application',
        startDate: new Date(2016, 10),
        endDate: new Date(2020, 10),
        isCurrent: false,
        place: 'Amity University',
        detail: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro',
        type: 'study',
        tags: []
    },
    {
        title: 'FullStack Freelancer',
        startDate: new Date(2020, 9),
        endDate: new Date(2022, 1),
        isCurrent: false,
        place: 'a mon compte',
        detail: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur',
        type: 'work',
        tags: [
            { title: 'Reactjs/React-Native', color: '#61DAFB' },
            { title: 'TypeScript', color: '#3178C6' },
        ]
    },
    {
        title: 'Junior Android developper',
        startDate: new Date(2017, 1),
        endDate: new Date(2017, 10),
        isCurrent: false,
        place: 'TechnoDream',
        detail: 'Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro',
        type: 'work',
        tags: [
            { title: 'Java/Android', color: '#3DDC84' },
            { title: 'Reactjs', color: '#61DAFB' },
        ]
    },
    {
        title: 'Stagaire Consultant',
        startDate: new Date(2021, 1),
        endDate: new Date(2021, 10),
        isCurrent: false,
        place: ' Safir a Consulting',
        detail: 'Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro',
        type: 'work',
        tags: [
            { title: 'Sap Application Integration', color: '#008FD3' },
            { title: 'XML', color: '#E34F26' },
            { title: 'SQLServer', color: '#CC292B' },
            { title: 'Oracle', color: '#F80000' },
            { title: 'Sap/Hana', color: '#008FD3' },
        ]
    },
    {
        title: 'Maitrise Informatique Intelligence Artificiel',
        startDate: new Date(2021, 7),
        endDate: new Date(2024, 4),
        isCurrent: false,
        place: 'Universite Laval',
        detail: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro',
        type: 'study',
        tags: [
            { title: 'Machine Learning', color: '#FF6F00' },
            { title: 'Renforcing Learning', color: '#8E44AD' },
            { title: 'Python/Pytorch', color: '#EE4C2C' },
            { title: 'Jupiter/Notebook', color: '#F37626' },
        ]
    },
    {
        title: 'Stagaire In Intelligence Artificiel',
        startDate: new Date(2023, 9),
        endDate: new Date(2024, 4),
        isCurrent: false,
        place: 'MTY Group Inc.',
        detail: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro',
        type: 'study',
        tags: [
            { title: 'Python/Pytorch', color: '#EE4C2C' },
            { title: 'Jupiter/Notebook', color: '#F37626' },
            { title: 'Recommandation System', color: '#008080' },
        ]
    },
    {
        title: 'Lead developper',
        startDate: new Date(2024, 5),
        endDate: undefined,
        isCurrent: true,
        place: 'MTY Group Inc.',
        detail: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro',
        type: 'work',
        tags: [
            { title: 'System Design', color: '#4A90E2' },
            { title: 'Code Arch/Clean Arch', color: '#10B981' },
            { title: 'Dotnet/Aps.net', color: '#512BD4' },
            { title: 'Vue/Nuxt.js', color: '#4FC08D' },
            { title: 'Swift/SwiftUi', color: '#F05138' },
            { title: 'CI/CD', color: '#2563EB' },
        ]
    },
];

export default function useResumes(): ResumeType[] {
    return resumeData.sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
}