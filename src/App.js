import React, { useContext } from 'react';
import './App.css';
import { ThemeContext } from './components/Theme';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <h1>{`  ${theme}`}</h1>
        <button onClick={toggleTheme}>Modo claro/noturno</button>
      </header>
    </div>
  );
}

export default App;