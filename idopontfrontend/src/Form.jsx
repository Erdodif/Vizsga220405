import React from "react";
import "./Form.scss";

export default class Form extends React.Component {
    sendForm = (idopont) => {
        fetch("http://127.0.0.1:8000/api/idopontok", {
            mode: "cors",
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body:idopont,
            credentials: "same-origin",
            "access-control-allow-origin": "*",
            origin: "127.0.0.1:3000",
        })
            .then((response) => {
                if (response.ok) {
                    alert("Sikeres Hozzáadás");
                } else {
                    alert("Sikertelen Hozzáadás");
                    return response.json();
                }
            })
            .then((data) => {
                console.log(data.error);
            });
    };

    render() {
        return (
            <div className="Form">
                <div>
                    <label htmlFor="kezdet">Kezdet dátuma</label>
                    <input type="date" name="kezdet" id="kezdet" />
                </div>
                <div>
                    <label htmlFor="tartalom">Tartalom</label>
                    <input
                        type="text"
                        name="tartalom"
                        id="tartalom"
                        placeholder="Tartalom"
                    />
                </div>
                <div>
                    <label htmlFor="tartalom">Típus</label>
                    <select name="tartalom" id="tartalom">
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
