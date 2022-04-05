import React from "react";
import "./Form.scss";

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date:"",
            content:"",
            type:"szakmai"
        }
    }

    sendForm = () => {
        let idopont = {
            "kezdes":this.state.date,
            "targy": this.state.content,
            "tipus":this.state.type
        }
        console.log(idopont);
        fetch("http://127.0.0.1:8000/api/idopontok", {
            mode: "cors",
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body:JSON.stringify(idopont),
            credentials: "same-origin",
            "access-control-allow-origin": "*",
            origin: "127.0.0.1:3000",
        })
            .then((response) => {
                if (response.ok) {
                    alert("Sikeres Hozzáadás");
                } else {
                    alert("Sikertelen Hozzáadás");
                }
            })
    };

    handleDate = (event)=>{
        this.setState({date:event.target.value});
    }

    handleContent = (event)=>{
        this.setState({content:event.target.value});
    }

    handleType = (event)=>{
        this.setState({type:event.target.value});
    }

    render() {
        return (
            <div className="Form">
                <div>
                    <label htmlFor="kezdet">Kezdet dátuma</label>
                    <input
                        type="date"
                        name="kezdet"
                        id="kezdet"
                        value={this.state.date}
                        onChange={this.handleDate}
                    />
                </div>
                <div>
                    <label htmlFor="tartalom">Tartalom</label>
                    <input
                        type="text"
                        name="tartalom"
                        id="tartalom"
                        placeholder="Tartalom"
                        value={this.state.content}
                        onChange={this.handleContent}
                    />
                </div>
                <div>
                    <label
                        htmlFor="tipus"
                        value={this.state.type}
                        onChange={this.handleType}
                    >
                        Típus
                    </label>
                    <select name="tipus" id="tartalom">
                        <option>erettsegi</option>
                        <option>szakmai</option>
                    </select>
                </div>
                <div className="Submit" onClick={this.sendForm}>
                    Elküld
                </div>
            </div>
        );
    }
}
