import React from 'react';
import useForm from 'react-hook-form'; 

const Form = () => {
    const {register, handleSubmit, errors} = useForm(); 

    const FormStyle = {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
    <>
        <h2>Create an Account</h2> 
        <form style={FormStyle} onSubmit={handleSubmit(onSubmit)}>
            <label> 
                First Name
            <input 
                type="text" 
                id="first-name" 
                aria-label="First Name" 
                aria-required="true" 
                placeholder="First Name" 
                name="firstname" 
                ref={register({required: true})} />
            </label>
            <label> 
                Last Name
            <input 
                type="text" 
                id="last-name" 
                aria-label="Last Name" 
                aria-required="true" 
                placeholder="Last Name" 
                name="lastname" 
                ref={register({required: true})} />
            </label>
            <label> 
                Company Name
            <input 
                type="text" 
                id="company" 
                aria-label="Company Name" 
                aria-required="true" 
                placeholder="Company" 
                name="company" 
                ref={register({required: true})} />
            </label>
            <label> 
                Email:
            <input 
                type="text" 
                id="email" 
                aria-label="Your email" 
                aria-required="true" 
                placeholder="Email" 
                name="email" 
                ref={register({required: true})} />
            </label>
            <label>
                Password
            <input 
                type="password" 
                aria-label="Your Password" 
                placeholder="Password" 
                name="password" 
                ref={register({required: true, minLength: 6})} />
                {errors.password && <p>Password must be at least 8 characters</p>}
            </label>
            <input 
                type="submit" 
                aria-label="Submit Button" 
                />
        </form>
    </>
    )
}


export default Form; 