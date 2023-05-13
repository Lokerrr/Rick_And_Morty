const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validation = (userData) => {
    const errors = {};

    if (!regexEmail.test(userData.email)) {
        errors.email = 'El email ingresado no es válido';
    } else if (!userData.email){
        errors.email = 'Este campo es obligatorio';
    } else if (userData.email.length > 35){
        errors.email = 'Inserte un email válido';
    }

    if (userData.password.length < 6 || userData.password.length > 10){
       errors.password = 'Debe ser de entre 6 o 10 caracteres';
    } else if (!/\d/.test(userData.password)){
        errors.password = "Debe contener al menos un número";
    } else {
        errors.password = '';
    }
    return errors;
} 

export default validation;