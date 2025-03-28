import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Home extends Component {
    render() {
        const { setMotorsport, setTechnical, setBasic, setAll } = this.props;

        return(
            <div className="old-standard-tt-regular">
                <div className="container">
                    <div>
                        <button onClick={setMotorsport} className="btn btn-primary mt-2">
                            <img src="../../img/two-motor-flags.png" alt="Motorsport Splash" class="home-img"/>
                        </button>
                        <h1 className="title">Motorsport</h1>
                    </div>
                    <div>
                        <button onClick={setTechnical} className="btn btn-primary mt-2">
                            <img src="../../img/mechanics.png" alt="Technical Splash" class="home-img"/>
                        </button>
                        <h1 className="title">Technical</h1>
                    </div>
                    <div>
                        <button onClick={setBasic} className="btn btn-primary mt-2">
                            <img src="../../img/car.png" alt="Basic Splash" class="home-img"/>
                        </button>
                        <h1 className="title">Basic</h1>
                    </div>
                    <div>
                        <button onClick={setAll} className="btn btn-primary mt-2">
                            <img src="../../img/all.png" alt="All Questions Splash" class="home-img"/>
                        </button>
                        <h1 className="title">All Questions</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;