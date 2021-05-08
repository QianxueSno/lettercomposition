function setColor(e, btn, color) {
  var target = e.target,
      count = +target.dataset.count;

   target.style.backgroundColor = count === 1 ? "#8582a2" : "black";
   target.dataset.count = count === 1 ? 0 : 1;
}

function setse(e, btn, color) {
  var target = e.target,
      count = +target.dataset.count;

   target.style.backgroundColor = count === 1 ? "#7FFF00" : "black";
   target.dataset.count = count === 1 ? 0 : 1;
}
