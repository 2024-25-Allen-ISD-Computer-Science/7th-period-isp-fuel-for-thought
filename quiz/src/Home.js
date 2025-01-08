import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Home extends Component {
    render() {
        const { setMotorsport, setTechnical, setBasic, setAll } = this.props;

        return(
            <div className="old-standard-tt-regular">
                <form className="mt-2 mb-2">
                    <div className="container">
                        <button onClick={setMotorsport} className="btn btn-primary mt-2">
                            Motorsport
                        </button>
                        <button onClick={setTechnical} className="btn btn-primary mt-2">
                            Technical
                        </button>
                        <button onClick={setBasic} className="btn btn-primary mt-2">
                            Basic
                        </button>
                        <button onClick={setAll} className="btn btn-primary mt-2">
                            All Questions
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Home;