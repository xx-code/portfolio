import React from 'react';

import './index.scss';

interface Props {
    children: JSX.Element,
    id: string,
    isDisplay: boolean,
    onClose?: () => void
};

export default function PopUpOverlay({children, id, isDisplay, onClose}: Props) {
    return(
        <div id={`popup-${id}`} className={`popup-overlay ${isDisplay ? 'open-popup' : 'close-popup'}`} >
            <div className="back" onClick={onClose} />
            <div className="wrapper">
                { children }
            </div>
        </div>
    );
};