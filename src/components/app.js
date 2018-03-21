import React, {Component} from 'react';
import Question from './questions'
import Answers from './answers'


class App extends Component {
    constructor(props){
        super(props)
        this.state={
            currentQuestion:null,
            answers:[],
            questions:[
                {
                  'question': 'what color is the sky?',
                  'correctAnswer': 'blue',
                },
                {
                  'question':'what color is evans shirt',
                  'correctAnswer': 'green'
                },
                {
                  'question': 'who is the best around',
                  'correctAnswer': 'you are'
                }
            ],
            wrongAnswers = [
                1,2,3
              ],

        }
    }
    genRandomQuestion(arr){
        const question = Math.floor(Math.random() * arr.length);
        return arr[question];
    }
    generateAnswers(){

    }
    render(){
        return(
            <div>
                <Question questions={this.generateQuestion(this.state.questions).question} correctAnswer={this.generateQuestion(this.state.questions).answer} wrongAnswers={this.state.wrongAnswers} />
            </div>
        )
    }
}

export default App;
