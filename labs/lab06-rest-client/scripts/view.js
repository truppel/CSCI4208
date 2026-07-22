import Question from './components/Question.js';
import HUD from './components/HUD.js';
import Skip from './components/Skip.js';

const renderDOM = (html) => { 
    document.getElementById("view").innerHTML = html; 
};

export const PlayScene = (props) => {
//    const trivia = props;
    const {timer,score,trivia} = props;
    renderDOM(
//        ${Question(trivia)}
//            Question(props)
        `${HUD(timer,score)}
        ${Question(trivia)}
        ${Skip()}`
    )
};

export const GameOverScene = (props) => {
    const {timer,score,trivia} = props;
    renderDOM(
        `${HUD(timer,score)}
        <h1>Game Over!</h1>
        <button onclick="start()">Start Over</button>`
    )
};