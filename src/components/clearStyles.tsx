import { ISquare } from "./SquareInterface";

export function clearStyles(board: ISquare[], setSquares: any){
    const newSquares = board.map(square => ({...square, draw: 0, winner: 0}));
    setSquares(newSquares);
}