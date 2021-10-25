const chapter1 = require("../src/c1");

test('prints triangle', () => {
  const consoleMock = jest.spyOn(console, 'log').mockImplementation();
  chapter1.triangle();
  expect(consoleMock.mock.calls).toEqual([
    [ "#" ],
    [ "##" ],
    [ "###" ],
    [ "####" ],
    [ "#####" ],
    [ "######" ],
    [ "#######" ]
  ]);
  consoleMock.mockRestore();
});

test('correctly FizzBuzzes', () => {
  const consoleMock = jest.spyOn(console, 'log').mockImplementation();
  chapter1.fizzBuzz();
  for (let i = 0; i < 100; i++) {
    let iteration = i + 1;
    if ((iteration % 15) === 0) {
      expect(consoleMock.mock.calls[i][0]).toBe('FizzBuzz');
    } else if ((iteration % 5) === 0) {
      expect(consoleMock.mock.calls[i][0]).toBe('Buzz');
    } else if ((iteration % 3) === 0) {
      expect(consoleMock.mock.calls[i][0]).toBe('Fizz');
    } else {
      expect(consoleMock.mock.calls[i][0]).toBe(iteration);
    }
  }
  consoleMock.mockRestore();
});

test('chessBoard', () => {
  const consoleMock = jest.spyOn(console, "log").mockImplementation();
  chapter1.chessBoard(8);
  expect(consoleMock.mock.calls).toEqual([
    [ " # # # #" ],
    [ "# # # # " ],
    [ " # # # #" ],
    [ "# # # # " ],
    [ " # # # #" ],
    [ "# # # # " ],
    [ " # # # #" ],
    [ "# # # # " ]
  ]);
  consoleMock.mockRestore();
});
