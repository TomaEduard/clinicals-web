import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends React.Component {

    state = {
        patientData:[]
    }

    componentWillMount(){
        axios.get('http://localhost:8443/clinical-services/api/patients').then(res=>{

            // const age = res.data;
            this.setState({
                patientData: res.data
            })
            console.log(res);
            
        })
    }

    render() {
        return(
            <div>
                <h2>Patient:</h2>
                <table align='center'>

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.patientData.map((element, i) => 
                            <RowCreator 
                            item = {element}
                            key = {i}
                            />
                        )}
                    </tbody>

                </table>
                <br/>
                <Link to={'/addPatient'}><font size="5">Register Patient</font></Link>
            </div>
        )
    }
}

class RowCreator extends React.Component {
    render(){
        // shortcut for this.props.item
        var patient = this.props.item
        return<tr>
            <td>{patient.id}</td>
            <td>{patient.firstName}</td>
            <td>{patient.lastName}</td>
            <td>{patient.age}</td>
            <td><Link to={'patientDetails/' + patient.id}>Add Data</Link></td>
            <td><Link to={'analyze/' + patient.id}>Analyze</Link></td>
        </tr>
    }
}

export default Home;