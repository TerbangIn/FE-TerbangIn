import { useEffect } from 'react';
import { useState } from 'react';
import { resetPasswordBaruFields } from "../constants/formFields";
import FormAction from "./formAction";
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// import { authService, storageService } from "../services";
import { useNavigate, useLocation } from 'react-router-dom';

import Input from "./input";

const fields = resetPasswordBaruFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

function ResetPasswordBaru() {
    const [otp, setOtp] = useState("");
    const [emailHidden, setEmailHidden] = useState()
    const [passwordBaru, setPasswordBaru] = useState("");
    const [confirmPasswordBaru, setConfirmPasswordBaru] = useState("");
    const [resetState, setResetState] = useState(fieldsState);
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        setEmailHidden(location?.state?.email)
        setOtp(location?.state?.otp)
        console.log(location?.state)
        console.log(passwordBaru);
        // console.log(hideEmail(emailHidden))
    }, [emailHidden]);

    const handleChange = (e) => {
        setResetState({ ...resetState, [e.target.id]: e.target.value })
        if (e.target.name === "password") {
            setPasswordBaru(e.target.value);
            // username = e.target.value;
        } else if (e.target.name === "confirm-password") {
            setConfirmPasswordBaru(e.target.value);
            // password = e.target.value;
        }
    }

    //Handle Reset Passowrd API Integration here
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                "https://be-tiketku-production.up.railway.app/api/v1/user/forget-password",
                {
                    email: emailHidden,
                    otp: otp,
                    password: passwordBaru,
                    confirm_password: confirmPasswordBaru
                }
            ).then(
                function (res) {
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
                    setTimeout(() => {
                        navigate("/")
                    }, 3000);
                    
                    
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

            // console.log(passwordBaru)
            // console.log(confirmPasswordBaru)

        } catch (error) {
            console.log(error);
        }
    }
    // const handleSubmit = async (e) => {

    //     // window.location.href = "/reset-password-baru";
    //     e.preventDefault();
    //     try {
    //         navigate("/otp-reset-password", {
    //             state: email
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // const handleSubmit = (e) => {
    //     window.location.href = "/";
    //     e.preventDefault();
    //     // console.log({username,password});
    //     const request = {
    //         passwordBaru: passwordBaru,
    //         confirmPasswordBaru: confirmPasswordBaru,
    //     };

    // authService
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
    // }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={resetState[field.id]}
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
            <FormAction handleSubmit={handleSubmit} text="Simpan" />
        </form>
    )
}

export default ResetPasswordBaru