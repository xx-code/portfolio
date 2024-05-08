'use client';

import React, { useEffect, useState } from 'react';
import Loading from '../components/loading';
import ProjectList from './components/ProjectList';
import imag from '../images/project.jpg';

import './index.scss';

const fakeData = [
    {
        id: '1',
        title: 'project 1',
        description: 'dfsddfsdf sdaf sdffgyt fgyjujgeuroitndt ueiiot idtfosf dfoptgr ',
        preview: imag,
        images: [imag,imag,imag,],
        icon: imag,
        createdBy: 'Moi Meme'
    },
    {
        id: '2',
        title: 'project 2',
        description: 'dfsddfsdf sdaf sdffgyt fgyjujgeuroitndt ueiiot idtfosf dfoptgr ',
        images: [imag,imag,imag,],
        preview: imag,
        icon: imag,
        createdBy: 'Moi Meme'
    },
    {
        id: '3',
        title: 'project 3',
        preview: imag,
        description: 'dfsddfsdf sdaf sdffgyt fgyjujgeuroitndt ueiiot idtfosf dfoptgr ',
        images: [imag,imag,imag,],
        icon: imag,
        createdBy: 'Moi Meme'
    },
    {
        id: '4',
        title: 'project 4',
        description: 'dfsddfsdf sdaf sdffgyt fgyjujgeuroitndt ueiiot idtfosf dfoptgr ',
        images: [imag,imag,imag,],
        preview: imag,
        icon: imag,
        createdBy: 'Moi Meme'
    },
    {
        id: '5',
        title: 'project 5',
        description: 'dfsddfsdf sdaf sdffgyt fgyjujgeuroitndt ueiiot idtfosf dfoptgr ',
        images: [imag,imag,imag,],
        icon: imag,
        preview: imag,
        createdBy: 'Moi Meme'
    },
    {
        id: '6',
        title: 'project 6',
        description: 'dfsddfsdf sdaf sdffgyt fgyjujgeuroitndt ueiiot idtfosf dfoptgr ',
        images: [imag,imag,imag,],
        preview: imag,
        icon: imag,
        createdBy: 'Moi Meme'
    }
]

export default function Projects() {
    //const { t } = useTranslation();
    const [opacity, setOpactiy] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setOpactiy(1);
        }, 3500);
    }, [isLoading]);

    return(
        isLoading ? 
                    <Loading />
                  :

                    <div id="projects" style={{opacity: opacity}} className="container">
                        <div className="row custom-row">
                            <div className="content">
                                <h1>{'projects'}</h1>
                                <ProjectList list={fakeData} />
                            </div>
                        </div>
                    </div>
    );
};