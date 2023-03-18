function missingLetter(str) {
  const codes = str.split("").map((char) => char.charCodeAt(0));

  for (let i = 0; i < codes.length - 1; i++) {
    if (codes[i + 1] - codes[i] > 1) {
      return String.fromCharCode(codes[i] + 1);
    }
  }
  return undefined;
}

console.log(missingLetter("abce"));
