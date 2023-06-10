import React from "react";
import { Image } from "primereact/image";

import banner1 from "../../assets/images/Rectangle 129.svg"
import banner2 from "../../assets/images/Rectangle 130.svg"
import banner3 from "../../assets/images/Rectangle 128.svg"
import banner4 from "../../assets/images/img_banner.svg"

function Banner() {
    return (
        <>
            <div className="bg-gradient-to-r from-purple to-purple2 w-full h-28 mt-20"></div>
            <div className="flex justify-center -mt-40 ">
                <Image src={banner4} alt="img_banner" width="1020px" />
            </div>
        </>

    )
}

export default Banner;