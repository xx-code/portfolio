'use client'

import React, { useEffect, useState } from 'react';
import IconContent from './components/IconContent';
import BarSkill from './components/barSkill';
import Loading from '../components/loading';
import SortLoading from '../components/sortLoading';
import { iconItem } from './components/types';
import { skillType, fetchAllSkills, fetchSkill } from '../services/skills';

import './index.scss';


const Skills: React.FC = () => {
    const defaultListSkill: Array<skillType> = []
    let defaultSkill: skillType|undefined;
    // const { t } = useTranslation();

    let defaultSkillDetail = {title: "intermediate", detail: "intermediate_detail" }; 
    const [isLoading, setIsLoading] = useState(true); 
    const [actuSkills, setActuSkills] = useState(defaultListSkill);
    const [mySkills, setMySkills] = useState(defaultListSkill);
    const [skill, displaySkill] = useState(defaultSkill);
    const [skillDetail, setSkillDetail] = useState(defaultSkillDetail);
    const [isLoadingDisplay, setIsLoadingDisplay] = useState(true);

    const renderLevelDetail = (level: number) => {
        if (level <= 1)
            return {title: "basic", detail:"basic_detail" };
        else if (level == 2)
            return {title: "intermediate", detail:"intermediate_detail" };
        else if (level == 3)
            return {title: "advance", detail:"advance_detail" };
        else if (level >= 4)
            return {title: "expert", detail:"expert_detail" };
        return {title: "intermediate", detail:"intermediate_detail" };;
    }

    const handleClickIcon = async (id: string) => {
        setIsLoadingDisplay(true);
        const skill = await fetchSkill(id);
        displaySkill(skill);
        setIsLoadingDisplay(false);
        setSkillDetail(renderLevelDetail(skill.level));
    }

    useEffect(() => {
        const fetchData = async () => {
            const skills = await fetchAllSkills();
            const actu: Array<skillType> = skills.filter(item => item.isCurrentlyUseful);
            const knew: Array<skillType> = skills.filter(item => !item.isCurrentlyUseful);

            setActuSkills(actu);
            setMySkills(knew);
            displaySkill(actu[0]);
            const skillsComponent = document.getElementById('skills');
            if (skillsComponent) {
                skillsComponent.style.opacity = '1'; 
            }
            setIsLoadingDisplay(false);
            setIsLoading(false);
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 3500);
        
        fetchData();
    }, [isLoading]);

    return (
        isLoading  ?
                    <Loading />
                  :
                    <div id="skills" className="container">
                        <div className="row">
                            <div className="content-left col-md-6">
                                <h1>{ 'skills_title' }</h1>
                                <div className="skills-use">
                                    <h3><i className="fas fa-code-branch" /> { 'tools_use' }</h3>
                                    <div className="skills">
                                        <div className="skills-wrapper">
                                            <IconContent 
                                                icons={actuSkills} 
                                                onChangeIconSelected={(id: string) => handleClickIcon(id)}
                                                idIconSelected={skill !== undefined? skill.id : '0'} />
                                        </div>
                                    </div>
                                    <h3><i className="fas fa-code-branch" /> { 'tools' }</h3>
                                    <div className="skills">
                                        <div className="skills-wrapper">
                                            <IconContent 
                                                icons={mySkills} 
                                                onChangeIconSelected={(id: string) => handleClickIcon(id)}
                                                idIconSelected={skill !== undefined? skill.id : '0'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-right col-md-6">
                                <div className="skill-info">
                                    {
                                        isLoadingDisplay ?
                                                        <SortLoading />
                                                        :
                                                        <div className="skill-info-wrapper">
                                                            <div className="icon-wrapper">
                                                                <i className={`fab devicon-${skill?.icon} colored`} />
                                                            </div>
                                                            <div className="paragraph">
                                                                <h3>{skill?.title}</h3>
                                                            </div>
                                                            <BarSkill level={skill?.level ? skill.level : 0} />
                                                            <div className="detail">
                                                                <h5>{skillDetail.title}</h5>
                                                                <p>{skillDetail.detail}</p>
                                                            </div>
                                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
    );
};

export default Skills;