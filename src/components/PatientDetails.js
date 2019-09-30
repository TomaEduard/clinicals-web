import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

class PatientDetails extends React.Component {

    state = {
        firstName: null,
        lastName: null,
        age: null,
        
        loading: false,
    }

    componentWillMount() {

        console.log("#1 this.state - ", this.state);
        console.log("#2 this.props.match.params - ", this.props.match.params);
        
        axios.get("http://localhost:8443/clinical-services/api/patients/"+ this.props.match.params.patientId)
        
        .then(res=>{
            console.log("#3 PatientDetails - componentWillMount:", res);
            this.setState({
                firstName:res.data.firstName,
                lastName:res.data.lastName,
                age:res.data.age,
            })
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const data = {
            patientId: this.props.match.params.patientId,
            componentName: this.componentName,
            componentValue: this.componentValue,
        }
        console.log(">>> handleSubmit ", data);

        axios.post("http://localhost:8443/clinical-services/api/clinicals/", data)
        .then(res=>{
            toast("Patient Data Saved Succesfully!", {autoClose:2300, position:toast.POSITION.BOTTOM_CENTER})
        })
    }

    render() {
        return(
            <div>
                <h2>Patient Details:</h2>
                First Name: {this.state.firstName}
                Last Name: {this.state.lastName}
                Age: {this.state.age}
                <h2>Patient Clinical Data:</h2>

                <form>
                    Clinical Entry Type <select onChange={(event)=>{this.componentName=event.target.value}}>
                        <option>Select One</option>
                        <option value="bp">Blood Presure(Sys/Dys)</option>
                        <option value="hw">Height/Weight</option>
                        <option value="heartRate">HearthRate</option>
                    </select>

                    Value:<input type="text" name="componentValue" onChange={(event)=>{this.componentValue=event.target.value}}></input>
                    
                    <button onClick={this.handleSubmit.bind(this)}>Confirm</button>

                </form>

            </div>
        )
    }
}

export default PatientDetails;