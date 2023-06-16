import React from "react";
import logo from './images/logo.svg';
import Search from './images/search.svg' ;
import list from './images/list.svg';
import notif from './images/notif.svg';
import user from './images/user.svg';


function Navbar (){
    return(
        <>
            <div>
                <div className="flex flex-row pl-32 pt-4 pb-4 shadow-bm">
                    <div className="">
                        <a href="">
                            <img src={logo}/>
                        </a>
                    </div>
                    <div className="flex flex-row bg-gray w-95 h-12 rounded-xl mr-74">
                        <input className="pl-6" type="search" name="" id="" placeholder="Cari di sini ..." src={Search} style={{ border: 'none', background: 'none', outline: 'none' }} />
                        <img src={Search} alt="" className="ml-5 w-6 h-6 mt-2.5 flex justify-end" />
                    </div>
                    <div className="flex flex-row space-x-7">
                        <a href="">
                            <img src={list} alt="" />
                        </a>
                        <a href="">
                            <img className="" src={notif} alt="" />
                        </a>
                        <a href="">
                            <img src={user} alt="" />
                        </a>
                    </div>
                </div>
                <div className="pl-65 S ">
                    <p className="font-bold mt-12 mb-8 text-1xl" >Notifikasi</p>
                </div>
            </div>
        </>
    )
}


export default Navbar;
