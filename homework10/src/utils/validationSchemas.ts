import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const registerSchema = yup.object().shape({
    username: yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
});

export const postSchema = yup.object().shape({
    title: yup.string().min(5, 'Title must be at least 5 characters').required('Title is required'),
    description: yup.string().min(20, 'Description must be at least 20 characters').required('Description is required'),
    image: yup.mixed().required('Please upload an image')
});

