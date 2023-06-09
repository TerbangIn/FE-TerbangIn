import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { Image } from "primereact/image";
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";


import Logo from "../../logo.svg"

function Navbar() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    const handleSearch = () => {
        // Lakukan aksi pencarian sesuai dengan nilai `value`
        console.log("Melakukan pencarian:", value);
    };

    const menuItems = [
        {
            template: (
                <Link to="/">
                    <Image src={Logo} alt="Logo" />
                </Link>
            )
        },
        {
            template: (
                <div className="card flex flex-wrap justify-content-center gap-3">
                    <span className="p-input-icon-right">
                        <i className="pi pi-search" onClick={handleSearch}/>
                        <InputText placeholder="Search" />
                    </span>

                </div>
            )
        }
    ];

    return (
        <div className="card">
            <Menubar model={menuItems} />
        </div>
    )
}

export default Navbar;