import React, { useEffect, useState } from 'react';
import IconContent from './components/IconContent';
import Loading from '../../components/loading';
import { useTranslation } from 'react-i18next';
import { iconItem } from './components/types'

import './index.scss';

const actuSkill: Array<iconItem> = [
    {
        id: 'node_js',
        icon: 'nodejs-plain',
    },
    {
        id: 'react',
        icon: 'react-original',
    },
    {
        id: 'sass',
        icon: 'sass-original',
    },
    {
        id: 'html5',
        icon: 'html5-plain',
    },
]

const mySkill: Array<iconItem> = [
    {
        id: 'trello',
        icon: 'trello-plain',
    },
    {
        id: 'javascript',
        icon: 'javascript-plain',
    },
    {
        id: 'python',
        icon: 'python-plain',
    },
    {
        id: 'java',
        icon: 'java-plain',
    },
    {
        id: 'css3',
        icon: 'css3-plain',
    },
    {
        id: 'express',
        icon: 'express-original',
    },
    {
        id: 'android',
        icon: 'android-plain',
    },
    {
        id: 'redux',
        icon: 'redux-original',
    },
    {
        id: 'photoshop',
        icon: 'photoshop-plain',
    },
    {
        id: 'mysql',
        icon: 'mysql-plain',
    }
]

const Skills: React.FC = () => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true); 
    const [skill, displaySkill] = useState(actuSkill[0]);

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
        setTimeout(() => {
            setIsLoading(false);
            const skillsComponent = document.getElementById('skills');
            if (skillsComponent) {
                skillsComponent.style.opacity = '1'; 
            }
        }, 3500);
    }, [isLoading]);

    return (
        isLoading ?
                    <Loading />
                  :
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
                                                onChangeIconSelected={(id: string) => handleClickIconActu(id)}
                                                idIconSelected={skill.id} />
                                        </div>
                                    </div>
                                    <h3><i className="fas fa-code-branch" /> { t('tools') }</h3>
                                    <div className="skills">
                                        <div className="skills-wrapper">
                                            <IconContent 
                                                icons={mySkill} 
                                                onChangeIconSelected={(id: string) => handleClickIconKnow(id)}
                                                idIconSelected={skill.id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-right col-md-6">
                                <div className="skill-info">
                                    <div className="skill-info-wrapper">
                                        <div className="icon-wrapper">
                                            <i className={`fab devicon-${skill.icon} colored`} />
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