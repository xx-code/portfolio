import React from 'react';
import { useTranslation } from 'react-i18next';
import Bar from './bar';

import './index.scss';

const TimeLine = () => {
    const { t } = useTranslation();

    return(
        <div className="time-line">
            <div className="time-line-wrapper">
                <div className="time-line-bar">
                    <Bar 
                        color="#0C83FD"
                        startPointInPercent={85}
                        widthBarInPercent={15}
                        years={2020} />
                    <Bar 
                        color="#ED1E79"
                        startPointInPercent={45}
                        widthBarInPercent={18}
                        years={2018} />
                    <Bar 
                        color="#47DE3A"
                        startPointInPercent={15}
                        widthBarInPercent={20}
                        years={2017} />
                    <Bar 
                        color="#FFB801"
                        startPointInPercent={0}
                        widthBarInPercent={80}
                        years={2016} />
                </div>
                <div className="time-bar" />
                <div className="label">
                    <span className="label-left" >{t('after_high_school')}</span>
                    <span className="label-right" >{t('now')}</span>
                </div>
            </div>
        </div>
    );
};

export default TimeLine;