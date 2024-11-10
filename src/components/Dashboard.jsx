import React,{useContext} from 'react';
import './Dashboard.css'; // Import CSS file for styling

import {Navigate, useNavigate} from 'react-router-dom'

import { DataContext } from '../context/DataContext';
// import { useD } from '../context/useCot';
// import { useContext } from '../context/useContext';


const Dashboard = () => {
  
  const {name,pw} = useContext(DataContext);
  const navigate = useNavigate();

  function workshopfn(){
    navigate('/interface/workshop')
  }
  function collabfn(){
    navigate('/interface/collab')
  }
  return (
    <div className="dashboard-container">

      {/* Main Content Section */}
      <div className="main-content">
        {/* Post Section */}
        <div className="post-section">
          <h2>Post Section</h2>
          <h1>{name},{pw}</h1>
        </div>

        {/* Button Section */}
        <div className="button-section">
          <button className="dashboard-button" onClick={workshopfn}>Workshop</button>
          <button className="dashboard-button" onClick={collabfn}>Collab Projects</button>
          <button className="dashboard-button">Mentee</button>
          <button className="dashboard-button">Financial Assistance</button>
          <button className="dashboard-button">Notification</button>
        </div>

        {/* Robot Image */}
        <div className="robot-image">
          <img src="data:image/png;base64,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" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
