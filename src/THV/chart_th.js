import LineChart from "../pages/chart/components/LineChart";
import { columns } from './database';

let currentDate = new Date().toJSON().slice(0, 10).toString();
var rows = [
  { id: 1, Date: "2023-03-02",Temperature: 15 , Humidity: 0.56, Vibrationx:56 },
  { id: 2, Date: "2023-03-01",Temperature: 17 , Humidity: 0.51, Vibration:92},
  { id: 3, Date: "2023-02-28",Temperature: 18 , Humidity: 0.75, Vibration:20 },
  { id: 4, Date: currentDate,Temperature: 25 , Humidity: 0.56, Vibration:45 },
  { id: 5, Date: currentDate,Temperature: 12 , Humidity: 0.58, Vibration:25},
  { id: 6, Date: currentDate,Temperature: 17 , Humidity: 0.68, Vibration:47 },
  { id: 7, Date: currentDate,Temperature: 29 , Humidity: 0.49, Vibration: 54 },
  { id: 8, Date: currentDate,Temperature: 18 , Humidity: 0.67, Vibration:45 },
  { id: 9, Date: currentDate,Temperature: 15 , Humidity: 0.56, Vibration:52 },
];

 rows = rows.sort(function (a, b) {
      var dateA = new Date(a.Date).getTime();
      var dateB = new Date(b.Date).getTime();
      return dateA < dateB ? -1 : 1; // ? -1 : 1 for ascending/increasing order
    });


const Chart_th= () => {
const time=rows.map((data) => data.Date);
const temp=rows.map((data) => data.Temperature);
const humidity=rows.map((data)=> data.Humidity);

console.log(rows);
const temperatureChart = {
  
    labels: time,
    datasets: [
      {
        label: "Temperature vs Time",
        data: temp,
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
  const HumidityChart = {
  
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

  return (
    
   
      <div style={{ width: 700 }}>
       
        <LineChart chartData={temperatureChart} />
         <LineChart chartData={HumidityChart} />
      
        
      </div>
     
  
  );
  }
export default Chart_th;