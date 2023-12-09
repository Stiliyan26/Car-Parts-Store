import * as yup from 'yup';

const emailPattern: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
const textInputPattern: RegExp = /^[a-zA-Z0-9\s]*$/;
const priceFieldName = 'Price per piece';
const isFieldNumberForPrice = (fieldName: string): string => {
    return fieldName === priceFieldName
        ? 'dolars'
        : ''
};
const commonTextInputValidation = (filedName: string, minLength: number, maxLength: number) => {
    return yup.string()
        .required(`${filedName} is required!`)
        .matches(textInputPattern, `Only letters and numbers are allowed in ${filedName}`)
        .min(minLength, `${filedName} should be at least ${minLength} characters long!`)
        .max(maxLength, `${filedName} should be less than ${maxLength} characters long!`)
}

const commonNumberInputValidation = (fieldName: string, minNumber: number, maxNumber: number) => {
    return yup.number()
        .required(`${fieldName} is required!`)
        .min(10, `${fieldName} should be at least ${minNumber} ${isFieldNumberForPrice(fieldName)}!`)
        .max(20000, `${fieldName} cannot be greater than ${maxNumber} ${isFieldNumberForPrice(fieldName)}!`)
        .moreThan(-1, `${fieldName} cannot be negative`)
}

export const createCompanyFormSchema = yup.object().shape({
    name: commonTextInputValidation('Name', 4, 30),
    email: yup.string()
        .required('Email is required!')
        .max(30, `Email should be less than 30 characters long!`)
        .matches(emailPattern, 'Invalid email format!'),
    imageUri: commonTextInputValidation('ImageUri', 5, 10000),
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
    pricePerPiece: commonNumberInputValidation(priceFieldName, 20, 20000),
    quantity: commonNumberInputValidation('Quantity', 1, 50)
});

export const loginFormSchema = yup.object().shape({
    email: yup.string()
        .required('Email is required!')
        .matches(emailPattern, 'Invalid email format!'),
    password: commonTextInputValidation('Password', 5, 20)
});