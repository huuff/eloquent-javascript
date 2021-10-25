function triangle() {
  for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
  }
}

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if ((i % 15) === 0) {
      console.log("FizzBuzz");
    } else if ((i % 5) === 0) {
      console.log("Buzz");
    } else if ((i % 3) === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

function chessBoard(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      if (((i + j) % 2) == 0) {
        row += " ";
      } else {
        row += "#";
      }
    } 
    console.log(row);
  }
}

module.exports = {
  triangle: triangle,
  fizzBuzz: fizzBuzz,
  chessBoard: chessBoard
};
