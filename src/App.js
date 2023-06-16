import './App.css';
import Chekout from './pages/Payment/chekout';
import SeatCustomer from './pages/Payment/seat';
// import Modal from './pages/Payment/modal';
import Modal from './pages/Payment/tesModal';
import Navbar from './pages/Payment/navbar';
import Payment from './pages/Payment/payment';
import Accordion from './pages/Payment/accordion';
import Success from './pages/Payment/payment-success';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Payment/>
      </BrowserRouter>
      {/* <Payment/> */}
      {/* <SeatCustomer/> */}
      {/* <Modal/> */}
      {/* <Navbar/> */}
      {/* <Chekout/> */}
      
      {/* <Accordion/> */}
      {/* <Success/> */}
    </div>
  );
}

export default App;
