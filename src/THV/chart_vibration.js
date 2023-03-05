import LineChart from "../pages/chart/components/LineChart";


let currentDate = new Date().toJSON().slice(0, 10).toString();

var rows = [
  { id: 1, Date: '2023-03-02',Temperature: 15 , Humidity: 0.56, Vibrationx:5,Vibrationy:7,Vibrationz:8},
  { id: 2, Date: '2023-03-01',Temperature: 17 , Humidity: 0.51, Vibrationx:1,Vibrationy:16,Vibrationz:12},
  { id: 3,Date: '2023-02-28',Temperature: 18 , Humidity: 0.75, Vibrationx:4,Vibrationy:18,Vibrationz:9 },
  { id: 4, Date: currentDate,Temperature: 25 , Humidity: 0.56, Vibrationx:2,Vibrationy:7,Vibrationz:8 },
  { id: 5, Date: currentDate,Temperature: 12 , Humidity: 0.58, Vibrationx:3,Vibrationy:7,Vibrationz:8},
  { id: 6, Date: currentDate,Temperature: 17 , Humidity: 0.68, Vibrationx:3,Vibrationy:7,Vibrationz:6 },
  { id: 7, Date: currentDate,Temperature: 29 , Humidity: 0.49, Vibrationx:4,Vibrationy:7,Vibrationz:5 },
  { id: 8, Date: currentDate,Temperature: 18 , Humidity: 0.67, Vibrationx:5,Vibrationy:2,Vibrationz:5 },
  { id: 9, Date: currentDate,Temperature: 15 , Humidity: 0.56, Vibrationx:8,Vibrationy:7,Vibrationz:9 },
];

 rows = rows.sort(function (a, b) {
      var dateA = new Date(a.Date).getTime();
      var dateB = new Date(b.Date).getTime();
      return dateA < dateB ? -1 : 1; // ? -1 : 1 for ascending/increasing order
    });


const Chart_vibration=() => {
const time=rows.map((data) => data.Date);
const X=rows.map((data) => data.Vibrationx);
const Y=rows.map((data) => data.Vibrationy);
const Z=rows.map((data) => data.Vibrationz);


console.log(rows);

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