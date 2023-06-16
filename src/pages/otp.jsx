import PinInput from 'react-pin-input';
import FormAction from "../components/formAction";
import { Button } from 'primereact/button';
import React from 'react';
import { Menubar } from 'primereact/menubar';
// import { InputText } from 'primereact/inputtext';
import './otp.css'
import Logo from './logo.png'
// import Navbar from '../components/navbar';

function OTP() {
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(signupState)
        createAccount()
      }

      const items = [
        {
            // label: 'File',
            icon: 'pi pi-fw pi-file co'
        }]
// width: 98px;
// height: 53px;
// left: 128px;
// top: 15px;

        const start = <img alt="logo" src={Logo} height="5" className="mr-2 h-13px w-28px"></img>;


    return(

        <div>
        {/* <Button icon='pi pi-fw pi-file' className="" text label=""/> */}
        <div className="card">
            <Menubar model={items} start={start} />
            {/* <Navbar/> */}
        </div>
            <label className='text-3xl text-left font-extrabold text-gray-900'>Masukkan OTP</label>
            <h2>Ketik 6 digit kode yang dikirimkan ke {}</h2>
            
        <PinInput 
        length={6} 
        initialValue=""
        secret
        secretDelay={100} 
        onChange={(value, index) => {}} 
        type="numeric" 
        inputMode="number"
        style={{paddingTop: '44px', paddingBottom: '24px'}}  
        inputStyle={{border: '1px solid #D0D0D0', borderRadius: '16px'}}
        // inputFocusStyle={{borderColor: 'blue'}}
        onComplete={(value, index) => {}}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />

        <h2 style={{paddingBottom: '104px'}}>Kirim ulang OTP dalam 60 detik</h2>


        <FormAction handleSubmit={handleSubmit} text="Simpan"/>
        </div>
    )
}
