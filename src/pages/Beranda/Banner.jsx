import React from "react";
import { Image } from "primereact/image";

import banner4 from "../../assets/images/img_banner.svg"

function Banner() {
    return (
        <>
            <div className="bg-gradient-to-r from-purple to-purple2 sm:w-full xs:w-full sm:h-28 sm:mt-12 xs:mt-12"></div>
            <div className="flex justify-center sm:-mt-36 xs:-mt-36 ">
                <Image src={banner4} alt="img_banner" className="xs:w-4/5 sm:w-4/5" />
            </div>
        </>

    )
}

export default Banner;