import React, { useState , useRef , useEffect} from "react";
// import { setProducts } from '../../actions';
import "./Riwayat.css";
import "../../index.css";
import 'primeicons/primeicons.css';
import DetailRiwayat from "./detailRiwayat";
import { Card } from 'primereact/card'
import arrow from './arrow.png'
import { Divider } from 'primereact/divider';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

const cardRiwayat = (props) => {
    const [visiblefilter, setVisibleFilter] = useState(false);
    const [visible, setVisible] = useState(false);
    const showFilter = () => {
        setVisibleFilter(true);
    };

    const pickDetailHandler = () => {
        setVisible(true);
    };
    
    const uniqueMonths = [];

    function getDateAndTime(dateTime) {
        const Bulan = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember"
          ];
        const tanggal = new Date(dateTime).getMonth()
        const namaBulan = Bulan[tanggal];
        if (!uniqueMonths.includes(namaBulan)) {
            uniqueMonths.push(namaBulan);
            return (<>{namaBulan}</>)
         }
      
    }
    
    function getTanggal(dateIn){
        const date = new Date(dateIn);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('id-ID', options);

        return(formattedDate);
    }
    function getTimes(date){
        const jam = new Date(date).getHours()
        const menit = new Date(date).getMinutes()
        return <>{jam} : {menit}</>
    }
    function rangeTime(departureTime, arrivalTime){
        console.log(departureTime[0]);
        console.log(arrivalTime[0]);
        // const durationInMilliseconds = new Date(arrivalTime.getTime()) - new Date(departureTime.getTime());
        // const durationInMilliseconds = new Date(arrivalTime.getTime()) - new Date(departureTime.getTime());

        // const hours = Math.floor(durationInMilliseconds / (1000 * 60 * 60));
        // const minutes = Math.floor((durationInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
        // const seconds = Math.floor((durationInMilliseconds % (1000 * 60)) / 1000);

        // console.log(`Lama waktu: ${hours} jam, ${minutes} menit, ${seconds} detik`);
    }

    const getClass = (Classes) => {
        const economy = (Classes.map(trans => trans.tiket.map(tik => tik.flight.economy_class_price)))
        const bussiness = (Classes.map(trans => trans.tiket.map(tik => tik.flight.business_class_price)))
        const first = (Classes.map(trans => trans.tiket.map(tik => tik.flight.first_class_price)))
        const premium = (Classes.map(trans => trans.tiket.map(tik => tik.flight.premium_price)))
        if(economy != null)  {
            return 'Economy'
        }else if(bussiness != null)  {
            return 'Bussiness'
        }else if(first != null)  {
            return 'First'
        }else if(premium != null)  {
            return 'Premium'
        }
    }
    return (
        <>
        <div className="text-left mt-6 grid grid-cols-2 mx-auto max-w-4xl">
            <div className="col-12 pb-4">
                <div className="text-md font-bold text-900 pb-2">{getDateAndTime(props.data.transaction.map(e => e.createdAt))}</div>
                <Card className="p-0 button  hover:border-4 border-binar-purple"  onClick={() => pickDetailHandler()}>
                    <div className="flex">
                        <div className="flex gap-2">
                        <i className="pi pi-map-marker my-auto"></i>
                        <div className="align-items-center sm:align-items-center">
                            <div className="text-md font-bold text-900">{props.data.transaction.map(e => e.tiket.map(a=> a.flight.source.name))}</div>
                            <div className="text-sm">{getTanggal(props.data.transaction.map(e => e.tiket.map(a=> a.flight.departure_date)))}</div>
                            <div className="text-xs">{getTimes(props.data.transaction.map(e => e.tiket.map(a=> a.flight.departure_date)))}</div>
                        </div>
                        </div>
                        <div className="shrink-0 my-auto w-32">
                            <div className="text-md font-bold text-900 pb-2">{rangeTime(props.data.transaction.map(e => e.tiket.map(a=> a.flight.departure_date)), props.data.transaction.map(e => e.tiket.map(a=> a.flight.arrival_date)))}</div>
                            <img src={arrow} alt="arrow" className="w-24 mx-auto pe-4"/>
                        </div>
                        <div className="flex gap-2">
                        <i className="pi pi-map-marker my-auto"></i>
                        <div className="col-3 align-items-center sm:align-items-center">
                            <div className="text-md font-bold text-900">{props.data.transaction.map(e => e.tiket.map(a=> a.flight.destination.name))}</div>
                            <div className="text-sm">{getTanggal(props.data.transaction.map(e => e.tiket.map(a=> a.flight.arrival_date)))}</div>
                            <div className="text-xs">{getTimes(props.data.transaction.map(e => e.tiket.map(a=> a.flight.arrival_date)))}</div>
                        </div>
                        </div>
                    </div>

                    <Divider className="m-0"/>
                    <div className="flex col-12 sm:flex-row justify-content-between align-items-center">
                        <div className="col-4 align-items-center sm:align-items-center">
                            <div className="text-xs font-semibold text-900">Booking code :</div>
                            <div className="text-xs">{props.data.transaction.map(e => e.kode_booking)}</div>
                        </div>
                        <div className="col-4 align-items-center sm:align-items-center">
                            <div className="text-xs font-semibold text-900">Class :</div>
                            <div className="text-xs">{getClass(props.data.transaction)}</div>
                        </div>
                        <div className="col-4 justify-end">
                            <div className="text-md ps-4 justify-end font-bold text-binar-purple">IDR {props.data.transaction.map(e => e.total_price)}</div>
                        </div>
                    </div>
                </Card>
            </div>
            {visible && <DetailRiwayat/> }
                   
            </div>
        </>
    )
}

export default cardRiwayat;