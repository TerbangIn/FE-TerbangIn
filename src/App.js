import './App.css';
import Chekout from './pages/Payment/chekout';
import SeatCustomer from './pages/Payment/seat';
// import Modal from './pages/Payment/modal';
import Modal from './pages/Payment/modal';
import Navbar from './pages/Payment/navbar';
import Payment from './pages/Payment/payment';
import Accordion from './pages/Payment/accordion';
import Success from './pages/Payment/payment-success';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={Chekout}/>
          <Route path='/payment' exact Component={Payment}/>
          <Route path='/payment-success' exact Component={Success}/>
        </Routes>
      </BrowserRouter> */}
      {/* <Payment/> */}
      {/* <Navbar/> */}
      <Chekout/>
      {/* <Accordion/> */}
      {/* <Success/> */}
    </div>
  );
}

export default App;
