function possibleBonus(a, b) {
  if (a === b) {
    return false;
  }
  for (let i = 1; i <= 6; i++) {
    if (a + i === b || a - i === b) {
      return true;
    }
  }
  return false;
}
console.log(possibleBonus(3, 7)); // true

function perimeter(l, num) {
  return l === "s" ? num * 4 : num * 6.28;
}
console.log(perimeter("s", 7) === 28);
console.log(perimeter("c", 4) === 25.12);
console.log(perimeter("c", 9) === 56.52);

function generation(x, y) {
  if (x === 0) {
    return "me!";
  } else if (x > 0) {
    switch (y) {
      case "m":
        return x === 1 ? "son" : x === 2 ? "grandson" : "great grandson";
      case "f":
        return x === 1
          ? "daughter"
          : x === 2
          ? "granddaughter"
          : "great granddaughter";
    }
  } else if (x < 0) {
    switch (y) {
      case "m":
        return x === -1
          ? "father"
          : x === -2
          ? "grandfather"
          : "great grandfather";
      case "f":
        return x === -1
          ? "mother"
          : x === -2
          ? "grandmother"
          : "great grandmother";
    }
  }
}
