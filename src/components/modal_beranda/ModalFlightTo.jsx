import React from "react";
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { InputText } from "primereact/inputtext";

import { Image } from "primereact/image";

import icon_x from "../../assets/images/icon_x.svg"

function ModalFlightTo({ value, onSelect }) {
    const [visible, setVisible] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [options] = useState([
        "Jakarta (JKTA)",
        "Bandung (BDG)",
        "Surabaya (SBY)",
        "Melbourne (MLB)"
    ]);
    const [recentSearches, setRecentSearches] = useState([]);

    const handleHapus = () => {
        setRecentSearches([]);
    }

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = options.filter(option => option.toLowerCase().includes(searchTerm));
        setRecentSearches(filtered);
        setSearchValue(searchTerm);
    };

    const handleSelection = (selectedValue) => {
        onSelect(selectedValue);
        setSearchValue("");
        setVisible(false);
    };

    const handleRemoveSearch = (search) => {
        const updatedSearches = recentSearches.filter(item => item !== search);
        setRecentSearches(updatedSearches);
    };

    return (
        <>
            <div className="pl-8 font-bold cursor-pointer" onClick={() => setVisible(true)}>
                {value}
            </div>

            <div className="card flex justify-content-center">
                <Dialog
                    header={
                        <span className="p-input-icon-left">
                            <i className="pi pi-search cursor-pointer" onClick={handleSearch} />
                            <InputText
                                placeholder="Search"
                                value={searchValue}
                                onChange={handleSearch}
                            />
                        </span>
                    }
                    visible={visible}
                    modal={false}
                    style={{ width: '50vw' }}
                    onHide={() => setVisible(false)}
                >
                    <div className="flex flex-col">
                        <div>
                            <p className="pb-4 font-bold">
                                Pencarian Terkini{" "}
                                <span
                                    className="text-red-600 pl-96 pb-4 cursor-pointer"
                                    onClick={handleHapus}
                                >
                                    Hapus
                                </span>
                            </p>
                        </div>
                        {recentSearches.map((search, index) => (
                            <React.Fragment key={index}>
                                <div className="flex items-center">
                                    <p
                                        className="pl-2 cursor-pointer"
                                        onClick={() => handleSelection(search)}
                                    >
                                        {search}
                                    </p>
                                    <div className="flex ml-auto mr-10">
                                        <Image
                                            src={icon_x}
                                            alt="Remove"
                                            onClick={() => handleRemoveSearch(search)}
                                            className="cursor-pointer"
                                        />
                                    </div>
                                </div>
                                <Divider style={{ margin: '8px 0' }} />
                            </React.Fragment>
                        ))}
                    </div>
                </Dialog>
            </div>
        </>
    );
}

export default ModalFlightTo;