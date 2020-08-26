// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str) {
  let lowerCasedStr = str.toLowerCase().split("");
  for (let i = 0; i < lowerCasedStr.length; i++) {
    for (let j = i + 1; j < lowerCasedStr.length; j++) {
      if (lowerCasedStr[i] === lowerCasedStr[j]) return false;
    }
  }
  return true;
}
