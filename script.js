let buttons = document.querySelectorAll('.gameButton');
let colors = ["green", "red", "yellow", "blue"];
let simon;
let input = [];
let center = document.getElementById('center');
let randomNum;
let label = document.getElementById('label')

//could add difficulty feature. here's how:
//time is a variable, and upon selecting difficulty it sets 
//high, med, or low time to show how fast button moves

//could make buttons appear faster as more buttons added. 
//this would require that time is a decreasing variable

//consider adding a specific sound for each color

//function that notes when a button is clicked
for(let i = 0; i <buttons.length; i++) {
    buttons[i].addEventListener('click', function buttonOn() {
        // console.log(colors[i] + " was clicked");
        // setTimeout(function() {buttons[i].style.opacity = "75%";}, 250);

        setTimeout(function() {buttons[i].style.opacity = "60%";}, 250);
        buttons[i].style.opacity = "100%";


        input.push(i);
        checker();
    })
}

// push start
document.getElementsByClassName('start')[0].addEventListener('click', () => startGame());

function startGame() {
    console.log('start game');
    console.log(document.getElementsByClassName('start'));
    label.innerHTML = "Simon's Turn!";
    center.classList.remove('start');
    console.log(document.getElementsByClassName('start'));
    setTimeout(simonsTurn, 1500);
    center.innerHTML = "";
    simon = [];
}

function simonsTurn() {
    label.innerHTML = "Simon's Turn!";
    
    // generate random number from 0-3
    randomNum = Math.floor((Math.random() * 4));
    // console.log('randomNum is ' + randomNum);

    // store number in simon
    simon.push(randomNum);
    console.log('simon is ' + simon);

    // for each # in simon, light up buttons[i]
    for(let i = 0; i < simon.length; i++) {
        setTimeout(function() {
            console.log('is i ' + i);
            setTimeout(function() {buttons[simon[i]].style.opacity = "60%";}, 500);
            buttons[simon[i]].style.opacity = "100%";
            
            //light up center to match simon's clicks
            setTimeout(function() {center.style.backgroundColor = "rgb(40, 40, 40)";}, 500);
            center.style.backgroundColor = colors[simon[i]];

        }, 1000 * i);
    }

    //start players turn
    setTimeout(playersTurn, 1000*simon.length);
}

function playersTurn() {
    label.innerHTML = "Your Turn!";
    console.log('input WAS ' + input);

    input = [];
    console.log('input is NOW ' + input);    
}

function checker() {
    console.log('in checker');
    if(input[input.length-1]==simon[input.length-1]) {
        console.log('true');
        if(input.length == simon.length) {
            console.log('go to simon B'); 
            setTimeout(simonsTurn, 1500);
        }
    }
    else {
        if(JSON.stringify(input) == JSON.stringify(simon)) {console.log('go to simon C'); simonsTurn();}
        else {
            label.innerHTML = 'Game Over!';
            center.innerHTML = "Total Score: " + (simon.length - 1) + "<br><br>Click here to try again!";
            center.classList.add('start');
        }
    }
}



// generate random number from 0-3
// random = Math.floor((Math.random() * 4));

// store number in simon
// simon.push(random);

// for each # in simon, light up buttons[i]
// for(let i = 0; i <simon.length; i++) {
//     setTimeout(function() {buttons[i].style.opacity = "75%";}, 300);
//     simon[i].style.opacity = "100%";
// }

// wait for user to click buttons (nextInput)
// add nextInput to input
// if input == simon, input = "" and generate next random number
// else, lose game