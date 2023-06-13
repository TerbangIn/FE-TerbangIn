import PinInput from 'react-pin-input';
import FormAction from "../components/formAction";
import { Button } from 'primereact/button';
import './otp.css'

function OTP() {
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(signupState)
        createAccount()
      }

    return(

        <div>
        <Button icon="pi-arrow-left" className=" " text label=""/>

            <h1>Masukkan OTP</h1>
            <h2>Ketik 6 digit kode yang dikirimkan ke</h2>
            
        <PinInput 
        length={4} 
        initialValue=""
        secret
        secretDelay={100} 
        onChange={(value, index) => {}} 
        type="numeric" 
        inputMode="number"
        style={{padding: '10px'}}  
        inputStyle={{borderColor: 'red'}}
        inputFocusStyle={{borderColor: 'blue'}}
        onComplete={(value, index) => {}}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />

<FormAction handleSubmit={handleSubmit} text="Simpan"/>

        </div>
    )
}

export default OTP;


