import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';

const ToggleLanguage: React.FC = () => {
    const { i18n } = useTranslation();

    const onChangeLanguage = (value: string) => {
        i18n.changeLanguage(value);
    };

    return(
        <div className="toggle-language">
            <div className="toggle-language-wrapper">
                <button className={i18n.language === 'fr' ? 'active' : ''} onClick={() => onChangeLanguage('fr')}>FR</button>
                <span>/</span>
                <button className={i18n.language === 'en' ? 'active' : ''} onClick={() => onChangeLanguage('en')}>Eng</button>
            </div>
        </div>
    );
};

export default ToggleLanguage;