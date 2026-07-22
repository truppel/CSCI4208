import * as http from './http.js';
import * as view from './view.js';
const GET_TRIVIA = "https://opentdb.com/api.php?amount=1&difficulty=easy";
//const state = {};
const state = {
    score: 0,
    timer: 20,
    intervalID: null,
    trivia: null
}
const playGame = async () => {
        const json = await http.sendGETRequest(GET_TRIVIA);
        // console.log(json);
        [state.trivia] = json.results;
        view.PlayScene(state.trivia);
    };

const countdown = ()=> {
    if (state.timer) {
        state.timer--;
        view.PlayScene(state);
        //view.PlayScene({timer,score,trivia});
    }
}

const createGame = () => {
    state.timer = 20;
    state.intervalID = setInterval(countdown, 1000);
    playGame();
}
window.start = async () => {
    createGame;
}
window.addEventListener("load", playGame);
