import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar_THV';
import Table_thv from './data';
import Sidebar_THV from './Sidebar_THV';
import './home.scss'

const Dashboard_THV = () => {
  return (
   <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Table_thv />
       
        
        </div>
        
        <p></p>
        <p></p>
       
        
        
      </div>
    
    
  );
};

export default Dashboard_THV;
