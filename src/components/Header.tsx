import { Link } from "react-router-dom";
import '../styles/Header.css';
export function Header(){
    return(
        <header>
            <div className='title'>
                <h1>Tic Tac Toe</h1>
                <p>Responsive Tic Tac Toe Game Built with React, Featuring Adjustable Board Size for Ultimate Gaming Experience. <Link className='source-link' to="https://github.com/JosephJuska/Tic-Tac-Toe-React" target="_blank">Source Code</Link></p>
            </div>
            <div className='tech'>
                <p>Technologies used for this project:</p>
                <ul>
                    <li><Link to="https://www.w3schools.com/html/" target="_blank"><img src="src/icons/html5/html5-original.svg" alt="HTML Logo" /></Link></li>
                    <li><Link to="https://www.w3schools.com/css/" target="_blank"><img src="src/icons/css3/css3-original.svg" alt="CSS Logo" /></Link></li>
                    <li><Link to="https://react.dev/" target="_blank"><img src="src/icons/react/react-original.svg" alt="React Logo" /></Link></li>
                    <li><Link to="https://www.typescriptlang.org/" target="_blank"><img src="src/icons/typescript/typescript-original.svg" alt="TypeScript Logo" /></Link></li>
                </ul>
            </div>
        </header>
    );
}