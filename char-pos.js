var charPos = function (string) {
  string = string.split(" ").join("").split("");
  var answer = {};
  for (a = 0; a < string.length; a++) {
    var key = Object.keys(answer);
    if (!answer[string[a]]) {
      answer[string[a]] = [a];
    } else if (key.includes(string[a])) {
      answer[string[a]].push(a);
    }
  }
  return answer
}

console.log(charPos("lighthouse in the house"));