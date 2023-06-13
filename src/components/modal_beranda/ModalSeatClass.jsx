import React from "react";
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Image } from "primereact/image";

import Line from "../../assets/images/line_thin.svg"
import checklist from "../../assets/images/checklist.svg"
import save from "../../assets/images/Brand_button.svg"

function ModalSeatClass() {
    const [visible, setVisible] = useState(false);
    

    return (
        <>
            <div className="pl-10 font-bold" onClick={() => setVisible(true)} style={{ cursor: "pointer" }}>
                Bussiness
            </div>

            <div className="card flex justify-content-center">
                <Dialog visible={visible} modal={false} style={{ width: '400px' }} onHide={() => setVisible(false)}>
                    <div className="flex flex-col">
                        <div className="bg-purple3 flex flex-row">
                            <div>
                                <p className="font-bold text-white mt-2 ml-4">Economy </p>
                                <p className="text-white ml-4 pt-1 mb-1">IDR 4.950.000</p>
                            </div>
                            <div className="ml-52 pt-6">
                                <Image src={checklist} alt="checklist" />
                            </div>
                        </div>
                        <Image src={Line} alt="line" />
                        <div>
                            <p className="font-bold ml-4 pt-2">Premium Economy</p>
                            <p className="ml-4 pt-1 mb-1">IDR 7.550.000</p>
                        </div>
                        <Image src={Line} alt="line" />
                        <div>
                            <p className="font-bold ml-4 pt-2">Bussines</p>
                            <p className="ml-4 pt-1 mb-1">IDR 29.220.000</p>
                        </div>
                        <Image src={Line} alt="line" />
                        <div>
                            <p className="font-bold ml-4 pt-2">First Class</p>
                            <p className="ml-4 pt-1 mb-1">IDR 87.620.000</p>
                        </div>
                        <Image src={Line} alt="line" className="mb-4"/>
                    </div>
                    <Image src={save} alt="save" className="flex justify-end" style={{ cursor: "pointer" }} onClick={() => setVisible(false)}/>
                </Dialog>
            </div>

        </>


    )

}

export default ModalSeatClass;