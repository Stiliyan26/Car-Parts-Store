import { ObjectSchema } from 'yup';
import { TextInputProps } from 'react-native/Libraries/Components/TextInput/TextInput';
import { CreateFormField } from './form-interface';

import type {
  Dispatch,
  ReactNode,
  SetStateAction
} from 'react';

import {
  ImageSourcePropType,
} from 'react-native';


export interface ChildrenProps {
  children: ReactNode
}


export interface InputFieldProps extends TextInputProps {
  dynamicStyle?: {} | null
}


export interface AnimatedImageProps {
  source: ImageSourcePropType,
  dynamicStyles: {}
}

export interface FormCommonProps<T> {
  sourcePage: string,
  initialValues: T,
  formFields: CreateFormField[]
  validationSchema: ObjectSchema<any>,
  buttonLabel: string,
  apiError?: string,
  onSubmit: (data: T) => Promise<boolean>
}


export interface CompanyInfoCommonProps {
  name: string,
  imageUrl: string,
  location: string
}

export interface TabsCommonProps {
  activeSectionTab: string,
  setActiveSectionTab: Dispatch<SetStateAction<string>>
}







