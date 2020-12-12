import React from 'react';
import PopUpOverLay from '../../../../components/popUpOverlay';

import './index.scss';

const InfoTime = ({ info }) => {
    const {id, time, title, content, color } = info;

    return(
        <PopUpOverLay id={id} >
            <div className="info-time">
                <div className="info-time-wrapper">
                    <h1 style={{color}}>{`${time.startTime} - ${time.endTime}`}</h1>
                    <div className="para">
                        <h3>{ title }</h3>
                        <p>{ content }</p>
                    </div>
                </div>
            </div>
        </PopUpOverLay>
    );
};

export default InfoTime