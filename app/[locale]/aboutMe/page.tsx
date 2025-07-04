'use client';

import React, { useEffect, useState } from 'react'; 
import Loading from '../../components/loading';
import TimeLine from './components/timeline';
import { fetchAllMyResume, resumeType } from '../../services/aboutMe';

import './index.scss';
import { useTranslations } from 'next-intl';

export default function AboutMe() {
    const defaultResumes: Array<resumeType> = [];
    const t = useTranslations('AboutMe');
    const [isLoading, setIsLoading] = useState(true);
    const [resumes, setResumes] = useState(defaultResumes);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAllMyResume();
            
            setResumes(data);
            const aboutMeComponent = document.getElementById('about-me');
            if (aboutMeComponent) {
                aboutMeComponent.style.opacity = '1'; 
            }
            setIsLoading(false);
        }
        fetchData();
    }, [isLoading]);
    
    return(
        isLoading ?
                    <Loading />
                  :
                    <div id="about-me" className="container">
                        <div className="flex">
                            <div className="content-left col-md-8">
                                <h1>{t('about_me')}</h1>
                                <div className="paragraph col-12">
                                    <p>{t('para_1')}</p>
                                    <p>{t('para_2')}</p>
                                    <p>{t('para_3')}</p>
                                </div>
                                <TimeLine data={resumes} />
                            </div>
                            <div className="content-right col-md-4">
                                <div className="bubble">
                                    <div className="bubble-wrapper">
                                        <div className="bubble-A">
                                            <h1>A</h1>
                                        </div>
                                        <div className="bubble-B"></div>
                                        <div className="bubble-C"></div>
                                        <div className="bubble-D"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
};