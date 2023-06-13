import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./formAction";
// import FormExtra from "./formExtra";
import Input from "./input";

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{

    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            // heading="aaaaaa"
                            isLogin={field.isLogin}
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                )
            }
        </div>
        {/* <label
            for="email"
            className="block text-sm font-semibold text-gray-800"
        >Email</label> */}
       
        <FormAction handleSubmit={handleSubmit} text="Masuk"/>

      </form>
    )
}