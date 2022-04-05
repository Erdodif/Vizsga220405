import React from "react";
import "./Table.scss";

export default class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/idopontok", {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      credentials: "same-origin",
      "access-control-allow-origin": "*",
      origin: "127.0.0.1:3000",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
          console.log(data);
        this.setState({ appointments: data });
      });
  }

  /*componentDidUpdate(oldProp,oldState){
        if(this.state.appointments !== oldState.appointments){

        }
    }*/

  render() {
    return (
      <div className="Cards">
        {this.state.appointments.map((appointment) => (
            <Appointment appointment={appointment} key={appointment.id} />
        ))}
      </div>
    );
  }
}

class Appointment extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="Content">{this.props.appointment.targy}</div>
        <div className="Type">{this.props.appointment.tipus}</div>
        <div className="Time">{this.props.appointment.kezdes}</div>
      </div>
    );
  }
}
