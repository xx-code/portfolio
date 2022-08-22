import { useDebugValue } from "react";

export interface skillType {
    id: string,
    title: string,
    description: string,
    icon: string,
    level: number,
    isCurrentlyUseful: boolean
}

const result: Array<skillType> = [
    {
        id: '0',
        title: 'Nodejs',
        description: '',
        icon: 'nodejs-plain',
        level: 4,
        isCurrentlyUseful: true
    },
    {
        id: '1',
        title: 'React',
        description: '',
        icon: 'react-original',
        level: 4,
        isCurrentlyUseful: true
    },
    {
        id: '2',
        title: 'Sass',
        description: '',
        icon: 'sass-original',
        level: 3,
        isCurrentlyUseful: true
    },
    {
        id: '3',
        title: 'Html5',
        description: '',
        icon: 'html5-plain',
        level: 4,
        isCurrentlyUseful: true
    },
    {
        id: '4',
        title: 'Javascript',
        description: '',
        icon: 'javascript-plain',
        level: 4,
        isCurrentlyUseful: true
    },
    {
        id: '5',
        title: 'Python',
        description: '',
        icon: 'python-plain',
        level: 3,
        isCurrentlyUseful: true
    },
    {
        id: '6',
        title: 'Java',
        description: '',
        icon: 'java-plain',
        level: 2,
        isCurrentlyUseful: false
    },
    {
        id: '7',
        title: 'css3',
        description: '',
        icon: 'css3-plain',
        level: 4,
        isCurrentlyUseful: true
    },
    {
        id: '8',
        title: 'express',
        description: '',
        icon: 'express-original',
        level: 4,
        isCurrentlyUseful: true
    },
    {
        id: '9',
        title: 'Android',
        description: '',
        icon: 'android',
        level: 2,
        isCurrentlyUseful: false
    },
    {
        id: '10',
        title: 'Redux',
        description: '',
        icon: 'redux-original',
        level: 3,
        isCurrentlyUseful: true
    },
    {
        id: '11',
        title: 'photoshop',
        description: '',
        icon: 'photoshop-plain',
        level: 1,
        isCurrentlyUseful: false
    },
    {
        id: '12',
        title: 'mysql',
        description: '',
        icon: 'mysql-plain',
        level: 3,
        isCurrentlyUseful: false
    },
]

const fetchAllSkills = async () => {
    setTimeout(() => {

    }, 2600);
    
    return result;
}

const fetchSkill: (id: string) => Promise<skillType> = async (id) => {
    return new Promise<skillType>((resolve, reject) => setTimeout(() => {
        const indexValue = result
        .map(item => item.id)
        .indexOf(id)
        resolve(result[indexValue]); 
    }, 1000));
}

export {
    fetchAllSkills,
    fetchSkill
}