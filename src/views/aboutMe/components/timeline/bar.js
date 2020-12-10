import React from 'react';

import './index.scss';

const Bar = ({color, years, startPointInPercent, widthBarInPercent }) => {
    return(
        <div className="bar">
            <div 
                className="bar-content" 
                style={{
                            backgroundColor: color, 
                            width: `${widthBarInPercent}%`,
                            left: `${startPointInPercent}%`,
                        }} >
                <span style={{color: color}}>{ years }</span>
            </div>
        </div>
    );
};

export default Bar;