var timer = 60;
var score = 0;
var hitrn = 0;
function incresenum() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function makeBubble() {
  var clutter = " ";

  for (var i = 1; i <= 160; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
function settimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over!!</h1>`;
    }
  }, 1000);
}
function setHitNum() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clicknum = Number(details.target.textContent);
  if (clicknum === hitrn) {
    incresenum();
    makeBubble();
    setHitNum();
  }
});
setHitNum();
settimer();
makeBubble();
