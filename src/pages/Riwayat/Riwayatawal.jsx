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
import "primereact/resources/primereact.min.css";                                       
         

function Index() {

    // const [products, setProducts] = useState([]);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [Adult, setAdult] = useState(0);
    const [Child, setChild] = useState(0);
    const [Baby, setBaby] = useState(0);
    const [harga, setHarga] = useState(0);
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

    const getStatus = (detail) => {
        if(detail === 'Issued')  {
            return (<Tag rounded className="h-8 px-3 text-sm font-base" severity="success" value="Issued"></Tag>);
        }else if(detail == 'Unpaid')  {
            return (<Tag rounded className="h-8 px-3 text-sm font-base" severity="danger" value="Unpaid"></Tag>)
        }else if(detail == 'Cancelled')  {
            return 'First'
        }
    };
    
    const getButtonCheckOut = (detail) => {
        switch (detail.status) {
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
    const [filter, setfilter] = useState([]);
    const [Detail, setDetail] = useState('');
    const overlayRef = useRef(null);
    const [filteredTransaction, setFilteredTransaction] = useState([]);


    useClickOutside(overlayRef, () => {
        setVisible(false);
    });

    const pickDetailHandler = (detail) => {
        console.log(detail);
        setVisible(true);
        setfilter(data?.transaction?.filter(e => {
            return e.id == detail
          }));
          console.log(filter);
        }
        console.log(filter);
    console.log(data?.transaction?.filter(e => {
        // console.log(e.id);
        return e.id === 1
      }));

    const listAmountAdult = (filter) => {
        const sum = orders(filter, 17, Infinity)
        let totalBill = 0;


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

    const listAmountChild = (filter) => {
        const sum = orders(filter, 7, 17)
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
        const sum = orders(filter, 0, 7)
        
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
    const uniqueMonths = [];
    const mounth = (date) => {
    
        const tanggal = getDateAndTime(date)
        const pecahTanggal = tanggal.split(" ");
        const month = pecahTanggal[1];
        if (!uniqueMonths.includes(month)) {
        uniqueMonths.push(month);
        const namaBulan = new Date(0, month - 1).toLocaleString('default', { month: 'long' });
            return(
                <>
                    <div className="text-md font-bold text-900 pb-2">{namaBulan}</div>
                </>
            )
        }

    }

    const orders = (filter, minAge, maxAge) => {
        let count = 0;

        filter.forEach(item => {
            const age = item.age;
            if (age > minAge && age <= maxAge) {
            count++;
            }
        });

        return count;
    }
    const totalHarga = () => {
        const economy = (data?.transaction?.map(trans => trans.tiket.map(tik => tik.flight.economy_class_price)))
        const bussiness = (data?.transaction?.map(trans => trans.tiket.map(tik => tik.flight.business_class_price)) )
        const first = (data?.transaction?.map(trans => trans.tiket.map(tik => tik.flight.first_class_price)) )
        const premium = (data?.transaction?.map(trans => trans.tiket.map(tik => tik.flight.premium_price)))
        const adultPricePercentage = (data?.transaction?.map(trans => trans.tiket.map(tik => tik.flight.child_price_percentage)))
        const validPrices = [economy, bussiness, first, premium].find(price => price !== null);
        if(age(data) <= 3 && age(data) > 0){
                const total = validPrices.map(price => price * ((data?.transaction?.map(trans => trans.tiket.map(tik => tik.flight.baby_price_percentage))) / 100));
                setHarga(total)
            }else if(age(data) <= 17 && age(data) > 3){
                const total = validPrices.map(price => price * ((data?.transaction?.map(trans => trans.tiket.map(tik => tik.flight.child_price_percentage))) / 100));
                setHarga(total)
            }else if( age(data) > 17){
                const total = validPrices.map(price => price * ((data?.transaction?.map(trans => trans.tiket.map(tik => tik.flight.adult_price_percentage))) / 100));
                setHarga(total)
            }
      }
      
    const age = (dataAge) => {

        console.log(dataAge?.transaction?.map(trans => trans.tiket.map(tik => tik.passenger.date_of_birth)))

        const birthDate = new Date(data?.transaction?.map(trans => trans.tiket.map(tik => tik.passenger.date_of_birth)));
        const currentDate = new Date();

        // Menghitung selisih tahun antara tanggal lahir dan tanggal saat ini
        const age = currentDate.getFullYear() - birthDate.getFullYear();

        // Memeriksa apakah hari lahir di tahun ini sudah lewat atau belum
        const isBirthdayPassed = (
        currentDate.getMonth() > birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate())
        );

        // Mengurangi 1 tahun jika hari lahir di tahun ini belum lewat
        const finalAge = isBirthdayPassed ? age : age - 1;

        return(finalAge);
    }
      
      useEffect(() => {
        totalHarga();
      }, []);
    const totalHargaaaa = () => {
        // const dataContainer = 
        let total = 0

        // if(economy != null)  {
        //     if(age(dataharga) <= 3 && age(dataharga) > 0){
        //         let koin = (dataContainer.economy_class_price * dataContainer.baby_price_percentage)
        //         setHarga(koin)
        //     }else if(age(dataharga) <= 7 && age(dataharga) > 3){
        //         let koin = (dataContainer.economy_class_price * dataContainer.child_price_percentage)
        //         setHarga(koin)
        //     }else if(age(dataharga) <= 17 && age(dataharga) > 7){
        //         let koin = (dataContainer.economy_class_price * dataContainer.adult_price_percentage)
        //         setHarga(koin)
        //     }
        // }

        console.log(calculatedPrices);        
    }
    console.log(harga);


    const getClass = (Class) => {
        const economy = (data?.transaction?.map(trans => trans.tiket.map(tik => tik.flight.economy_class_price)))
        const bussiness = (data?.transaction?.map(trans => trans.tiket.map(tik => tik.flight.business_class_price)))
        const first = (data?.transaction?.map(trans => trans.tiket.map(tik => tik.flight.first_class_price)))
        const premium = (data?.transaction?.map(trans => trans.tiket.map(tik => tik.flight.premium_price)))
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

    const getClassDetail = (Class) => {
        console.log(Class.map(e=> e.id));
        const economy = (Class.map(e=> e.economy_class_price))
        const bussiness = (Class.map(e=> e.business_class_price))
        const first = (Class.map(e=> e.first_class_price))
        const premium = (Class.map(e=> e.premium_price))
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

    function getHourAndMinuteFromTime(dateTime) {

        const parts = dateTime.split("T");
        const time = parts[1];

        const timeParts = time.split(":");
        const hour = timeParts[0];
        const minute = timeParts[1];

        return (hour + " : " + minute)
      }
      
    function getDateAndTime(dateTime) {
        // const parts = dateTime?.split("T");
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
        // const namaBulan = new Date(0, tanggal).toLocaleString('default', { month: 'long' });

        // console.log(parts);
        // const date = parts[0];
      
        // const objTanggal = new Date(date);
        // const opsiPemformatan = { day: "numeric", month: "long", year: "numeric" };
        // const tanggalTerformat = objTanggal.toLocaleDateString("id-ID", opsiPemformatan);
      
    }

    function getTanggal(dateIn){
        const date = new Date(dateIn);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('id-ID', options);

        return(formattedDate);
    }
    function getTime(date){
        const jam = new Date(date).getHours()
        const menit = new Date(date).getMinutes()
        return <>{jam} : {menit}</>
    }
    function getTahun(date){
        const tanggal = new Date(dateTime).getFullYear()
        return tanggal
    }
    data?.transaction?.map(trans => console.log(trans.status))

    const cardRiwayat = (trans) => {
        return (
            <>
            <div className="text-md font-bold text-900 pb-2">{getDateAndTime(trans?.map(trans => trans.createdAt))}</div>
            {/* {age()} */}
            <div className="col-12 pb-4">
                <Card className="p-0 button hover:border-4 border-binar-purple"  
                onClick={() => 
                    pickDetailHandler(trans.map(trans => trans.id))
                }
                >
                    {getStatus(trans.map(trans => trans.status))}
                    <div className="flex col-12 sm:flex-row justify-between align-items-center">
                        <i className="pi pi-map-marker my-auto"></i>
                        <div className="col-3 align-items-center sm:align-items-center">
                            <div className="text-md font-bold text-900">{trans.map(trans => trans.tiket.map(tik => tik.flight.source.name))}</div>
                            <div className="text-sm">{getTanggal(trans.map(trans => trans.tiket.map(tik => tik.flight.departure_date)))}</div>
                            <div className="text-xs">{getTime(trans.map(trans => trans.tiket.map(tik => tik.flight.departure_date)))}</div>
                        </div>
                        <div className="col-4 justify-items-start">
                            <img src={arrow} alt="arrow" className="w-10"/>
                        </div>
                        <i className="pi pi-map-marker my-auto"></i>
                        <div className="col-3 align-items-center sm:align-items-start">                          
                            <div className="text-md font-bold text-900">{trans.map(trans => trans.tiket.map(tik => tik.flight.destination.name))}</div>
                            <div className="text-sm">{getTanggal(trans.map(trans => trans.tiket.map(tik => tik.flight.arrival_date)))}</div>
                            <div className="text-xs">{getTime(trans.map(trans => trans.tiket.map(tik => tik.flight.arrival_date)))}</div>
                        </div>
                    </div>

                    <Divider className="m-0"/>
                    <div className="flex col-12 sm:flex-row justify-content-between align-items-center">
                        <div className="col-4 align-items-center sm:align-items-center">
                            <div className="text-xs font-semibold text-900">Booking code :</div>
                            <div className="text-xs">{(trans.map(trans => trans.kode_booking))}</div>
                        </div>
                        <div className="col-4 align-items-center sm:align-items-center">
                            <div className="text-xs font-semibold text-900">Class :</div>
                            <div className="text-xs">{getClass(trans)}</div>
                        </div>
                        <div className="col-4 justify-end">
                            <div className="text-md ps-4 justify-end font-bold text-binar-purple">IDR {(data?.transaction?.map(trans => trans.total_price))}</div>
                        </div>
                    </div>
                </Card>
            </div>
            </>
        );
    };
    console.log(filter);
    const detailRiwayat = (filter) => {
        return (
            <>
                <div className="col-12">
                    <div className="ps-8">
                        <div className="text-base font-normal flex justify-between text-900">
                            <div className="text-md font-bold text-900">Detail Pesanan</div>
                            {getStatus(filter.status)}
                        </div>
                        <div>
                            <div className="text-lg font-light text-900">Booking Code : {filter.kode_booking}</div>
                            <div className="text-base font-bold flex justify-between text-900">
                                {getTime(filter.tiket.map(tik => tik.flight.departure_date))}
                                <div className="text-sm font-semibold justify-items-end text-binar-purple">Keberangkatan</div>
                            </div>
                            <div className="text-sm font-light text-900">{getTanggal(filter.tiket.map(tik => tik.flight.departure_date))}</div>
                            <div className="text-sm font-semibold text-900">{filter.tiket.map(tik => tik.flight.source.name)}</div>
                        </div>
                        <Divider className="m-2"/>
                        <div className="flex col-12 justify-start p-0">
                            <div className="my-auto col-1 p-0 align-end">
                                <img alt="logo" src={logoflower} className="flex"></img>
                            </div>
                            <div className="mx-auto col-10 p-0">
                                <div className="text-base font-bold text-900">{filter.tiket.map(tik => tik.flight.airline)} - {getClassDetail(filter.tiket.map(tik => tik.flight))}</div>
                                <div className="text-base font-bold text-900">{filter.airplane_code}</div>
                                <div className="text-base font-bold text-900 pt-4">Informasi</div>
                                <h1 className="text-sm font-semibold  text-binar-purple">Penumpang : {filter.tiket.map(tik => tik.passenger.first_name)}</h1>
                                <div className="text-sm font-semibold text-900">ID {filter.tiket.map(tik => tik.passenger.identity_number)}</div>
{/* \                                {filter.orders.map((order) => (
                                    // <div>{listPassenger(order.name, order.id)}</div>
                                    <>AAAAAA</>
                                ))} */}
                            </div>
                        </div>
                        <Divider className="m-2"/>
                        <div>
                            <div className="text-base font-bold flex justify-between text-900">
                                {getTime(filter.tiket.map(tik => tik.flight.arrival_date))}
                                <div className="text-sm font-semibold justify-items-end text-binar-purple">Kedatangan</div>
                            </div>
                            <div className="text-sm font-light text-900">{getTanggal(filter.tiket.map(tik => tik.flight.arrival_date))}</div>
                            <div className="text-sm font-semibold text-900">{filter.tiket.map(tik => tik.flight.destination.name)}</div>
                        </div>
                        <Divider className="m-2"/>
                        <div>
                            <div className="text-base font-bold text-900">Rincian Harga</div>
                            <div className="text-base font-normal flex justify-between text-900">
                                1 Adult
                                <div className="text-sm font-normal justify-items-end">{(data?.transaction?.map(trans => trans.total_price))}</div>
                            </div>
                        </div>
                        {/* <div>{listAmountBaby(filter.orders)}</div> */}
                        <Divider className="m-2"/>
                        <div className="text-base font-normal flex justify-between text-900 pb-4">
                            <div className="text-md font-bold text-900">Total</div>
                            <div className="text-md font-bold justify-items-end text-binar-purple">{(data?.transaction?.map(trans => trans.total_price))}</div>
                        </div>
                        <Button label="Lanjut Bayar" severity="danger" raised className="w-12"/>
                        {/* {getButtonCheckOut(filter)} */}
                    </div>
                </div>
            </>
        );
    };

    const op = useRef(null);
    const [dates, setDates] = useState(null);

    // const handleDateChange = (e) => {
    //     setDates(e.value);
    // };
    
    const getData = async () => {
        await axios.get('https://be-tiketku-production.up.railway.app/api/v1/user/1', {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ6b2RwbHVnaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg3NDQ3MTg2fQ.lLzO0u8BQF2WpwWDQiuQ7qGEBN-ak1mG-xQtMwUcCkk`
            }
        })
        .then(response => {
            setData(response?.data?.data);
        })
    }
    
    useEffect(() => {
        getData()
    }, []);

    console.log(data);
    
    const handleDateChange = (e) => {
        setDates(e.value);
    };
    const filteredFlights = (filterData) => {
        // setDates(e.value);
        const filteredFlights = flightData.filter(flight => {
            const departureDate = new Date(flight.departure_date);
            return dates && dates[0] <= departureDate && departureDate <= dates[1];
        });
    };

    const filterDate = (date) => {
        return date.map(flight => (new Date(flight.departure_date).toLocaleDateString()))
    }

    const getDatesInRange = () => {
        if (dates && dates.length === 2) {
            const startDate = dates[0];
            const endDate = dates[1];

            const filteredData = data.filter((obj) => {
                const departureDate = new Date(obj.departure_date);
                return departureDate >= startDate && departureDate <= endDate;
            });
            // const datesInRange = [];
            
            // let currentDate = new Date(startDate);
            // while (currentDate <= endDate) {
            //     datesInRange.push(new Date(currentDate));
            //     currentDate.setDate(currentDate.getDate() + 1);
            // }
            // return datesInRange;
            
        }
        return [];
    };


    return (
        <>
        <div>
            <Navbar></Navbar>
            <div className="col-12 body">
                <Card>
                    <div className="mx-auto lg:col-8 sm:col-10 justify-between">
                        <div className="text-md font-bold text-900 lg:pb-4 sm:pb-2">Riwayat Pemesanan</div>
                        <div className="text-base font-bold flex justify-between text-900 align-center pe-6">
                            <div className="bg-binar-purple justify-content-start rounded-lg w-9">
                                <Button icon="pi pi-arrow-left" className="text-white " text label="Beranda"/>
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
                                <OverlayPanel ref={op}>
                                    <div>
                                        <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" inline showWeek />
                                    </div>
                                    <div className="text-end lg:py-4">
                                        <Button type="submit" label="Simpan"/>
                                    </div>
                                </OverlayPanel>
                        </div>
                        <p className="m-0"></p>
                    </div>
                </Card>
                <div className="row justify-center">
                   <div className="flex sm:col-10 lg:col-8 justify-center mx-auto">
                        <div className="mx-auto lg:col-7 sm:col-12 justify-between flex-none">
                        {/* {filterDate(data)}
                        {dates && (
                <>
                        {getDatesInRange().map(date => (date.toLocaleDateString()
                        ))}
                    
                </>
            )} */}
                            {/* {data?.map((order) => ( */}
                                <>
                                    <div>{cardRiwayat(data?.transaction)}</div>
                                </>
                            {/* ))} */}
                        </div>
                        <div className="mx-auto lg:col-5 max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl">
                            <DataView value={filter} itemTemplate={detailRiwayat} className="card ps-4 lg:col-12"/>
                            {/* <p>Selected Dates: {dates && dates.map(date => date.toLocaleDateString()).join(" - ")}</p> */}
                        </div>
                   </div>
                </div>
            </div>
        </div>
        </>
  );
}

export default Index;
