import React from 'react';
import IconTouch, { IconItem } from './iconTouch';

import './index.scss';

interface Props {
    icons: Array<IconItem>,
    onChangeIconSelected: (id: string) => void,
    idIconSelected: string
}

const IconContent: React.FC<Props> = ({icons, onChangeIconSelected, idIconSelected}) => {
    return(
        <div className="icon-content">
            <div className="icon-content-wrapper">
                {
                    icons.map((item: IconItem, index) => {
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

export default IconContent;