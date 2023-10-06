function calc(expression) {
  let tokens = [];
  let currentIndex = 0;
  let currentChar = expression[currentIndex];
  let nextChar = expression[currentIndex + 1];
  let buildNumber = "";

  while (nextChar !== undefined) {
    currentChar = expression[currentIndex];
    nextChar = expression[currentIndex + 1];

    // NUMBER
    if ("1234567890".includes(currentChar)) {
      buildNumber += currentChar;

      if (nextChar !== undefined && "1234567890".includes(nextChar)) {
        currentIndex++;
        continue;
      }

      if (buildNumber !== "") {
        tokens.push({
          type: "number",
          value: buildNumber,
        });
        buildNumber = "";
      }
    } else if ("+-*/".includes(currentChar)) {
      // OPERATORS
      switch (currentChar) {
        case "+":
          tokens.push({
            type: "plus",
            value: currentChar,
          });
          break;

        case "-":
          tokens.push({
            type: "minus",
            value: currentChar,
          });
          break;
        case "*":
          tokens.push({
            type: "mult",
            value: currentChar,
          });
          break;
        case "/":
          tokens.push({
            type: "div",
            value: currentChar,
          });
          break;
      }
    } else {
      tokens.push({
        type: "ILLEGAL",
        value: undefined,
      });
    }

    currentIndex++;
  }

  return tokens;
}

let tokens = calc("123+456*78-9/0");

console.log(tokens);
