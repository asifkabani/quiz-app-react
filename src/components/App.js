import React from 'react';
// import TransitionGroup from 'react-transition-group';
import quizQuestions from '../components/api/questions.json';
import QuestionCount from '../components/QuestionCount';
import ScoreCount from '../components/ScoreCount';
import Content from '../components/Content';
import { randomize, single } from '../components/Helpers';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isIntro: true,
            userScore: 0,
            questionCount: 0,
            quizQuestions: [],
            currentQuestion: null,
            currentChoices: [],
            correctChoice: null
        };
        this.startQuiz = this.startQuiz.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    componentWillMount() {
        if (quizQuestions) {
            this.setState({
                quizQuestions: randomize(quizQuestions)
            })
        }
    }

    componentDidMount() {
        if (this.state.quizQuestions) {
            let singleQuestion = single(this.state.quizQuestions);
            console.log(singleQuestion)
            this.setState({
                currentQuestion: singleQuestion.question,
                currentChoices: singleQuestion.choices,
                correctChoice: singleQuestion.correct
            })
        }
    }

    getQuestion() {
        if (this.state.quizQuestions) {
            let singleQuestion = single(this.state.quizQuestions);
            this.setState({
                questionCount: this.state.questionCount + 1,
                currentQuestion: singleQuestion.question,
                currentChoices: singleQuestion.choices,
                correctChoice: singleQuestion.correct
            })
        }
    }

    nextQuestion() {
        if (this.state.quizQuestions) {
            let singleQuestion = single(this.state.quizQuestions);
            this.setState({
                questionCount: this.state.questionCount + 1,
                currentQuestion: singleQuestion.question,
                currentChoices: singleQuestion.choices,
                correctChoice: singleQuestion.correct
            })
        }
    }

    checkAnswer(e) {
        let button = document.getElementById('js-check');
        let selectedAnswer = document.getElementsByClassName('selected')[0];
        if (!selectedAnswer) {
            return false;
        } else {
            let correctAnswer = this.state.correctChoice;
            if (selectedAnswer.id !== correctAnswer) {
                selectedAnswer.className += ' incorrect';
                button.innerHTML = 'Next Question';
            } else {
                selectedAnswer.className += ' correct';
                button.innerHTML = 'Next Question';
                this.setState({
                    userScore: this.state.userScore + 1
                })
            }
        }
    }

    startQuiz() {
        const showTopBar = document.getElementsByClassName('hide-show')[0];
        showTopBar.style.opacity = 1;
        this.setState({
            isIntro: false,
            questionCount: this.state.questionCount + 1
        });
    }

    render() {
        const questions = this.state.quizQuestions;
        if (questions.length) {
            return (
                <div className="container page">
                    <div className="row hide-show">
                        <QuestionCount question={this.state.questionCount} />
                        <ScoreCount score={this.state.userScore} />
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-sm-12">
                            <Content
                                intro={this.state.isIntro}
                                trigger={this.startQuiz}
                                count={this.state.questionCount}
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
}

export default App;