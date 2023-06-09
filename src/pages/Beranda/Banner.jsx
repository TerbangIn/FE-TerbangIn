import React from "react";
import { Image } from "primereact/image";

import banner1 from "../../assets/images/Rectangle 129.svg"
import banner2 from "../../assets/images/Rectangle 130.svg"
import banner3 from "../../assets/images/Rectangle 128.svg"
import banner4 from "../../assets/images/img_banner.svg"

function Banner() {
    return (
        <>
            <div className="flex relative overflow-hidden mt-10">
                <div className="float-start mt-8">
                    <Image src={banner1} alt="banner_1"/>
                </div>
                <div className="columns-1">
                    <Image src={banner4} alt="banner_4" />
                </div>
                <div className="float-end mt-8">
                    <Image src={banner2} alt="banner_2" />
                </div>
                
            </div>

            {/* <div className=" flex justify-between relative overflow-hidden">
                <div className="relative mt-14 h-52">
                <Image src={banner1} alt="banner 1" />
                </div> 
                <div className="absolute top-8 right-28 bg-primary3 pt-48 rounded-2xl">
                    <Image src={banner4} alt="banner_4"/>
                </div> 
                <div className="mt-14 h-52">
                    <Image src={banner2} alt="banner 2" />
                </div>
            </div> */}
            {/* <div className="flex flex-row relative overflow-hidden pt-10">
                <div className=" basis-30">
                    <Image src={banner1} alt="banner1" className="w-full"/>
                </div>
                <div className=" basis-9/12 -ml-10 -mt-4 -mb-4 bg-primary3 rounded-lg relative z-10">
                    col2
                </div>
                <div className=" basis-30">
                    {/* col3 */}
            {/* <Image src={banner2} alt="banner2" className="w-full"/> */}
            {/* </div> */}
            {/* </div> */}
            {/* <div className="grid grid-cols-3">
                <div>
                    <Image src={banner1} alt="banner1"/>
                </div>
                <div className="bg-primary3 w-full">
                    row 2
                </div>
                <div>
                    <Image src={banner2} alt="banner2"/>
                </div>
            </div> */}


        </>

    )
}

export default Banner;