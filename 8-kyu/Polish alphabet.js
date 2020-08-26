// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
//
// Your task is to change the letters with diacritics:
//
// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.
//
// For example:
//
// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

function correctPolishLetters(string) {
  const s = string.split("");
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "ą":
        s[i] = "a";
        break;
      case "ć":
        s[i] = "c";
        break;
      case "ę":
        s[i] = "e";
        break;
      case "ł":
        s[i] = "l";
        break;
      case "ń":
        s[i] = "n";
        break;
      case "ó":
        s[i] = "o";
        break;
      case "ś":
        s[i] = "s";
        break;
      case "ź":
        s[i] = "z";
        break;
      case "ż":
        s[i] = "z";
        break;
      default:
        s[i] = s[i];
    }
  }
  return s.join("");
}
