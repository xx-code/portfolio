import React from 'react';

import './index.scss';

export default function ToggleLanguage(){
    // const { i18n } = useTranslation();

    /*const onChangeLanguage = (value: string) => {
        i18n.changeLanguage(value);
    };*/

    return(
        <div className="toggle-language">
            <div className="toggle-language-wrapper">
                <button className={'active'/*i18n.language === 'fr' ? 'active' : ''} onClick={() => onChangeLanguage('fr')*/}>FR</button>
                <span>/</span>
                <button className={''/*i18n.language === 'en' ? 'active' : ''} onClick={() => onChangeLanguage('en')*/}>Eng</button>
            </div>
        </div>
    );
};