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
// import Login from './pages/Auth/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Register from './pages/Auth/Register';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Riwayat />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
