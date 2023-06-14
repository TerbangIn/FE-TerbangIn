import React, { useState , useRef , useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { setProducts } from '../../actions';
import Navbar from "../../components/Navbar";
import "./Riwayat.css";
import "../../index.css";
import { Button } from "primereact/button";
import 'primeicons/primeicons.css';
import { Calendar } from 'primereact/calendar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { Card } from 'primereact/card'
import { ProductService } from './service/ProductService';
import 'primeflex/primeflex.css';
import arrow from './arrow.png'
import { useClickOutside } from 'primereact/hooks';
import { Divider } from 'primereact/divider';
import logoflower from './flower_logo.png'
import {getTrans} from '../../actions'
import axios from 'axios';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
         

function Index() {

    // const [products, setProducts] = useState([]);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [Adult, setAdult] = useState(0);
    const [Baby, setBaby] = useState(0);
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     ProductService.getProductsWithOrdersSmall().then((data) => setProducts(data.slice(0, 5)));
    // }, []);

    // const { datasData } = useSelector((state) => state.TransReducers)

    // useEffect(() => {
    //     dispatch(getTrans())
    // }, [dispatch])

    // useEffect(()=>{
    //     console.log(datasData);

    // }, [datasData])

    useEffect(() => {
        // Mengatur data produk ke dalam Redux store saat komponen dimuat
        const fetchData = async () => {
          // Panggil ProductService.getProductsWithOrders() di sini (misalnya menggunakan axios atau fetch) untuk mendapatkan data produk
          // Simpan data produk ke dalam state Redux menggunakan action setProducts
          const data = await ProductService.getProductsWithOrders();
        //   dispatch(setProducts(data));
        };
    
        fetchData();
    }, [dispatch]);

    const getStatus = (data) => {
        switch (data.status) {
            case 'ISSUED':
                return (<Tag rounded className="h-8 px-3 text-sm font-base" severity="success" value="Issued"></Tag>);

            case 'UNPAID':
                return (<Tag rounded className="h-8 px-3 text-sm font-base" severity="danger" value="Unpaid"></Tag>)

            case 'CANCELLED':
                return (<Tag rounded className="h-8 px-3 text-sm font-base" style={{background: '#8A8A8A'}} severity="Secondary" value="Cancelled"></Tag>)

            default:
                return null;
        }
    };
    
    const getButtonCheckOut = (data) => {
        switch (data.status) {
            case 'ISSUED':
                return (<Button label="Cetak Tiket" raised className="w-12"/>)

            case 'UNPAID':
                return (<Button label="Lanjut Bayar" severity="danger" raised className="w-12"/>)

            case 'CANCELLED':
                return (<Button label="Cancelled" severity="secondary" raised className="w-12" disabled/>)

            default:
                return null;
        }
    };

    const [visible, setVisible] = useState(false);
    const [filter, setfilter] = useState('');
    const overlayRef = useRef(null);

    useClickOutside(overlayRef, () => {
        setVisible(false);
    });

    function pickDetailHandler(id){
        setVisible(true);
        let filterData = products.filter(e => {
            return id === e.id
          })
          setfilter(filterData);
    }

    const listAmountAdult = (filter) => {
        const sum = orders(filter, 12, Infinity)
        let totalBill = 0;

        filter.forEach(item => {
                if(item.age > 12){
                totalBill += item.bill;
            }
        });

        setAdult(totalBill)

        if(sum != 0){

            return (
                <>
                    <div className="text-base font-bold text-900">Rincian Harga</div>
                    <div className="text-base font-normal flex justify-between text-900">
                        {sum} Adult
                        <div className="text-sm font-normal justify-items-end">{totalBill}</div>
                    </div>
                </>
            )
        }else{
            return <div className="text-sm font-normal text-900">GAGAL</div>

        }
    }

    const listAmountBaby = (filter) => {
        const sum = orders(filter, 0, 12)
        
        let totalBill = 0;

        filter.forEach(item => {
                if(item.age <= 12){
                totalBill += item.bill;
            }
        });
        
        setBaby(totalBill)

        if(sum != 0){
            return (
                <>
                    <div className="text-base font-normal flex justify-between text-900">
                        {sum} Baby
                    <div className="text-sm font-normal justify-items-end">{totalBill}</div>
                    </div>
                    <div className="text-sm font-normal text-900">Tax</div>
                </>
            )
        }else{
            return <div className="text-sm font-normal text-900">Tax</div>
        }
    }

    const listPassenger = (name, id) => {
        return(
            <>
                <h1 className="text-sm font-semibold  text-binar-purple">Penumpang : {name}</h1>
                <div className="text-sm font-semibold text-900">ID {id}</div>
            </>
        )

        
    }

    const mounth = (date) => {
        
        return(
            <>
                <div className="text-md font-bold text-900 pb-2">Tanggal</div>
            </>
        )

        
    }

    const orders = (filter, minAge, maxAge) => {
        let count = 0;

        filter.forEach(item => {
            const age = item.age;
            if (age > minAge && age < maxAge) {
            count++;
            }
        });

        return count;
    }

    function getHourAndMinuteFromTime(time) {
        const timeParts = time.split(":");
        const hour = timeParts[0];
        const minute = timeParts[1];
        
        return { hour, minute };
      }
      
    function getDateAndTime(dateTime) {
        const parts = dateTime.split("T");
        const date = parts[0];
        const time = parts[1];
      
        const { hour, minute } = getHourAndMinuteFromTime(time);
      
        return (date)
    }

    const cardRiwayat = (data) => {
        return (
            <>
            {mounth(data.booking_date)}
            <div className="col-12 pb-4">
                <Card className="row ps-4 button hover:border-4 border-binar-purple"  
                // onClick={() => pickDetailHandler(data.id)}
                >
                    {getStatus(data)}
                    <div className="flex col-12 sm:flex-row justify-between align-items-center">
                        <i className="pi pi-map-marker my-auto"></i>
                        <div className="col-3 align-items-center sm:align-items-center">
                            <div className="text-md font-bold text-900">{data.source.name}</div>
                            <div className="text-sm">{getDateAndTime(data.departure_date)}</div>
                            <div className="text-xs">belum</div>
                        </div>
                        <div className="col-4 justify-items-start">
                            <img src={arrow} alt="arrow" className="w-10"/>
                        </div>
                        <i className="pi pi-map-marker my-auto"></i>
                        <div className="col-3 align-items-center sm:align-items-start">
                            <div className="text-md font-bold text-900">{data.destination.name}</div>
                            <div className="text-sm">{getDateAndTime(data.arrival_date)}</div>
                            <div className="text-xs">belum</div>
                            
                        </div>
                    </div>

                    <Divider className="m-0"/>
                    <div className="flex col-12 sm:flex-row justify-content-between align-items-center">
                        <div className="col-4 align-items-center sm:align-items-center">
                            <div className="text-xs font-semibold text-900">Booking code :</div>
                            <div className="text-xs">{data.booking_code}</div>
                        </div>
                        <div className="col-4 align-items-center sm:align-items-center">
                            <div className="text-xs font-semibold text-900">Class :</div>
                            <div className="text-xs">{data.class}</div>
                        </div>
                        <div className="col-4 justify-end">
                            {/* <div className="text-md ps-4 justify-end font-bold text-binar-purple">IDR {data.orders.reduce((sum, order) => sum + order.bill, 0)}</div> */}
                        </div>
                    </div>
                </Card>
            </div>
            </>
        );
    };
    
    const detailRiwayat = (filter) => {
        return (
            <>
                <div className="col-12">
                    <div className="ps-8">
                        <div className="text-base font-normal flex justify-between text-900">
                            <div className="text-md font-bold text-900">Detail Pesanan</div>
                            {getStatus(filter)}
                        </div>
                        <div>
                            <div className="text-lg font-light text-900">Booking Code : {filter.booking_code}</div>
                            <div className="text-base font-bold flex justify-between text-900">
                                {filter.time_depart}
                                <div className="text-sm font-semibold justify-items-end text-binar-purple">Keberangkatan</div>
                            </div>
                            <div className="text-sm font-light text-900">{filter.date_depart}</div>
                            <div className="text-sm font-semibold text-900">{filter.airport_departure}</div>
                        </div>
                        <Divider className="m-2"/>
                        <div className="flex col-12 justify-start p-0">
                            <div className="my-auto col-1 p-0 align-end">
                                <img alt="logo" src={logoflower} className="flex"></img>
                            </div>
                            <div className="mx-auto col-10 p-0">
                                <div className="text-base font-bold text-900">{filter.airplane_name} - {filter.class}</div>
                                <div className="text-base font-bold text-900">{filter.airplane_code}</div>
                                <div className="text-base font-bold text-900 pt-4">Informasi</div>
                                {filter.orders.map((order) => (
                                    <div>{listPassenger(order.name, order.id)}</div>
                                ))}
                            </div>
                        </div>
                        <Divider className="m-2"/>
                        <div>
                            <div className="text-base font-bold flex justify-between text-900">
                                {filter.time_arrive}
                                <div className="text-sm font-semibold justify-items-end text-binar-purple">Kedatangan</div>
                            </div>
                            <div className="text-sm font-light text-900">{filter.date_arrive}</div>
                            <div className="text-sm font-semibold text-900">{filter.airport_arrive}</div>
                        </div>
                        <Divider className="m-2"/>
                        <div>{listAmountAdult(filter.orders)}</div>
                        <div>{listAmountBaby(filter.orders)}</div>
                        <Divider className="m-2"/>
                        <div className="text-base font-normal flex justify-between text-900 pb-4">
                            <div className="text-md font-bold text-900">Total</div>
                            <div className="text-md font-bold justify-items-end text-binar-purple">{Adult + Baby}</div>
                        </div>
                        {getButtonCheckOut(filter)}
                    </div>
                </div>
            </>
        );
    };

    const op = useRef(null);
    const [dates, setDates] = useState(null);
    
    const getData = async () => {
        await axios.get('https://be-tiketku-production.up.railway.app/api/v1/flight', {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYXlhYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2NTYzMDg4fQ.zCE_OynwEoymILiP9N9OrGdCbPRZjxejG1h1lH1_qUU`
            }
        })
        .then(response => {
            setData(response.data.data);
        })
    }
    
    useEffect(() => {
        getData()
    }, []);
    
    return (
        <>
        <div>
            {/* {data.map((item) => {
                return(
                    <><h1 key={item.id}>{item.email}</h1><h1 key={item.id}>{item.password}</h1></>
                )
            })} */}
        {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
            <Navbar></Navbar>
            <div className="col-12 body">
                <Card>
                    <div className="mx-auto lg:col-8 sm:col-10 justify-between">
                        <div className="text-md font-bold text-900 lg:pb-4 sm:pb-2">Riwayat Pemesanan</div>
                        <div className="text-base font-bold flex justify-between text-900 align-center pe-6">
                            <div className="bg-binar-purple justify-content-start rounded-lg w-9">
                                <Button icon="pi pi-arrow-left " className="text-white " text label="Beranda"/>
                            </div>
                            <div className="ps-2">
                                <Button className="h-8 button-search" type="button" label="Filter" icon="pi pi-filter" outlined rounded onClick={(e) => op.current.toggle(e)}/>
                                <OverlayPanel ref={op}>
                                    <div>
                                        <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" inline showWeek />
                                    </div>
                                    <div className="text-end lg:py-4">
                                        <Button type="submit" label="Simpan"/>
                                    </div>
                                </OverlayPanel>
                            </div>
                            <Button className="button-search h-8" rounded text >
                                <i className="pi pi-search" style={{ fontSize: '1.5rem' }}></i>
                            </Button>
                        </div>
                        <p className="m-0"></p>
                    </div>
                </Card>
                <div className="row justify-center">
                   <div className="flex sm:col-10 lg:col-8 justify-center mx-auto">
                        <div className="mx-auto lg:col-7 sm:col-12 justify-between flex-none">
                            {data.map((order) => (
                                <>
                                    <div>{cardRiwayat(order) }</div>
                                </>
                            ))}
                        </div>
                        <div className="mx-auto lg:col-5 max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl">
                            <DataView value={filter} itemTemplate={detailRiwayat} className="card ps-4 lg:col-12"/>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        </>
  );
}

export default Index;
