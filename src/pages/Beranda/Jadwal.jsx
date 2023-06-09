import React from "react";
import { useState } from "react";
import { Card } from 'primereact/card';
import { Image } from "primereact/image";
import { Calendar } from 'primereact/calendar';
import { InputSwitch } from "primereact/inputswitch"
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';


import icon_pesawat from "../../assets/images/icon_pesawat.svg"
import icon_date from "../../assets/images/icon_date.svg"
import garis1 from "../../assets/images/garis.svg"
import garis_pendek1 from "../../assets/images/garis_pendek.svg"
import garis_pendek2 from "../../assets/images/garis_pendek2.svg"
import return1 from "../../assets/images/return.svg"
import airline_seat from "../../assets/images/airline-seat.svg"

const JadwalPenerbangan = () => {
    const [date, setDate] = useState(null);
    const [visible, setVisible] = useState(false);
    const [date1, setDate1] = useState(null);


    const return1Handler = () => {
        console.log("aku diklik!!")
    }

    const pilihDestinasiHandler = () => {
        setVisible(true)
    }

    const buttonHandler = () => {
        console.log("Halo aku diklik!!")
    }
    const [checked, setChecked] = useState(false);

    return (
        // <div className="flex justify-content-center">
        //     <Card title="Pilih Jadwal Penerbangan spesial di Tiketku" className="w-2/3 h-2/5 mx-auto">
        //         <div class="grid grid-rows-2 grid-flow-col gap-4">
        //             <div className="columns-2">
        //                 <div className="flex items-center">
        //                     <Image src={icon_pesawat} alt="icon_pesawat" className="mr-2" />
        //                     <p className="mr-2 text-primary1 text-sm">From</p>
        //                     <p onClick={() => setVisible(true)} className="pl-8 font-bold" >Jakarta (JKTA)</p>
        //                     {/* <Button  className="h-4 w-28" text severity="secondary"/> */}
        //                     <Dialog header="Header" visible={visible} onHide={() => setVisible(false)}
        //                         style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
        //                         <p className="m-0">
        //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        //                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        //                             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        //                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        //                         </p>
        //                     </Dialog>
        //                 </div>
        //                 <div className="flex items-center pt-4 pl-24">
        //                     <Image src={garis1} alt="garis1" />
        //                 </div>
        //                 <div className="flex items-center">
        //                     <Image src={return1} alt="return1" onClick={return1Handler} />
        //                     <Image src={icon_pesawat} alt="icon_pesawat" className="mr-2 pl-6" />
        //                     <p className="mr-2 text-primary1 text-sm">To</p>
        //                     <p onClick={() => setVisible(true)} className="pl-8 font-bold" >Melbourne (MLB)</p>
        //                 </div>
        //                 <div className="flex items-center pt-2 pl-32">
        //                     <Image src={garis1} alt="garis1" />
        //                 </div>
        //             </div>
        //             <div className="columns-2">
        //                 <div className="grid grid-rows-2">
        //                     <div className="flex items-center pl-24">
        //                         <p className="mr-2 text-primary1 text-base">Departure</p>

        //                         <p className="mr-2 text-primary1 text-base pl-16">Return</p>
        //                         <p className="pl-16"><InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} /></p>
        //                     </div>
        //                     <div className="flex items-center">
        //                         <Image src={icon_date} alt="icon_date" className="mr-2" />
        //                         <p className="mr-2 text-primary1 text-sm">Date</p>

        //                         <div className="flex items-center pt-20 pl-2">
        //                             <Image src={garis_pendek1} alt="garis1" />
        //                             <Image src={garis_pendek2} alt="garis2" className="pl-4" />
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex items-center ">
        //                     <div className="grid grid-rows-2">
        //                         <div className="flex items-center pl-32">
        //                             <p className="mr-2 text-primary1 text-base">Passengers</p>
        //                             <p className="mr-2 text-primary1 text-base pl-16">Seat Class</p>
        //                         </div>
        //                         <div className="flex items-center">
        //                             <Image src={airline_seat} alt="airline_seat" className="mr-2 pl-14" />
        //                             <p className="mr-2 text-primary1 text-sm">To</p>
        //                             <div className="flex items-center pt-10 pl-4">
        //                                 <Image src={garis_pendek1} alt="garis_pendek1" />
        //                                 <Image src={garis_pendek2} alt="garis_pendek2" className="pl-6" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </Card>
        // </div>
        <div className="flex flex-col mt-10 border-2 ml-48 mr-52 rounded-lg shadow-lg">
            <div className="flex items-center pb-6 ml-6 mt-2">
                <h1 className="font-bold text-xl">Pilih Jadwal Penerbangan spesial di</h1>
                <h1 className="font-bold pl-1 text-xl text-primary2">Tiketku!</h1>
            </div>
            <div className="flex flex-col ml-6 mr-6">
                <div className="grid grid-cols-2 gap-1">
                    <div className="flex items-center">
                        <Image src={icon_pesawat} alt="icon_pesawat" className="mr-2" />
                        <p className="mr-2 text-primary1 text-sm">From</p>
                        <p onClick={pilihDestinasiHandler} className="pl-4 font-bold" >Jakarta (JKTA)</p>
                        <Dialog header="Header" visible={visible} onHide={() => setVisible(false)} className="absolute"
                            style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Dialog>
                    </div>
                    <div className="flex items-center">
                        <Image src={return1} alt="return1" onClick={return1Handler} className="mr-6" />
                        <Image src={icon_pesawat} alt="icon_pesawat" className="mr-2 ml-1" />
                        <p className="mr-2 text-primary1 text-sm">To</p>
                        <p onClick={() => setVisible(true)} className="pl-8 font-bold">Melbourne (MLB)</p>
                        <Dialog header="Header" visible={visible} onHide={() => setVisible(false)}
                            style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Dialog>
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
                        <Calendar value={date} onChange={(e) => setDate(e.value)} numberOfMonths={2} className="w-40 h-7 pl-4" />
                        <Calendar value={date1} onChange={(e) => setDate1(e.value)} numberOfMonths={2} className="w-36 h-7 pl-2" />
                    </div>
                    <div className="flex items-center pl-12">
                        <Image src={airline_seat} alt="airline_seat" />
                        <p className="mr-2 text-primary1 text-base">To</p>
                        <p onClick={() => setVisible(true)} className="pl-8 font-bold">2 Penumpang</p>
                        <Dialog header="Header" visible={visible} onHide={() => setVisible(false)} className="w-80">
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Dialog>
                        <p onClick={() => setVisible(true)} className="pl-10 font-bold">Bussiness</p>
                        <Dialog header="Header" visible={visible} onHide={() => setVisible(false)} className="w-80">
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Dialog>
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
            <div>
                <Button label="Cari Penerbangan" severity="help" onClick={buttonHandler} className="w-full rounded-none" />
            </div>
        </div>


    )
}

export default JadwalPenerbangan;