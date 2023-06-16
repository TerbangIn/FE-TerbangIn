import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./formAction";
import Input from "./input";
import { authService, storageService } from "../services";


const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");
  const [password, setPassword] = useState("");

  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>{
    setSignupState({...signupState,[e.target.id]:e.target.value})
    if(e.target.name === "email"){
      setEmail(e.target.value);
      // username = e.target.value;
     }else if(e.target.name === "username"){
      setUsername(e.target.value);
      // password = e.target.value;
     }else if(e.target.name === "confirm-password"){
      setPassword(e.target.value);
      // username = e.target.value;
     }else if(e.target.name === "telepon"){
      setTelepon(e.target.value);
      // password = e.target.value;
     }
  };

  const handleSubmit=(e)=>{
    window.location.href = "/otp";
  //   e.preventDefault();
  //   // console.log(signupState)
  //   // createAccount()

  //   // Login action
  //   // memasukkan state ke dalam request
  //   const request ={
  //     first_name: username,
  //     email:email,
  //     password:password,
  //     phone_number:telepon
  // };
  // // memanggil fungsi login dari auth service
  //   authService
  //   .register(request)
  //   .then((resp) => {
  //     console.log("resp", resp);
  //     const response = resp.data;
  //     storageService.setToken(resp.data.token);
  //     // dispatch(setUser(resp.data));
  //     if(response){
  //         alert('Berhasil register dengan username : '+response.data.first_name);
  //         // console.log(response)
  //     }
  //   })

  }

  //handle Signup API Integration here
  const createAccount=()=>{

  }

    return(
        // <form className="mt-2" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            // isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
          <FormAction handleSubmit={handleSubmit} text="Daftar" />
        </div>

         

      // </form>
    )
}