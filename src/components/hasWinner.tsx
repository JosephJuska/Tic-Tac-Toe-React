import { ISquare } from "./SquareInterface";
import { hasEmpty } from "./hasEmpty";
import { showWinner } from "./showWinner";
export function hasWinner(board: ISquare[], setSquares:any) {
    const lines3 = [
      ['s0', 's1', 's2'],
      ['s3', 's4', 's5'],
      ['s6', 's7', 's8'],

      ['s0', 's3', 's6'],
      ['s1', 's4', 's7'],
      ['s2', 's5', 's8'],

      ['s0', 's4', 's8'],
      ['s2', 's4', 's6'],
    ];

    const lines4 = [
      ['s0', 's1', 's2', 's9'],
      ['s3', 's4', 's5', 's10'],
      ['s6', 's7', 's8', 's11'],
      ['s12', 's13', 's14', 's15'],

      ['s0', 's3', 's6', 's12'],
      ['s1', 's4', 's7', 's13'],
      ['s2', 's5', 's8', 's14'],
      ['s9', 's10', 's11', 's15'],
      
      ['s0', 's4', 's8', 's15'],
      ['s9', 's5', 's7', 's12'],
    ];

    const lines5 = [
      ['s0', 's1', 's2', 's9', 's16'],
      ['s3', 's4', 's5', 's10', 's17'],
      ['s6', 's7', 's8', 's11', 's18'],
      ['s12', 's13', 's14', 's15', 's19'],
      ['s20', 's21', 's22', 's23', 's24'],

      ['s0', 's3', 's6', 's12', 's20'],
      ['s1', 's4', 's7', 's13', 's21'],
      ['s2', 's5', 's8', 's14', 's22'],
      ['s9', 's10', 's11', 's15', 's23'],
      ['s16', 's17', 's18', 's19', 's24'],

      ['s0', 's4', 's8', 's15', 's24'],
      ['s9', 's5', 's7', 's12', 's20'],
    ];

    if(board.length === 9){
      let a: string, b: string, c:string;
      for([a, b, c] of lines3){
        const a1 = board[board.findIndex(square => square.id === a)];
        const b1 = board[board.findIndex(square => square.id === b)];
        const c1 = board[board.findIndex(square => square.id === c)];
        if(a1.value === b1.value && b1.value === c1.value && a1.value !== ''){
          showWinner(board, setSquares, [a1.id!, b1.id!, c1.id!]);
          return a1.value;
        }
      }
    }else if(board.length === 16){
      let a: string, b: string, c:string, d:string;
      for([a, b, c, d] of lines4){
        const a1 = board[board.findIndex(square => square.id === a)];
        const b1 = board[board.findIndex(square => square.id === b)];
        const c1 = board[board.findIndex(square => square.id === c)];
        const d1 = board[board.findIndex(square => square.id === d)];
        if(a1.value === b1.value && b1.value === c1.value && c1.value === d1.value && a1.value !== ''){
          showWinner(board, setSquares, [a1.id!, b1.id!, c1.id!, d1.id!]);
          return a1.value;
        }
      }
    }else if(board.length === 25){
      let a: string, b: string, c:string, d:string, e:string;
      for([a, b, c, d, e] of lines5){
        const a1 = board[board.findIndex(square => square.id === a)];
        const b1 = board[board.findIndex(square => square.id === b)];
        const c1 = board[board.findIndex(square => square.id === c)];
        const d1 = board[board.findIndex(square => square.id === d)];
        const e1 = board[board.findIndex(square => square.id === e)];
        if(a1.value === b1.value && b1.value === c1.value && c1.value === d1.value && d1.value === e1.value && a1.value !== ''){
          showWinner(board, setSquares, [a1.id!, b1.id!, c1.id!, d1.id!, e1.id!]);
          return a1.value;
        }
      }
    }

    if(hasEmpty(board).length === 0){
      showWinner(board, setSquares, ['draw']);
      return 'draw';
    }

    return false;
  }