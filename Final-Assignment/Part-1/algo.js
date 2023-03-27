1.
function reverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverse("abcde"));
console.log(reverse("hello"));
console.log("reverse('Greetings from The Hacker Collective'));

2.
function sameBackAndForth(str) {
  let newStr = "";
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(sameBackAndForth("abba"));
console.log(sameBackAndForth("abcdefg"));

3.
function reverseInt(num) {
  let reversed = parseInt(num.toString().split('').reverse().join(''));
  return reversed * Math.sign(num);
}

4. 
function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArr([1, 2, 3, 4, 5]));

5. 
function deafGrandma(str) {
  let words = str.split(" ");
  const yelledWords = words.map((word) => word.toUpperCase() + "!!");
  return yelledWords.join(" ");
}

console.log(deafGrandma("I have a bad feeling about this"));

6. 
function whatIsMissing(str) {
  let firstChar = str.charCodeAt(0);
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) != firstChar + i) {
      return String.fromCharCode(firstChar + i);
    }
  }
  return undefined;
}

console.log(whatIsMissing("abcdefghijklmnopqrstuvwxyz")); 
console.log(whatIsMissing("bcdf"));

7.
function swap(sentence, before, after) {
  const words = sentence.split(" ");

  const index = words.findIndex(word => word.toLowerCase() === before.toLowerCase());

  if (index === -1) {
    return sentence;
  }

  const originalWord = words[index];
  const newWord = after.charAt(0).toUpperCase() + after.slice(1);
  words.splice(index, 1, originalWord.charAt(0) === originalWord.charAt(0).toUpperCase() ? newWord.charAt(0).toUpperCase() + newWord.slice(1) : newWord);

  const newSentence = words.join(" ");

  return newSentence;
}
