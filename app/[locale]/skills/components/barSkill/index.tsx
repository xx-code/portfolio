import React, { useEffect, useState } from 'react';

import './index.scss';

interface propsBar { 
    opacity: number 
};

function Bar({opacity}: propsBar) {
    return (
        <div className='bar-wrapper'>
            <div style={{background: `rgba(237,30,120, ${opacity})`}} className='bar'/>
        </div>
    )
}

interface props {
    level: number
}

const BarSkill: React.FC<props> = ({ level }) => {
    const defaultValueArr: Array<number> = [];
    const [emptyArr, setEmptyArr] = useState(defaultValueArr);
    useEffect(() => {
        const arr = [];
        for (let i = 0; i < 4; i++)
            arr.push(i >= level ? 0.15 : 1);
        console.log(arr)
        setEmptyArr(arr);
    }, []);
    return (
        <div className='bar-skill-wrapper'>
            <div className='bar-skill'>
                {
                    emptyArr.map((val, index) => {
                        return <Bar key={index} opacity={val} />
                    })
                }
            </div>
        </div>
    )
}

export default BarSkill;