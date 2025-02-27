import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Stats extends Component {

    render() {
        const { questionBank, answers, score } = this.props;
        
        return(
            <div className="old-standard-tt-bold d-flex flex-column align-items-center justify-content-center bg-tan">
                <div className="results-title">Total Questions Correct: {localStorage.getItem("totalRight") ?? 0}</div>
                <div className="results-title">Total Questions Incorrect: {localStorage.getItem("totalWrong") ?? 0}</div>
            </div>
        )
    }
}

export default Stats;