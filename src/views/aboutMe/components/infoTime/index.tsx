import React from 'react';
import PopUpOverLay from '../../../../components/popUpOverlay';
import BarType from '../timeline/barType';

import './index.scss';

interface Props {
    info: BarType
}

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

export default InfoTime