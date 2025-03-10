Spec 0 - Define a test solution: Helpful suggestion: while developing you can set a default solution for you to test against. At the top of mastermind(), simply set const solution = 'abcd'; as a global variable.

Spec 1 - Detect a correct solution: In mastermind(), if the guess you passed in equals the solution, return 'You guessed it!'; Spec 2 - Generate a hint: generateHint() should take one argument, guess.

Spec 2.1 - Split up the solution and guess: In generateHint(), create variables solutionArray and guessArray that each split up passed in arguments, [.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/splitting on '' (empty string).

Spec 2.2 - Determine correct "letter-locations": Create a variable correctLetterLocations and set it to 0. This variable will record how many correct "letter-locations" were guessed. For instance, a guess of aabc against a solution of deba would yield one correct "letter-location" (b). In a for loop, iterate over the solutionArray, comparing each index of solutionArray against the same index of guessArray. If the item matches, increment correctLetterLocations, and set that index in solutionArray to null.

Spec 2.3 - Determine correct "letters": Now that we have nulled the already counted correctLetterLocations, we can see if the guessArray contains any correctLetters that were not in the correct location. Set a variable correctLetters equal to 0, and in a for loop, again iterate over the solutionArray. Using .indexOf, determine if the item at the current index in guessArray appears inside of solutionArray. Save that index in a variable called targetIndex. Now, if targetIndex is greater than -1(it exists in the array), increment correctLetters and set the item in solutionArray at that index equal to null.

Spec 2.4 - return hint string: Optionally, you can use the colors package, return a string that prints out the hints you generated, with correctLetterLocations being red, correctLetters being white, and separated by a hyphen. > (NOTE: If you choose to use this color package, only console.log the result. If you return the result your program will fail the tests.)

Spec 3 - Add guess and hint to the board: Define a variable called hint that collects the returned value of generateHint(guess). .push the guess and the hint (as a combined string) into the board.

Spec 4 - End the game: After 10 incorrect guesses, if the board length equals 10, return 'You ran out of turns! The solution was' and the solution. Otherwise, return 'Guess again.'.
