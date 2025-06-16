import React from 'react';
import IconTouch from './iconTouch';
import { iconItem } from '../types';

import './index.scss';

interface Props {
    icons: Array<iconItem>,
    onChangeIconSelected: (id: string) => void,
    idIconSelected: string
}

export default function IconContent({icons, onChangeIconSelected, idIconSelected}: Props) {
    return(
        <div className="icon-content">
            <div className="icon-content-wrapper">
                {
                    icons.map((item: iconItem, index) => {
                        return <IconTouch 
                                    key={item.id} 
                                    iconItem={item} 
                                    selected={idIconSelected === item.id}
                                    onClick={onChangeIconSelected} />
                    })
                }
            </div>
        </div>
    );
};