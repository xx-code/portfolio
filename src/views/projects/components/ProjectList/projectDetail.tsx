import React from 'react';
import { useTranslation } from 'react-i18next';
import PopUpOverlay from '../../../../components/popUpOverlay';
import Button from '../../../../components/button';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { project } from './types';

import './index.scss';


interface props {
    project: project
}

const ProjectDetails: React.FC<props> = ({ project }) => {
    const { t } = useTranslation();

    return(
        <PopUpOverlay id={`project-${ project.id }`} >
            <div className="project-detail">
                <div className="project-detail-wrapper">
                    <div className="title-info">
                        <div className="title-info-wrapper">
                            <img src={ project.icon } alt={ project.id } />
                            <h1>{ project.title }</h1>
                        </div>
                        <div className="title-info-button-wrapper">
                            <Button 
                                className="button-visit"
                                label={t('visit')}
                                onClick={() => {}} />
                        </div>
                    </div>
                    <div className="description">
                        <div className="description-wrapper">
                            <h3>{t(`descritpion`)}</h3>
                            <p>{ project.description }</p>
                        </div>
                    </div>
                    <div className="carousel">
                        <div className="carousel-wrapper">
                            <CarouselProvider
                                naturalSlideHeight={200}
                                naturalSlideWidth={200}
                                totalSlides={project.images.length} 
                                visibleSlides={1} 
                                infinite >
                                    <Slider>
                                        {
                                            project.images.map((image, index) => {
                                                return(
                                                    <Slide 
                                                        key={`${index}`} 
                                                        index={index}>
                                                            <div className="image-slide">
                                                               <img src={image} alt={`${index}`} /> 
                                                            </div>
                                                    </Slide>
                                                )
                                            })
                                        }
                                    </Slider>
                            </CarouselProvider>
                        </div>
                    </div>
                </div>
            </div>
        </PopUpOverlay>
    );
};

export default ProjectDetails;