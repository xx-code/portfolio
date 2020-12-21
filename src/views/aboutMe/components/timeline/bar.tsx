import React, { useState } from 'react';
import PopUpOverLay from '../../../../components/popUpOverlay';
import { bar } from '../types';
 
import './index.scss';

interface PropsInfoTime {
    info: bar,
    isDisplay: boolean,
    onClose: () => void
};

interface PropsBar {
    info: bar
};


const InfoTime: React.FC<PropsInfoTime> = ({ info, isDisplay, onClose }) => {
    const {id, time, title, content, color } = info;

    return(
        <PopUpOverLay 
            id={id} 
            isDisplay={isDisplay}
            onClose={onClose} >
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

const Bar: React.FC<PropsBar> = ({ info }) => {
    const {id, time, title, content, color, widthBarInPercent, startPointInPercent } = info;
    const [isDisplay, setIsDisplay] = useState(false);

    const displayPopUpInfo = (isDisplay: boolean) => {
        setIsDisplay(isDisplay);
    };

    return(
        <div className="bar" >
            <div 
                onClick={() => displayPopUpInfo(true)}
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
                isDisplay={isDisplay}
                onClose={() => displayPopUpInfo(false)}
            />
        </div>
    );
};

export default Bar;