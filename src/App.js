import Home from './view/Home/Home';
import { useEffect } from "react"
import './App.scss';
import Shop from './view/Shop/Shop';
import About from './view/About/About';
import Dashboard from './view/Private/Dashboard/Dashboard';
import Login from './view/Login/Login';
import { Navigate } from 'react-router-dom';
import { Protect } from './react-effect/Protect'
import ListOfUser from './view/Private/User/ListOfUser';
import ListProduct from './view/Private/Product/Product';
import AddProduct from './view/Private/Product/AddProduct';
import Cart from './view/Cart/Cart';
import CartCheckOut from './view/CartCheckOut/CartCheckOut';
import ListOfOrder from './view/Private/Order/Order';
import { useDispatch, useSelector } from 'react-redux';
import { getproduct } from './service/productService'
import { getOrder } from './service/orderService'
import { getUserService } from './service/userService';
import { getBooking } from './service/bookingService';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Booking from './view/Private/Booking/Booking';
import Service from './view/Service/Service';
import { UpdateOrder, UpdateProduct, UpdateUser, UpdateBooking } from './redux/action';
import { listProductSelector } from './redux/selector';
function App() {
  const dispactch = useDispatch()
  // update redux with database by call api
  const getdata = async () => {
    const product = await getproduct();
    const order = await getOrder();
    const user = await getUserService();
    const booking = await getBooking();

    dispactch(UpdateBooking(booking.data))
    dispactch(UpdateUser(user.data))
    dispactch(UpdateOrder(order.data))
    dispactch(UpdateProduct(product.data))
  }
  useEffect(() => {
    getdata()
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/about" element={<About />} />
        <Route exact
          path="/dashboard"
          element={
            <Protect>
              <Dashboard />
            </Protect>
          }
        />
        <Route exact
          path="/listofuser"
          element={
            <Protect>
              <ListOfUser />
            </Protect>
          }
        />
        <Route exact
          path="/listofproduct"
          element={
            <Protect>
              <ListProduct />
            </Protect>
          }
        />
        <Route exact
          path="/addproduct"
          element={
            <Protect>
              <AddProduct />
            </Protect>
          }
        />
        <Route exact
          path="/listbooking"
          element={
            <Protect>
              <Booking />
            </Protect>
          } />
        <Route exact
          path="/Cart"
          element={
            <Cart />
          } />
        <Route exact
          path="/listofOrder"
          element={
            <Protect>
              <ListOfOrder />
            </Protect>
          } />
        <Route exact
          path="/CartCheckOut"
          element={
            <CartCheckOut />
          } />
          <Route exact
          path="/service"
          element={
            <Service /> 
          } />
        <Route exact path="/login" element={<Login />} />
      </Routes>


    </Router>
  );
}

export default App;
