import * as http from './http.js';
import * as view from './view.js';
const GET_TRIVIA = "https://opentdb.com/api.php?amount=1&difficulty=easy";
const BIN_ID = "6a613c05f5f4af5e29b2fd9e";
const GET_LEADERBOARD = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;
const PUT_LEADERBOARD = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

//const state = {};
const state = {
    score: 0,
    timer: 20,
    intervalID: null,
    trivia: null,
    topScores: []
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
    const leaderboardJSON = await http.sendGETRequest(GET_LEADERBOARD);
    state.topScores = leaderboardJSON.record;
    console.log(state.topScores);
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

//Test: comment out after run
// window.testPUT = async () => {
//     const data = [
//         {name:'A',score:30},
//         {name:'B',score:20},
//         {name:'C',score:10},
//         {name:'D',score:5},
//         {name:'E',score:30}
//     ];
//     await http.sendPUTRequest(PUT_LEADERBOARD, data);
// }

const getTop5 = async (newScore) => {
    const leaderboardJSON = await http.sendGETRequest(GET_LEADERBOARD);
    const top5 = leaderboardJSON.record;
    top5.push(newScore);
    top5.sort( (a,b) => b.score - a.score);
    top5.pop();
    return top5;
}

window.updateLeaderboard = async () => {
    const name = document.getElementById('name').value;
    const currentScore = {name:name, score:state.score};
    const top5 = await getTop5(currentScore);
    await http.sendPUTRequest(PUT_LEADERBOARD, top5);
    await start();
}

//window.addEventListener("load", playGame);
// window.addEventListener("load",createGame);
window.addEventListener("load",start);
