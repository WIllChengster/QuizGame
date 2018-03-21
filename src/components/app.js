import React, {Component} from 'react';
import Question from './questions'
import Answers from './answers'


class App extends Component {
    constructor(props){
        super(props)
        this.state={
            currentQuestion:null,
            answers:[],Answer
        }
    }
    generateQuestion(){

    }
    generateAnswers(){

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
