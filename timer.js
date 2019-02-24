var countDownDate = new Date("Mar 9, 2019 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    //var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var element = document.getElementById("timer");

    if(days>0){
        element.innerHTML = "<table> <tr><th>"+days+"</th> <td>Days</td></tr> <tr><th>"+hours+"</th> <td>Hours</td></tr> <tr><th>"+minutes+"</th> <td>Minutes</td></tr><tr><th>"+seconds+"</th><td>Seconds</td> </tr> </table>";
    }else if(hours > 0){
        element.innerHTML = "<table> <tr><th>"+hours+"</th> <td>Hours</td></tr> <tr><th>"+minutes+"</th> <td>Minutes</td></tr><tr><th>"+seconds+"</th><td>Seconds</td> </tr> </table>";
    }else if(minutes > 0){
        element.innerHTML = "<table> <tr><th>"+minutes+"</th> <td>Minutes</td></tr><tr><th>"+seconds+"</th><td>Seconds</td> </tr> </table>";
    }else if(seconds > 0){
        element.innerHTML = "<table> </tr><tr><th>"+seconds+"</th><td>Seconds</td> </tr> </table>";
    }else if (distance < 0) {
        clearInterval(x);
        element.innerHTML = "<h1 class='soon'>Soon</h1>";
    }
}, 1000);