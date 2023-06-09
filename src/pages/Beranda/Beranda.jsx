import React from 'react';
import JadwalPenerbangan from './Jadwal';
import Navbar from '../../components/Navbar/Navbar';
import Banner from './Banner';
import Destinasi from './Destinasi';

function Beranda() {
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
