import Question from './components/Question.js';
import HUD from './components/HUD.js';
import Skip from './components/Skip.js';
import Leaderboard from './components/Leaderboard.js';
import Leadermenu from './components/LeaderMenu.js';

const renderDOM = (html) => { 
    document.getElementById("view").innerHTML = html; 
};

const isTop5 = (score, top5) => top5.some( item => item.score < score);

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
    const {timer,score,topScores} = props;
    renderDOM(
        `${HUD(timer,score)}
        ${isTop5(score,topScores) ? Leadermenu() : ''}
        <h1>Game Over!</h1>
        <button onclick="start()">Start Over</button>`
    )
};

export const StartMenu = (props) => {
    const {timer,score,topScores} = props;
    renderDOM(
        `${HUD(timer,score)}
        ${ Leaderboard(topScores)}
        <hr>
        <button onclick="createGame()">Play</button>`
    ) 
}
