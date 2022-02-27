function getOption() {
    selectElement = document.querySelector('#menu');
    boundaryType = selectElement.value;
    document.querySelector('.boundaryType').textContent = boundaryType;
    console.log(boundaryType);
}

function displayRadioValue() {
    var ele = document.getElementsByName('answer');
      
    for(i = 0; i < ele.length; i++) {
                  
        if(ele[i].type="radio") {
          
            if(ele[i].checked)
                document.getElementById("result").innerHTML
                        += ele[i].value;
        }
        
    }
}