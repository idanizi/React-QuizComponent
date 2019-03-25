import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {

    handleClick = (buttonText) => {
        let { answer } = this.props.quiz_question;
        if (buttonText === answer){
            this.props.showNextQuestionHandler();
        }
    }

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer_option, index) =>
                            <QuizQuestionButton
                                key={index}
                                button_text={answer_option}
                                clickHandler={this.handleClick}
                            />
                        )}
                    </ul>
                </section>
            </main>
        );
    }

}

export default QuizQuestion;