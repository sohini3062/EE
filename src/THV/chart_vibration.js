import LineChart from "../pages/chart/components/LineChart";
import { columns } from './database';
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { BASE_URL, configToken } from "../utils/api";
import { addToast } from "../redux/features/toast/toastSlice";




const Chart_vibration=() => {

   const [Data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const dispatch = useDispatch();
   const { isLoggedIn,token} = useSelector((state) => state.auth);

   useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      axios
        .get(`${BASE_URL}nodemcu-data/all`, configToken(token))
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
const X=Data.map((data) => data.vibx);
const Y=Data.map((data) => data.viby);
const Z=Data.map((data) => data.vibz);



const xChart = {
  
    labels: time,
    datasets: [
      {
        label: "Vibration-X Axis vs Time",
        data: X,
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
  const yChart = {
  
    labels: time,
    datasets: [
      {
        label: "Vibration-Y Axis vs Time",
        data: Y,
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

   const zChart = {
  
    labels: time,
    datasets: [
      {
        label: "Vibration-Z Axis vs Time",
        data: Z,
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

  return (
    
   
      <div style={{ width: 700 }}>
       
        <LineChart chartData={xChart} />
         <LineChart chartData={yChart} />
         <LineChart chartData={zChart} />
      
        
      </div>
     
  
  );
  }
export default Chart_vibration;