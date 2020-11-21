import './App.css';
import React, {useState, useEffect} from 'react';
import HiddenCircle from './components/HiddenCircle';

function App() {

  //when app start, randomize an array of numbers
  //Using an interval(), it starts the animation of a HiddenCircle
  //If user clicks the HiddenCircle in time, update score

  //const [start, setStart] = useState(false);
  const [randomizeArray, setRandomizeArray] = useState([]);
  const [hiddenCircle0, setHiddenCircle0] = useState(false);
  const [hiddenCircle1, setHiddenCircle1] = useState(false);
  const [hiddenCircle2, setHiddenCircle2] = useState(false);
  
  useEffect(() => { 

    const setupGame = () => {
      let randomizeArrayOfNumbers = [];
      for(let i=0;i<3;i++){
        randomizeArrayOfNumbers.push(i);
      }
      shuffleArray(randomizeArrayOfNumbers);
      setRandomizeArray(randomizeArrayOfNumbers);
    }

  setupGame()}, []);

  const startGame = () => {
    let count = 0;
    let interval = setInterval(function(){
      let currentCircle = randomizeArray[count]; // current random number from currnt index in array
     
      //Based on the random number, the hidden circle will pop up. 
      if(currentCircle === 0){
        setHiddenCircle0(true)
      }else if(currentCircle === 1){
        setHiddenCircle1(true);
      }else{
        setHiddenCircle2(true);
      }

      // Go to next index in array if less then length of array else ends interval
      if(count < randomizeArray.length){
        count++;
      }else{
        clearInterval(interval);
      }      
    }
    ,1000);
  }

  //Durstenfeld shuffle technique from stack overflow
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <div>
      <header>
        <h1 className="center-text">Click a Circle</h1>
        <p className="instructions-style"><span className="instructions-title-style">Instructions</span>: Click the circle befofre it disappears. Each win adds 2 seconds to the timer</p>
      </header>
      <main>
        <p className="information-section-style"><span className="information-title-style">Score:</span> 100 </p>
        <p className="information-section-style"><span className="information-title-style">Timer:</span> 1.1 sec </p>
        <article className="center-text">
          <button className="button-style" onClick={() => startGame()}><label className="button-text">Play</label></button>
        </article>        
      </main>
      <footer>
        <section className="row-of-hidden-circles">
          <HiddenCircle circleId={"1"} activate = {hiddenCircle0} />
          <HiddenCircle activate = {hiddenCircle1} />
          <HiddenCircle activate = {hiddenCircle2} />
        </section>
        <section className="row-of-hidden-circles">
          <HiddenCircle />
          <HiddenCircle />
          <HiddenCircle />
        </section>
      </footer>
    </div>
  );
}

export default App;
