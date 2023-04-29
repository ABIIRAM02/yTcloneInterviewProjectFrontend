import * as yup from 'yup'

export const formSchema = yup.object().shape({
    name:yup.string().matches(/^[A-Za-z\s]+$/ , "name can only contain letters and spaces").required("name field is required"),
    email:yup.string().email("please provide a valid emailID").required("email field is required"),
    password:yup.string().min(5 , "Password must be at least 5 characters").required("password field is required"),
    ConfirmPassword:yup.string().oneOf([
        yup.ref('password'), null
    ],"Password Mismatch").required("required confirmation")
})