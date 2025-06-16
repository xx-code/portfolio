'use client'

import React, { useEffect, useReducer, useState } from 'react';
import Loading from '../../components/loading';
import Button from '../../components/button';
import InputText from '../../components/inputText';
import Logo from '../../images/logo.png';
import sendMessage from './services/sendMessage';
import './index.scss';
import { IconsLink } from './data.json';
import validInput from './utils/validInput';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('Contact');
    const initInput = {
        firstname: '',
        lastname: '',
        email: '',
        describe: ''
    }
    const [opacity, setOpacity] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState(initInput);
    const [input, setInput] = useReducer((state: any, newState: any) => ({...state, ...newState}), initInput); 
    const [selectedLink, setSelectedLink] = useState(IconsLink[0].id);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setOpacity(1);
        }, 3500);
    }, [isLoading]);

    const handleInputFiels = (event: any) => {
        const { name, value } = event.target;
        setInput({[name]: value});
    };

    const onChangeIcon = (valIcon: string) => {
        setSelectedLink(valIcon);
    };

    const onSubmit = () => {
        const { isValid, errors } = validInput(input);
        if (isValid) {
            setErrors(initInput);
            sendMessage(input);
        } else {
            setErrors(errors);
        }
    };

    return(
        isLoading ? 
                    <Loading />
                  :
                    <div id="contact" style={{opacity: opacity}} className="container">
                        <div className="row">
                            <div className="content-left col-md-6">
                                <h1>{t(`contact_me`) }</h1>
                                <div className="contact-form">
                                    <div className="contact-form-wrapper row">
                                        <div className="col-md-6">
                                            <InputText 
                                                type="text"
                                                name="firstname"
                                                value={input.firstname}
                                                placeholder={t('firstname')}
                                                onChange={handleInputFiels}
                                                error={errors.firstname} />
                                        </div>
                                        <div className="col-md-6">
                                            <InputText 
                                                type="text"
                                                name="lastname"
                                                value={input.lastname}
                                                placeholder={t('lastname')}
                                                onChange={handleInputFiels}
                                                error={errors.lastname} />
                                        </div>
                                        <div className="col-md-12">
                                            <InputText 
                                                type="email"
                                                name="email"
                                                placeholder={t('email')}
                                                onChange={handleInputFiels}
                                                error={errors.email} />
                                        </div>
                                        <div className="col-md-12">
                                            <InputText 
                                                name="describe"
                                                value={input.describe}
                                                placeholder={t('describe_contact')}
                                                onChange={handleInputFiels}
                                                error={errors.describe}
                                                rows={6}
                                                isTextarea />
                                        </div>
                                        <div className="col-md-12">
                                            <Button 
                                                className="contact-button"
                                                label={t('contact_me')}
                                                onClick={onSubmit} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-right col-md-6">
                                <div className="content-wrapper">
                                    <Image src={Logo} alt="logo" />
                                    <div className="link">
                                        <div className="link-wrapper">
                                            <p>Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro.</p>
                                            <div className="link-icon">
                                                {
                                                    IconsLink.map((iconLink, index) => {
                                                        return <i key={index} className={`${iconLink.icon} ${selectedLink === iconLink.id ? 'active' : ''}`} 
                                                                    onClick={() => onChangeIcon(iconLink.id)} />
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-button">
                                        <div className="content-button-wrapper">
                                            <p>Superatis Tauri montis verticibus qui ad solis.</p>
                                            <Button 
                                                className="visit-button"
                                                label={t('visit')} />
                                        </div>
                                    </div>
                                    <div className="band">
                                        <div className="band-1" />
                                        <div className="band-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
};