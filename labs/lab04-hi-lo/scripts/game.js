/* Callback function for event: Button click */ 
/*function guessNumber() 
{ 
    const guess = number.value; console.log(guess); 
} */

/* Get HTML Elements as JS objects */ 
const button = document.getElementById("guess-button"); 
const number = document.getElementById("guess-text"); 

/* Add Event Listener to button with callback function*/ 
button.addEventListener("click", guessNumber); 

/* Hi-Lo Game Data*/ 
const passcode = Math.floor( Math.random() * 1000 ); 
let tries = 10;

const attemptsView = document.getElementById("attempts"); 
const cluesView = document.getElementById("clues");

/* Callback function for event: Button click */ 
/*function guessNumber() 
{ 
    const guess = number.value; 
    tries--; 
    console.log(`Number of attempts left: ${tries}`); 
    if ( guess == passcode)
        { 
            console.log(`You win! Got it in ${10-tries} attempts`); 
        } 
    else if (tries < 0)
        { 
            console.log(`You lose! The passcode was ${passcode}`); 
        } 
        else{ 
            giveClue(guess); 
        } 
}*/

/*Give Clue */ 
function giveClue(guess)
{ 
    if (guess > passcode)
        { 
            // console.log('${guess} is too High!'); 
            cluesView.innerHTML += `<li>${guess} is too High!</li>`;
        } 
    else
        { 
            // console.log('${guess} is too Low!'); 
            cluesView.innerHTML += `<li>${guess} is too Low!</li>`;
        } 
}

/* Callback function for event: Button click */ 
function guessNumber() 
{ 
    const guess = number.value; 
    tries--; 
    attemptsView.innerHTML = `Number of attempts left: ${tries}`; 
    if 
    ( guess == passcode)
        { 
            document.body.innerHTML = `<h1>You win!</h1> <p>Got it in ${10-tries} attempts</p>`; 
        } 
    else if (tries < 0)
        { 
            document.body.innerHTML = `<h1>You lose!</h1> <p>The passcode was ${passcode}</p>`; 
        } 
    else{ 
        giveClue(guess); 
    } 
}





