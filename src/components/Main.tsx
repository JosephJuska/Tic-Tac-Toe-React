import '../styles/Main.css';
import { Board } from './Board';
import { Square } from './Square';
import { ISquare } from './SquareInterface';
import { useState, useEffect } from 'react';
import { checkResize } from './checkResize';
import { playAi } from './playAi';
import { hasWinner } from './hasWinner';
import { resetSquares } from './resetSquares';
import { updateSquares } from './updateSquares';
import { clearStyles } from './clearStyles';
import { changeSize } from './changeSize';
export function Main(props:any){    
    const { setActive, aiValue, markStyle, boardSize } = props;
    const [turn, setTurn] = useState('X');
    const [grid, setGrid] = useState('three');

    const [squares, setSquares] = useState((): ISquare[] => {
      return Array.from({ length: 9 }, (_, index) => ({
        value: '',
        winner: false,
        draw: false,
        id: `s${index}`,
      }));
    });

    const play = (id:string, single:boolean) => {
        const newSquares = JSON.parse(JSON.stringify(squares));
        const index = newSquares.findIndex((square:any) => square.id === id);
        if (newSquares[index].value !== '' || hasWinner(newSquares, setSquares)) {
          return;
        }
        
        if(single){
          newSquares[index].value = turn;
          let winner = hasWinner(newSquares, setSquares)
          if(winner){
            return;
          }else{
            const aiChoice = playAi(newSquares);
            const aiIndex = newSquares.findIndex((square:any) => square.id === aiChoice);
            newSquares[aiIndex].value = turn === 'X' ? 'O' : 'X';
            winner = hasWinner(newSquares, setSquares)
            if(winner){
              return;
            }
          }
          setSquares([...newSquares]);
          clearStyles(newSquares, setSquares);
        }else{
          newSquares[index].value = turn;
          let winner = hasWinner(newSquares, setSquares)
          if(winner){
            return;
          }
          setSquares([...newSquares]);
          clearStyles(newSquares, setSquares);
          setTurn((prev:string) => prev === 'X' ? 'O' : 'X');
        }
    };

    useEffect(() => {
      if(boardSize){
        changeSize(boardSize, squares, setSquares, setGrid);
      }
    }, [boardSize]);

    useEffect(() => {
        const resizable = document.querySelector('.board') as HTMLDivElement;
        const handle = document.querySelector('.resize') as HTMLDivElement;
        let startX: any, startY: any, startWidth: any, startHeight: any;
        let isResizing: any;

        const handleMouseDown = (e: MouseEvent) => {
          if (e.button !== 0) {
            isResizing = false;
          } else {
            isResizing = true;
          }
    
          startX = e.clientX;
          startY = e.clientY;
          startWidth = parseInt(document.defaultView!.getComputedStyle(resizable).width, 10);
          startHeight = parseInt(document.defaultView!.getComputedStyle(resizable).height, 10);
        };
    
        const handleMouseMove = (e: MouseEvent) => {
          if (!isResizing) return;
    
          const Width = startWidth - (e.clientX - startX) * 3;
          const Height = startHeight - (e.clientY - startY) * 3;
    
          const newWidth = Math.max(Width, Height);
          const newHeight = Math.max(Height, Width);
    
          let widthFlag = false;
          let heightFlag = false;
    
          if (!(470 < newWidth || newWidth < 150)) {
            resizable.style.width = `${newWidth}px`;
            widthFlag = true;
          } else {
            widthFlag = false;
          }
    
          if (!(470 < newHeight || newHeight < 150)) {
            resizable.style.height = `${newHeight}px`;
            heightFlag = true;
          } else {
            heightFlag = false;
          }
          
          if (widthFlag || heightFlag) {
            const newSquares = checkResize(newWidth, newHeight, squares);
            if(newSquares.length !== squares.length){
                updateSquares(newSquares, setSquares, setGrid);
            }
          }
        };
    
        const handleMouseUp = () => {
          isResizing = false;
        };
    
        handle.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    
        return () => {
          handle.removeEventListener('mousedown', handleMouseDown);
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };
      }, [squares]);

    return(
        <main>
            <section className='tictactoe'>
                <div className="game-wrapper">
                    <div className='buttons'>
                        <button className='reset-button' onClick={() => resetSquares(squares, setSquares, setTurn)}><i className="fa-solid fa-arrow-rotate-left"></i></button>
                        <button className='settings-button' onClick={() => setActive(true)}><i className='fa-solid fa-gear'></i></button>
                    </div>
                        <Board className={`board ${grid}`}>
                            {squares.map((square:any, index:any) =>
                                <Square 
                                style={markStyle}
                                onClick={() => play(square.id, aiValue)} 
                                key={index}
                                id={square.id}
                                x={square.value === 'X' ? 1 : 0} 
                                o={square.value === 'O' ? 1 : 0}
                                winner={square.winner ? 1 : 0}
                                draw={square.draw ? 1 : 0}
                                />
                            )}
                        </Board>
                    <div className='resize-wrapper'>
                      <div className='resize' draggable='false'><i className="fa-solid fa-up-right-and-down-left-from-center fa-rotate-90"></i></div>
                    </div>
                </div>
            </section>
        </main>
    );
}