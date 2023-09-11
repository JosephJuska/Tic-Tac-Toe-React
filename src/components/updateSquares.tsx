import { ISquare } from "./SquareInterface";

export function updateSquares(newSquares:ISquare[], setSquares:any, setGrid:any){
    const len = newSquares.length;
    setSquares(newSquares);
    setGrid(len === 9 ? 'three' : len === 16 ? 'four' : 'five');
}