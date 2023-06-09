import React from "react";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Card } from "primereact/card";

import button_all from "../../assets/images/button.svg"
import button_asia from "../../assets/images/button_asia.svg"
import button_amerika from "../../assets/images/button_amerika.svg"
import button_australia from "../../assets/images/button_australia.svg"
import button_eropa from "../../assets/images/button_eropa.svg"
import button_afrika from "../../assets/images/button_afrika.svg"
import jkt_bnk from "../../assets/images/jkt_bnk1.svg"
import jkt_sdn from "../../assets/images/jkt_sdn.svg"

function Destinasi() {
    const buttonHandler = () => {
        console.log("Aku melakukan pencarian")
    }

    return (
        <div className="ml-56 mt-8">
            <div className="flex flex-row">
                <p className="font-sans1 font-bold text-base">Destinasi Favorit</p>
            </div>
            <div className="flex items-center">
                <Image src={button_all} alt="button_all" onClick={buttonHandler} className="w-32" />
                <Image src={button_asia} alt="button_asia" className="pl-4 w-32" />
                <Image src={button_amerika} alt="button_amerika" className="pl-4 w-32" />
                <Image src={button_australia} alt="button_australia" className="pl-4 w-32" />
                <Image src={button_eropa} alt="button_eropa" className="pl-4 w-32" />
                <Image src={button_afrika} alt="button_afrika" className="pl-4 w-32" />

            </div>
            <div className="flex flex-row mt-5 ml-8 mb-4">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col border-2 rounded-md w-44">
                        <div>
                            <p className="w-full"><Image src={jkt_bnk} alt="jakarta_bangkok1" /></p>
                        </div>
                        <div>
                            <p>Jakarta -> Bangkok</p>
                        </div>
                        <div>
                            <p className="text-button1">AirAsia</p>
                        </div>
                        <div>
                            <p>20 - 30 Maret 2023</p>
                        </div>
                        <div>
                            <p>Mulai dari <span className="text-primary5">IDR 950.000</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col border-2 rounded-lg w-44">
                        <div>
                            <Image src={jkt_bnk} alt="jakarta_bangkok2" />
                        </div>
                        <div>
                            <p>Jakarta -> Bangkok</p>
                        </div>
                        <div>
                            <p className="text-button1">AirAsia</p>
                        </div>
                        <div>
                            <p>20 - 30 Maret 2023</p>
                        </div>
                        <div>
                            <p>Mulai dari <span className="text-primary5">IDR 950.000</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col border-2 rounded-lg w-44">
                        <div>
                            <Image src={jkt_sdn} alt="jakarta_sydney" />
                        </div>
                        <div>
                            <p>Jakarta -> Sydney</p>
                        </div>
                        <div>
                            <p className="text-button1">AirAsia</p>
                        </div>
                        <div>
                            <p>5 - 45 Maret 2023</p>
                        </div>
                        <div>
                            <p>Mulai dari <span className="text-primary5">IDR 3.650.000</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col border-2 rounded-lg w-44">
                        <div>
                            <Image src={jkt_sdn} alt="jakarta_sydney" />
                        </div>
                        <div>
                            <p>Jakarta -> Sydney</p>
                        </div>
                        <div>
                            <p className="text-button1">AirAsia</p>
                        </div>
                        <div>
                            <p>5 - 45 Maret 2023</p>
                        </div>
                        <div>
                            <p>Mulai dari <span className="text-primary5">IDR 3.650.000</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col border-2 rounded-lg w-44">
                        <div>
                            <Image src={jkt_bnk} alt="jakarta_bangkok3" />
                        </div>
                        <div>
                            <p>Jakarta -> Bangkok</p>
                        </div>
                        <div>
                            <p className="text-button1">AirAsia</p>
                        </div>
                        <div>
                            <p>20 - 30 Maret 2023</p>
                        </div>
                        <div>
                            <p>Mulai dari <span className="text-primary5">IDR 950.000</span></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Destinasi;