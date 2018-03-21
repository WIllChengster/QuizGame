import React from 'react';

export default props => {

    const {correctAnswer,wrongAnswers,correctClick,incorrectClick}=props
    const create = wrongAnswers.map( (item,key)=>{
        return (
            <div onClick={incorrectClick} key={key}>{item}</div>
        )
    })

    return(
        <div>
            <div onClick={correctClick} >
                {correctAnswer}
            </div>
            <div>
                {create}
            </div>
        </div>
    )
}