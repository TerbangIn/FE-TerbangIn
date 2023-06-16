import PinInput from 'react-pin-input';
import FormAction from "../components/formAction";
import { Button } from 'primereact/button';
import {  useState} from 'react';
import { Menubar } from 'primereact/menubar';
// import { InputText } from 'primereact/inputtext';
import './otp.css'
import Logo from './logo.png'
import { Image } from 'primereact/image';
import { useEffect } from 'react';
import Header from '../components/header';
import 'primeicons/primeicons.css';
         

// import Navbar from '../components/navbar';

export default function OTP() {
    const [otp, setOtp] = useState("");
const [minutes, setMinutes] = useState(1);
const [seconds, setSeconds] = useState(60);
const [emailHidden, setEmailHidden] = useState('mifta@gmail.com')
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(signupState)
        // createAccount()
      }

      const items = [
        {
            // label: 'File',
            // icon: 'pi pi-fw pi-file co'
        }]
// width: 98px;
// height: 53px;
// left: 128px;
// top: 15px;

        const start =   <Image className="image" src={Logo} alt="Image" width='30%' />

        let hideEmail = function(email) {
            return email.replace(/(.{1})(.*)(?=@)/,
              function(gp1, gp2, gp3) { 
                for(let i = 0; i < gp3.length; i++) { 
                  gp2+= "*"; 
                } return gp2; 
              });
          };

         const handleBack = () => {
            window.location.href = "/signup"
          }
          
        useEffect(() => {
// console.log(hideEmail("falah@gmail.com"));
    const interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
    
        if (seconds === 0) {
        //   if (minutes === 0) {
            clearInterval(interval);
        //   } else {
            // setSeconds(60);
        //   }
        }
      }, 1000);
    
      return () => {
        clearInterval(interval);
      };
},[ seconds]);

    return(
        <div className='w-screen'>
        <div className='flex flex-col'>
        {/* <Button icon='pi pi-fw pi-file' className="" text label=""/> */}
        <div className="">
            <Menubar model={items} start={start} />
            {/* <Navbar/> */}
        </div>

<div className='mt-6 mb-16 flex flex-col items-center justify-center'>
        <div className='text-left w-2/4 gap-10 flex items-center'>
        <Button type='button' className="" text  label="" onClick={handleBack}>
            <i className='pi pi-arrow-left font-extrabold text-black' style={{ fontSize: '1.4rem' }}></i>
            </Button>

        <label className='text-3xl  font-extrabold text-gray-900'>Masukkan OTP</label>

        </div>
        <div className='mt-10'>
            <h2>Ketik 6 digit kode yang dikirimkan ke <b>{hideEmail(emailHidden)}</b></h2>
            
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

        {/* <h2>Kirim ulang OTP dalam 60 detik</h2> */}
        {seconds > 0  ? (
        <h2>
          Kirim ulang OTP dalam {seconds < 10 ? `${seconds}` : seconds} detik
        </h2>
      ) : (
        // ketika detik sudah 0
        <Button label="Kirim Ulang" text severity='danger'/>
      )}
        </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='w-1/4'>
        <FormAction handleSubmit={handleSubmit} text="Simpan"/>
        </div>
        </div>
        </div>
        </div>
    )
}
