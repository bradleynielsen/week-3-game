


	console.log("Press any key to get started!")
	// INITIALIZE function
		function initializeGame(){
			displayArray = [];
			wrongGuessArray = [];
			answerArray = [];
			answer = "";
			answer = wordList[gameNum];
			answerArray = answer.split("");
			// console.log("Answer: " + answerArray);
			wrongGuesses = "";
			displayString = "";
			guessCounter = 7;
			newGame = false;

			// build display array  ("_ _ _ _ _ _ ")
			for (var i = 0 ; i < answerArray.length; i++){
					displayArray.push("_ ");

				}

		}/*end init fucntion*/

	

	//Declare global arrays and variables
		var gamesWon = 0;
		var gamesLost = 0;
		var wordList = ["please", "help", "drowning"];
		var gameNum = 0;
		// console.log(wordList);

		var 
			displayArray, 
			wrongGuessArray,
			answerArray,
			gameNum,
			answer,
			answerArray,
			wrongGuesses,
			displayString,
			guessCounter,
			newGame;

	// run INITIALIZE
	initializeGame();

	//Game start on keyup
		document.onkeyup = function(event) {
			var playerguess = String.fromCharCode(event.keyCode).toLowerCase();
			//For each letter in the wordArray: check to see if the guessed letter fits
					
			//if the letter is wrong, add it to the wrong letters array
			if (wrongGuessArray.indexOf(playerguess) === -1 ) {
				if (answerArray.indexOf(playerguess) === -1 ) {		
						wrongGuessArray.push(playerguess);
						guessCounter--;
				}			
					// debugger;
			}

					for (var i = answerArray.length - 1; i >= 0; i--) {
						//loop value handlers for the answer and guess arrays:
						var a = answerArray[i];
						var g = playerguess;

						// add the correct letters to the display	
						if (g === a) {
							//IS a match: Push the letter to the corresponding index in displayArray
							displayArray.splice(i, 1, g);
						}
					}

					if (guessCounter === 0) {
	console.log("YOU loose :( ");
						gamesLost++;					
						gameNum++;
						newGame = true;	
						// console.log("gamesLost++; gameNum++;newGame = true;	" + gamesLost + gameNum+ newGame );

					} else if (displayArray.indexOf("_ ") === -1) {
						console.log("YOU WIN!");
						var p = document.createElement("p");
						p.innerHTML = answer;
						document.getElementById("answers").appendChild(p);

						gamesWon++;
						gameNum++;
						newGame = true;	
					}

				//if new game is set then do this
					if (newGame){
						if (gameNum >0 ){
							initializeGame();
						}
						if (gameNum === 0 ){
							console.log("this game is too short")
							alert("blub blub blub");
						}	
					}
					document.getElementById("display").innerHTML = displayArray; 
					console.log("Display:" + displayArray);	

					document.getElementById("guess").innerHTML = "Guesses left: " + guessCounter; 
					console.log("Guesses left: " + guessCounter);

					document.getElementById("wins").innerHTML = "Wins: " + gamesWon; 
					console.log("Wins: " + gamesWon);
					
					document.getElementById("losses").innerHTML = "Games Lost: " + gamesLost; 
					console.log("Games Lost: " + gamesLost);

					console.log("Games played: " + gameNum);

		}/*end of keyup*/

			 	//print both the gueses and the display
			 	
			 	// console.log(blanks(););
			// this is the end the keyup event//
		// }// this is the end the confirm box//			
