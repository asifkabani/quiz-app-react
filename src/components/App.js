import React, { Component } from 'react';
import quizQuestions from '../components/api/questions.json';
import QuestionCount from './QuestionCount';
import ScoreCount from './ScoreCount';
import Intro from './Intro';
import Question from './Question';
import Button from './Button';

const randomize = (arr) => {
    return arr.sort(function(a, b) {
        return 0.5 - Math.random();
    })
}

const showTopBar = () => {
    let showTopBar = document.getElementsByClassName('hide-show')[0];
    showTopBar.style.opacity = 1;
}

const hideTopBar = () => {
    let hideTopBar = document.getElementsByClassName('hide-show')[0];
    hideTopBar.style.opacity = 1;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isIntro: true,
            questionCount: 0,
            userScore: 0,
            quizQuestions: [],
            currentQuestion: null,
            answerChoices: [],
            correctChoice: null,
            selectedAnswer: null,
            buttonType: 'intro'
        }
        this.startQuiz = this.startQuiz.bind(this);
        this.selectedAnswer = this.selectedAnswer.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    componentWillMount() {
        if (quizQuestions) {
            this.setState({
                quizQuestions: randomize(quizQuestions)
            });
        }
    }

    componentDidMount() {
        this.getQuestion();
    }

    getQuestion() {
        if (this.state.quizQuestions.length > 0) {
            let question = this.state.quizQuestions.shift();
            this.setState({
                currentQuestion: question.question,
                answerChoices: question.choices,
                correctChoice: question.correct
            });
        } else {
            this.setState({
                buttonType: 'hide'
            });
            hideTopBar();
        }
    }

    nextQuestion() {
        let getUL = document.getElementsByTagName('ul')[0];
        getUL.style.pointerEvents = 'initial';
        const getClassEl = document.getElementsByClassName('selected')[0];
        getClassEl.className = '';
        this.setState({
            questionCount: this.state.questionCount + 1,
            buttonType: 'question'
        });
        this.getQuestion();
    }

    checkAnswer(e) {
        const { correctChoice, selectedAnswer } = this.state;
        let getSelectedEl = document.getElementsByClassName('selected')[0];
        let getUL = document.getElementsByTagName('ul')[0];
        if (selectedAnswer !== correctChoice) {
            getSelectedEl.className += ' incorrect';
            getUL.style.pointerEvents = 'none';
            this.setState({
                buttonType: 'next'
            });
        } else {
            getSelectedEl.className += ' correct';
            getUL.style.pointerEvents = 'none';
            this.setState({
                userScore: this.state.userScore + 1,
                buttonType: 'next'
            });
        }
    }

    selectedAnswer(e) {
        this.setState({
            buttonType: 'selected',
            selectedAnswer: e.currentTarget.id
        });
    }

    startQuiz() {
        showTopBar();
        this.setState({
            isIntro: false,
            questionCount: this.state.questionCount + 1,
            buttonType: 'question'
        });
    }

    render() {
        return (
            <div className="container page">
                <div className="row hide-show">
                    <div className="col-6 qcount">
                        <QuestionCount count={this.state.questionCount} />
                    </div>
                    <div className="col-6 score">
                        <ScoreCount score={this.state.userScore} />
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-sm-12">
                        {this.state.isIntro ?
                            <Intro /> :
                            <Question
                                question={this.state.currentQuestion}
                                choices={this.state.answerChoices}
                                correct={this.state.correctChoice}
                                count={this.state.questionCount}
                                selected={this.selectedAnswer}
                        />}
                        <Button
                            type={this.state.buttonType}
                            start={this.startQuiz}
                            check={this.checkAnswer}
                            next={this.nextQuestion}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

// import quizQuestions from '../components/api/questions.json';
// import QuestionCount from '../components/QuestionCount';
// import ScoreCount from '../components/ScoreCount';
// import Content from '../components/Content';
// import { randomize } from '../components/Helpers';

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isIntro: true,
//             isNext: false,
//             userScore: 0,
//             questionCount: 0,
//             quizQuestions: [],
//             currentQuestion: null,
//             currentChoices: [],
//             correctChoice: null
//         };
//         this.startQuiz = this.startQuiz.bind(this);
//         this.checkAnswer = this.checkAnswer.bind(this);
//     }

//     componentWillMount() {
//         if (quizQuestions) {
//             this.setState({
//                 quizQuestions: randomize(quizQuestions)
//             })
//         }
//     }

//     componentDidMount() {
//         this.getQuestion();
//     }

//     nextQuestion(e) {
//         console.log(e)
//         if (this.state.quizQuestions) {
//             let singleQuestion = single(this.state.quizQuestions);
//             this.setState({
//                 questionCount: this.state.questionCount + 1,
//                 currentQuestion: singleQuestion.question,
//                 currentChoices: singleQuestion.choices,
//                 correctChoice: singleQuestion.correct
//             })
//         }
//     }

//     checkAnswer(e) {
//         let button = document.getElementById('js-check');
//         let selectedAnswer = document.getElementsByClassName('selected')[0];
//         if (!selectedAnswer) {
//             return false;
//         } else {
//             let correctAnswer = this.state.correctChoice;
//             if (selectedAnswer.id !== correctAnswer) {
//                 selectedAnswer.className += ' incorrect';
//                 button.innerHTML = 'Next Question';
//                 button.addEventListener('click', () => {
//                     selectedAnswer.className -= 'incorrect'
//                     this.getQuestion();
//                 });
//             } else {
//                 selectedAnswer.className += ' correct';
//                 button.innerHTML = 'Next Question';
//                 this.setState({
//                     userScore: this.state.userScore + 1
//                 })
//                 button.addEventListener('click', () => {
//                     selectedAnswer.className -= 'correct'
//                     this.getQuestion();
//                 });
//             }
//         }
//     }

//     getQuestion() {
//         if (this.state.quizQuestions.length > 0) {
//             let question = () => this.state.quizQuestions.shift();
//             this.setState({
//                 currentQuestion: question.question,
//                 currentChoices: question.choices,
//                 correctChoice: question.correct
//             })
//             this.checkAnswer();
//         } else {
//             console.log('game finished')
//         }
//     }

//     startQuiz() {
//         const showTopBar = document.getElementsByClassName('hide-show')[0];
//         showTopBar.style.opacity = 1;
//         this.setState({
//             isIntro: false,
//             questionCount: this.state.questionCount + 1
//         });
//         return this.getQuestion();
//     }

//     render() {
//         const questions = this.state.quizQuestions;
//         if (questions.length) {
//             return (
//                 <div className="container page">
//                     <div className="row hide-show">
//                         <QuestionCount question={this.state.questionCount} />
//                         <ScoreCount score={this.state.userScore} />
//                     </div>
//                     <div className="row justify-content-center text-center">
//                         <div className="col-sm-12">
//                             <Content
//                                 intro={this.state.isIntro}
//                                 trigger={this.startQuiz}
//                                 count={this.state.questionCount}
//                                 question={this.state.currentQuestion}
//                                 choices={this.state.currentChoices}
//                                 correct={this.state.correctChoice}
//                                 check={this.checkAnswer}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             );
//         } else {
//             console.log('game has finished')
//         }
//     }
// }