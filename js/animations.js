

//arrow down animation
  function moveArrowDown(id, position) {
  var elem = document.getElementById(id);   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == position) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.bottom = pos + 'px'; 

    }
  }

}
//arrow obervaitons
function animateObserve(ele, val){
	
anime({
    targets: ele,
    duration: 1000,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    direction: "alternate",
    delay: anime.stagger(200),
    d: [
        {
            value1: val
        },
        {
            value2: val
        }
    ],
    loop: false

});
}


function animateBeam(id1, id2){
TweenLite.to(id1, 1, {morphSVG:id2});
}


