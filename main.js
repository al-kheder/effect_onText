var myText =
    " Hello,  I am Ali and happy to share some small funny things from my learing Path ",
  i = 0,
  startButton = document.getElementById("button");

startButton.onclick = function () {
  "use strict";
  var typeWriter = setInterval(function () {
    document.getElementById("type").textContent += myText[i];
    i++;
    i > myText.length - 1 ? clearInterval(typeWriter) : "";
  }, 200);
};
