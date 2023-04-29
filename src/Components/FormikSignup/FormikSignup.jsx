import { formSchema } from '../../models';
import './FormikSignup.css'
import { Formik, useFormik } from 'formik';

const FormikSignup = () => {


        let onSubmit = ( values , actions )=>{
            if(values.email && values.name && values.password === values.ConfirmPassword)
            {
                alert("submitted successfullly")
                actions.resetForm()
            }
        console.log(values);
        console.log(actions);
        }

        let formik = useFormik({
            initialValues:
            {
                name:'',
                email:'',
                password:'',
                ConfirmPassword:''
            },
            validationSchema : formSchema,
            onSubmit
        })

        console.log(formik.errors);


    return ( 
        <section className='FormikSignup' >
            <form onSubmit={formik.handleSubmit} action="" className='FormikSignup-form' >

            <input required id='name' onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} className={formik.errors.name && formik.touched.name ? 'FormikSignup-inputERR' : ''} placeholder='name' type="text" />
            {formik.errors.name && formik.touched.name && <p className='errMessage' >{formik.errors.name}</p>}

            <input required id='email' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} className={formik.errors.email && formik.touched.email ? 'FormikSignup-inputERR' : ''} placeholder='email' type="email" />
            {formik.errors.email && formik.touched.email && <p className='errMessage' >{formik.errors.email}</p>}

            <input required id='password' onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} className={formik.errors.password && formik.touched.password ? 'FormikSignup-inputERR' : ''} placeholder='password' type="password" />
            {formik.errors.password && formik.touched.password && <p className='errMessage' >{formik.errors.password}</p>}

            <input required id='ConfirmPassword' onBlur={formik.handleBlur} value={formik.values.ConfirmPassword} onChange={formik.handleChange} className={formik.errors.ConfirmPassword && formik.touched.ConfirmPassword ? 'FormikSignup-inputERR' : ''} placeholder='Confirm-password' type="password" />
            {formik.errors.ConfirmPassword && formik.touched.ConfirmPassword && <p className='errMessage' >{formik.errors.ConfirmPassword}</p>}
           
            <button type='submit' >Submit</button>
            
            </form>
        </section>
     );
}
 
export default FormikSignup;

// const FormikSignup = () => {
//     return ( <section>
//         FormikSignup
//     </section> );
// }
 
// export default FormikSignup;