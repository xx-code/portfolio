import React, { useEffect, useState } from 'react';
import IconContent from './components/IconContent';
import { useTranslation } from 'react-i18next';
import { IconItem } from './components/IconContent/iconTouch';

import './index.scss';

const actuSkill: Array<IconItem> = [
    {
        id: 'node_js',
        icon: 'node-js',
        selected: true
    },
    {
        id: 'react',
        icon: 'react',
        selected: false
    },
    {
        id: 'sass',
        icon: 'sass',
        selected: false
    },
    {
        id: 'html5',
        icon: 'html5',
        selected: false
    },
]

const mySkill: Array<IconItem> = [
    {
        id: 'trello',
        icon: 'trello',
        selected: false
    },
    {
        id: 'javascript',
        icon: 'js-square',
        selected: false
    },
    {
        id: 'python',
        icon: 'python',
        selected: false
    },
    {
        id: 'java',
        icon: 'java',
        selected: false
    },
    {
        id: 'css3',
        icon: 'css3-alt',
        selected: false
    },
    {
        id: 'express',
        icon: 'html5',
        selected: false
    },
    {
        id: 'android',
        icon: 'android',
        selected: false
    },
]

const Skills: React.FC = () => {
    const [skill, displaySkill] = useState(actuSkill[0])
    const { t } = useTranslation();

    const handleClickIconActu = (id: string) => {
        const indexOfSkill = actuSkill
        .map(item => item.id)
        .indexOf(id);
        displaySkill(actuSkill[indexOfSkill]); 
    }

    const handleClickIconKnow = (id: string) => {
        const indexOfSkill = mySkill
        .map(item => item.id)
        .indexOf(id);
        displaySkill(mySkill[indexOfSkill]); 
    }

    useEffect(() => {
        const skillsComponent = document.getElementById('skills');
        if (skillsComponent) {
            skillsComponent.style.opacity = '1'; 
        }
    });

    return (
        <div id="skills" className="container">
            <div className="row">
                <div className="content-left col-md-6">
                    <h1>{ t('skills_title') }</h1>
                    <div className="skills-use">
                        <h3><i className="fas fa-code-branch" /> { t('tools_use') }</h3>
                        <div className="skills">
                            <div className="skills-wrapper">
                                <IconContent 
                                    icons={actuSkill} 
                                    onChangeIconSelected={(id: string) => handleClickIconActu(id)} />
                            </div>
                        </div>
                        <h3><i className="fas fa-code-branch" /> { t('tools') }</h3>
                        <div className="skills">
                            <div className="skills-wrapper">
                                <IconContent 
                                    icons={mySkill} 
                                    onChangeIconSelected={(id: string) => handleClickIconKnow(id)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-right col-md-6">
                    <div className="skill-info">
                        <div className="skill-info-wrapper">
                            <div className="icon-wrapper">
                                <i className={`fab fa-${skill.icon}`} />
                            </div>
                            <div className="paragraph">
                                <p>Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis .</p>
                                <p>dives bonis omnibus terra, eiusque lateri dextro. Late distentis dives bonis omnibus terra, eiusque lateri dextro. Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. Late</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;