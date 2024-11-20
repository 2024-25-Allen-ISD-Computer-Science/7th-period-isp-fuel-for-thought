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
            score: 0,
            quizEnd: false,
        };
    }

    handleOptionChange = (e) => {
        this.setState({ selectedOption: e.target.value });
    };

    checkAnswer = () => {
        const { questionBank, currentQuestion, selectedOption } = this.state;
        if (selectedOption === questionBank[currentQuestion].answer) {
            this.setState((prevState) => ({ score: prevState.score + 1 }));
        }
    };

    handleNextQuestion = (e) => {
        const { questionBank, currentQuestion } = this.state;
        e.preventDefault();
        this.checkAnswer();
        if (currentQuestion + 1 < questionBank.length) {
            this.setState((prevState) => ({
                currentQuestion: prevState.currentQuestion + 1,
                selectedOption: "",
            }));
        } else {
            this.setState({
                quizEnd: true,
            });
        }
    };

    handlePreviousQuestion = (e) => {
        const { currentQuestion } = this.state;
        e.preventDefault();
        this.checkAnswer();
        if (currentQuestion - 1 >= 0) {
            this.setState((prevState) => ({
                currentQuestion: prevState.currentQuestion - 1,
                selectedOption: "",
                score: prevState.score - 1,
            }));
        }
    };

    render() {
        const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
            this.state;
        return (
            <div className="App d-flex flex-column align-items-center justify-content-center bg-tan">
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
                        score={score}
                        onNextQuestion={this.handleNextQuestion}
                        className="score"
                    />
                )}
            </div>
        );
    }
}

export default App;