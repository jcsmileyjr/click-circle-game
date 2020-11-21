import './App.css';

import HiddenCircle from './components/HiddenCircle';

function App() {
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
          <button className="button-style"><label className="button-text">Play</label></button>
        </article>        
      </main>
      <footer>
        <section className="row-of-hidden-circles">
          <HiddenCircle circleId={"1"} />
          <HiddenCircle />
          <HiddenCircle />
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
