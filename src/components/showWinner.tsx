import { ISquare } from "./SquareInterface";

export function showWinner(board: ISquare[], setSquares: any, line: string[]) {
    if(line.length === 1){
      const newSquares = board.map(square => ({...square, draw: 1, winner: 0}));
      setSquares([...newSquares]);
    }else{
      const newSquares = board.map(square => ({...square, draw: 0, winner: line.includes(square.id)}));
      setSquares([...newSquares]);
    }
}