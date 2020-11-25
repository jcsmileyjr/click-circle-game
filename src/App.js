import './App.css';
import React, {useState, useEffect} from 'react';
import HiddenCircle from './components/HiddenCircle';
import winSound from './assets/clap.wav';
import loseSound from './assets/kick.wav';
import {setupGame} from './js/setupGameFunctions';

function App() {

  const [randomizeArray, setRandomizeArray] = useState([]);
  const [animateCircle, setanimateCircle] = useState("");
  const [score, updateScore] = useState(0);
  const [correct, setCorrect] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");
  const [disablePlayButton, setDisablePlayButton] = useState(false);
  const [currentLevel, updateLevel] = useState(1);
  const [levelColor, setLevelColor] = useState("white");
  
  useEffect(() => { setupGame(setRandomizeArray)}, []);

  const startGame = () => {
    updateScore(0); // Reset the score
    setCorrect([]) // Reset showing crowns icons for correct choices
    setDisablePlayButton(true); //disable play button to prevent mulitple presses
    let speed = determineDifficulty();
    let count = 0;
    let interval = setInterval(function(){
      let currentCircle = randomizeArray[count]; // current random number from the currnt index in array
      setanimateCircle(currentCircle); //set that random number to the global state to be calculated by each HiddenCircle

      // Go to next index in array if less then length of array else ends interval
      if(count < randomizeArray.length-1){
        //reset the display crowns every 12 counts
        if(count % 12 === 0){
          setCorrect([]);
        }
        count++;
        
      }else{
        setanimateCircle("") // Bug: User can continue hitting last square to rack up points. 
        setDisablePlayButton(false);
        setupGame(setRandomizeArray)
        clearInterval(interval);
        setLevelColor("white")
      }      
    }
    ,speed);
  }

  const determineDifficulty = () => {
    if(difficulty === "easy"){
      return 900;
    }else if(difficulty === "medium"){
      return 700;
    }else{
      return 600
    }
  }

  const increaseLevel = () => {
    if(score >=340){
      updateLevel(4);
      setLevelColor("deepPurple")
    }else if(score >= 220){
      updateLevel(3)
      setLevelColor("burntOrange")
    }else if(score >=100){
      updateLevel(2)
      setLevelColor("pineGreen")
    }else{
      return;
    }
  }

  // If the user click the animated circle, with correct id, within the time frame of the startGame(), then add to score
  const userClick = (id) => {
    if(animateCircle === id){
      updateScore(score + 10);
      let tempCorrectArray = correct;
      tempCorrectArray.push(id);
      setCorrect(tempCorrectArray);// Create array of correct choices to update HiddenCircles components crown icon.
      let audio = new Audio(winSound);
      audio.play();
      increaseLevel();
    }else{
      let audio = new Audio(loseSound);
      audio.play();
    }
  }

  return (
    <div className={`app ${levelColor}`}>
      <section className="container">
        <header>
          <h1 className="center-text">Click a Circle</h1>
          <p className="instructions-style"><span className="instructions-title-style">Instructions</span>: Click the circle before it disappears. </p>
        </header>
        <main>
          <p className="information-section-style"><span className="information-title-style">Score:</span> {score}/480 </p>
          <p className="information-section-style"><span className="information-title-style">Level:</span> {currentLevel} </p>
          <article className={disablePlayButton?"center-text hidePlayButton":"center-text"}>
            <button className="button-style" disabled={disablePlayButton} onClick={() => startGame()}><label className="button-text">Play</label></button>
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
          <section className="row-of-hidden-circles difficult-section">
            <label className="information-title-style">Difficulty Level: </label>
            <input type="radio" id="easy" name="difficulty" value="Easy" checked={difficulty === "easy"} onChange={() => setDifficulty("easy")} />
            <label htmlFor="easy">Easy</label>
            <input type="radio" id="medium" name="difficulty" value="medium" checked={difficulty === "medium"} onChange={() => setDifficulty("medium")} />
            <label htmlFor="medium">Medium</label>
            <input type="radio" id="hard" name="difficulty" value="hard" checked={difficulty === "hard"} onChange={() => setDifficulty("hard")} />
            <label htmlFor="hard">Hard</label>
          </section>               
        </footer>
      </section>
    </div>
  );
}

export default App;
