const passcode = Math.floor( Math.random()*1000 ); 
let tries = 10; 
const guess = new Guess();
let then = Date.now();
let timeLeft =  30;
let gameover = false;

function main(){
    const now = Date.now();
    // if (now - then > 1000){
    //     printDigits();
    // }
    if (gameover) {
        return;
    }
    else if (timeLeft <= 0){
        printGameOver('LOSE');
    }
    else if (now - then > 1000){
        timeLeft--;
        printDigits();
        printAttemptsRemaining();
        then = Date.now();
    }
    requestAnimationFrame(main);
}
main();

function guessNumber(guess)
{ 
    tries--;    
    if ( guess == passcode )
        { 
            gameover = true;
            printGameOver('WIN'); 
        } 
    // else if (tries <= 0)
    //     { 
    //         printGameOver('LOSE'); 
    //     } 
    else
        { 
            // printAttemptsRemaining(tries); 
            giveClue(guess); 
        }
    } 

function giveClue(guess)
{ 
    console.log("guess:", guess);
    console.log("typeof guess:", typeof guess);
    console.log("passcode:", passcode);

    if (guess > passcode)
        { 
            printClue('HI', guess); 
        } 
    else
        { 
            printClue('LO', guess); 
        } 
    }