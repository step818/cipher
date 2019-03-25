$(function() {
  var cipher = prompt("Say something...");

  var reverse;

  var capital = function(string) {
    var first = cipher[0].toUpperCase();
    var last = cipher[cipher.length - 1].toUpperCase();
    var mid = cipher[parseInt(cipher.length/2) - 1];
    var almost = mid + cipher + last + first;
    reverse = almost.split("").reverse().join("");
  }
  capital(cipher);
  $('#original').click(function () {
    alert(cipher);
  });
  $('#cipher').click(function () {
    alert(reverse);
  });
});
