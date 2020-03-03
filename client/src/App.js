import React, { Component } from 'react';

import HdfcData from './components/HdfcData';
import RoyalData from './components/RoyalData';

import AssignHdfcCase from './components/AssignHdfcCase';
import AssignRoyalCase from './components/AssignRoyalCase';

import SubmitHdfc from './components/SubmitHdfc';

import ViewHdfcCase from './components/ViewHdfcCase';

import './App.css';
import SubmitRoyal from './components/SubmitRoyal';



class App extends Component {
  render() {
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
          <hr />
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
          <br />
          <hr />
          <br />
          <br />
          <div className="row">
            <div className="col-sm-4">
              <SubmitHdfc />
            </div>
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4">
              <SubmitRoyal />
            </div>
          </div>
          <br />
          <hr />
          <br />
          <br />
          <div className="row">
            <div className="col-sm-4">
              <ViewHdfcCase />
            </div>
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4">
              <h4>View Royal Case</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
