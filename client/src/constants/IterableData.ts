import { CreateFormField } from '../types/interface/IForm';
import icons from './icons';
import { LOGIN_ROUTE } from './routerConstants';

import { Ionicons } from '@expo/vector-icons';


import { Router } from 'expo-router';

const placeholderFunc = (placeholder: string) => `Enter ${placeholder}`;

export const createCompanyFormFields: CreateFormField[] = [
  {
    fieldName: 'name',
    placeholder: placeholderFunc('name'),
    label: 'Name',
    icon: icons.company
  },
  {
    fieldName: 'email',
    placeholder: placeholderFunc('email'),
    label: 'Email',
    icon: icons.mail
  },
  {
    fieldName: 'imageUrl',
    placeholder: placeholderFunc('image url'),
    label: 'Image Url',
    icon: icons.image
  },
  {
    fieldName: 'info',
    placeholder: placeholderFunc('info'),
    label: 'Info',
    icon: icons.info
  },
  {
    fieldName: 'location',
    placeholder: placeholderFunc('location'),
    label: 'Location',
    icon: icons.location
  }
];

export const createUserFormFields: CreateFormField[] = [
  {
    fieldName: 'name',
    placeholder: placeholderFunc('name'),
    label: 'Name',
    icon: icons.user,
  },
  {
    fieldName: 'email',
    placeholder: placeholderFunc('email'),
    label: 'Email',
    icon: icons.mail,
  },
  {
    fieldName: 'role',
    placeholder: placeholderFunc('role'),
    label: 'Role',
    icon: icons.role,
  },
  {
    fieldName: 'password',
    placeholder: placeholderFunc('password'),
    label: 'Password',
    icon: icons.password,
    secureTextEntry: true
  },
  {
    fieldName: 'repeatPassword',
    placeholder: placeholderFunc('repeat password'),
    label: 'Repeat password',
    icon: icons.password,
    secureTextEntry: true
  }
]

export const createPartFormFields: CreateFormField[] = [
  {
    fieldName: 'name',
    placeholder: placeholderFunc('name'),
    label: 'Name',
    icon: icons.part
  },
  {
    fieldName: 'imageUrl',
    placeholder: placeholderFunc('image url'),
    label: 'ImageUrl',
    icon: icons.image
  },
  {
    fieldName: 'description',
    placeholder: placeholderFunc('description'),
    label: 'Description',
    icon: icons.info
  },
  {
    fieldName: 'pricePerPiece',
    placeholder: placeholderFunc('pricePerPiece'),
    label: 'Price Per Piece',
    icon: icons.price,
    keyboardType: 'numeric'
  },
  {
    fieldName: 'quantity',
    placeholder: placeholderFunc('quantity'),
    label: 'Quantity',
    icon: icons.quantity,
    keyboardType: 'numeric'
  }
];

export const loginFormFields: CreateFormField[] = [
  {
    fieldName: 'email',
    placeholder: placeholderFunc('email'),
    label: 'Email',
    icon: icons.mail
  },
  {
    fieldName: 'password',
    placeholder: placeholderFunc('password'),
    label: 'Password',
    icon: icons.password,
    secureTextEntry: true
  }
];

interface OtherOptions {
  iconName: keyof typeof Ionicons.glyphMap,
  textContent: string,
  onClick: () => Promise<void>
}

export const otherOptions = (
  logout: () => Promise<void>,
  router: Router
): OtherOptions[] => [
    {
      iconName: 'settings',
      textContent: 'Settings',
      onClick: async () => { }
    },
    {
      iconName: 'exit-outline',
      textContent: 'Sign out',
      onClick: async () => {
        await logout();
        
        router.replace('/(auth)/login');
      }
    }
  ]