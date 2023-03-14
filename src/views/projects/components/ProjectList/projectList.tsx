import React, { useState } from 'react';
import { project } from './types';
import './index.scss';

interface propsProjectItem {
    project: project
    visibiliy: boolean
    partialVisibility: boolean
}

interface props {
    list: Array<project>
}

const ProjectListActionButton: React.FC = () => {
    return (
        <div className="project-list-action-button">
            <button/>
        </div>
    )
}

const ProjectListItem: React.FC<propsProjectItem> = ({ visibiliy, project, partialVisibility }) => {
    const [isDisplay, setIsDisplay] = useState(false);

    return(
        <div className={`project-list-item project-list-item-${visibiliy ? 'visible' : ''} project-list-item-${partialVisibility ? 'partial' : ''}`}>
            <img src={project.preview} alt={`project-${project.id}`} />
        </div>
    );
};

const ProjectListItemInfo: React.FC<{project: project}> = ({ project }) => {
    return (
        <div className="project-list-item-info">
            <h2>{ project.title }</h2>
            <div>
            </div>
        </div>
    );
};

const ProjectIndicator: React.FC = ({ }) => {
    return (
        <div>

        </div>
    );
};

const ProjectList: React.FC<props> = ({ list }) => {
    return(
        <div className="project-list-wrapper">
            <div className="carousel">
                <ProjectListActionButton />
                <div className="carousel-content">
                    <ProjectListItem project={list[0]} visibiliy={false} partialVisibility={false} />
                    <ProjectListItem project={list[0]} visibiliy={false} partialVisibility={true} />
                    <ProjectListItem project={list[1]} visibiliy={true} partialVisibility={false} />
                    <ProjectListItem project={list[2]} visibiliy={false} partialVisibility={true} />
                    <ProjectListItem project={list[2]} visibiliy={false} partialVisibility={false} />  
                </div>
                <ProjectListActionButton />
            </div>
            <ProjectListItemInfo project={list[0]} />
        </div>
    );
};

export default ProjectList;