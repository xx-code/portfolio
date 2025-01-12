import React from 'react';
import { iconItem } from '../types';

import './index.scss';

interface Props {
    iconItem: iconItem,
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