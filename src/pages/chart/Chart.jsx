
import "./App.css";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { BASE_URL, configToken } from "../../utils/api";
import { addToast } from "../../redux/features/toast/toastSlice";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

const Chart = () => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn,token} = useSelector((state) => state.auth);

   useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      axios
        .get(`${BASE_URL}transformer_data/properties/8513b674-2a56-463e-8dc1-2f20804ebe60`, configToken(token))
        .then((response) => {
          console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          dispatch(
            addToast({
              type: "error",
              message: "Could not load data!",
            })
          );
          setIsLoading(false);
        });
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, token]);

var sample=new Array();
for(let i=0;i<Data.length;i++)
{
      sample.push(Data[i]);
}

Data.sort((a, b) => {
    return a.timeStamp - b.timeStamp;
});


const time=Data.map((data) => data.timeStamp);
const topOilTemp=Data.map((data) => data.topOilTemperatureC);
const bottomOilTemp=Data.map((data)=> data.bottomOilTemperatureC);
const RphaseCurrent= Data.map((data)=> data.phaseCurR);
const YphaseCurrent= Data.map((data)=>data.phaseCurY);
const BphaseCurrent= Data.map((data)=>data.phaseCurB);
const RphaseVoltage= Data.map((data)=>data.phaseVolR);
const YphaseVoltage= Data.map((data)=>data.phaseVolY);
const BphaseVoltage= Data.map((data)=>data.phaseVolB);
const humidity= Data.map((data)=>data.humidity);

const DATA_COUNT = Data.length;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 500};
const temperatureTopOil = {
  
    labels: time,
    datasets: [
      {
        label: "Top Oil Temperature vs Time",
        data: topOilTemp,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

const temperatureBottomOil = {
  
    labels: time,
    datasets: [
      {
        label: "Bottom Oil Temperature vs Time",
        data: bottomOilTemp,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

const Humidity = {
  
    labels: time,
    datasets: [
      {
        label: "Humidity vs Time",
        data: humidity,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
const  current1= {
    labels: time,
    datasets: [
      {
        label: "R phase Current vs Time",
        data: RphaseCurrent,
        backgroundColor: ["rgba(255, 99, 132)"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],

  };
  if (isLoading) {
    return (
      <Grid container spacing={1} justifyContent="center" sx={{ marginTop: 50 }}>
        <CircularProgress color="primary" size={40} />
      </Grid>
    );
  } else {
    
  



  return (
    
    <div className="App-header">
      <div style={{ width: 700 }}>
        <LineChart chartData={temperatureTopOil} />
        <LineChart chartData={temperatureBottomOil}/>
        <LineChart chartData={current1}/>
        <LineChart chartData={Humidity}/>
      </div>
     
    </div>
  );
}
};

export default Chart;
