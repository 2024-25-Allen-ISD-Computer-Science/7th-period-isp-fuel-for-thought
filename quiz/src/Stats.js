import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Stats extends Component {

    render() {
        const { isPresented } = this.props;
        
        return(
            <div className="old-standard-tt-bold bg-tan">
                <div className="pxl-8 pyt-4">
                    <button className="btn btn-primary" onClick={isPresented}>Back</button>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="results-title">Total Questions Correct: {localStorage.getItem("totalRight") ?? 0}</div>
                    <div className="results-title">Total Questions Incorrect: {localStorage.getItem("totalWrong") ?? 0}</div>
                </div>
            </div>
        )
    }
}

export default Stats;