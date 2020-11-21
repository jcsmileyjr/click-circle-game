import './App.css';

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
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
