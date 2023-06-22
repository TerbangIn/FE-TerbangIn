import { useEffect } from 'react';
import { useState } from 'react';
import { resetPasswordFields } from "../constants/formFields";
import FormAction from "./formAction";
// import FormExtra from "./formExtra";
import { authService, storageService } from "../services";

import Input from "./input";

const fields=resetPasswordFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function ResetPassword(){
    const [email, setEmail] = useState("");
//   const [confirmPasswordBaru, setConfirmPasswordBaru] = useState("");
// let username = "";
// let password = "";
    const [resetPassState,setResetPassState]=useState(fieldsState);

    const handleChange=(e)=>{
        setResetPassState({...resetPassState,[e.target.id]:e.target.value})
       if(e.target.name === "email"){
        setEmail(e.target.value);
        // username = e.target.value;
       }
    //    else if(e.target.name === "confirm-password-baru"){
    //     setConfirmPasswordBaru(e.target.value);
    //     // password = e.target.value;
    //    }
    // console.log(typeof e.target.name);

    }

    const handleSubmit=(e)=>{
        window.location.href = "/reset-password-baru";
        e.preventDefault();
    // console.log({username,password});
    const request = {
        email: email,
        // confirmPasswordBaru: confirmPasswordBaru,
      };
      
      authService
    //   .login(request)
    //   .then((resp) => {
        // console.log("resp", resp);
        // const response = resp.data;
        // storageService.setToken(resp.data.token);
        // dispatch(setUser(resp.data));
        // console.log(response)

        // if(response){
            // if(response.status === "failed"){
            //     alert(response.message);
            // }else{
            // alert(response.status);
            // }
            // console.log(response.status)
        // }
        
    //   }).catch((error) => alert(error.response.data.message));
        // authenticateUser();
    }

//Handle Login API Integration here
// const authenticateUser = () =>{
        
       
//     const endpoint=`https://api.loginradius.com/identity/v2/auth/login?apikey=${apiKey}`;
//      fetch(endpoint,
//          {
//          method:'POST',
//          headers: {
//          'Content-Type': 'application/json'
//          },
//          body:JSON.stringify(loginFields)
//          }).then(response=>response.json())
//          .then(data=>{
//             //API Success from LoginRadius Login API
//          })
//          .catch(error=>console.log(error))
     
// }
// console.log(username);

// useEffect(() => {
//     console.log(username);

// }, [username,password])

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            // heading="aaaaaa"
                            // isResetPassword={field.isResetPassword}
                            key={field.id}
                            handleChange={handleChange}
                            value={resetPassState[field.id]}
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
       <FormAction handleSubmit={handleSubmit} text="Masuk" />
        {/* <FormAction href="/reset-password-baru" handleSubmit={handleSubmit} text="Masuk"/> */}

      </form>
    )
}