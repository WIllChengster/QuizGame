import React, {Component} from 'react';
import Question from './questions'
import Answers from './answer'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentQuestion:null,
            answers:[],
            perc:null,
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
            wrongAnswers : [
                1,2,3
              ],
        }
        this.onCorrectClick=this.onCorrectClick.bind(this)
        this.onIncorrectClick=this.onIncorrectClick.bind(this)

    }
    genRandomQuestion(arr){
        const question = Math.floor(Math.random() * arr.length);
        this.setState({
            currentQuestion: arr[question]
        })
        return arr[question];
    }


    onCorrectClick(){
        console.log('correct')
        let attempts = this.state.totalAttempts+1;
        let correct = this.state.questionsCorrect+1;
        
        this.setState({
            questionsCorrect: correct,
            totalAttempts: attempts,
            perc : correct/attempts*100
        });

        // if(this.state.totalAttemps!==0){
        //     this.setState({
        //         perc:0
        //     })
        // }
        this.genRandomQuestion(this.state.questions).question
        
    }
    onIncorrectClick(){
        console.log('wrong')
        let attempts = this.state.totalAttempts;
        let correct = this.state.questionsCorrect;
        this.setState({
            totalAttempts: attempts+1,
            perc : correct/attempts*100
        });

        if(isNaN(this.state.perc)){
            this.setState({
                perc:0
            })
        }
        this.genRandomQuestion(this.state.questions).question
    }
    componentWillMount(){
        this.genRandomQuestion(this.state.questions).question
        const currentQuestion = this.state.currentQuestion
    }

    render(){

        console.log('correct answer', this.state.questionsCorrect,'attempts', this.state.totalAttempts,'perc',this.state.perc)
        return(
            <div>
                <Question questions={this.state.currentQuestion.question} correctAnswer={this.state.currentQuestion.correctAnswer} wrongAnswers={this.state.wrongAnswers} correctClick={this.onCorrectClick} incorrectClick={this.onIncorrectClick} />
                <div>
                    correct:{this.state.questionsCorrect}
                </div>
                <div>
                    attempts: {this.state.totalAttempts}
                </div>
                <div>
                    accuracy: {this.state.perc}
                </div>
            </div>
        )
    }
}

export default App;
