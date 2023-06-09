import React, { useState , useRef , useEffect} from "react";
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
        


function Index() {

    const [products, setProducts] = useState([]);
    const [Adult, setAdult] = useState(0);
    const [Baby, setBaby] = useState(0);

    useEffect(() => {
        ProductService.getProductsWithOrdersSmall().then((data) => setProducts(data.slice(0, 5)));
    }, []);

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

    // const passenger_Adult = (filter, min, max)=>{
    //     const sum = orders(filter, 12, Infinity)
        
    //     let count = 0;
    //     filter.forEach(item => {
    //         count = item.bill * sum;
    //     });
    // }
    // const passenger_Baby = (filter, min, max)=>{
    //     return orders(filter, min, max)
    // }


    const sumAdult = (filter) => {
        return orders(filter, 12, Infinity)
    }

    const sumBaby = (filter) => {
        return orders(filter, 0, 12)
    }

    const sumBillAdult = (filter) => {
        return orders(filter, 12, Infinity)
    }

    const sumBillBaby = (filter) => {
        let priceBaby = 0;
        filter.forEach(item => {
            item.bill.find(function checkAge(item) {
                return item.age > 12;
              })
            });
            console.log(checkAge);
            console.log(checkAge);
            console.log(checkAge);
            console.log(checkAge);
            console.log(checkAge);
            console.log(checkAge);

        return priceBaby
    }

    const sumPrice = (filter) => {

        
        sumAdult(filter)
        sumBaby(filter)
    }
    const [counter, setCounter] = useState(0)

    const listAmountAdult = (filter) => {
        const sum = sumAdult(filter)
        // console.log(sum);
        filter.forEach(item => {
                if(item.age > 12){
                setCounter(item.bill ) 
            }
            });

        // useEffect(()=>{
        //     setTotal(total+count)
        // },[count])
        // console.log(total);
        // console.log(count);

        // setAdult(count)

        if(sum != 0){

            return (
                <>
                    <div className="text-base font-bold text-900 price-tag">Rincian Harga</div>
                    <div className="text-base font-normal flex justify-between text-900 price-tag">
                        {sum} Adult
                        <div className="text-sm font-normal justify-items-end price-tag">{counter}</div>
                    </div>
                </>
            )
        }else{
            return <div className="text-sm font-normal text-900 price-tag">GAGAL</div>

        }
    }
    const listAmountBaby = (filter) => {
        const sum = sumBaby(filter)
        
        let count = 0;
        filter.forEach(item => {
            count = item.bill * sum;
        });
        
        setBaby(count)

        if(sum != 0){
            return (
                <>
                    <div className="text-base font-normal flex justify-between text-900 price-tag">
                        {sum} Baby
                    <div className="text-sm font-normal justify-items-end price-tag">{count}</div>
                    </div>
                    <div className="text-sm font-normal text-900 price-tag">Tax</div>
                </>
            )
        }else{
            return <div className="text-sm font-normal text-900 price-tag">Tax</div>
        }
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

    const cardRiwayat = (data) => {
        return (
            <>
                
            <div className="col-12 pb-4">
                <Card className="row ps-4 button hover:border-4 border-binar-purple"  onClick={() => pickDetailHandler(data.id)}>
                    {getStatus(data)}
                    <div className="flex col-12 sm:flex-row justify-between align-items-center">
                        <i className="pi pi-map-marker my-auto"></i>
                        <div className="col-4 align-items-center sm:align-items-center">
                            <div className="text-md font-bold text-900">{data.departure}</div>
                            <div className="text-xs">{data.date_depart}</div>
                            <div className="text-xs">{data.time_depart}</div>
                            
                        </div>
                        <div className="col-4 justify-items-start">
                            <img src={arrow} alt="arrow" className="arrow"/>
                        </div>
                        <i className="pi pi-map-marker my-auto"></i>
                        <div className="col-3 align-items-center sm:align-items-start">
                            <div className="text-md font-bold text-900">{data.arrive}</div>
                            <div className="text-xs">{data.date_arrive}</div>
                            <div className="text-xs">{data.time_arrive}</div>
                            
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
                            <div className="text-md ps-4 justify-end font-bold text-binar-purple">IDR </div>
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
                        <div className="text-base font-normal flex justify-between text-900 price-tag">
                            <div className="text-md font-bold text-900 price-tag">Detail Pesanan</div>
                            {getStatus(filter)}
                        </div>
                        <div>
                            <div className="text-lg font-light text-900 price-tag">Booking Code : {filter.booking_code}</div>
                            <div className="text-base font-bold flex justify-between text-900 price-tag">
                                {filter.time_depart}
                                <div className="text-sm font-semibold justify-items-end price-tag text-binar-purple">Keberangkatan</div>
                            </div>
                            <div className="text-sm font-light text-900 price-tag">{filter.date_depart}</div>
                            <div className="text-sm font-semibold text-900 price-tag">{filter.airport_departure}</div>
                        </div>
                        <Divider className="m-2"/>
                        <div className="flex col-12 justify-start mx-auto">
                            <div className="mx-auto my-auto col-1">
                                <img alt="logo" src={logoflower} className="flex"></img>
                            </div>
                            <div className="mx-auto col-11 header justify-between flex-auto">
                                <div className="text-base font-bold text-900 price-tag">{filter.airplane_name} - {filter.class}</div>
                                <div className="text-base font-bold text-900 price-tag">{filter.airplane_code}</div>
                                <div className="text-base font-bold text-900 price-tag pt-4">Informasi</div>
                                <h1 className="text-sm font-semibold  price-tag text-binar-purple">Penumpang : Agus</h1>
                                <div className="text-sm font-semibold text-900 price-tag">ID</div>
                            </div>
                        </div>
                        <Divider className="m-2"/>
                        <div>
                            <div className="text-base font-bold flex justify-between text-900 price-tag">
                                {filter.time_arrive}
                                <div className="text-sm font-semibold justify-items-end price-tag text-binar-purple">Kedatangan</div>
                            </div>
                            <div className="text-sm font-light text-900 price-tag">{filter.date_arrive}</div>
                            <div className="text-sm font-semibold text-900 price-tag">{filter.airport_arrive}</div>
                        </div>
                        <Divider className="m-2"/>
                        <div>{listAmountAdult(filter.orders)}</div>
                        <div>{listAmountBaby(filter.orders)}</div>
                        <Divider className="m-2"/>
                        <div className="text-base font-normal flex justify-between text-900 price-tag pb-4">
                            <div className="text-md font-bold text-900 price-tag">Total</div>
                            <div className="text-md font-bold justify-items-end price-tag text-binar-purple">{Adult + Baby}</div>
                        </div>
                        {getButtonCheckOut(filter)}
                    </div>
                </div>
            </>
        );
    };

    const op = useRef(null);
    const [dates, setDates] = useState(null);

    return (
        <>
        <div>
            <Navbar></Navbar>
            <div className="col-12 body">
                <Card>
                    <div className="mx-auto lg:col-8 sm:col-10 header justify-between">
                        <div className="text-md font-bold text-900 price-tag lg:pb-4 sm:pb-2">Riwayat Pemesanan</div>
                        <div className="text-base font-bold flex justify-between text-900 align-center price-tag pe-6">
                            <div className="bg-binar-purple justify-content-start rounded-lg w-9">
                                <Button icon="pi pi-arrow-left " className="text-white" text label="Beranda"/>
                            </div>
                            <div className="ps-2">
                                <Button className="h-8 button-search" type="button" label="Filter" icon="pi pi-filter" outlined rounded onClick={(e) => op.current.toggle(e)}/>
                                <OverlayPanel ref={op}>
                                    <div>
                                        <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" inline showWeek />
                                    </div>
                                    <div className="text-end lg:py-4">
                                        <Button type="submit" label="Simpan" className="bg-binar-purple"/>
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
                        <div className="mx-auto lg:col-7 sm:col-12 header justify-between flex-none">
                            <div className="text-md font-bold text-900 price-tag">Tanggal</div>
                            <DataView value={products} itemTemplate={cardRiwayat} className="card lg:col-12"/>
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
