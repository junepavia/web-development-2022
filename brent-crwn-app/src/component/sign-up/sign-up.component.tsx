import { useState } from "react";
import { createAuthUserWithEmailAndPassword,
createUserDocumentFromAuth } from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss'
import Button from "../button/button.component";


const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () =>{

    const [formField, setFormField] = useState (defaultFormField);
    const {displayName,password,confirmPassword,email} = formField;

    console.log(formField);

    const resetFormField = () => {
        setFormField(defaultFormField)
    }

    const handleSubmit = async(event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (password !== confirmPassword){
            alert('Error:Password and Confirm Password do not Match');
            return;
        }
        try{
            const user = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user , {displayName})
        } catch(error:any){
            if(error.code === 'auth/email-already-in-use'){
                alert('Error while creating new user. Email already used')
            }
            else {
                console.log('Error while creating new user',error);
            }
            resetFormField();
        }
    }

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const {name, value} = event.target;
        setFormField({...formField, [name]:value});
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an Account?</h2>
            <span>Sign Up with email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                    label='Display Name'
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name="displayName"
                    value={displayName}/>

                <FormInput 
                    label='Email Address'
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name="email"
                    value={email}/>

                <FormInput 
                    label='Password'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name="password"
                    value={password}
                    minLength={6}
                    maxLength={16}/>

                <FormInput 
                    label='Confirm Password'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword"
                    value={confirmPassword}
                    minLength={6}
                    maxLength={16}/>

                <Button buttonType='inverted' type="submit">Sign-Up</Button>
            </form>
        </div>
    )
}

export default SignUp;