import Home from "./pages/home/Home";
import { useEffect } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import List from "./pages/list/List";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import Historical from "./components/historical/Historical_current"
import ForgetPasswordPage from "./pages/ForgotPassword/ForgetPasswordPage";
import Historical_current from "./components/historical/Historical_current";
import Historical_voltage from "./components/historical/Historical_voltage";
import Historical_temperature from "./components/historical/Historical_temperature";
import Current_new from "./components/newValues/Current_new";
import Voltage_new from "./components/newValues/Voltage_new";
import SignUp from "./pages/register/Register";
import Biodata from "./pages/Profile/Biodata";
import AddTransformer from "./pages/new/New";
import ToastList from "./components/ToastList";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/features/auth/authSlice";

import ChartPage from "./pages/ChartPage";
import Chart from "./pages/chart/Chart";
import LandingPage_THV from "./THV/LandingPage_THV";
import Login_THV from "./THV/Login_THV";
import Register_THV from "./THV/Register_THV";
import Dashboard_THV from "./THV/dashboard_THV";
import TempData from "./THV/data_th";
import Chart_th from "./THV/chart_th";


function App() {

  return (
    
     <Provider store={store}>
     <ToastList/>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="dashboard" element={<Home/>} component={Home } />
            <Route path="login" element={<Login />} component={ Login } />
            <Route path="/forget-password" element={<ForgetPasswordPage/>} component={ForgetPasswordPage}/>
            <Route path="register"element={<SignUp />} component={ SignUp } />
            <Route path="newTransformer" element={<AddTransformer/>}  component={AddTransformer}/>
            <Route path="historical_current" element={<Historical_current/>} component={Historical_current } />
            <Route path="historical_voltage" element={<Historical_voltage/>} component={Historical_voltage } />
            <Route path="historical_temperature" element={<Historical_temperature/>} component={Historical_temperature } />
            <Route path="Current_new" element={<Current_new/>} component={Current_new} />
            <Route path="Voltage_new" element={<Voltage_new/>} component={Voltage_new} />
            <Route path="profile" element={<Biodata/>} component={Biodata} />
            <Route path="chart" element={<ChartPage/>} component={ChartPage} />
              <Route path="transformers">
              <Route index element={<List />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Transformer" />}
              />
            </Route>

//the rest part here is for THV SITE
            <Route path="chart_th" element={<Chart_th/>} component={ Chart_th } />
            <Route path="/data_th" element={<TempData />} component={TempData} />
            <Route path="login_THV" element={<Login_THV/>} component={Login_THV}/>
            <Route path="register_THV" element={<Register_THV />} component={ Register_THV } />
            <Route path="dashboard_THV" element={<Dashboard_THV />} component={ Dashboard_THV } />
            <Route path="/THV" index element={<LandingPage_THV />} />
              
              
              
        
            
           
          
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
   
  );
}

export default App;
