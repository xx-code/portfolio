// mock 
export interface resumeType {
    title: string,
    detail: string,
    startDate: Date,
    endDate?: Date,
    isCurrent: boolean,
    type: string
}

const result: Array<resumeType> = [
    {
        title: 'Orion',
        startDate: new Date(2018, 6),
        endDate: new Date(2018, 9),
        isCurrent: false,
        type: 'Work',
        detail: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro'
    },
    {
        title: 'Bachelor in computer application',
        startDate: new Date(2016, 9),
        endDate: new Date(2020, 9),
        isCurrent: false,
        type: 'Education',
        detail: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro'
    },
    {
        title: 'Freelancer',
        startDate: new Date(2020, 9),
        endDate: undefined,
        isCurrent: true,
        type: 'Work',
        detail: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur'
    },
    {
        title: 'TechnoDream',
        startDate: new Date(2017, 1),
        endDate: new Date(2017, 4),
        isCurrent: false,
        type: 'Work',
        detail: 'Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro'
    },
    {
        title: 'TechnoDream',
        startDate: new Date(2022, 1),
        endDate: new Date(2022, 2),
        isCurrent: false,
        type: 'Work',
        detail: 'Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro'
    }
];

const fetchMyProfile = async () => {
    setTimeout(() => {

    }, 2600);

    return {
        username: 'roinuj',
        firstname: 'Auguste',
        lastname: 'Tiemele',
        picture: {
            cloudinaryUrl: 'https://res.cloudinary.com/dzeidb6lz/image/upload/v1657134941/hplet6wmkckomkysgs5x.jpg'
        }
    }
}

const fetchAllMyResume = async () => {

    setTimeout(() => {

    }, 2600);
    
    return result;
}

const fetchResume = async (id: number) => {
    setTimeout(() => {

    }, 1600);
    
    return result[id];
}

export {
    fetchAllMyResume,
    fetchResume,
    fetchMyProfile,
}