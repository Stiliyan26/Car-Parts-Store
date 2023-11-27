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

export interface CreateCompanyData {
    name: string;
    email: string;
    info: string;
    imageUrl: string;
    location: string;
}

export interface CreateEmployeeData {
    name: string,
    email: string,
    role: string,
    password: string,
    repeatPassword: string
}

export interface CreatePartData {
    name: string
    imageUrl: string
    description: string
    pricePerPiece: number
    quantity: number,
    companyId?: string
}

