import { ISquare } from "./SquareInterface";

export function hasEmpty(board: ISquare[]) {
    return board.filter(square => square.value === '');
}