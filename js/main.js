

    (function(){
            console.log("printdropdown");
    generateDropdown();
    //adjustBeamBreadth();
    //adjustBeamLength();

    })();


    function generateDropdown(){
        console.log("printdropdown");
    var dropdown = ['Select Boundary Type', 'Cantilever', 'Fixed Beam', 'One Side Fixed One Side SS', 'Two Side SS ']
    var select = document.getElementById("dropdown");
    for (var i = 0; i < dropdown.length; i++) {
                    var optn = dropdown[i];
                    var el = document.createElement("option");
                    el.textContent = optn;
                    el.value = optn;
                    select.appendChild(el);
                }
        document.getElementById("procedure-message").innerHTML = "Select Boundary Type from the dropdown menu";        
        }

    function onSelection(){
        var selectedDropdown = document.getElementById("dropdown");
        console.log(selectedDropdown);
        var selectedDropdownval= selectedDropdown.options[selectedDropdown.selectedIndex].text;
        if(selectedDropdownval === "Cantilever"){ 
         document.getElementById("procedure-message").innerHTML = "<li>Select the load type, check the input parameters and click on Start button</li>" + "<li>Observe the beam of Deflection and pay attention to the shear force and bending moment in the observation section </li>";
        }else if(selectedDropdownval === "Fixed Beam") {
            console.log("balammaboya");
         document.getElementById("procedure-message").innerHTML = "<li>Select the load type, check the input parameters and click on Start button</li>" + "<li>Observe the beam of Deflection and pay attention to the shear force and bending moment in the observation section </li>";
        }else if(selectedDropdownval === "One Side Fixed One Side SS") {
            console.log("balammaboya");
         document.getElementById("procedure-message").innerHTML = "<li>Select the load type, check the input parameters and click on Start button</li>" + "<li>Observe the beam of Deflection and pay attention to the shear force and bending moment in the observation section </li>";
        }
        else if(selectedDropdownval === "Two Side SS") {
            console.log("balammaboya");
         document.getElementById("procedure-message").innerHTML = "<li>Select the load type, check the input parameters and click on Start button</li>" + "<li>Observe the beam of Deflection and pay attention to the shear force and bending moment in the observation section </li>";
        }

     }   

    function showObservations(ele1, ele2){
        var path1=document.getElementsByClassName(ele1)[0].getElementsByTagName("path")[0];
        var path1Val = path1.getAttribute("d")
        var path2=document.getElementsByClassName(ele2)[0].getElementsByTagName("path")[0];
        var path2Val = path2.getAttribute("d")
        animateObserve(ele1, path1Val);
        console.log(path1Val);
       // animateObserve(ele2, path2Val);
        console.log(path2Val);
    }

    var previousClickedEle = [];
    var previousClickedBeam = [];
    var previousClickedMainBeam = [];


    function play(){
        moveArrowDown("arrow", 150);
        const myTimeout = setTimeout(playSimulation, 2000);
       // setTimeout(playSimulation, 3000);
       // playSimulation();
        

    }

    function playSimulation() {  
    console.log("printplay");
    var radios = document.getElementsByTagName('input');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = radios[i].value;     
            var selectedDropdown = document.getElementById("dropdown");
                console.log(selectedDropdown);

            var selectedDropdownval= selectedDropdown.options[selectedDropdown.selectedIndex].text;
            var lengthval = document.getElementById("length").value //gets the oninput value
            //document.getElementById('lenoutput').innerHTML = lengthval //displays this value to the html page
            console.log(lengthval);
            var depthval = document.getElementById("depth").value //gets the oninput value
           // document.getElementById('depoutput').innerHTML = depthval //displays this value to the html page
            console.log(depthval);
            // if (value === "Point Load" && selectedDropdownval === "Cantilever"){ 
            //     animateObserve('cls', 'val1', 'val2');
            // } 
            if (previousClickedEle.length > 0){
            for (var i = 0; i < previousClickedEle.length; i++) {
                console.log("balamma");
                document.getElementById(previousClickedEle[i]).style.display = "none";
                }
            }

            if (previousClickedBeam.length > 0){
            for (var i = 0; i < previousClickedBeam.length; i++) {
                console.log("balamma");
                document.getElementById(previousClickedBeam[i]).style.display = "none";
                document.getElementById(previousClickedMainBeam[i]).style.display = "block";
                }
            }
            if (previousClickedMainBeam.length > 0){
            for (var i = 0; i < previousClickedMainBeam.length; i++) {
                console.log("balamma");
                document.getElementById(previousClickedMainBeam[i]).style.display = "none";
                document.getElementById(previousClickedMainBeam[i]).style.display = "block";
                }
            }
            if (value === "Point Load" && selectedDropdownval === "Cantilever"){ 
                console.log("test");
                previousClickedEle.push("set1");
                document.getElementById("set1").style.display="block";
                //document.getElementById("procedure-message").innerHTML = "Select Cantilever from the dropdown menu";
                document.getElementById("mes1").innerHTML = "Maximum shear force is constant throughout the beam";
                animateBeam("#canti-pl-main-beam", "#canti-beam-pl");
                previousClickedBeam.push("beam1");
                document.getElementById("beam1").style.display="none";
                console.log("beam1");
                previousClickedMainBeam.push("main-beam1");
                document.getElementById("main-beam1").style.display="block";

                //showObservations('svg-sfd','svg-bmd');
                animateObserve('.canti-pl-sfd path','M 100 300 L 350 300 L 350 350 L 100 350 L 100 300');
                animateObserve('.canti-pl-bmd path','M 100 300 L 450 300 L 100 400 L 100 300 L 100 300');
                
            } 
            if (value === "UDL" && selectedDropdownval === "Cantilever"){ 
                previousClickedEle.push("set2");
                document.getElementById("set2").style.display="block";
                document.getElementById("mes2").innerHTML = "Maximum bending movement occurs at the fixed end";
                console.log("balamma");
                animateBeam("#canti-udl-main-beam", "#canti-beam-udl");
                previousClickedBeam.push("beam2");
                document.getElementById("beam2").style.display="none";
                previousClickedMainBeam.push("main-beam2");
                document.getElementById("main-beam2").style.display="block";
                animateObserve('.canti-udl-sfd path','M 100 300 L 450 300 L 100 400 L 100 300 L 100 300');
                animateObserve('.canti-udl-bmd path','M 100 300 Q 250 300 500 300 C 350 300 150 350 100 400 Q 100 400 100 300');
            } 
            if (value === "Point Load" && selectedDropdownval === "Fixed Beam")
            {
                previousClickedEle.push("set3");
                document.getElementById("set3").style.display="block";
                document.getElementById("mes3").innerHTML = "message3";
                animateBeam("#fixed-pl-main-beam", "#fixed-beam-pl");
                previousClickedBeam.push("beam3");
                document.getElementById("beam3").style.display="none";
                previousClickedMainBeam.push("main-beam3");
                document.getElementById("main-beam3").style.display="block";
                animateObserve('.fix-pl-sfd path','M 150 150 L 450 150 L 450 200 L 300 200 L 300 100 L 150 100 L 150 150');
                animateObserve('.fix-pl-sfd path','M 150 150 L 450 150 L 450 250 L 150 250 L 150 150 L 150 250 L 300 50 L 450 250');
            } 
            if (value === "UDL" && selectedDropdownval === "Fixed Beam")
            {
                previousClickedEle.push("set4");
                document.getElementById("set4").style.display="block";
                document.getElementById("mes4").innerHTML = "message4";
                animateBeam("#fixed-udl-main-beam", "#fixed-beam-udl");
                previousClickedBeam.push("beam4");
                document.getElementById("beam4").style.display="none";
                previousClickedMainBeam.push("main-beam4");
                document.getElementById("main-beam4").style.display="block";
                animateObserve('.fix-udl-sfd path','M 150 150 L 450 150 L 450 250 L 150 50 L 150 150');
                animateObserve('.fix-udl-bmd path','M 150 200 L 450 200 L 450 250 L 150 250 L 150 200 L 150 250 Q 300 0 450 250');

             } 
            if (value === "Point Load" && selectedDropdownval === "One Side Fixed One Side SS")
            {
                previousClickedEle.push("set5");
                document.getElementById("set5").style.display="block";            
                document.getElementById("mes5").innerHTML = "message5";
                animateBeam("#oness-pl-main-beam", "#oness-beam-pl");
                previousClickedBeam.push("beam5");
                document.getElementById("beam5").style.display="none";
                previousClickedMainBeam.push("main-beam5");
                document.getElementById("main-beam5").style.display="block";
                animateObserve('.oness-pl-sfd path','M 150 150 L 450 150 L 450 200 L 300 200 L 300 100 L 150 100 L 150 150');
                animateObserve('.oness-pl-bmd path','M 100 200 L 100 200 L 400 200 L 400 250 L 300 150 L 100 200');
            } 
            if (value === "UDL" && selectedDropdownval === "One Side Fixed One Side SS")
            {
                previousClickedEle.push("set6");
                document.getElementById("set6").style.display="block";            
                document.getElementById("mes6").innerHTML = "message6";
                animateBeam("#oness-udl-main-beam", "#oness-beam-udl");
                previousClickedBeam.push("beam6");
                document.getElementById("beam6").style.display="none";
                previousClickedMainBeam.push("main-beam6");
                document.getElementById("main-beam6").style.display="block";
                animateObserve('.oness-udl-sfd path','M 100 200 L 100 200 L 500 200 L 450 300 L 100 150 Q 100 200 100 200');
                animateObserve('.oness-udl-bmd path','M 100 200 L 100 200 L 500 200 L 500 250 Q 250 50 100 200');
            } 
            if (value === "Point Load" && selectedDropdownval === "Two Side SS")
            {
                previousClickedEle.push("set7");
                document.getElementById("set7").style.display="block";            
                document.getElementById("mes7").innerHTML = "message7";
                animateBeam("#main-beam", "#twoss-beam-pl");
                previousClickedBeam.push("beam7");
                document.getElementById("beam7").style.display="none";
                animateObserve('.twoss-pl-sfd path','M 150 150 L 450 150 L 450 200 L 300 200 L 300 100 L 150 100 L 150 150');
                animateObserve('.twoss-pl-bmd path','M 100 300 L 300 300 L 200 250 L 100 300');
            } 
            if (value === "UDL" && selectedDropdownval === "Two Side SS")
            {
                 previousClickedEle.push("set8");
                document.getElementById("set8").style.display="block";           
                document.getElementById("mes8").innerHTML = "message8";
                animateBeam("#main-beam", "#twoss-beam-udl");
                previousClickedBeam.push("beam8");
                document.getElementById("beam8").style.display="none";
                animateObserve('.twoss-udl-sfd path','M 150 150 L 450 150 L 450 250 L 150 50 L 150 150');
                animateObserve('.twoss-udl-bmd path','M 100 300 L 400 300 Q 250 150 100 300');
            }
        }
    }

    }

    //<button id="test" onclick="animateObserve('svg', '', '', this.id)">Play</button>


    // Note: generate radio button dynamically which are showing on index.html 
    // experiment logic on main.js
    // all the common animations on animations.js
    // utils.js file : if same it's same logic /common/
    // step1: create all animations in animations.js ----done
    // step2: skleten structure in main.js /sudo code if it's final add logic - done 
    // step3: invoke logic and from utils.js if need



