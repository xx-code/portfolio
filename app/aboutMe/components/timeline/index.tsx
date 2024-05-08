import React, { useEffect, useState } from 'react';
import { resumeType } from '../../../services/aboutMe';
import { bar } from '../types';
import Bar from './bar';

import './index.scss';

interface Props {
    data: Array<resumeType>,
}

export default function TimeLine({ data }: Props) {
    const defaultData: Array<bar> = []
    // const { t } = useTranslation();
    const [barInfos, setBarInfos] = useState(defaultData);
    
    useEffect(() => {
        const sortedData = data.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
        const infos: Array<any> = [];
        const dayDate = new Date(Date.now());
        const startDate = sortedData[0].startDate.getFullYear();
        const endDate = dayDate.getFullYear();
        const totalDate = endDate - startDate;
        sortedData[sortedData.length - 1].startDate.getFullYear();
        let pickerIndex = 0;
        sortedData.forEach((data, index) => {
            let end = data.endDate ? data.endDate : dayDate;
            let width = (end.getFullYear() - data.startDate.getFullYear()) * 100 / totalDate;
            if (data.startDate.getFullYear() == end.getFullYear()) {
                width = ((end.getMonth() - data.startDate.getMonth()) * 0.1) * 100 / totalDate;
            }
            let colors = ["#FFB801", "#47DE3A", "#0C83FD", "#ed1e78"];
            let info = {
                id: index,
                title: data.title,
                content: data.detail,
                color: colors[pickerIndex],
                startPointInPercent: Math.abs((((dayDate.getFullYear() - data.startDate.getFullYear()) * 100) / totalDate) - 100),
                widthBarInPercent: width,
                time: {
                    startTime: data.startDate.getFullYear().toString(),
                    endTime: data.endDate ? data.endDate.getFullYear().toString() : 'now'
                }
            };
            pickerIndex++;
            pickerIndex = pickerIndex > 3 ? 0 : pickerIndex;
            infos.push(info);
        });
        console.log(infos)
        setBarInfos(infos.reverse());
    }, []);
    
    return(
        <div className="time-line">
            <div className="time-line-wrapper">
                <div className="time-line-bar">
                    {
                        barInfos.map((val, index) => {
                            return <Bar key={index} info={val} />
                        })
                    /*
                    <Bar 
                        info={{
                            id: '5',
                            title: 'Freelancer',
                            content: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro',
                            color:"#0C83FD",
                            startPointInPercent: 85,
                            widthBarInPercent: 15,
                            time: {
                                startTime: '2020',
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
                                startTime: '2018',
                                endTime: '2018'
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
                                startTime: '2017',
                                endTime: '2017'
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
                                startTime: '2016',
                                endTime: '2020'
                            },
                        }} />*/ }
                </div>
                <div className="time-bar" />
                <div className="label">
                    <span className="label-left" >{'after_high_school'}</span>
                    <span className="label-right" >{'now'}</span>
                </div>
            </div>
        </div>
    );
};