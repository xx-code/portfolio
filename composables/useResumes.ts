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
            {title: 'Reactjs/React-Native', color: ''},
            {title: 'TypeScript', color: ''},
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
            {title: 'Reactjs/React-Native', color: ''},
            {title: 'TypeScript', color: ''},
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
            {title: 'Java/Android', color: ''},
            {title: 'Reactjs', color: ''},
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
            {title: 'Sap Application Integration', color: ''},
            {title: 'XML', color: ''},
            {title: 'SQLServer', color: ''},
            {title: 'Oracle', color: ''},
            {title: 'Sap/Hana', color: ''},
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
            {title: 'Machine Learning', color: ''},
            {title: 'Renforcing Learning', color: ''},
            {title: 'Python/Pytorch', color: ''},
            {title: 'Jupiter/Notebook', color: ''},
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
            {title: 'Python/Pytorch', color: ''},
            {title: 'Jupiter/Notebook', color: ''},
            {title: 'Recommandation System', color: ''},
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
            {title: 'System Design', color: ''},
            {title: 'Code Arch/Clean Arch', color: ''},
            {title: 'Dotnet/Aps.net', color: ''},
            {title: 'Vue/Nuxt.js', color: ''},
            {title: 'Swift/SwiftUi', color: ''},
            {title: 'CI/CD', color: ''},
        ]
    },
];

export default function useResumes(): ResumeType[] {
    return resumeData.sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
}