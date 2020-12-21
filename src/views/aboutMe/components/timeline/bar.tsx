import React from 'react';
import PopUpOverLay from '../../../../components/popUpOverlay';
import { bar } from '../types';
 
import './index.scss';

interface Props {
    info: bar
};


const InfoTime: React.FC<Props> = ({ info }) => {
    const {id, time, title, content, color } = info;

    return(
        <PopUpOverLay id={id}  >
            <div className="info-time">
                <div className="info-time-wrapper">
                    <h2 style={{color}}>{`${time.startTime} - ${time.endTime}`}</h2>
                    <div className="para">
                        <h3>{ title }</h3>
                        <p>{ content }</p>
                    </div>
                </div>
            </div>
        </PopUpOverLay>
    );
};

const Bar: React.FC<Props> = ({ info }) => {
    const {id, time, title, content, color, widthBarInPercent, startPointInPercent } = info;

    const displayPopUpInfo = () => {
        const currentPopup = document.getElementById(`popup-${id}`);
        if (currentPopup) {
            currentPopup.classList.remove('close-popup');
            currentPopup.classList.add('open-popup');
        }
    };

    return(
        <div className="bar" >
            <div 
                onClick={() => displayPopUpInfo()}
                className="bar-content" 
                style={{
                            backgroundColor: color, 
                            width: `${widthBarInPercent}%`,
                            left: `${startPointInPercent}%`,
                        }} >
                <span style={{color: color}}>{ time.startTime }</span>
            </div>
            <InfoTime 
                info={{
                    id: id,
                    color: color,
                    time: time,
                    title: title,
                    content: content,
                }}    
            />
        </div>
    );
};

export default Bar;