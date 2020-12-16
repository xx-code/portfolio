import React from 'react';

import './index.scss';

export interface IconItem {
    id: string,
    icon: string,
    selected: boolean,
    
};

interface Props {
    iconItem: IconItem,
    onClick: (id: string) => void,
}

const IconTouch: React.FC<Props> = ({onClick, iconItem}) => {
    return(
        <div className="icon-touch">
            <div className="icon-touch-wrapper" onClick={() => onClick(iconItem.id)} >
                <i className={`icon ${iconItem.selected ? 'icon-selected' : ''}  fab fa-${iconItem.icon}`}   />
            </div>
        </div>
    );
};

export default IconTouch;