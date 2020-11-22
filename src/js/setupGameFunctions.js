// reate array of numbers, then shuffle them, and finally save to global state
export const setupGame = (setRandomizeArray) => {
    let randomizeArrayOfNumbers = [];      
    for(let i=0;i<12;i++){
        randomizeArrayOfNumbers.push(i);
    }
    shuffleArray(randomizeArrayOfNumbers);
    setRandomizeArray(randomizeArrayOfNumbers);
    }

//Durstenfeld shuffle technique from stack overflow
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}