import React, { useEffect } from 'react';

import './index.scss';

const Projects: React.FC = () => {

    useEffect(() => {
        const projectsComponent = document.getElementById('projects');
        if (projectsComponent) {
            projectsComponent.style.opacity = '1'; 
        }
    });

    return(
        <div id="projects" className="container-fluid">

        </div>
    );
};

export default Projects;
