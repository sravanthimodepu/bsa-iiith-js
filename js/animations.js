//boundary type select
// loadtype selection
//input parameters
//play pause buttons
//instrucitons 
//beam
//observatoins 


//TweenLite.to("#circle", 1, {morphSVG:"#hippo"});

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

// function animateBeam(ele, val1, val2){
// anime({
//     targets: ele,
//     duration: 1000,
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: "easeInOutSine",
//     direction: "alternate",
//     delay: anime.stagger(200),
//     d: [
//         {
//             value1: val1
//         },
//         {
//             value2: val2
//         }
//     ],
//     loop: false

// });
// }

function animateBeam(id1, id2){
TweenLite.to(id1, 1, {morphSVG:id2});
}


function adjustRectLength() {
    var rect = document.getElementById("rectangle");
    var bbox = rect.getBBox();
    var orginalLen = bbox.width;
    var len = document.getElementById("sliderWithValueTooltipLength").value;
    var width = (len * 550) / 100;
    var diff = width - orginalLen;
    var pos = 0;
  var elem = document.getElementById("arrow");
  var arrowMarginfLeft = parseInt((elem.style.marginLeft).split('px'));
    clearInterval(id);
  var left = 215;
  if(len === 100) left = 540;
  else if(len === 0) left = 90;
  else left = 90 + 4.5*len;
  elem.style.marginLeft =  left + 'px';
  elem.style.top = '0px';
    id = setInterval(frame,10);
    function frame() {
        if (pos > Math.abs(diff)) {
            clearInterval(id);
      
        } else {
            pos++;
            if (diff < 0) {
                rect.setAttribute("width", orginalLen - pos);;
            } else {
                rect.setAttribute("width", orginalLen + pos);
            }
        }
    }
  
}


function adjustRectBreadth() {
  var rect = document.getElementById("rectangle");
    var bbox = rect.getBBox();
    var orginalheight = bbox.height;
  var orginaly = bbox.y;
    var height = document.getElementById("sliderWithValueTooltipBreadth").value;
  var y = Math.floor(height/2);
    var diff = height - orginalheight;
    var pos = 0, posy = 0;
  var elem = document.getElementById("arrow");
    clearInterval(id);
  var top = 0;
  elem.style.top = '0px';
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos > Math.abs(diff)) {
            clearInterval(id);
        } else {
            pos++;
      posy = posy+0.5;
            if (diff < 0) {
                rect.setAttribute("height", orginalheight - pos);
        rect.setAttribute("y", orginaly + posy);
            } else {
                rect.setAttribute("height", orginalheight + pos);
        rect.setAttribute("y", orginaly - posy);
            }
        }
    }
}