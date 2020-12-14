import React from 'react';
import InfoTime from '../infoTime';
import BarType from './barType';

import './index.scss';

interface Props {
    info: BarType
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