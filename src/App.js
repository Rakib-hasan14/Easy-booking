import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Infodirection from './components/Info&direaction/Info&direction';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dinnig from './components/Dinnig/Dinnig';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AuthProvider from './components/Context/AuthContext';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import MyOrder from './components/Dashboard/MyOrder/MyOrder';
import AddNewService from './components/Dashboard/AddNewService/AddNewService';
import AllBooking from './components/Dashboard/AllBooking/AllBooking';
import BookingPage from './components/BookingPage/BookingPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
          <Route path='/info&direction'>
            <Infodirection></Infodirection>
          </Route>
          <Route path='/dinnig'>
            <Dinnig></Dinnig>
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route exact path='/dashboard/myorders'>
            <MyOrder></MyOrder>
          </Route>
          <Route exact path='/dashboard/managebooking'>
            <AllBooking></AllBooking>
          </Route>
          <Route exact path='/dashboard/newservice'>
            <AddNewService></AddNewService>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute exact path='/hotels/:id'>
            <BookingPage></BookingPage>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
