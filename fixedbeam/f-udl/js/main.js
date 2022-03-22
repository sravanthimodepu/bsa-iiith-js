// slider for load of arrow

document.addEventListener('DOMContentLoaded', function() {  
    let mass= 600;
    // slider for mass of bob
    const slider_mass = document.getElementById("mass");
    const output_mass = document.getElementById("id_mass");
    output_mass.innerHTML = slider_mass.value; // Display the default slider value

    slider_mass.oninput = function() {
        output_mass.innerHTML = this.value;
        updatePara();
    };


    function updatePara()
    {   
        mass = document.getElementById("mass").value;       
        const arrow_css = document.querySelector("#arrow");

        
        arrow_css.style.height = mass / 300 + "em" ;
        arrow_css.style.width = mass / 300 + "em" ;
        arrow_css.style.left = mass / (-600) + "em" ;

    }
})

const instrMsg = document.getElementById('procedure-message');

var id = null;

function setDefaults(){
    var arrow = document.getElementById("arrow");
    arrow.style.marginLeft='155px';
    arrow.style.width='300px';
    arrow.style.top='0px';

 }


// control buttons : play, pause ,restart
let slowAnimation = anime({
  targets: '.arrow',
  translateY: 2,
  borderRadius: 20,
  duration: 4000,
  easing: 'linear',
  autoplay: false
});

document.querySelector('#play').onclick = slowAnimation.play;
document.querySelector('#pause').onclick = slowAnimation.pause;
document.querySelector('#restart').onclick = slowAnimation.restart;

    
// uniformly distributed load
function mySecondFunction() {
    if (document.getElementById("radio-style_ud_load").checked) {
        var elem = document.getElementById("arrow");
        var rect = document.getElementById("rectangle");
        var bbox = rect.getBBox();
        var y = 135 - (bbox.height - 50)/2
console.log(elem.style.top,bbox.height,y)
        // var play= document.getElementById("#play");
        // var pause=document.getElementById("#pause");
        // var restart=document.getElementById("#restart");

        var posy = 0;
        clearInterval(id);
        id = setInterval(frame, 10);

function animate(){
anime({ 
      //target
      targets: "#rectangle",
      endDelay: 400,
      easing: "easeInOutSine",
      rotate: [0, 10],
      duration: 4000,

      loop: false,
    });
anime({
    targets: ".svg-sfd path",
    duration: 1000,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    direction: "alternate",
    delay: anime.stagger(200),
    d: [
        {
            value:
                "M 150 150 L 450 150 L 450 250 L 150 50 L 150 150"
        },
        {
            value:
                "M 150 150 L 450 150 L 450 250 L 150 50 L 150 150"
        }
    ],
    loop: false

});
 anime({
    targets: ".svg-bmd path",
    duration: 1000,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    direction: "alternate",
    delay: anime.stagger(200),
    d: [
        {
            value:
                "M 150 200 L 450 200 L 450 250 L 150 250 L 150 200 L 150 250 Q 300 0 450 250"
        },
        {
            value:
                "M 150 200 L 450 200 L 450 250 L 150 250 L 150 200 L 150 250 Q 300 0 450 250"
        }
    ],
    loop: false

});
}

        function frame() {
            if (posy > y ) { 
                clearInterval(id);
setTimeout(animate,800);

            } else {
                posy++;
                elem.style.top = posy + 'px';
            }
        }
    }


// control buttons : play, pause ,restart

// slowAnimation = anime({
//   targets: '.arrow',
//   translateY: 68,
//   borderRadius: 20,
//   duration: 4000,
//   easing: 'linear',
//   autoplay: false
// });

// document.querySelector('#play').onclick = slowAnimation.play;
// document.querySelector('#pause').onclick = slowAnimation.pause;
// document.querySelector('#restart').onclick = slowAnimation.restart;

}

function getOption() {
    selectElement = document.querySelector('#menu');
    boundaryType = selectElement.value;
    document.querySelector('.boundaryType').textContent = boundaryType;
    console.log(boundaryType);
}

function displayRadioValue() {
    var ele = document.getElementsByName('answer');

    for (i = 0; i < ele.length; i++) {

        if (ele[i].type = "radio") {

            if (ele[i].checked)
                document.getElementById("result").innerHTML = ele[i].value;
        }

    }
}

function adjustRectLength() {
document.getElementById('triangle1').style.display = 'none'
anime({
      targets: "#rectangle",
      rotate: [0, 0],
      duration: 1,
      loop: false,
    });
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
    var left = 155;
    if(len === 100) left = 540;
    else if(len === 0) left = 90;
    else left = 90 + 4.5*len;
    elem.style.marginLeft =  left + 'px';
    elem.style.top = '0px';
    id = setInterval(frame, 10);
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
document.getElementById('triangle1').style.display = 'none'
anime({
      targets: "#rectangle",
     rotate: [0, 0],
      duration: 1,
      loop: false,
    });
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



const border = "black", lineWidth = 1.5, fps = 150;
const msgs = [
        
    ];

