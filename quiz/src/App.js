// Built from tutorial - https://www.geeksforgeeks.org/create-a-quiz-app-using-reactjs/
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import qBank from "./Components/QuestionBank";
import Score from "./Components/Score";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBank: qBank,
            currentQuestion: 0,
            selectedOption: "",
            quizEnd: false,
            answers: []
        };
    }

    handleOptionChange = (e) => {
        this.setState({ selectedOption: e.target.value });
    };

    handleNextQuestion = (e) => {
        const { questionBank, currentQuestion, selectedOption, answers } = this.state;
        e.preventDefault();

        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = selectedOption;

        if (currentQuestion + 1 < questionBank.length) {
            this.setState({
                currentQuestion: currentQuestion + 1,
                selectedOption: updatedAnswers[currentQuestion + 1] || "", // Restore previous answer if exists
                answers: updatedAnswers,
            });
        } else {
            this.setState({
                answers: updatedAnswers,
                quizEnd: true,
            });
        }
    };

    handlePreviousQuestion = (e) => {
        const { currentQuestion, answers } = this.state;
        e.preventDefault();

        if (currentQuestion - 1 >= 0) {
            this.setState({
                currentQuestion: currentQuestion - 1,
                selectedOption: answers[currentQuestion - 1] || "",
            });
        }
    };

    calculateScore = () => {
        const { questionBank, answers } = this.state;
        return answers.reduce((score, answer, index) => {
            if (answer === questionBank[index].answer) {
                return score + 1;
            }
            return score;
        }, 0);
    };

    render() {
        const { questionBank, currentQuestion, selectedOption, quizEnd } =
            this.state;
        return (
            <div className="old-standard-tt-bold d-flex flex-column align-items-center justify-content-center bg-tan">
                <h1 className="app-title">Fuel for Thought</h1>
                {!quizEnd ? (
                    <Question
                        question={questionBank[currentQuestion]}
                        selectedOption={selectedOption}
                        onOptionChange={this.handleOptionChange}
                        onSubmit={this.handleNextQuestion}
                        onBack={this.handlePreviousQuestion}
                    />
                ) : (
                    <Score
                        score={this.calculateScore()}
                        onNextQuestion={this.handleNextQuestion}
                        className="score"
                    />
                )}
            </div>
        );
    }
}

export default App;