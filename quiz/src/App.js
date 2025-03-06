// Built from tutorial - https://www.geeksforgeeks.org/create-a-quiz-app-using-reactjs/
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import qBank from "./Components/QuestionBank";
import Results from "./Results";
import Home from "./Home";
import Stats from "./Stats";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBank: qBank,
            currentQuestion: 0,
            selectedOption: "",
            quizEnd: false,
            answers: [],
            category: null,
            statsPage: false,
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
        const finalScore = answers.reduce((score, answer, index) => {
            if (answer === questionBank[index].answer) {
                return score + 1;
            }
            return score;
        }, 0);

        let oldTotalWrong = Number(localStorage.getItem("totalWrong")) ?? 0
        let oldTotalRight = Number(localStorage.getItem("totalRight")) ?? 0
        oldTotalWrong += (questionBank.length - finalScore)
        oldTotalRight += finalScore
        localStorage.setItem("totalWrong", String(oldTotalWrong))
        localStorage.setItem("totalRight", String(oldTotalRight))

        return finalScore
    };

    setCategory(cat) {
        const { questionBank } = this.state;
        
        if (cat === 0) { // All questions
            this.setState({ 
                category: 0, 
            })
        } else {
            this.setState({ 
                category: cat, 
                questionBank: questionBank.filter((item) => item.category === cat)
            })
        }
    };

    toggleStats() {
        const { statsPage } = this.state;
        this.setState({ statsPage: !statsPage })
    };

    render() {
        const { questionBank, currentQuestion, selectedOption, quizEnd, category, answers, statsPage } =
            this.state;

        if (category == null) {
            return (
                <div>
                    {statsPage ? (
                        <Stats
                            isPresented={() => this.toggleStats()}
                        />
                    ) : (
                        <div className="old-standard-tt-bold bg-tan">
                            <div className="pyb-8">
                                <div className="pxl-8 pyt-4">
                                    <button className="btn btn-primary" onClick={() => this.toggleStats()}>Stats</button>
                                </div>
                                <div className="container">
                                    <h1 className="app-title">Fuel for Thought</h1>
                                </div>
                            </div>
                            <div className="align-items-center justify-content-center">
                                <Home
                                    setMotorsport={() => this.setCategory(1)}
                                    setTechnical={() => this.setCategory(2)}
                                    setBasic={() => this.setCategory(3)}
                                    setAll={() => this.setCategory(0)}
                                />
                            </div>
                        </div>
                    )}
                </div>
            );
        } else {
            return (
                <div>
                    {!quizEnd ? (
                        <div className="old-standard-tt-bold d-flex flex-column align-items-center justify-content-center bg-tan">
                            <h1 className="app-title">Fuel for Thought</h1>
                            <Question
                                question={questionBank[currentQuestion]}
                                selectedOption={selectedOption}
                                onOptionChange={this.handleOptionChange}
                                onSubmit={this.handleNextQuestion}
                                onBack={this.handlePreviousQuestion}
                                showBack={currentQuestion !== 0}
                            />
                        </div>
                    ) : (
                        <div className="old-standard-tt-bold d-flex flex-column align-items-center justify-content-center bg-tan">
                            <Results
                                questionBank={questionBank}
                                answers={answers}
                                score={this.calculateScore()}
                            />
                        </div>
                    )}
                </div>
            );
        }
    }
}

export default App;