import { CreateFormField } from '../types/interface/form-interface';
import icons from './icons';


const placeholderFunc = (placeholder: string) => `Enter ${placeholder}`;

export const createCompanyFormFields: CreateFormField[] = [
  {
    fieldName: 'imageUri',
    placeholder: 'image',
    label: 'Choose logo:',
    icon: icons.image
  },
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

