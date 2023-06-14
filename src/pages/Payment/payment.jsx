import React,{ useState } from "react";
import { InputText } from 'primereact/inputtext';
import { InputSwitch } from "primereact/inputswitch";



function Payment (){
    const [checked, setChecked] = useState(true);
    
    
    return(
        <div>
            <header>

            </header>
            <div >
                <div className="data w-98 h-97 border-2 border-light-gray rounded mb-8.5">
                    <h1 className="text-xl1 font-bold mt-6.5 mb-4 mx-4 ">Isi Data Pemesan</h1>
                    <h1 className="w-97 h-10 mx-4 bg-black1 text-white text-base rounded-t-lg pt-2 pl-4 ">Data Diri Pemesan</h1>
                    <div className="font-semibold align-middle ml-8">
                        <div className="flex-auto mb-3">
                            <label className="font-bold block mb-1 text-purple1 ">
                            Nama Lengkap
                            </label>
                            <input className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                        </div>
                        <div>
                            <h1>Punya Nama Keluarga?</h1>
                            <div className="card flex justify-content-center">
                                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                            </div>
                        </div>
                        <div className="flex-auto mb-3">
                            <label className="font-bold block mb-1 text-purple1 ">
                            Nama Keluarga
                            </label>
                            <input className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                        </div>
                        <div className="flex-auto mb-3 ">
                            <label htmlFor="number" className="font-bold block mb-1 text-purple1 ">
                            Nomor Telepon
                            </label>
                            <InputText id="number" keyfilter="num" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md " />
                        </div>
                        <div className="flex-auto mb-3">
                            <label htmlFor="alphanumeric" className="font-bold block mb-1 text-purple1 ">
                            Email
                            </label>
                            <input className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                        </div>
                    </div>
                </div>
                <div className="data w-98 border-2 border-light-gray rounded">
                    <h1 className="text-xl1 font-bold mt-6.5 mb-4 mx-4">Isi Data Penumpang</h1>
                    <h1 className="w-97 h-10 mx-4 bg-black1 text-white text-base rounded-t-lg pt-2 pl-4 ">Data Diri Penumpang 1 - Adult</h1>
                    <div className="font-semibold align-middle ml-8">
                        <div className="flex-auto mb-3">
                            <label className="font-bold block mb-1 text-purple1 ">
                            Title
                            </label>
                            <select placeholder="Select title" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md">
                                <option value="men">Mr.</option>
                                <option value="women">Ms.</option>
                            </select>
                        </div>
                        <div className="flex-auto mb-3">
                            <label className="font-bold block mb-1 text-purple1 ">
                            Nama Lengkap
                            </label>
                            <input className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                        </div>
                        <div>
                            <h1>Punya Nama Keluarga?</h1>
                            <div className="card flex justify-content-center">
                                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                            </div>
                        </div>
                        <div className="flex-auto mb-3">
                            <label className="font-bold block mb-1 text-purple1 ">
                            Nama Keluarga
                            </label>
                            <input className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                        </div>
                        <div className="flex-auto mb-3">
                            <label className="font-bold block mb-1 text-purple1 ">
                            Tanggal Lahir
                            </label>
                            <input type="date" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                        </div>
                        <div className="flex-auto mb-3">
                            <label htmlFor="alphanumeric" className="font-bold block mb-1 text-purple1 ">
                            Kewarganegaraan
                            </label>
                            <input className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                        </div>
                        <div className="flex-auto mb-3 ">
                            <label htmlFor="number" className="font-bold block mb-1 text-purple1 ">
                            KTP/Paspor
                            </label>
                            <InputText id="number" keyfilter="num" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md " />
                        </div>
                        <div className="flex-auto mb-3">
                            <label className="font-bold block mb-1 text-purple1 ">
                            Negara Penerbit
                            </label>
                            <select placeholder="Select title" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md">
                                <option value="indonesia">Indonesia</option>
                                <option value="malaysia">Malaysia</option>
                            </select>
                        </div>
                        <div className="flex-auto mb-3">
                            <label className="font-bold block mb-1 text-purple1 ">
                            Berlaku Sampai
                            </label>
                            <input type="date" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md mb-8" />
                        </div>
                    </div>
                    <h1 className="w-97 h-10 mx-4 bg-black1 text-white text-base rounded-t-lg pt-2 pl-4 ">Data Diri Penumpang 2 - Adult</h1>
                    <div className="font-semibold align-middle ml-8">
                        <div className="flex-auto mb-3">
                            <label className="font-bold block mb-1 text-purple1 ">
                            Title
                            </label>
                            <select placeholder="Select title" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md">
                                <option value="men">Mr.</option>
                                <option value="women">Ms.</option>
                            </select>
                        </div>
                        <div className="flex-auto mb-3">
                            <label className="font-bold block mb-1 text-purple1 ">
                            Nama Lengkap
                            </label>
                            <input className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                        </div>
                        <div>
                            <h1>Punya Nama Keluarga?</h1>
                            <div className="card flex justify-content-center">
                                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                            </div>
                        </div>
                        <div className="flex-auto mb-3">
                            <label className="font-bold block mb-1 text-purple1 ">
                            Nama Keluarga
                            </label>
                            <input className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                        </div>
                        <div className="flex-auto mb-3">
                            <label className="font-bold block mb-1 text-purple1 ">
                            Tanggal Lahir
                            </label>
                            <input type="date" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                        </div>
                        <div className="flex-auto mb-3">
                            <label htmlFor="alphanumeric" className="font-bold block mb-1 text-purple1 ">
                            Kewarganegaraan
                            </label>
                            <input className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                        </div>
                        <div className="flex-auto mb-3 ">
                            <label htmlFor="number" className="font-bold block mb-1 text-purple1 ">
                            KTP/Paspor
                            </label>
                            <InputText id="number" keyfilter="num" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md " />
                        </div>
                        <div className="flex-auto mb-3">
                            <label className="font-bold block mb-1 text-purple1 ">
                            Negara Penerbit
                            </label>
                            <select placeholder="Select title" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md">
                                <option value="indonesia">Indonesia</option>
                                <option value="malaysia">Malaysia</option>
                            </select>
                        </div>
                        <div className="flex-auto mb-3">
                            <label className="font-bold block mb-1 text-purple1 ">
                            Berlaku Sampai
                            </label>
                            <input type="date" className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}


export default Payment;