import img from '../images/project.jpg';

const result = [
    {
        name: 'project 1',
        description: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro',
        owner: {
            isRegister: true,
            user: {
                username: 'roinuj',
                firstname: 'Auguste',
                lastname: 'Tiemele',
                picture: {
                    cloudinaryUrl: 'https://res.cloudinary.com/dzeidb6lz/image/upload/v1657134941/hplet6wmkckomkysgs5x.jpg'
                }
            }
        },
        cover: {
            cloudinaryUrl: img
        },
        icon: {
            cloudinaryUrl: img
        },
        creationDate: new Date(2018, 5),
        updateDate: new Date(2018, 5),
        developpers: [
            {
                isRegister: true,
                user: {
                    username: 'roinuj',
                    firstname: 'Auguste',
                    lastname: 'Tiemele',
                    picture: {
                        cloudinaryUrl: 'https://res.cloudinary.com/dzeidb6lz/image/upload/v1657134941/hplet6wmkckomkysgs5x.jpg'
                    }
                }
            }, 
            {
                isRegister: false,
                name: 'Client' 
            }
        ],
        Gallery: [
            {
                cloudinaryUrl: img
            },
            {
                cloudinaryUrl: img
            }
        ]
    },
    {
        name: 'projet 2',
        description: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro',
        owner: {
            isRegister: false,
            name: 'Client' 
        },
        cover: {
            cloudinaryUrl: img
        },
        icon: {
            cloudinaryUrl: img
        },
        creationDate: new Date(),
        updateDate: new Date(),
        developpers: [
            {
                isRegister: true,
                user: {
                    username: 'roinuj',
                    firstname: 'Auguste',
                    lastname: 'Tiemele',
                    picture: {
                        cloudinaryUrl: 'https://res.cloudinary.com/dzeidb6lz/image/upload/v1657134941/hplet6wmkckomkysgs5x.jpg'
                    }
                }
            }, 
            {
                isRegister: false,
                name: 'client' 
            }
        ],
        Gallery: [
            {
                cloudinaryUrl: img
            },
            {
                cloudinaryUrl: img
            }
        ]
    },
    {
        name: 'Project 3',
        description: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro',
        owner: {
            isRegister: false,
            name: 'Client' 
        },
        cover: {
            cloudinaryUrl: img
        },
        icon: {
            cloudinaryUrl: img
        },
        creationDate: new Date(2020, 4),
        updateDate: new Date(2020, 4),
        developpers: [
            {
                isRegister: true,
                user: {
                    username: 'roinuj',
                    firstname: 'Auguste',
                    lastname: 'Tiemele',
                    picture: {
                        cloudinaryUrl: 'https://res.cloudinary.com/dzeidb6lz/image/upload/v1657134941/hplet6wmkckomkysgs5x.jpg'
                    }
                }
            }, 
            {
                isRegister: false,
                name: 'Client' 
            }
        ],
        Gallery: [
            {
                cloudinaryUrl: img
            },
            {
                cloudinaryUrl: img
            }
        ]
    },
]

const fetchAllProjects = async () => {
    setTimeout(() => {

    }, 2600);
    
    return result;
}

const fetchProject = async (id: number) => {
    setTimeout(() => {

    }, 2600);
    
    return result[id];
}

export {
    fetchAllProjects,
    fetchProject
}