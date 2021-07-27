function ugabuga(number) {
  if (number < 0) {
    throw new Error("O número de entrada precisa ser positivo");
  }
  if (number % 10 == 0) {
    return "ugabuga";
  } else if (number % 5 == 0) {
    return "buga";
  } else if (number % 2 == 0) {
    return "uga";
  }
  return "bugou";
}

console.log(ugabuga(1101));



function counterBracket(bracket) {
  let counterr = 0;
  for (let i = 0; i < bracket.length; i++) {
    //console.log(entrada.charAt(i))
    if (bracket[i] == "(") {
      counterr++;
    } else if (bracket[i] == ")") {
      counterr--;
    }
    if (counterr < 0) {
      return false;
    }
  }
  if (counterr == 0) return true;
  else return false;
}
console.log(counterBracket("()"));
