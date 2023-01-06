import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import { Calendar } from "react-calendar";
import { Button} from "@mui/material";
import Historical_current from "../../components/historical/Historical_current";
import Historical_voltage from "../../components/historical/Historical_voltage";
import Historical_temperature from "../../components/historical/Historical_temperature";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
      
        <div className="widgets">
          <Widget type="transformer" />
          
        </div>
        <Datatable />
        
        
      </div>
    </div>
  );
};

export default Home;
