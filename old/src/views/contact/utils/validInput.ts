import isEmpty from '../../../utils/isEmpty';
import i18next from 'i18next';

const ValidInput = (data: any) => {
    let errors = {
        email: '',
        firstname: '',
        lastname: '',
        describe: ''
    };

    const regexEmail = /^[\w-]+@([\w-]+)+[\w-]{2,4}$/g;
    if (isEmpty(data.email)) {
        errors.email = i18next.t('email_error');
    } else if (!regexEmail.test(data.email)) {
        errors.email = i18next.t('email_no_valid');
    }

    if (isEmpty(data.firstname)) {
        errors.firstname = i18next.t('firstname_error');
    }

    if (isEmpty(data.lastname)) {
        errors.lastname = i18next.t('lastname_error');
    }

    if (isEmpty(data.describe)) {
        errors.describe = i18next.t('describe_error');
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }; 
};

export default ValidInput;