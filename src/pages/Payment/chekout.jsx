import React,{ useState } from "react";
import { InputText } from 'primereact/inputtext';
import SeatCustomer from "./seat";
import image from './images/Image.svg';


function Checkout (){
    
    
    return(
        <div>
            <header>

            </header>
            <div className="flex flex-row ml-67">
                <div>
                    <div className="data w-98 h-97 border-2 border-light-gray rounded mb-8.5">
                        <h1 className="text-xl1 font-bold mt-6.5 mb-4 mx-4 ">Isi Data Pemesan</h1>
                        <h1 className="w-97 h-10 mx-3 bg-black1 text-white text-base rounded-t-lg pt-2 pl-4 ">Data Diri Pemesan</h1>
                        <div className="font-semibold align-middle ml-6.5">
                            <div className="flex-auto mb-3">
                                <label className="font-bold block mb-1 text-purple1 ">
                                Nama Lengkap
                                </label>
                                <input className="w-96.5 h-10 ps-4 border border-gray-400 rounded-md" />
                            </div>
                            <div className="flex flex-row">
                                <h1 className="text-sm">Punya Nama Keluarga?</h1>
                                <div className="ml-63">
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer"/>
                                        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-900"></div>
                                    </label>
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
                        <h1 className="w-97 h-10 mx-3 bg-black1 text-white text-base rounded-t-lg pt-2 pl-4 ">Data Diri Penumpang 1 - Adult</h1>
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
                            <div className="flex flex-row">
                                <h1 className="text-sm">Punya Nama Keluarga?</h1>
                                <div className="ml-63">
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer"/>
                                        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-900"></div>
                                    </label>
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
                        <h1 className="w-97 h-10 mx-3 bg-black1 text-white text-base rounded-t-lg pt-2 pl-4 ">Data Diri Penumpang 2 - Adult</h1>
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
                            <div className="flex flex-row">
                                <h1 className="text-sm">Punya Nama Keluarga?</h1>
                                <div className="ml-63">
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer"/>
                                        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-900"></div>
                                    </label>
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
                        <SeatCustomer/>
                    </div>
                </div>
                <div>
                    <div className="ml-7">
                        <h1 className="text-lg font-bold">Detail Penerbangan</h1>
                        <div className="flex flex-row">
                            <div>
                                <h2 className="font-bold text-base '">07:00</h2>
                                <p className="text-sm -mt-2">3 Maret 2023</p>
                            </div>
                            <div className="ml-38">
                                <h1 className="text-purple1 text-xs">Keberangkatan</h1>
                            </div>
                        </div>
                        <h1 className="text-sm -mt-3">Soekarno Hatta - Terminal 1A Domestik</h1>
                        <div className="border-b bg-light-gray border w-82"></div>
                    </div>
                    <div className="ml-7">
                        <div className="flex flex-row">
                            <img src={image} alt="" />
                            <div className="ml-2">
                                <h1 className="text-sm font-bold">Jet Air - Economy</h1>
                                <h1 className="text-1sm font-bold -mt-2">JT - 203</h1>
                                <p className="font-bold text-1sm">Informasi:</p>
                                <p className="-mt-4 text-1sm">Baggage 20 kg</p>
                                <p className="text-1sm -mt-4">Cabin baggage 7 kg</p>
                                <p className="text-1sm -mt-4">In Flight Entertainment</p>
                            </div>
                        </div>
                        <div className="border-b bg-light-gray border w-82"></div>
                    </div>
                    <div >
                        <div className="mt-3 ml-7">
                            <div className="flex flex-row">
                                <div>
                                    <h2 className="font-bold text-base '">11:00</h2>
                                    <p className="text-sm -mt-2">3 Maret 2023</p>
                                </div>
                                <div className="ml-38">
                                    <h1 className="text-purple1 text-xs">Kedatangan</h1>
                                </div>
                            </div>
                            <h1 className="text-sm -mt-3">Melbourne International Airportk</h1>
                            <div className="border-b bg-light-gray border w-82"></div>
                        </div>
                    </div>
                    <div className="ml-7">
                        <h1 className="text-sm font-bold">Rincian Harga</h1>
                        <div>
                            <div className="flex flex-row">
                                <h1 className="text-sm w-56">2 Adults</h1>
                                <h1 className="text-sm ml-2">IDR 9.550.000</h1>
                            </div>
                            <div className="flex flex-row">
                                <h1 className="text-sm w-70">1 Baby</h1>
                                <h1 className="text-sm">IDR 0</h1>
                            </div>
                            <div className="flex flex-row">
                                <h1 className="text-sm w-60">Tax</h1>
                                <h1 className="text-sm ml-1">IDR 300.000</h1>
                            </div>
                        </div>
                        <div className="border-b bg-light-gray border w-82"></div>
                    </div>
                    <div className="ml-7 flex flex-row">
                        <h1 className="font-bold text-base w-48">Total</h1>
                        <h1 className="text-purple-900 font-bold  ml-2.5 text-lg">IDR 9.850.000</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Checkout;