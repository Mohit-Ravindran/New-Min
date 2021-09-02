function ageindays() {

    var birthyear = prompt("What is your name?");
    // var bindays = (2021 - birthyear) * 365;
    if (birthyear === "anusha" || birthyear === "Anusha") {
        var bindays = "Mohit Ravindran";
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode( 'Your soulmates name is ' + bindays + ' and he loves you so very much' + '');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textanswer);
    document.getElementById('flex-result').appendChild(h1);
     }

 else{
    var bindays = "Mohit Ravindran";
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode( 'Invalid Soul');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textanswer);
    document.getElementById('flex-result').appendChild(h1);
     
    
}



 }
    