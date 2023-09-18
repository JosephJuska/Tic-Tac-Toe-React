import { ISquare } from "./SquareInterface";

export function resetSquares(board: ISquare[], setSquares:any, setTurn: any){
    const newSquares = board.map(square => ({
      ...square,
      value : '',
      winner : false,
      draw : false
    }));
    setSquares([...newSquares]);
    setTurn('X');
}