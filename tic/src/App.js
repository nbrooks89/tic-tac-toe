import React, { Component } from 'react'
import './App.css'
import Square from'./pages/Square'

export class App extends Component {
  constructor(props){
  super(props)
    this.state ={
      gameboard: Array(9).fill(null),
      currentPlayer:"😛",
      winner: null
    }
  }

  squareClick = (currentBox) =>{
    if(this.state.gameboard[currentBox] == null && this.state.winner === null){
    this.state.gameboard[currentBox] = this.state.currentPlayer
    this.setState({
      gameboard: this.state.gameboard,
      currentPlayer: this.state.currentPlayer === "😛" ? "🍣": "😛"
    
    })
  }
  if(this.state.winner === null){
  this.winning()
  }
  }

  winning = () =>{
    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],

    ]
    winningConditions.map(value => {
      const [a, b, c] = value
      if(this.state.gameboard[a] && this.state.gameboard[a]
        === this.state.gameboard[b] && this.state.gameboard[b]
        === this.state.gameboard[c]){
          return(
            this.setState({winner: this.state.currentPlayer})
          )


      }
    })

  }


  render() {
   let mappedGameBoard = this.state.gameboard.map((value, index) => {
     return(
      <Square 
      value={value}
      index={index}
      key={ index }
      squareClick = {this.squareClick}
      />
     )
   })

    return (
      <>
      <h1>Tic-Tac-Toe</h1>
      <div id="gameboard">
        {mappedGameBoard}
        <h3>The Winner is:{this.state.winner}</h3>
        
      </div>
      </>
    )
  }
}

export default App
