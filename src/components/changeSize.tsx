import { ISquare } from "./SquareInterface";
import { checkResize } from "./checkResize";
import { updateSquares } from "./updateSquares";
export function changeSize(boardSize: number, squares: ISquare[], setSquares: any, setGrid: any){
    const resizable = document.querySelector('.board') as HTMLDivElement;
    const change = window.innerWidth > 300;
    const width = window.innerWidth > 600 && change ? 350 : 250;
    if(boardSize === 1){
        resizable.style.width = `${width}px`;
        resizable.style.height = `${width}px`;
        const newSquares = checkResize(250, 250, squares);
        if(newSquares.length !== squares.length){
            updateSquares(newSquares, setSquares, setGrid);
        }
    }else if(boardSize === 2){
        if(change){
            resizable.style.width = `${width * 1.2}px`;
            resizable.style.height = `${width * 1.2}px`;
        }else{
            resizable.style.width = `${width}px`;
            resizable.style.height = `${width}px`;
        }
        const newSquares = checkResize(350, 350, squares);
        if(newSquares.length !== squares.length){
            updateSquares(newSquares, setSquares, setGrid);
        }
    }else if(boardSize === 3){
        if(change){
            resizable.style.width = `${width * 1.35}px`;
            resizable.style.height = `${width * 1.35}px`;
        }else{
            resizable.style.width = `${width}px`;
            resizable.style.height = `${width}px`;
        }
        const newSquares = checkResize(450, 450, squares);
        if(newSquares.length !== squares.length){
            updateSquares(newSquares, setSquares, setGrid);
        }
    }
}