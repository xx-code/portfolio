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
                        info={{
                            id: '5',
                            title: 'Freelancer',
                            content: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro',
                            color:"#0C83FD",
                            startPointInPercent: 85,
                            widthBarInPercent: 15,
                            time: {
                                startTime: 2020,
                                endTime: t('now')
                            },
                        }} />
                    <Bar 
                        info={{
                            id: '4',
                            title: 'Orion',
                            content: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro',
                            color:"#ED1E79",
                            startPointInPercent: 45,
                            widthBarInPercent: 18,
                            time: {
                                startTime: 2018,
                                endTime: 2018
                            },
                        }} />
                    <Bar 
                        info={{
                            id: '3',
                            title: 'TechnoDream',
                            content: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro',
                            color:"#47DE3A",
                            startPointInPercent: 15,
                            widthBarInPercent: 20,
                            time: {
                                startTime: 2017,
                                endTime: 2017
                            },
                        }} />
                    <Bar 
                        info={{
                            id: '2',
                            title: 'Bachelor in computer application',
                            content: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro',
                            color:"#FFB801",
                            startPointInPercent: 0,
                            widthBarInPercent: 80,
                            time: {
                                startTime: 2016,
                                endTime: 2020
                            },
                        }} />
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