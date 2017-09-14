var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var userGuess;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];;

$("#myguess").append(userGuess);

document.onkeyup = function(event) {

    userGuess = event.key;
    console.log("computer guess " + computerGuess);
    console.log("user guess " + userGuess);
    score();
}

function reset(){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessLeft = 9;
    $("#myguess").append(userGuess);
}

function score(){
    if(computerGuess != userGuess){
        guessLeft--;
        $("#guess").html(guessLeft);
        if(guessLeft === 0){
            losses++;
            $("#loss").html(losses);
            reset();
    }
}
    else if (computerGuess === userGuess){
        wins++;
        $("#win").html(wins);
        reset();

    }
}


//     if(computerGuess === userGuess){
//         wins++
//         $("#win").html(wins);
//         reset();
//     }

//     else{
//         guessLeft--;
//         $("#guess").html(guessLeft);
//         if(guessLeft === 0){
//             losses++;
//             $("#loss").html(losses);
//             reset();
//         }
//     }
// }
