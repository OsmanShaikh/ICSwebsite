function NumberGuess() {
	var x = Math.floor(Math.random() * 10);
	var y = 1;

	var guess = prompt("I'm thinking of a number between 1 - 10. Guess the number!");

	while (guess !== x) {

		if (guess < x) {

			y++;
			var guess = prompt("Guess Higher!");

		}


		if (guess > x) {

			y++;
			var guess = prompt("Guess Lower!");

		}

		if (guess == x) {

			alert("Congrats, you got it my friend it only took you " + y + " tries!")

			break 
		}

	}

}

function loop() {
	var x = prompt("Enter the amount of times you want to repeat the pattern: ")
	var sign = prompt("Enter what you want to be used as the pattern design: ")

	for (i = 1; i<= x; i++) {
		console.log(sign.repeat(i))
	}
}