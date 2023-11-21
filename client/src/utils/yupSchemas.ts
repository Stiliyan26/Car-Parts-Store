import * as yup from 'yup';

const emailPattern: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
const textInputPattern: RegExp = /^[a-zA-Z0-9\s]*$/;

const commonTextInputValidation = (
    filedName: string,
    minLength: number,
    maxLength: number
) => {
    return yup.string()
        .required(`${filedName} is required!`)
        .matches(textInputPattern, `Only letters and numbers are allowed in ${filedName}`)
        .min(minLength, `${filedName} should be at least ${minLength} characters long!`)
        .max(maxLength, `${filedName} should be less than ${maxLength} characters long!`)
}

export const createCompanyFormSchema = yup.object().shape({
    name: commonTextInputValidation('Name', 4, 30),
    email: yup.string()
        .required('Email is required!')
        .max(30, `Email should be less than 30 characters long!`)
        .matches(emailPattern, 'Invalid email format!'),
    imageUrl: commonTextInputValidation('ImageUrl', 5, 30),
    info: commonTextInputValidation('Info', 5, 50),
    location: commonTextInputValidation('Location', 5, 30),
});

export const createEmployeeFormSchema = yup.object().shape({
    name: commonTextInputValidation('Name', 4, 30),
    email: yup.string()
        .required('Email is required!')
        .matches(emailPattern, 'Invalid email format!'),
    role: commonTextInputValidation('Role', 5, 20),
    password: commonTextInputValidation('Password', 5, 20),
    repeatPassword: yup.string()
        .required(`Repeat password is required!`)
        .test('password-match', 'Repeat password must match!', function (value) {
            return this.parent.password === value
        })
});

export const createPartFormSchema = yup.object().shape({
    name: commonTextInputValidation('Name', 4, 30),
    imageUrl: commonTextInputValidation('ImageUrl', 4, 30),
    description: commonTextInputValidation('Description', 5, 50),
    pricePerPiece: yup.number()
        .required('Price per piece is required!')
        .min(10, 'Price per piece should be at least 10 dolars!')
        .max(20000, 'Price per piece cannot be greater than 20000 dolars!')
        .moreThan(-1, 'Price per piece cannot be negative'),
    quantity: yup.number()
        .required('Quantity is required!')
        .min(1, 'Quantity should be at least 1!')
        .max(50, 'Quantity cannot be greater than 50!')
        .moreThan(-1, 'Quantity cannot be negative')
});

export const loginFormSchema = yup.object().shape({
    email: yup.string()
        .required('Email is required!')
        .matches(emailPattern, 'Invalid email format!'),
    password: commonTextInputValidation('Password', 5, 20)
    
});