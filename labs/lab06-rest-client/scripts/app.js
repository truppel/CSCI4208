import * as http from './http.js';
import * as view from './view.js';
const GET_TRIVIA = "https://opentdb.com/api.php?amount=1&difficulty=easy";
const state = {};
const playGame = async () => {
        const json = await http.sendGETRequest(GET_TRIVIA);
        // console.log(json);
        [state.trivia] = json.results;
        view.PlayScene(state.trivia);
    };
window.addEventListener("load", playGame);
