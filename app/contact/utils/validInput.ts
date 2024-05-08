import isEmpty from '../../utils/isEmpty';

const ValidInput = (data: any) => {
    let errors = {
        email: '',
        firstname: '',
        lastname: '',
        describe: ''
    };

    const regexEmail = /^[\w-]+@([\w-]+)+[\w-]{2,4}$/g;
    if (isEmpty(data.email)) {
        errors.email = ('email_error');
    } else if (!regexEmail.test(data.email)) {
        errors.email = ('email_no_valid');
    }

    if (isEmpty(data.firstname)) {
        errors.firstname = ('firstname_error');
    }

    if (isEmpty(data.lastname)) {
        errors.lastname = ('lastname_error');
    }

    if (isEmpty(data.describe)) {
        errors.describe = ('describe_error');
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }; 
};

export default ValidInput;