import { useState } from "react";
import Card from "../card/card";
import '../grid/grid.css';
import isWinner from "../../helpers/checkWinner";
// import { FaSkating } from "react-icons/fa";

function Grid({numberOfCards}){
     const [board, setBoard] = useState(Array(numberOfCards).fill(""));
     const [turn, setTurn]   = useState(true); // true => O , false => X 
     const [winner , setWinner] = useState(null);

     function play(index){
          if(turn == true ){
               board[index] ="O"
          } else {
               board[index] = "X"
          }
          const win = isWinner(board, turn ? "O" : "X")
          if(win){
               setWinner(win);
          }
          setBoard([...board]) ;
          setTurn(!turn);
     }
      
     function reset(){
          setTurn(true);
          setBoard(Array(numberOfCards).fill(""));
          setWinner(null);
     }


     return (
          
     <div className="grid-wrapper">

          <div className="titlediv"><h1 className="title">TIC-TAC-TOE</h1></div>
          {
               winner && (
                   <>
                    <h1 className="turn-highlight">🎊🎊🎊Winner is {winner} 🎊🎊🎊 </h1>
                    <button className="reset" onClick={reset}>Restart Game </button>
                   </>
               )
          }
          <h1 className="turn-highlight">Current Turn : {(turn)? 'O' : 'X'}</h1>
        <div className="grid">
             {board.map((el, idx) => <Card gameEnd={winner ? true : false} key={idx} onPlay={play} player={el} index={idx} />)}
        </div>
     </div>
     );
}

export default Grid ; 