const result = [
    {
        title: 'Nodejs',
        description: '',
        icon: 'nodejs-plain',
        level: 8,
        isCurrentlyUseful: true
    },
    {
        title: 'React',
        description: '',
        icon: 'react-original',
        level: 8,
        isCurrentlyUseful: true
    },
    {
        title: 'Sass',
        description: '',
        icon: 'sass-original',
        level: 7,
        isCurrentlyUseful: true
    },
    {
        title: 'Html5',
        description: '',
        icon: 'html5-plain',
        level: 9,
        isCurrentlyUseful: true
    },
    {
        title: 'Javascript',
        description: '',
        icon: 'javascript-plain',
        level: '',
        isCurrentlyUseful: true
    },
    {
        title: 'Python',
        description: '',
        icon: 'python-plain',
        level: '',
        isCurrentlyUseful: true
    },
    {
        title: 'Java',
        description: '',
        icon: 'java-plain',
        level: '',
        isCurrentlyUseful: false
    },
    {
        title: 'css3',
        description: '',
        icon: 'css3-plain',
        level: '',
        isCurrentlyUseful: true
    },
    {
        title: 'express',
        description: '',
        icon: 'express-original',
        level: 6,
        isCurrentlyUseful: true
    },
    {
        title: 'Android',
        description: '',
        icon: 'android',
        level: 5,
        isCurrentlyUseful: false
    },
    {
        title: 'Redux',
        description: '',
        icon: 'redux-original',
        level: 5,
        isCurrentlyUseful: true
    },
    {
        title: 'photoshop',
        description: '',
        icon: 'photoshop-plain',
        level: '',
        isCurrentlyUseful: false
    },
    {
        title: 'mysql',
        description: '',
        icon: 'mysql-plain',
        level: 8,
        isCurrentlyUseful: false
    },
]

const fetchAllSkills = async () => {
    setTimeout(() => {

    }, 2600);
    
    return result;
}

const fetchSkill = async (id: number) => {
    setTimeout(() => {

    }, 1600);
    
    return result[id];
}

export {
    fetchAllSkills,
    fetchSkill
}