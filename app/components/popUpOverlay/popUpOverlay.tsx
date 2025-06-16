import React from 'react';

import './index.scss';

interface Props {
    children: JSX.Element,
    id: string,
    isDisplay: boolean,
    onClose?: () => void
};

const PopUpOverlay: React.FC<Props> = ({children, id, isDisplay, onClose}) => {
    return(
        <div id={`popup-${id}`} className={`popup-overlay ${isDisplay ? 'open-popup' : 'close-popup'}`} >
            <div className="back" onClick={onClose} />
            <div className="wrapper">
                { children }
            </div>
        </div>
    );
};

export default PopUpOverlay;