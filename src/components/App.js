import React from 'react';
// import TransitionGroup from 'react-transition-group';
import quizQuestions from '../components/api/questions.json';
import QuestionCount from '../components/QuestionCount';
import ScoreCount from '../components/ScoreCount';
import Content from '../components/Content';
import { randomize } from '../components/Helpers';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: true,
            score: 0,
            question: 0,
            quizQuestions: [],
            currentQuestion: null,
            currentChoices: [],
            correctChoice: null
        };
        this.startQuiz = this.startQuiz.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    componentWillMount() {
        this.setState({
            quizQuestions: randomize(quizQuestions)
        })
    }

    componentDidMount() {
        if (this.state.quizQuestions) {
            let question = this.state.quizQuestions.shift();
            this.setState({
                question: this.state.question + 1,
                currentQuestion: question.question,
                currentChoices: question.choices,
                correctChoice: question.correct
            })
        }
    }

    checkAnswer() {
        console.log('click')
        let correctAnswer = this.state.correctChoice;
        // let getTabIndex = () => {
        //     let getNodes = document.getElementsByTagName('li');
        //     console.log(getNodes)
        //     for (let i = 0; i <= getNodes.length; i++) {
        //         console.log(getNodes[i])
        //     }
        // }
    }

    startQuiz() {
        const showTopBar = document.getElementsByClassName('hide-show')[0];
        showTopBar.style.opacity = 1; 

        this.setState({
            intro: false
        });
    }

    render() {
        const questions = this.state.quizQuestions;
        if (questions.length) {
            console.log(true)
        }
        
        return (
            <div className="container page">
                <div className="row hide-show">
                    <QuestionCount question={this.state.question} />
                    <ScoreCount score={this.state.score} />
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-sm-12">
                        <Content
                            trigger={this.startQuiz}
                            intro={this.state.intro}
                            question={this.state.currentQuestion}
                            choices={this.state.currentChoices}
                            correct={this.state.correctChoice}
                            check={this.checkAnswer}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;