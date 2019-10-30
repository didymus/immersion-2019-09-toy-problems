var rockPaperScissors = function (rounds) {
    //make variable to store results
    const playResults = [];
    //make variable that options can be 'picked' from
    const options = ['rock', 'paper', 'scissors'];
    //need a way to track rounds played
    //need a way to track rounds left
    //pass these variables into a function that will 'play' a round
    const playRounds = (roundsPlayed, roundsRemaining) => {
        //establish base case for recursive call
        if (roundsRemaining === 0) {
            //push data to results array once iteration has completed
            playResults.push(roundsPlayed);
        } else {
            for (let i = 0; i < options.length; i++) {
                //call playRounds recursively
                playRounds(roundsPlayed.concat(options[i]), roundsRemaining - 1);
                //concat the iterated options to roundsPlayed
                //decrement roundsRemaining on each call
            }
        }
    };
    //call playRounds()
    //pass original `rounds` parameter as `roundsRemaining` to playRounds when called
    playRounds([], rounds);
    //return the results
    return playResults;
};