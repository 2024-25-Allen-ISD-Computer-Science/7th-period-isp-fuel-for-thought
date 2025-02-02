// Built from tutorial - https://www.geeksforgeeks.org/create-a-quiz-app-using-reactjs/
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import qBank from "./Components/QuestionBank";
import Results from "./Results";
import "./App.css";
import Home from "./Home";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBank: qBank,
            currentQuestion: 0,
            selectedOption: "",
            quizEnd: false,
            answers: [],
            category: null
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

    render() {
        const { questionBank, currentQuestion, selectedOption, quizEnd, category, answers } =
            this.state;

        if (category == null) {
            return (
                <div className="old-standard-tt-bold d-flex flex-column align-items-center justify-content-center bg-tan">
                    <h1 className="app-title">Fuel for Thought</h1>
                    <Home
                        setMotorsport={() => this.setCategory(1)}
                        setTechnical={() => this.setCategory(2)}
                        setBasic={() => this.setCategory(3)}
                        setAll={() => this.setCategory(0)}
                    />
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