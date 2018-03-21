import React, {Component} from 'react';
import Question from './questions'
import Answers from './answers'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentQuestion:null,
            answers:[],
            perc:0,
            questionsCorrect:0,
            totalAttempts: 0
        }
    }
    generateQuestion(){

    }
    generateAnswers(){

    }
    onCorrectClick(){
        this.setState ({totalAttempts}++);
        this.setState ({questionsCorrect}++);
    }
    onIncorrectClick(){
        this.setState ({totalAttempts}++);
        this.setState ({perc = questionsCorrect/totalAttempts});
    }


    render(){
        return(
            <div>
                <Question questions={this.generateQuestion} answers={this.generateAnswers} />
            </div>
        )
    }
}

export default App;
