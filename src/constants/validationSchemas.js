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

export const ProfileSchema = Yup.object().shape({
    name:
        Yup.string()
           .min(3, 'Too Short!')
           .max(50, 'Too Long!'),
    age:
        Yup.number()
           .typeError('Age must be a number')
           .positive('Age must be greater than zero'),
    email:
        Yup.string()
           .email('Invalid email')
           .required('Please enter your email address'),
    skype:
        Yup.string()
           .min(3, 'Too Short!')
           .max(50, 'Too Long!'),
    about:
        Yup.string()
           .min(3, 'Too Short!')
           .max(200, 'Too Long!'),
    coverImg:
        Yup.string().matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!',
        ),
    avatarImg:
        Yup.string().matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!',
        ),
});
