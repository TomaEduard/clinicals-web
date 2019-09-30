import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CollectClinicals from './components/CollectClinicals';
import AddPatient from './components/AddPatient';
import AnalyzeData from './components/AnalyzeData';
import ChartGenerator from './components/ChartGenerator';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <React.Fragment>

          <Switch>

            <Route exact path="/" component={Home}/>
            <Route exact path="/patientDetails/:patientId" component={CollectClinicals} />
            <Route exact path="/analyze/:patientId" component={AnalyzeData} />
            <Route exact path="/addPatient" component={AddPatient} />
            <Route exact path="/chart/:componentName/:patientId" component={ChartGenerator} />

          </Switch>
        </React.Fragment>
      </BrowserRouter>

    </div>
  );
}

export default App;
