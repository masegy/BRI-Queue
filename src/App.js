import React from "react";
import "./assets/scss/style.scss";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import LoginPage from "pages/LoginPage";
import BerandaPage from "pages/BerandaPage";
import BookingPage from "pages/BookingPage";
import AntrianBankPage from "pages/AntrianBankPage";
import DaftarBank from "pages/DaftarBank";
import axios from "axios";

axios.defaults.baseURL = "http://tranquil-island-89451.herokuapp.com";
const PrivateRoute = (props) => {
  const token = localStorage.getItem("token");
  const history = useHistory();
  if (token !== null && token !== undefined) {
    history.push("/beranda");
    return <Route exact={true} path={props.path} component={props.component} />;
  } else {
    return <Redirect to="/" />;
  }
};

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LoginPage}></Route>
        <Route path="/beranda" component={BerandaPage}></Route>
        <Route
          path="/booking-antrian"
          component={BookingPage}
        ></Route>
        <Route path="/daftar-bank" component={DaftarBank}></Route>
        <Route
          path="/detail-antrian-bank/:id"
          component={AntrianBankPage}
        ></Route>
      </Router>
    </div>
  );
}

export default App;
