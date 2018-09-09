function rot13(str) { // LBH QVQ VG!
  var answer = "";
  let lowerAlpha = /[a-z]/;
  let upperAlpha = /[A-Z]/;
  for(var i = 0; i < str.length; i++) {
    if(upperAlpha.test(str[i])) {
      var ascii = str.charCodeAt(i);
      var unciphered = (ascii - "A".charCodeAt(0) + 13) % 26 + "A".charCodeAt(0);
      answer += String.fromCharCode(unciphered);
    } else if(lowerAlpha.test(str[i])) {
      var ascii = str.charCodeAt(i);
      var unciphered = (ascii - "a".charCodeAt(0) + 13) % 26 + "a".charCodeAt(0);
      answer += String.fromCharCode(unciphered);
    } else {
      answer+= str[i];
    }
  }
  return answer;
}
