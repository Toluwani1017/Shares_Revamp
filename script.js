window.onload = init;

function init(){

	var name = document.getElementById("heading");
    name.innerHTML = "Toluwani Ayodele<hr><br>";

    // var titleT = document.createElement('p');
    // var node = document.createTextNode("Shares Traded in 30 days");
    // titleT.appendChild(node);
    // var box = document.getElementById('shareList');
    // titleT.style.fontSize = "larger";

    var dayShareArray = [];
    for (var x = 0; x <= 29; x++){
        randomNumber = Math.floor(Math.random() * (10000 - 7000) + 7000);
        dayShareArray[x] = randomNumber;
    }

    var box = document.getElementById('shareList');
    var ul = document.createElement('ul');
    

    for(i=0; i<=dayShareArray.length - 1; i++){
        var dayCounter = i+1;
        if (dayShareArray[i] > 8500 && dayCounter % 7 != 0){
            var li = document.createElement('li');
            li.innerHTML = "Day " + dayCounter + " . Shares traded:   " +  dayShareArray[i] + "  Traded above target.";
            ul.appendChild(li);
            li.style.color = "green";
        }
        else if (dayShareArray[i] < 8500 && dayCounter % 7 != 0){
            var li = document.createElement('li');
            li.innerHTML = "Day " + dayCounter + " . Shares traded:   " +  dayShareArray[i] + "  Traded below target.";
            ul.appendChild(li);
            li.style.color = "red";
        }
        else{
            dayShareArray[i] = 0;
            var li = document.createElement('li');
            li.innerHTML = "Day " + dayCounter + " . Shares traded:   " +  dayShareArray[i] + "  Market Closed, not traded.";
            ul.appendChild(li);
        }
       
    }

    box.appendChild(ul);


    var button = document.getElementById("gButton");
    button.onclick = handleButtonClick;

}



function handleButtonClick(){
    var textInput = document.getElementById('numOfShares');
    var sNum = textInput.value;
    var dayShareArray = [];
    for (var x = 0; x <= sNum - 1; x++){
        randomNumber = Math.floor(Math.random() * (10000 - 7000) + 7000);
        dayShareArray[x] = randomNumber;
    }

    var box = document.getElementById('shareList');
    var ul = document.createElement('ul');

    for(i=0; i<=dayShareArray.length - 1; i++){
        var dayCounter = i+1;
        if (dayShareArray[i] > 8500 && dayCounter % 7 != 0){
            var li = document.createElement('li');
            li.innerHTML = "Day " + dayCounter + " . Shares traded:   " +  dayShareArray[i] + "  Traded above target.";
            ul.appendChild(li);
            li.style.color = "green";
        }
        else if (dayShareArray[i] < 8500 && dayCounter % 7 != 0){
            var li = document.createElement('li');
            li.innerHTML = "Day " + dayCounter + " . Shares traded:   " +  dayShareArray[i] + "  Traded below target.";
            ul.appendChild(li);
            li.style.color = "red";
        }
        else{
            dayShareArray[i] = 0;
            var li = document.createElement('li');
            li.innerHTML = "Day " + dayCounter + " . Shares traded:   " +  dayShareArray[i] + "  Not traded.";
            ul.appendChild(li);
        }
       
    }

    box.appendChild(ul);

}
