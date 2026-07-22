import * as http from './http.js';
import * as view from './view.js';
const GET_TRIVIA = "https://opentdb.com/api.php?amount=1&difficulty=easy";
const BIN_ID = "6a613c05f5f4af5e29b2fd9e";
const GET_LEADERBOARD = "https://apiljsonbin.io/v3/b/6a613c05f5f4af5e29b2fd9e/latest";

//const state = {};
const state = {
    score: 0,
    timer: 20,
    intervalID: null,
    trivia: null
}
// const playGame = async () => {
//         const json = await http.sendGETRequest(GET_TRIVIA);
//         // console.log(json);
//         [state.trivia] = json.results;
//         view.PlayScene(state);
// }
window.playGame = async () => {
    const json = await http.sendGETRequest(GET_TRIVIA);
    console.log("json from API:", json);

    if (!json || !json.results || json.results.length === 0) {
        console.error("No trivia results found:", json);
        return;
    }


    [ state.trivia ] = json.results;
    view.PlayScene(state);
}

const countdown = ()=> {
    console.log("Timer:",state.timer);
    if (state.timer > 0) {
        state.timer--;
        view.PlayScene(state);
        //view.PlayScene({timer,score,trivia});
    } else {
        clearInterval(state.intervalID);
        view.GameOverScene(state);
    }
}

// const createGame = () => {
//     state.score = 0;
//     state.timer = 20;
//     clearInterval(state.intervalID);
//     state.intervalID = setInterval(countdown, 1000);
//     playGame();
// }
window.createGame = () => {
    state.score = 0;
    state.timer = 20;
    clearInterval(state.intervalID);
    state.intervalID = setInterval(countdown,1000);
    playGame();
}

window.start = async () => {
    // createGame();
    state.score = 0;
    state.timer = 20;
    view.StartMenu(state);
}

window.checkAnswer = (attempt) => {
    const answer = state.trivia.correct_answer;
    if (attempt === answer) {
        state.score += state.timer;
        state.timer += 10;
        playGame();
    } else {
        clearInterval(state.intervalID);
        view.GameOverScene(state);
    }
}
//window.addEventListener("load", playGame);
window.addEventListener("load",createGame);
