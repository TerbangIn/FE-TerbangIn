import { useEffect } from 'react';
import React, { useState } from 'react';
import axios from "axios"
import { loginFields } from "../constants/formFields";
import FormAction from "./formAction";
// import { authService, storageService } from "../services";
import Input from "./input";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Cookies from 'universal-cookie';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

const Login = () => {
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginState, setLoginState] = useState(fieldsState);

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
        if (e.target.name === "email") {
            setUsername(e.target.value);
            // username = e.target.value;
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
            // password = e.target.value;
        }
        // console.log(typeof e.target.name);
    }

    //Handle Login API Integration here
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            //   setLoading(true)
            const response = await axios.post(
                "https://be-tiketku-production.up.railway.app/api/v1/user/login",
                {
                    email,
                    password,
                }
            ).then(
                function (res) {
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
                }
            ).catch(
                function (err) {
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
            console.log(username, password);
            //   console.log(response);
            //   if (response.status == 200) {
            //     setCookie("accessToken", response.data.accessToken, {
            //       expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
            //     })
            //     toast.success("login success, redirect in 3s...", {
            //       position: "bottom-center",
            //       autoClose: 2000,
            //       hideProgressBar: true,
            //       closeOnClick: true,
            //       pauseOnHover: true,
            //       draggable: true,
            //       progress: undefined,
            //       theme: "colored",
            //     })
            //     setTimeout(() => {
            //     //   router.push("/beranda")
            //     }, 3000)
            //   }
            //   setLoading(false)
        } catch (error) {
            //   setLoading(false)
            //   setErrors(error.response.data.errors)
            //   if (error.response.status == 403) {
            //     toast.error(`${error.response.data.message}, redirect in 3s...`, {
            //       position: "bottom-center",
            //       autoClose: 2000,
            //       hideProgressBar: true,
            //       closeOnClick: true,
            //       pauseOnHover: true,
            //       draggable: true,
            //       progress: undefined,
            //       theme: "colored",
            //     })
            //     await axios.post(
            //       "https://be-tiketku-production.up.railway.app/api/v1/user",
            //       {
            //         username: loginState.username,
            //       }
            //     )
            //     setTimeout(() => {
            //     //   router.push(`/otp-register?email=${form.email}`)
            //     }, 3000)
            //   }
        }
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    // // console.log({username,password});
    // const request = {
    //     email: username,
    //     password: password,
    //   };

    //   authService
    //   .login(request)
    //   .then((resp) => {
    //     // console.log("resp", resp);
    //     const response = resp.data;
    //     storageService.setToken(resp.data.token);
    //     // dispatch(setUser(resp.data));
    //     console.log(response)

    //     if(response){
    //         // if(response.status === "failed"){
    //         //     alert(response.message);
    //         // }else{
    //         alert(response.status);
    //         // }
    //         // console.log(response.status)
    //     }

    //   }).catch((error) => alert(error.response.data.message));
    //     // authenticateUser();
    // }



    // console.log(username);

    // useEffect(() => {
    //     console.log(username);

    // }, [username,password])

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field =>
                        <Input
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
            </div>
            <FormAction onSubmit={handleSubmit} text="Masuk" />
        </form>
    )
}

export default Login