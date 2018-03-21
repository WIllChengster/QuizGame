import React from 'react';

export default props => {

    const {wrongAnswers,correctAnswer}=props;

    const create = wrongAnswers.map( (item,key)=>{
        return (
            <div key={key}>{item}</div>
        )
    })

    return(
        <div>
            <div>
                {correctAnswer}
            </div>
            <div>
                {create}
            </div>
        </div>
    )
}