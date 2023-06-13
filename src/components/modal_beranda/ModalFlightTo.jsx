import React from "react";
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { InputText } from "primereact/inputtext";

function ModalFlightTo() {
    const [visible, setVisible] = useState(false);

    const handleHapus = () => {
        console.log("hapus ni")
    }

    const handleSearch = () => {

        console.log("Melakukan pencarian:");
    };

    return (
        <>
            <div className="pl-8 font-bold" onClick={() => setVisible(true)} style={{ cursor: "pointer" }}>
                Melbourne (MLB)
            </div>

            <div className="card flex justify-content-center">
                <Dialog
                    header={<span className="p-input-icon-left">
                        <i className="pi pi-search" onClick={handleSearch} />
                        <InputText placeholder="Search" className="w-32"/>
                    </span>}
                    visible={visible}
                    modal={false}
                    style={{ width: '50vw' }}
                    onHide={() => setVisible(false)}>
                    <div className="flex flex-col">
                        <div>
                            <p className="pb-4 font-bold">Pencarian Terkini <span className="text-red-500 pl-96 pb-4" onClick={handleHapus}> Hapus</span></p>
                        </div>
                        <div className="">
                            Jakarta
                            <Divider />
                        </div>
                        <div>
                            Bandung
                            <Divider />
                        </div>
                        <div>
                            Surabaya
                            <Divider />
                        </div>
                    </div>
                </Dialog>
            </div>

        </>


    )

}

export default ModalFlightTo;