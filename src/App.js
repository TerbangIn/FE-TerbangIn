// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
// import Riwayat from './pages/Riwayat/Riwayat';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Riwayat />
//     </Provider>
//   );
// };
// import 'bootstrap/dist/css/bootstrap.min.css';
import Riwayat from './pages/Riwayat/Riwayat';
// import Booking from './pages/Booking/Booking';
// import Login from './pages/Auth/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Notifikasi from './pages/Notifikasi/Notifikasi';
import Akun from './pages/Akun/Akun';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Riwayat />,
    },
    {
      path: "/notifikasi",
      element: <Notifikasi />,
    },
    {
      path: "/akun",
      element: <Akun />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
