import './App.css';
import React, {useState, useEffect} from 'react';
import HiddenCircle from './components/HiddenCircle';

function App() {

  const [randomizeArray, setRandomizeArray] = useState([]);
  const [animateCircle, setanimateCircle] = useState("");
  const [score, updateScore] = useState(0);
  const [correct, setCorrect] = useState([]);
  
  useEffect(() => { 
    //Create array of numbers, then shuffle them, and finally save to global state
    const setupGame = () => {
      let randomizeArrayOfNumbers = [];      
      for(let i=0;i<12;i++){
        randomizeArrayOfNumbers.push(i);
      }
      shuffleArray(randomizeArrayOfNumbers);
      setRandomizeArray(randomizeArrayOfNumbers);
    }

  setupGame()}, []);

  const startGame = () => {
    updateScore(0); // Reset the score
    let count = 0;
    let interval = setInterval(function(){
      let currentCircle = randomizeArray[count]; // current random number from the currnt index in array
      setanimateCircle(currentCircle); //set that random number to the global state to be calculated by each HiddenCircle

      // Go to next index in array if less then length of array else ends interval
      if(count < randomizeArray.length){
        count++;
      }else{
        clearInterval(interval);
      }      
    }
    ,1000);
  }

  // If the user click the animated circle, with correct id, within the time frame of the startGame(), then add to score
  const userClick = (id) => {
    if(animateCircle === id){
      updateScore(score + 10);
      let tempCorrectArray = correct;
      tempCorrectArray.push(id);
      setCorrect(tempCorrectArray);// Create array of correct choices to update HiddenCircles components crown icon.
    }
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
        <p className="instructions-style"><span className="instructions-title-style">Instructions</span>: Click the circle before it disappears. Each win adds 2 seconds to the timer</p>
      </header>
      <main>
        <p className="information-section-style"><span className="information-title-style">Score:</span> {score}/120 </p>
        {/*<p className="information-section-style"><span className="information-title-style">Timer:</span> 1.1 sec </p>*/}
        <article className="center-text">
          <button className="button-style" onClick={() => startGame()}><label className="button-text">Play</label></button>
        </article>        
      </main>
      <footer>
        <section className="row-of-hidden-circles">
          <HiddenCircle activate = {animateCircle === 0?true:false} circleId={0} click={userClick} correctPicked={correct.includes(0)?true:false} />
          <HiddenCircle activate = {animateCircle === 1?true:false} circleId={1} click={userClick} correctPicked={correct.includes(1)?true:false} />
          <HiddenCircle activate = {animateCircle === 2?true:false} circleId={2} click={userClick} correctPicked={correct.includes(2)?true:false} />
        </section>
        <section className="row-of-hidden-circles">
          <HiddenCircle activate = {animateCircle === 3?true:false} circleId={3} click={userClick} correctPicked={correct.includes(3)?true:false} />
          <HiddenCircle activate = {animateCircle === 4?true:false} circleId={4} click={userClick} correctPicked={correct.includes(4)?true:false} />
          <HiddenCircle activate = {animateCircle === 5?true:false} circleId={5} click={userClick} correctPicked={correct.includes(5)?true:false} />
        </section>
        <section className="row-of-hidden-circles">
          <HiddenCircle activate = {animateCircle === 6?true:false} circleId={6} click={userClick} correctPicked={correct.includes(6)?true:false} />
          <HiddenCircle activate = {animateCircle === 7?true:false} circleId={7} click={userClick} correctPicked={correct.includes(7)?true:false} />
          <HiddenCircle activate = {animateCircle === 8?true:false} circleId={8} click={userClick} correctPicked={correct.includes(8)?true:false} />
        </section>
        <section className="row-of-hidden-circles">
          <HiddenCircle activate = {animateCircle === 9?true:false} circleId={9} click={userClick} correctPicked={correct.includes(9)?true:false} />
          <HiddenCircle activate = {animateCircle === 10?true:false} circleId={10} click={userClick} correctPicked={correct.includes(10)?true:false} />
          <HiddenCircle activate = {animateCircle === 11?true:false} circleId={11} click={userClick} correctPicked={correct.includes(11)?true:false} />
        </section>                
      </footer>
    </div>
  );
}

export default App;
