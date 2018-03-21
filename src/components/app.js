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
            totalAttempts: 0,
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
<<<<<<< HEAD
    generateQuestion(){
        const randomQuestion = Math.floor(Math.random()* (questionsArray.length) )
=======
    genRandomQuestion(arr){
        const question = Math.floor(Math.random() * arr.length);
        return arr[question];
>>>>>>> cfd8c4bc0fdefb7be9da85ff371f94d2f7a734e5
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
                <Question questions={this.generateQuestion(this.state.questions).question} correctAnswer={this.generateQuestion(this.state.questions).answer} wrongAnswers={this.state.wrongAnswers} />
            </div>
        )
    }
}

export default App;
