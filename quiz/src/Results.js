import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Results extends Component {

    render() {
        const { questionBank, answers, score } = this.props;

        var ansindex = 0;
        const items = questionBank.map(question =>
            <li>
                <h1>{question.question}</h1>
                <p>Your answer: {answers[ansindex++]}</p>
                <p>Correct answer: {question.answer}</p>
            </li>
        );
        
        return(
            <div className="old-standard-tt-regular results-container">
                <div className="results-title">Your score: {score}/{questionBank.length}</div>
                <div>{items}</div>
            </div>
        )
    }
}

export default Results;