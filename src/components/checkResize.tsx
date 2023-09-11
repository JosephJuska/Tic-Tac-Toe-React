import { ISquare } from './SquareInterface';

export function checkResize(newWidth: number, newHeight: number, squares: ISquare[]):ISquare[] {
    newWidth = Math.abs(newWidth);
    newHeight = Math.abs(newHeight);

    const swap = (id1: string, id2: string, board: ISquare[]) => {
      const index1 = board.findIndex(square => square.id === id1);
      const index2 = board.findIndex(square => square.id === id2);
      const temp = board[index1];
      board[index1] = board[index2];
      board[index2] = temp;
    }

    const insertAfter = (id1: string, id2: string, board: ISquare[]) => {
      const index1 = board.findIndex(square => square.id === id1);
      const index2 = board.findIndex(square => square.id === id2);
      const newItem = board.splice(index2, 1);
      board.splice(index1 + 1, 0, newItem[0]);
    }

    if (newWidth <= 270 && newHeight <= 270 && squares.length !== 9) {
        const newSquares = squares.filter((square:any) => Number.parseInt(square.id.slice(1)) < 9);
        const temp = (new Array(9)).fill(null);
        for(let i = 0; i < temp.length; i++){
            temp[i] = { ...newSquares[i] };
        }

        return [...temp];
    }else if ((300 <= newWidth && newWidth <= 400) && (300 <= newHeight || newHeight <= 400) && squares.length !== 16){
        if(squares.length === 9){
            const newSquares: ISquare[] = Array.from({ length: 16 }, (_, index) => ({
                value: '',
                id: `s${index}`,
            }));

            for(let i = 0; i < squares.length; i++){
                newSquares[i] = {...squares[i]};
            }

            swap('s3', 's9', newSquares);
            insertAfter('s9', 's3', newSquares);
            swap('s6', 's10', newSquares);
            insertAfter('s10', 's6', newSquares);
            
            return [...newSquares];

        }else{
            const newSquares = squares.filter((square:any) => Number.parseInt(square.id.slice(1)) < 16);
            const temp = (new Array(16)).fill(null);
            for(let i = 0; i < temp.length; i++){
                temp[i] = { ...newSquares[i] };
            }

            return [...temp];
        }
    }else if(newWidth > 420 && newHeight > 420 && squares.length !== 25){
      if(squares.length === 9){
        const newSquares: ISquare[] = Array.from({ length: 25 }, (_, index) => ({
          value: '',
          id: `s${index}`,
        }));

        for(let i = 0; i < squares.length; i++){
          newSquares[i] = {...squares[i]};
        }

        swap('s3', 's9', newSquares);
        swap('s4', 's16' ,newSquares);
        insertAfter('s16', 's3', newSquares);
        insertAfter('s3', 's4', newSquares);
        swap('s6', 's10', newSquares);
        swap('s7', 's17', newSquares);
        insertAfter('s17', 's6', newSquares);
        insertAfter('s6', 's7', newSquares);
        swap('s12', 's18', newSquares);
        insertAfter('s18', 's12', newSquares);

        return [...newSquares];
      }else{
        const newSquares: ISquare[] = Array.from({ length: 25 }, (_, index) => ({
          value: '',
          id: `s${index}`,
        }));

        for(let i = 0; i < squares.length; i++){
          newSquares[i] = {...squares[i]};
        }

        swap('s3', 's16', newSquares);
        insertAfter('s16', 's3', newSquares);
        swap('s6', 's17', newSquares);
        insertAfter('s17', 's6', newSquares);
        swap('s12', 's18', newSquares);
        insertAfter('s18', 's12', newSquares);
        return [...newSquares];
      }
    }else{
      return [...squares];
    }
};