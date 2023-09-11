import './App.css'
import { Settings } from './components/Settings'
import { Main } from './components/Main'
import { Header } from './components/Header'
import { useState } from 'react'
function App() {
  const [markStyle, setMarkStyle] = useState('classic');
  const [ai, setAi] = useState(true);
  const [active, setActive] = useState(false);
  const [boardSize, setBoardSize] = useState(0);

  return (
    <div className='wrapper'>
      <Header />
      <Main 
      setActive={setActive} 
      aiValue={ai} 
      markStyle={markStyle} 
      boardSize={boardSize}
      />
      <Settings active={active} 
      ai={ai}
      markStyle={markStyle}
      setActive={setActive} 
      setAi={setAi} 
      setMarkStyle={setMarkStyle}
      boardSize={boardSize}
      setBoardSize={setBoardSize}
      />
    </div>
  )
}

export default App