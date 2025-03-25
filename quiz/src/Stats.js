import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Stats extends Component {
    constructor() {
        super()
        this.correct = localStorage.getItem("totalRight") ?? 0
        this.incorrect = localStorage.getItem("totalWrong") ?? 0
    }

    render() {
        const { isPresented } = this.props;
        
        return(
            <div className="old-standard-tt-bold bg-tan">
                <div className="pxl-8 pyt-4">
                    <button className="btn btn-primary" onClick={isPresented}>Back</button>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="results-title">Total Questions Correct: {this.correct}</div>
                    <div className="results-title">Total Questions Incorrect: {this.incorrect}</div>
                    <br/>
                    <div className="results-title">Percent Correct: {parseFloat(this.correct / this.incorrect).toFixed(2)}%</div>
                    <div className="results-title">Total Questions Answered: {Number(this.correct) + Number(this.incorrect)}</div>
                </div>
            </div>
        )
    }
}

export default Stats;