
const arrayOfNumbers = [11,13,15,18,19];

const squaredIterator = {
  numbers: arrayOfNumbers, 
  currentIndex: 0,         

  
  [Symbol.iterator]() {
    return {
      numbers: this.numbers,    
      currentIndex: this.currentIndex, 

      next() {
        if (this.currentIndex < this.numbers.length) {
          
          const result = { 
            value: this.numbers[this.currentIndex] ** 2, 
            done: false 
          };
          this.currentIndex++;
          return result;
        } else {
          
          return { value: undefined, done: true };
        }
      }
    };
  }
};

for (let square of squaredIterator) {
  console.log(square);
}
