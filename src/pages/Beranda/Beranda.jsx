import React, { useEffect, useState } from 'react';
import JadwalPenerbangan from './Jadwal';
import Navbar from '../../components/Navbar/Navbar';
import Banner from './Banner';
import Destinasi from './Destinasi';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getFlight } from '../../actions/destinationAction';
// export const GET_FLIGHT = "GET_FLIGHT";

function Beranda() {
  // const [flight, setFlight] = useState([]);
  const {flightData} = useSelector((state) => state.FlightDestinationReducer)
  console.log(flightData)
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlight());
  }, [dispatch]);

  // useEffect(async() =>{
  //   await axios.get('https://be-tiketku-production.up.railway.app/api/v1/flight', {
  //   headers: {
  //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYXlhYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2NjUwNDkwfQ.JwtvxhdOFVSSCUHyipUaS8LLG3u8jX4uhk-JhbuyBGc`
  //   }
  //   }).then(res => {
  //     setFlight(res.data.data)
  //   })
  //   .catch(function (error) {
  //       console.log(error.message)
        
  //   })
  //   console.log(flight)
  //   console.log('eeeeeeee')

  // },[]);

  return (
    <>
      <Navbar/>
      <Banner/>
      <JadwalPenerbangan/>
      <Destinasi/>
    </>
  )
}

export default Beranda
