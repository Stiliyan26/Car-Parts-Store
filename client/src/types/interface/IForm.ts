import { ImageSourcePropType, KeyboardTypeOptions } from 'react-native';

export interface CreateFormField {
    fieldName: string,
    placeholder: string,
    label: string,
    icon: ImageSourcePropType,
    secureTextEntry?: boolean
    keyboardType?: KeyboardTypeOptions
}

export interface LoginData {
    email: string,
    password: string
}

export interface CompanyDataCommon {
    name: string;
    email: string;
    info: string;
    imageUrl: string;
    location: string;
}

export interface CreateCompanyData extends CompanyDataCommon { }

export interface CreateEmployeeData {
    name: string,
    email: string,
    role: string,
    password: string,
    repeatPassword: string
}

