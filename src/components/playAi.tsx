import { ISquare } from './SquareInterface';

export function playAi(board: ISquare[]) {
    const emptySpaces = board.filter(square => square.value === '');
    const randomIndex = Math.floor(Math.random() * emptySpaces.length);
    return emptySpaces[randomIndex].id;
}