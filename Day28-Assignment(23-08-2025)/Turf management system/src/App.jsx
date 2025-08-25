import {Routes,Route} from 'react-router-dom';
import './App.css'
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AdminDashboard from './Pages/AdminDashboard';
import ManageTurfs from './Pages/ManageTurfs';
import ViewBookings from './Pages/ViewBookings';
import BrowseTurfs from './Pages/BrowseTurfs';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import UserDashboard from './Pages/UserDashboard';


function App() {


  return (
    <>
     <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/turfs" element={<ManageTurfs />} />
        <Route path="/admin/bookings" element={<ViewBookings />} />
        <Route path="/user/browseturf" element={<BrowseTurfs />} />
        <Route path='/user' element={<UserDashboard/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
