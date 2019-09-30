import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import FindPatients from './components/FindPatients';
import PatientDetails from './components/PatientDetails';
import CollectClinicals from './components/CollectClinicals';
import AddPatient from './components/AddPatient';
import AnalyzeData from './components/AnalyzeData';
import Home from './components/Home';
import ChartGenerator from './components/ChartGenerator';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/findPatients" component={FindPatients}/>
        <Route exact path="/patientDetails/:firstName/:lastName" component={PatientDetails}/>
        <Route exact path="/patientDetails/:patientId" component={CollectClinicals}/>
        <Route exact path="/addPatient" component={AddPatient}/>
        <Route exact path="/analyze/:patientId" component={AnalyzeData}/>
        <Route exact path="/chart/:componentName/:patientId" component={ChartGenerator}/>
       </Switch>
      </div>
    );
  }
}

export default App;
