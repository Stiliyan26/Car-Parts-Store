import { checkSchema } from 'express-validator';
import type { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export function getValidationResult() {
  return (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      const errorArray = errors
        .array()
        .map(error => error.msg);

      return response.status(400).json({ errors: errorArray });
    }

    next();
  }
}

function stringValidation(
  value: string,
  fieldName: string,
  min: number,
  max: number
) {
  if (!value) {
    throw new Error(`${fieldName} is required!`);
  }
  else if (typeof value != 'string') {
    throw new Error(`${fieldName} should be a string!`);
  }
  else if (value.length < min) {
    throw new Error(`${fieldName} should be at least ${min} characters long!`)
  }
  else if (value.length > max) {
    throw new Error(`${fieldName} should be less than ${max} characters long!`)
  }

  return true;
}

function emailValidation(
  email: string,
  max: number
) {
  if (!email) {
    throw new Error('Email is required!');
  }
  else if (typeof email != 'string') {
    throw new Error('Email should be a string');
  }
  else if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    throw new Error('Invalid email format!');
  }
  else if (email.length > max) {
    throw new Error(`Email should be less than ${max} characters long!`);
  }

  return true;
}

export function checkLoginBody() {
  return checkSchema({
    email: {
      custom: {
        options: (email: string) => emailValidation(email, 30)
      }
    },
    password: {
      custom: {
        options: (password: string) => stringValidation(password, 'Password', 5, 20)
      }
    }
  })
}

export function checkCreateCompanyBody() {
  return checkSchema({
    name: {
      custom: {
        options: (name: string) => stringValidation(name, 'Name', 4, 20)
      }
    },
    email: {
      custom: {
        options: (email: string) => emailValidation(email, 30)
      }
    },
    imageUrl: {
      custom: {
        options: (imageUrl: string) => stringValidation(imageUrl, 'Image Url', 5, 30)
      }
    },
    info: {
      custom: {
        options: (info: string) => stringValidation(info, 'Info', 5, 50)
      }
    },
    location: {
      custom: {
        options: (info: string) => stringValidation(info, 'Info', 5, 30)
      }
    }
  })
}

export function checkCreateEmployeeBody() {
  return checkSchema({
    name: {
      custom: {
        options: (name: string) => stringValidation(name, 'Name', 4, 30)
      }
    },
    email: {
      custom: {
        options: (email: string) => stringValidation(email, 'Email', 4, 30)
      }
    },
    role: {
      custom: {
        options: (role: string) => stringValidation(role, 'Role', 5, 20)
      }
    },
    password: {
      custom: {
        options: (password: string) => stringValidation(password, 'Password', 5, 20)
      }
    },
    repeatPassword: {
      custom: {
        options: (repeatPassword: string) => stringValidation(repeatPassword, 'repeatPassword', 5, 20)
      }
    }
  });
}


