import React from 'react';
import Answers from './answer'

export default props =>{

    const {questions,correctAnswer,wrongAnswers,correctClick,incorrectClick} = props
    return(
        <div>
            <div>
                {props.questions}
            </div>
            <div>
                <Answers wrongAnswers={wrongAnswers} correctAnswer={correctAnswer} correctClick={correctClick} incorrectClick={incorrectClick} />
            </div>
        </div>
    )
}