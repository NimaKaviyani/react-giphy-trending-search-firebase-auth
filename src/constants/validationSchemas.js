import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
    password:
        Yup.string()
           .min(7, 'Too Short!')
           .max(50, 'Too Long!')
           .required('Please enter your password'),
    email:
        Yup.string()
           .email('Invalid email')
           .required('Please enter your email address'),
});

export const SignUpSchema = Yup.object().shape({
    password:
        Yup.string()
           .min(7, 'Too Short!')
           .max(50, 'Too Long!')
           .required('Please enter your password'),
    repeat:
        Yup.string()
           .required('Please enter your repeat password')
           .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    email:
        Yup.string()
           .email('Invalid email')
           .required('Please enter your email address'),
});

export const TodoSchema = Yup.object().shape({
    todo:
        Yup.string()
           .min(3, 'Too Short!')
           .max(50, 'Too Long!')
           .required('Please enter your todo!'),
});
