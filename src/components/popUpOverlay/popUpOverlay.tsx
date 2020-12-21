import React from 'react';

import './index.scss';

interface Props {
    children: JSX.Element,
    id: string
};

const PopUpOverlay: React.FC<Props> = ({children, id}) => {
    const closeOverlay = () => {
        const popUp = document.getElementById(`popup-${id}`); 
        if (popUp) {
            popUp.classList.remove('open-popup');
            popUp.classList.add('close-popup');   
        }    
    };

    return(
        <div id={`popup-${id}`} className="popup-overlay close-popup" >
            <div className="back" onClick={() => closeOverlay()} />
            <div className="wrapper">
                { children }
            </div>
        </div>
    );
};

export default PopUpOverlay;