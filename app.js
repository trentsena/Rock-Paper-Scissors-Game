const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    // Start the game
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match')

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    // Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('player-hand');
        const computerHand = document.querySelector('computer-hand');
        // Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                // Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // This is where we call compare hands


                // Update images
                
                playerHand.src = `./img/${this.textContent}.png`;
                computerHand.src = `./img/${computerChoice}.png`;
            });
        });     
    };

    const compareHands = (playerChoice, computerChoice) => {
        // Update text
        const winner = document.querySelector('.winner');
        // Checking for a tie
        if(PlayerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        };
        // Check for rock
        if(PlayerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                return;
            }else{
                winner.textContent = 'Computer Wins';
                return;
            };
        };
        // Check for paper
        if(PlayerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                return;
            }else{
                winner.textContent = 'Player Wins';
                return;
            };
        };
        // Check for scissors
        if(PlayerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                return;
            }else{
                winner.textContent = 'Player Wins';
                return;
            };
        };
    };

    // Call all the inner functions
    startGame();
    playMatch();
};

// Start the game function
game();