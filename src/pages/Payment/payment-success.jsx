import React from "react";
import success from './images/🦆 illustration _Cart shopping list_.svg';

function Success(){
    return(
        <>
        <div className="ml-[629px   ]">
            <img src={success} alt="" className="mt-[90px]" />
            <div className="">
                <h1 className="text-purple-600 text-sm mt-[18px]">Selamat</h1>
                <h1 className="text-sm">Transaksi Pembayaran Tiket sukses!</h1>
            </div>
            <button className="w-[347px] h-12 text-white bg-purple-700 rounded-lg mt-[52px]">Terbitkan Tiket</button><br />
            <button className="w-[347px] h-12 text-white bg-[#D0B7E6] rounded-lg mt-3">Cari Penerbangan Lain</button>
        </div>
        </>
    )
}

export default Success;