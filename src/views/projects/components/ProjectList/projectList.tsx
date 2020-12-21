import React, { useState } from 'react';
import ProjectDetails from './projectDetail';
import { project } from './types';
import './index.scss';

interface propsProjct {
    project: project
}

interface props {
    list: Array<project>
}

const Project: React.FC<propsProjct> = ({ project }) => {
    const [isDisplay, setIsDisplay] = useState(false);
    const displayPopUpDetail = (isDisplay: boolean) => {
        setIsDisplay(isDisplay);
    };

    return(
        <div className="col-md-4 project-col" onClick={() => displayPopUpDetail(true)}>
            <div className="project">
                <div className="project-wrapper">
                    <img src={project.preview} alt={`project-${project.id}`} />
                </div>
            </div>
            <div className="overlay-info-display">
                <i className="far fa-eye"></i>
            </div>
            <ProjectDetails 
                project={project}
                isDisplay={isDisplay}
                onClose={() => displayPopUpDetail(false)} />
        </div>
    );
};

const ProjectList: React.FC<props> = ({ list }) => {
    return(
        <div className="project-list-wrapper">
            <div className="row">
                {
                    list.map((project, index) => {
                        return <Project 
                                    key={project.id}
                                    project={project} />
                    })
                }
            </div>
        </div>
    );
};

export default ProjectList;