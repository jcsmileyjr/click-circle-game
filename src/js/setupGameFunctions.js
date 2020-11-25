// Create array of numbers, then shuffle them, save to a super set of random numbers, and finally save to global state
export const setupGame = (setRandomizeArray) => {
    let randomizeArrayOfNumbers = []; 
    let superSizeArrayOfNumbers = [];
    for(let j=1;j<=4;j++){ // loop through 4 sets of 12 numbers
        for(let i=0;i<12;i++){
            randomizeArrayOfNumbers.push(i);
        }
        shuffleArray(randomizeArrayOfNumbers);        
        superSizeArrayOfNumbers =superSizeArrayOfNumbers.concat(randomizeArrayOfNumbers);// add current 12 numbers to super array
        randomizeArrayOfNumbers = [];
    }
    setRandomizeArray(superSizeArrayOfNumbers);
    }

//Durstenfeld shuffle technique from stack overflow
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}