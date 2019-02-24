var countDownDate = new Date("Mar 9, 2019 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var element = document.getElementById("timer");

  element.innerHTML = "<table> <tr><th>"+days+"</th> <td>Days</td></tr> <tr><th>"+hours+"</th> <td>Hours</td></tr> <tr><th>"+minutes+"</th> <td>Minutes</td></tr><tr><th>"+seconds+"</th><td>Seconds</td> </tr> </table>";

  if (distance < 0) {
    clearInterval(x);
    element.innerHTML = "<h1 class='soon'>Soon</h1>";
  }
}, 1000);