import './App.css';
import verses from './data';
import { useState } from 'react';

function App() {
  const startingNumber = Math.floor(Math.random() * verses.length +1);
  const [verse, setVerse] = useState(verses[startingNumber]);

  const getRandomVerse = () => {
    const randomNumber = Math.floor(Math.random() * verses.length +1);
    const verse = verses.find(verse => verse.id === randomNumber);
    setVerse(verse);
  }

  return (
    <>
      <h1>Identity in Christ</h1>
        <button className='btn' onClick={getRandomVerse}>Get random verse</button>
      <div className='container'>
        <div className='text-container'>
          <p className='text'>{verse.text}</p>
          <p className='reference'>{verse.verse}</p>
        </div>
      </div>
    </>
  );
}

export default App;
