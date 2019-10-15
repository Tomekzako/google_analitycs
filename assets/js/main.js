window.addEventListener("DOMContentLoaded", event => {
  startTime();
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector(".nav_clock").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  // var btn = document.querySelector(".form_btn");

  // btn.addEventListener("click", function() {
  //   document.querySelector(".main_heading").classList.add("heading_blue");
  //   document.querySelector(".main_heading").innerHTML =
  //     "Dziękuję! <br> Obserwuj mnie <br> też na <a href='https://twitter.com/lewwwin' target='_blank'>@lewwwin</a>";
  // });
});
