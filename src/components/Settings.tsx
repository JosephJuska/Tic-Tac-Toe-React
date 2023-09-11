import '../styles/Settings.css';
export function Settings(props:any){
    const { active, ai, markStyle, setActive, setAi, setMarkStyle, boardSize, setBoardSize } = props;
    return(
        <div className={`settings-wrapper ${active ? 'active' : ''}`}>
            <section className="settings">
                <h1>Settings</h1>
                <button className='close' onClick={() => setActive(false)}><i className="fa-solid fa-xmark"></i></button>
                <div className='choices'>
                    <div className='choice-wrapper'>
                        <h4>Play Mode</h4>
                        <div>
                            <label htmlFor="s" className={ai ? 'checked' : ''}>Single Player</label>
                            <input onChange={() => setAi(true)} 
                            checked={ai ? true : false} 
                            type='radio' name='ai' 
                            value='s' id='s'/>
                        </div>
                        <div>
                            <label htmlFor="m" className={ai ? '' : 'checked'}>Two Players</label>
                            <input onChange={() => setAi(false)} 
                            checked={ai ? false : true} 
                            type='radio' name='ai' 
                            value='s' id='m'/>
                        </div>
                    </div>
                    <div className='choice-wrapper'>
                        <h4>Marking Style</h4>
                        <div>
                            <label htmlFor="mclassic" className={markStyle === 'classic' ? 'checked' : ''}>Classic</label>
                            <input onChange={() => setMarkStyle('classic')} 
                            checked={markStyle === 'classic' ? true : false} 
                            type='radio' name='mark-style' 
                            value='classic' id='mclassic'/>
                        </div>
                        <div>
                            <label htmlFor="mromantic" className={markStyle === 'romantic' ? 'checked' : ''}>Romantic</label>
                            <input onChange={() => setMarkStyle('romantic')} 
                            checked={markStyle === 'romantic' ? true : false} 
                            type='radio' name='mark-style' 
                            value='romantic' id='mromantic'/>
                        </div>
                        <div>
                            <label htmlFor="mweird" className={markStyle === 'weird' ? 'checked' : ''}>Astronomy</label>
                            <input onChange={() => setMarkStyle('weird')} 
                            checked={markStyle === 'weird' ? true : false} 
                            type='radio' name='mark-style' 
                            value='weird' id='mweird'/>
                        </div>
                    </div>
                    <div className='choice-wrapper board-size'>
                        <h4>Board Grid</h4>
                        <div>
                            <label htmlFor="b3" className={boardSize === 1 ? 'checked' : ''}>3*3</label>
                            <input onChange={() => setBoardSize(1)} 
                            checked={boardSize === 1 ? true : false} 
                            type='radio' name='board-size' 
                            value='classic' id='b3'/>
                        </div>
                        <div>
                            <label htmlFor="b4" className={boardSize === 2 ? 'checked' : ''}>4*4</label>
                            <input onChange={() => {setBoardSize(2)}} 
                            checked={boardSize === 2 ? true : false} 
                            type='radio' name='board-size' 
                            value='futuristic' id='b4'/>
                        </div>
                        <div>
                            <label htmlFor="b5" className={boardSize === 3 ? 'checked' : ''}>5*5</label>
                            <input onChange={() => {setBoardSize(3)}} 
                            checked={boardSize === 3 ? true : false} 
                            type='radio' name='board-size' 
                            value='weird' id='b5'/>
                        </div>
                    </div> 
                </div>
            </section>
        </div>
    );
}