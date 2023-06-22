import { useEffect } from 'react';
import { useState } from 'react';
import { resetPasswordBaruFields } from "../constants/formFields";
import FormAction from "./formAction";
// import { authService, storageService } from "../services";

import Input from "./input";

const fields = resetPasswordBaruFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

function ResetPasswordBaru() {
    const [passwordBaru, setPasswordBaru] = useState("");
    const [confirmPasswordBaru, setConfirmPasswordBaru] = useState("");
    const [resetState, setResetState] = useState(fieldsState);

    const handleChange = (e) => {
        setResetState({ ...resetState, [e.target.id]: e.target.value })
        if (e.target.name === "password-baru") {
            setPasswordBaru(e.target.value);
            // username = e.target.value;
        } else if (e.target.name === "confirm-password-baru") {
            setConfirmPasswordBaru(e.target.value);
            // password = e.target.value;
        }
    }

    //Handle Reset Passowrd API Integration here
    const handleSubmit = (e) => {
        window.location.href = "/";
        e.preventDefault();
        // console.log({username,password});
        const request = {
            passwordBaru: passwordBaru,
            confirmPasswordBaru: confirmPasswordBaru,
        };

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
    }

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