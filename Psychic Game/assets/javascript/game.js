
   

        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var selectedLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        var wins = 0;
        var losses = 0;
        var guesses = 9;
        var lettersGuessed = [];

        // initial html values
        document.getElementById("wins").textContent = wins;
        document.getElementById("losses").textContent = losses;
        document.getElementById("guesses").textContent = guesses;
        document.getElementById("letters-guessed").textContent = lettersGuessed;
        document.getElementById("alert-massege").textContent = " ";

        // user presses a key
        document.onkeyup = function(event) {
            document.getElementById("alert-massege").textContent = " ";

            // get value of key and lowercase it
            var userGuess = event.key.toLowerCase();

            // validate that its a letter (a-z)
            if (event.keyCode >= 65 && event.keyCode <= 90){
                // user has guesses left proceed
                if(guesses > 0){
                    // user guessed correctly
                    if (userGuess === selectedLetter) {
                        // wins go up by 1
                        wins++

                        // reset the game variable
                        guesses = 9;
                        lettersGuessed = [];
                        selectedLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

                       // reseting html
                        document.getElementById("wins").textContent = wins;
                        document.getElementById("losses").textContent = losses;
                        document.getElementById("guesses").textContent = guesses;
                        document.getElementById("letters-guessed").textContent = lettersGuessed;
                        document.getElementById("alert-massege").textContent = " ";

                        // let user know
                        document.getElementById("alert-massege").textContent = "you win!";
                        console.log('You Win! total wins:',wins);

                    } else if (userGuess !== selectedLetter) {
                        // check if user already guessed letter
                        if (lettersGuessed.indexOf(userGuess) === -1){
                            // guesses go down by 1
                            guesses--

                            // add letter to letters Guessed array
                            lettersGuessed.push(userGuess);
   
                            // updating html
                            document.getElementById("wins").textContent = wins;
                            document.getElementById("losses").textContent = losses;
                            document.getElementById("guesses").textContent = guesses;
                            document.getElementById("letters-guessed").textContent = lettersGuessed;
                            document.getElementById("alert-massege").textContent = " ";
 
                            // let user know
                            document.getElementById("alert-massege").textContent = "Incorrect guess, try again ";
                            console.log('Incorrect Guess - Try Again!\n Letters guesses:', lettersGuessed);
                        } else {
                            // let user know they already tried this letter
                            document.getElementById("alert-massege").textContent = "Already guessed that letter, try another letter ";
                            console.log('Already Guessed', userGuess,'-- Try Another!');
                        }

                    }
                }else{
                    // user lost the game; losses got up
                    losses++

                    // reset game variable except wins, losses, and alphabet
                    // this means just add the variables(guesses,lettersGuessed, selectedLetter) here with their same value just without the var part i.e guesses = 9;
                    guesses = 9;
                    lettersGuessed = [];
                    selectedLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

                    // update html
                    document.getElementById("wins").textContent = wins;
                    document.getElementById("losses").textContent = losses;
                    document.getElementById("guesses").textContent = guesses;
                    document.getElementById("letters-guessed").textContent = lettersGuessed;
                    document.getElementById("alert-massege").textContent = "out of guesses, you lose ";


                    console.log("Out of guesses! you lose. total losses:", losses);
                }
            }else {
                // user pressed a incorrect key
                document.getElementById("alert-massege").textContent = "guess must be a letter ";
                console.log("guess must be a letter!");
            }
        }

