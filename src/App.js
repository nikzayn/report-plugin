import React from 'react';

import HdfcData from './components/HdfcData';
import RoyalData from './components/RoyalData';
import AssignHdfcCase from './components/AssignHdfcCase';
import AssignRoyalCase from './components/AssignRoyalCase';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <HdfcData />
          </div>
          <div className="col-sm">
          </div>
          <br />
          <div className="col-sm">
            <RoyalData />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-sm-4">
            <AssignHdfcCase />
          </div>
          <div className="col-sm-4">
            
          </div>
          <div className="col-sm-4">
            <AssignRoyalCase />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
