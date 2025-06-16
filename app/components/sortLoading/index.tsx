import React from 'react';

import '../loading/index.scss';

export default function SortLoading({}) {

    return(
        <div style={{width: '100%', height: '100%'}} >
            <div className="loading-wrapper">
                <div className="loading-info">
                    <p>
                        {'loading'}
                        <span className="dot-1">.</span>
                        <span className="dot-2">.</span>
                        <span className="dot-3">.</span>
                    </p>
                </div>
                <div className="load-bar">
                    <div className="load-bar-wrapper">
                        <div className="bar" />
                    </div>
                </div>
            </div>
        </div>
    )
};