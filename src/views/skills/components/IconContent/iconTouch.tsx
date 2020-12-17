import React from 'react';

import './index.scss';

export interface IconItem {
    id: string,
    icon: string,
};

interface Props {
    iconItem: IconItem,
    onClick: (id: string) => void,
    selected: boolean
}

const IconTouch: React.FC<Props> = ({onClick, iconItem, selected}) => {
    return(
        <div className="icon-touch">
            <div className="icon-touch-wrapper" onClick={() => onClick(iconItem.id)} >
                <i className={`icon ${selected ? 'icon-selected' : ''}  devicon-${iconItem.icon} colored`}   />
            </div>
        </div>
    );
};

export default IconTouch;