import React, { useEffect, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/button';
import InputText from '../../components/inputText';

import './index.scss';
import validInput from './utils/validInput';

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const initInput = {
        firstname: '',
        lastname: '',
        email: '',
        describe: ''
    }
    const [errors, setErrors] = useState(initInput);
    const [input, setInput] = useReducer((state: any, newState: any) => ({...state, ...newState}), initInput); 

    useEffect(() => {
        const contactComponent = document.getElementById('contact');
        if (contactComponent) {
            contactComponent.style.opacity = '1'; 
        }
    });

    const handleInputFiels = (event: any) => {
        const { name, value } = event.target;
        setInput({[name]: value});
    };

    const onSubmit = () => {
        const { isValid, errors } = validInput(input);
        console.log(input)
        console.log(errors)
        if (isValid) {
            setErrors(initInput);
            console.log(input);
        } else {
            setErrors(errors);
        }
    };

    return(
        <div id="contact" className="container">
            <div className="row">
                <div className="content-left col-md-6">
                    <h1>{ t(`contact_me`) }</h1>
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

                </div>
            </div>
        </div>
    );
};

export default Contact;