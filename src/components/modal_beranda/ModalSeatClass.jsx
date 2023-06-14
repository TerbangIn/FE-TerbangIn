import React from "react";
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Image } from "primereact/image";

import Line from "../../assets/images/line_thin.svg"
import checklist from "../../assets/images/checklist.svg"
import save from "../../assets/images/Brand_button.svg"

function ModalSeatClass() {
    const [visible, setVisible] = useState(false);
    const [selectedSeatClass, setSelectedSeatClass] = useState("Bussiness");
    const [savedSeatClass, setSavedSeatClass] = useState(null);

    const handleSeatClassClick = (seatClass) => {
        setSelectedSeatClass(seatClass);
    };

    const handleSaveClick = () => {
        setSavedSeatClass(selectedSeatClass);
        setVisible(false);
    }
    

    return (
        <>
            <div className="pl-10 font-bold" onClick={() => setVisible(true)} style={{ cursor: "pointer" }}>
            {savedSeatClass || selectedSeatClass}
            </div>

            <div className="card flex justify-content-center">
                <Dialog visible={visible} modal={false} style={{ width: '400px' }} onHide={() => setVisible(false)}>
                    <div className="flex flex-col">
                        <div className={`flex flex-row ${selectedSeatClass === 'Economy' ? 'selected text-white bg-purple3' : ''}`} onClick={() => handleSeatClassClick('Economy')} style={{ cursor: "pointer" }}>
                            <div className="pr-3">
                                <p className="font-bold mt-2 ml-4">Economy</p>
                                <p className=" ml-4 pt-1 mb-1">IDR 4.950.000</p>
                            </div>
                            {selectedSeatClass === 'Economy' && (
                                <div className="ml-48 pt-6">
                                    <Image src={checklist} alt="checklist" />
                                </div>
                            )}
                        </div>
                        <Image src={Line} alt="line" />
                        <div className={`flex flex-row ${selectedSeatClass === 'Premium Economy' ? 'selected text-white bg-purple3' : ''}`} onClick={() => handleSeatClassClick('Premium Economy')} style={{ cursor: "pointer" }}>
                            <div>
                                <p className="font-bold ml-4 pt-2">Premium Economy</p>
                                <p className="ml-4 pt-1 mb-1">IDR 7.550.000</p>
                            </div>
                            {selectedSeatClass === 'Premium Economy' && (
                                <div className="ml-40 pt-6">
                                    <Image src={checklist} alt="checklist" />
                                </div>
                            )}
                        </div>
                        <Image src={Line} alt="line" />
                        <div className={`flex flex-row ${selectedSeatClass === 'Business' ? 'selected text-white bg-purple3' : ''}`} onClick={() => handleSeatClassClick('Business')} style={{ cursor: "pointer" }}>
                            <div className="pr-1">
                                <p className="font-bold ml-4 pt-2">Business</p>
                                <p className="ml-4 pt-1 mb-1">IDR 29.220.000</p>
                            </div>
                            {selectedSeatClass === 'Business' && (
                                <div className="ml-48 pt-6">
                                    <Image src={checklist} alt="checklist" />
                                </div>
                            )}
                        </div>
                        <Image src={Line} alt="line" />
                        <div className={`flex flex-row ${selectedSeatClass === 'First Class' ? 'selected  text-white bg-purple3' : ''}`} onClick={() => handleSeatClassClick('First Class')} style={{ cursor: "pointer" }}>
                            <div>
                                <p className="font-bold ml-4 pt-2">First Class</p>
                                <p className="ml-4 pt-1 mb-1">IDR 87.620.000</p>
                            </div>
                            {selectedSeatClass === 'First Class' && (
                                <div className="ml-48 pt-6">
                                    <Image src={checklist} alt="checklist" />
                                </div>
                            )}
                        </div>
                        <Image src={Line} alt="line" className="mb-4"/>
                    </div>
                    <Image src={save} alt="save" className="flex justify-end" style={{ cursor: "pointer" }} onClick={handleSaveClick} />
                </Dialog>
            </div>
           
        </>
    );

}

export default ModalSeatClass;