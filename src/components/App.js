import React, { Component } from 'react';
import quizQuestions from '../components/api/questions.json';
import QuestionCount from './QuestionCount';
import ScoreCount from './ScoreCount';
import Intro from './Intro';
import Question from './Question';
import Finished from './Finished';
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
    hideTopBar.style.opacity = 0;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'intro',
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

    displayContent() {
        const {
            content,
            currentQuestion,
            answerChoices,
            correctChoice,
            questionCount,
            userScore
        } = this.state;
        if (content === 'intro') {
            return <Intro />;
        } else if (content === 'question') {
            return (
                <Question
                    question={currentQuestion}
                    choices={answerChoices}
                    correct={correctChoice}
                    count={questionCount}
                    selected={this.selectedAnswer}
                />
            )
        } else if (content === 'finished') {
            return (
                <Finished
                    score={userScore}
                />
            );
        }
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
                buttonType: 'hide',
                content: 'finished'
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
            content: 'question',
            questionCount: this.state.questionCount + 1,
            buttonType: 'question'
        });
    }

    render() {
        const { questionCount, userScore, buttonType } = this.state;
        return (
            <div className="container page">
                <div className="row hide-show">
                    <div className="col-6 qcount">
                        <QuestionCount count={questionCount} />
                    </div>
                    <div className="col-6 score">
                        <ScoreCount score={userScore} />
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-sm-12">
                        {this.displayContent()}
                        <Button
                            type={buttonType}
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