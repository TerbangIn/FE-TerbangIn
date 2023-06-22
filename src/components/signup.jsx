import React, { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./formAction";
import axios from "axios"
import Input from "./input";
import { authService, storageService } from "../services";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");
  const [password, setPassword] = useState("");
  const [signupState, setSignupState] = useState(fieldsState);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value })
    if (e.target.name === "email") {
      setEmail(e.target.value);
      // username = e.target.value;
    } else if (e.target.name === "username") {
      setUsername(e.target.value);
      // password = e.target.value;
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
      // username = e.target.value;
    } else if (e.target.name === "telepon") {
      setTelepon(e.target.value);
      // password = e.target.value;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(e);
    try {
      //   setLoading(true)
      const response = await axios.post(
        "https://be-tiketku-production.up.railway.app/api/v1/user/register",
        {
          first_name: username,
          email,
          phone_number: telepon,
          password,
        }
      ).then(
        function (res) {
          console.log(res);
          const cookies = new Cookies()
          const token = res.data.data.token
          cookies.set("token", token, { path: "/" })
          toast.success("login success, redirect in 3s...", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
          navigate("/otp-register", {
            state: email
          })
        }
      ).catch(

        function (err) {
          console.log(err);
          toast.error(`${err.response.data.message}, redirect in 3s...`, {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
        }
      )

    } catch (error) {
      console.log(error);
    }
    // window.location.href = "/otp";
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
    // // // memanggil fungsi login dari auth service
    //   authService
    //   .register(request)
    //   .then((resp) => {
    // //     console.log("resp", resp);
    //     const response = resp.data;
    //     storageService.setToken(resp.data.token);
    //     // dispatch(setUser(resp.data));
    //     if(response){
    //         alert('Berhasil register dengan username : '+response.data.first_name);
    // //         // console.log(response)
    //     }
    //   }).catch((error) => alert(error.response.data.message));

  }



  return (
    // <form className="mt-2" onSubmit={handleSubmit}>
    <div className="">
      {
        fields.map(field =>
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
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <FormAction handleSubmit={handleSubmit} text="Daftar" />
    </div>



    // </form>
  )
}