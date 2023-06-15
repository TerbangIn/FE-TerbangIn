import React from "react";
import { useState } from "react";
import { Image } from "primereact/image";
import { Calendar } from 'primereact/calendar';
import { InputSwitch } from "primereact/inputswitch"
import { Button } from 'primereact/button';
import ModalPassengers from "../../components/modal_beranda/ModalPassengers";
import ModalSeatClass from "../../components/modal_beranda/ModalSeatClass";
import ModalFlightFrom from "../../components/modal_beranda/ModalFlightFrom";
import ModalFlightTo from "../../components/modal_beranda/ModalFlightTo";



import icon_pesawat from "../../assets/images/icon_pesawat.svg"
import icon_date from "../../assets/images/icon_date.svg"
import garis1 from "../../assets/images/garis.svg"
import garis_pendek1 from "../../assets/images/garis_pendek.svg"
import garis_pendek2 from "../../assets/images/garis_pendek2.svg"
import return1 from "../../assets/images/return.svg"
import airline_seat from "../../assets/images/airline-seat.svg"

const JadwalPenerbangan = () => {
    const [date, setDate] = useState(null);
    const [date1, setDate1] = useState(null);
    const [checked, setChecked] = useState(false);
    const [from, setFrom] = useState("Jakarta (JKTA)");
    const [to, setTo] = useState("Melbourne (MLB)");


    const return1Handler = () => {
        setFrom(to);
        setTo(from);
    }

    const buttonHandler = () => {
        console.log("Halo aku diklik!!")
    }
    
    const handleFromChange = (value) => {
        setFrom(value);
    };

    const handleToChange = (value) => {
        setTo(value);
    };

    const handleFromSelect = (value) => {
        setFrom(value);
    };

    const handleToSelect = (value) => {
        setTo(value);
    };

    const handleFromBlur = (event) => {
        const value = event.target.value;
        setFrom(value);
    };

    const handleToBlur = (event) => {
        const value = event.target.value;
        setTo(value);
    };

    const handleToFocus = () => {
        setTo(from);
        setFrom("");
    };

    return (
        <div className="relative flex flex-col border-2 ml-48 mr-52 rounded-lg shadow-lg -mt-10 bg-white">
            <div className="flex items-center pb-6 ml-6 mt-2">
                <h1 className="font-bold text-xl">Pilih Jadwal Penerbangan spesial di</h1>
                <h1 className="font-bold pl-1 text-xl text-primary2">Tiketku!</h1>
            </div>
            <div className="flex flex-col ml-6 mr-6">
                <div className="grid grid-cols-2 gap-1">
                    <div className="flex items-center">
                        <Image src={icon_pesawat} alt="icon_pesawat" className="mr-2" />
                        <p className="mr-2 text-primary1 text-sm">From</p>
                        <ModalFlightFrom
                            value={from}
                            onChange={handleFromChange}
                            onSelect={handleFromSelect}
                            onBlur={handleFromBlur}
                        />
                    </div>
                    <div className="flex items-center">
                        <Image src={return1} alt="return1" onClick={return1Handler} className="mr-6" style={{ cursor: 'pointer' }} />
                        <Image src={icon_pesawat} alt="icon_pesawat" className="mr-2 ml-1" />
                        <p className="mr-2 text-primary1 text-sm">To</p>
                        <ModalFlightTo
                            value={to}
                            onChange={handleToChange}
                            onSelect={handleToSelect}
                            onBlur={handleToBlur}
                            onFocus={handleToFocus}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="pl-20">
                        <Image src={garis1} alt="garis1" />
                    </div>
                    <div className="pl-32">
                        <Image src={garis1} alt="garis1" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-10">
                    <div className="flex items-center pl-20">
                        <p className="mr-2 text-primary1 text-base">Departure</p>
                        <p className="mr-2 text-primary1 text-base pl-20">Return</p>
                        <p className="pl-16"><InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} /></p>
                    </div>
                    <div className="flex items-center pl-32">
                        <p className="mr-2 text-primary1 tex-base">Passengers</p>
                        <p className="mr-2 text-primary1 tex-base pl-14">Seat Class</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center">
                        <Image src={icon_date} alt="icon_date" className="mr-2" />
                        <p className="text-primary1 text-base">Date</p>
                        <Calendar value={date} onChange={(e) => setDate(e.value)} numberOfMonths={2} className="w-40 h-7 pl-3" />
                        <Calendar value={date1} onChange={(e) => setDate1(e.value)} numberOfMonths={2} className="w-36 h-7 pl-2" />
                    </div>
                    <div className="flex items-center pl-12">
                        <Image src={airline_seat} alt="airline_seat" />
                        <p className="mr-2 text-primary1 text-base">To</p>
                        <ModalPassengers />
                        <ModalSeatClass />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="flex items-center pl-20">
                        <Image src={garis_pendek1} alt="garis_1" />
                        <Image src={garis_pendek2} alt="garis_2" className="pl-4" />
                    </div>
                    <div className="flex items-center pl-32">
                        <Image src={garis_pendek1} alt="garis_pendek1" />
                        <Image src={garis_pendek2} alt="garis_pendek2" className="pl-4" />
                    </div>
                </div>
            </div>
            <div className="bg-button1">
                <Button label="Cari Penerbangan" severity="help" onClick={buttonHandler} className="w-full rounded-none" />
            </div>
        </div>


    )
}

export default JadwalPenerbangan;