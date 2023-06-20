import React, { useEffect, useState } from 'react';
import JadwalPenerbangan from './Jadwal';
import Navbar from '../../components/Navbar/Navbar';
import Banner from './Banner';
import Destinasi from './Destinasi';
// import JadwalPenerbangan2 from './Jadwal2';
import axios from 'axios';
export const GET_FLIGHT = "GET_FLIGHT";

function Beranda() {
  const [flight, setFlight] = useState([]);

  const getFlight = async () => {
    await axios.get('https://be-tiketku-production.up.railway.app/api/v1/flight', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYXlhYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2NjUwNDkwfQ.JwtvxhdOFVSSCUHyipUaS8LLG3u8jX4uhk-JhbuyBGc`
      }
    }).then(res => {
      setFlight(res.data.data)
    })
      .catch(function (error) {
        console.log(error.message)

      })
  }

  useEffect(() => {
    getFlight()
  }, []);
  console.log(flight);

  return (
    <>
      <Navbar />
      <Banner />
      <JadwalPenerbangan />
      <Destinasi />
    </>
  )
}

export default Beranda
