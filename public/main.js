let p1choice = ''
let p2choice = ''

const detectWinner = () => {
  // if players 1 choice is not a blank string and players 2 choice is not a blank string
  if (p1choice !== '' && p2choice !== '') {
    let footer = document.querySelector('footer')
    //   if player one chose rock and player two chose paper then the winner is player two
    if (
      (p1choice === 'rock' && p2choice === 'paper') ||
      (p1choice === 'scissors' && p2choice === 'rock') ||
      (p1choice === 'paper' && p2choice === 'scissors')
    ) {
      footer.textContent = 'player 2 wins'
    }
    //   if player one chose rock and player two chose rock then there is a tie
    if (
      (p1choice === 'rock' && p2choice === 'rock') ||
      (p1choice === 'paper' && p2choice === 'paper') ||
      (p1choice === 'scissors' && p2choice === 'scissors')
    ) {
      footer.textContent = 'tie'
    }
    //   if player one chose rock and player two chose scissors then the winner is player one
    if (
      (p1choice === 'rock' && p2choice === 'scissors') ||
      (p1choice === 'paper' && p2choice === 'rock') ||
      (p1choice === 'scissors' && p2choice === 'paper')
    ) {
      footer.textContent = 'player 1 wins'
    }
  }
}
const clickedOnPlayerOne = event => {
  document.querySelector('.player1').classList.add('choice')
  p1choice = 'rock'
  detectWinner()
  // log what player one choice is
  console.log(p1choice)
}

// log what player two choice is
console.log(p2choice)

// Check if both players have made a choice

// comparison operators
// ===    equal to
// !==    not equal to
// >      great than
// <      less than
// >=     greater than or equal to
// <=     less than or equal to

// AND    &&
// OR     ||

let clickedOnPlayerOnePaper = event => {
  document.querySelector('.player1').classList.add('choice')

  p1choice = 'paper'
  detectWinner()
}
let clickedOnPlayerOneRock = event => {
  document.querySelector('.player1').classList.add('choice')

  p1choice = 'rock'
  detectWinner()
}

let clickedOnPlayerOneScissors = event => {
  document.querySelector('.player1').classList.add('choice')

  p1choice = 'scissors'
  detectWinner()
}

let clickedOnPlayerTwoRock = event => {
  document.querySelector('.player2').classList.add('choice')

  // Somehow remember that player 1 chose "rock"
  p2choice = 'rock'
  detectWinner()
}
let clickedOnPlayerTwoPaper = event => {
  document.querySelector('.player2').classList.add('choice')

  p2choice = 'paper'
  detectWinner()
}

let clickedOnPlayerTwoScissors = event => {
  document.querySelector('.player2').classList.add('choice')

  p2choice = 'scissors'
  detectWinner()
}

const main = () => {
  let player1rock = document.querySelector('.player1 .rock')

  player1rock.addEventListener('click', clickedOnPlayerOne)

  let player1paper = document.querySelector('.player1 .paper')

  player1paper.addEventListener('click', clickedOnPlayerOnePaper)

  let player1scissors = document.querySelector('.player1 .scissor')

  player1scissors.addEventListener('click', clickedOnPlayerOneScissors)

  let player2rock = document.querySelector('.player2 .rock')

  player2rock.addEventListener('click', clickedOnPlayerTwoRock)

  let player2paper = document.querySelector('.player2 .paper')

  player2paper.addEventListener('click', clickedOnPlayerTwoPaper)

  let player2scissors = document.querySelector('.player2 .scissor')

  player2scissors.addEventListener('click', clickedOnPlayerTwoScissors)
}

// >      great than
// <      less than
// >=     greater than or equal to
// <=     less than or equal to

// AND    &&
// OR     ||

// if both players have made a choice
//   if player one chose rock and player two chose paper then the winner is player two
//   if player one chose rock and player two chose rock then there is a tie
document.addEventListener('DOMContentLoaded', main)
