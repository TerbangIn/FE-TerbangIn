import React, { useState }  from "react";


function Modal (){
    return(
        <div className="">
            <div className="bg-danger rounded-md flex flex-row w-99 h-12.5 ml-65.5 mt-43" >
                <h1 className="text-lg text-white ml-73 mt-2  ">Anda Harus login terlebih dahulu!</h1>
                <div className="border-2 w-7.5 h-7.5 ml-66 my-2 rounded-full">
                    <button className="text-1xl text-white ml-2 ">X</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;