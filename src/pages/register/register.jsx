import React, { useState } from "react";
// import Logo from './tiketku.png'
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
// import Link from '../Beranda'
// import './login.css'
        
function Register() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center" >
            {/* <Image className="image" src={Logo} alt="Image"/> */}
            <label className="title">Daftar</label>
            <label className="email">Nama</label>
            <InputText value={value} onChange={(e) => setValue(e.target.value)} className="input1" placeholder="Nama Lengkap" />
            <label className="email">Email</label>
            <InputText value={value} onChange={(e) => setValue(e.target.value)} className="input1" placeholder="Contoh: johndoe@gmail.com" />
            <label className="email">Nomor Telepon</label>
            <InputText value={value} onChange={(e) => setValue(e.target.value)} className="input1" placeholder="+62." />
            <label className="password">Buat Password</label>
            <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask className="input2" placeholder="Buat Password" />
            <Button label="Daftar" icon="pi pi-check" className="button"/>
        </div>
    )
}

export default Register;