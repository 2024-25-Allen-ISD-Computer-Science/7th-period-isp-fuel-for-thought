import React, {Component} from "react";
import Options from "./Option";
import "./Question.css";

class Question extends Component{
    render() {
        const {question, selectedOption, onOptionChange, onSubmit, onBack, showBack, qnum} = this.props;

        return(
            <div className={question.image != null ? "container" : ""}>
                <div className="qimg-frame px-8">
                    <img src={question.image} alt={question.imgalt}/>
                </div>
                <div className="old-standard-tt-regular">
                    <h3>Question {qnum}</h3>
                    <h5 className="mt-2">{question.question}</h5>
                    <form className="mt-2 mb-2">
                        <Options
                            options={question.options}
                            selectedOption={selectedOption}
                            onOptionChange={onOptionChange}
                        />
                        <div className="container">
                            {showBack ? (
                            <button type="back" onClick={onBack} className="btn btn-primary mt-2">
                                BACK
                            </button>
                            ) : (<div></div>)}
                            <button type="submit" onClick={onSubmit} className="btn btn-primary mt-2">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Question;
