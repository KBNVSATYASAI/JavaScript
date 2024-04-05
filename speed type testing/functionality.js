let timing = document.getElementById('timer');
let displayquote = document.getElementById('quoteDisplay');
let enteredvalue = document.getElementById('quoteInput');
let submitbutton = document.getElementById('submitBtn');
let resultitem = document.getElementById('result');
let resetaction = document.getElementById('resetBtn');
let timeintervel;

function randomquotegenerate() {
    let options = {
        method: 'GET'
    };
    fetch('https://apis.ccbp.in/random-quote', options)

        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let dataaa = jsonData.content;
            displayquote.textContent = dataaa;

        });
}

let counter = 0;

function timersection() {
    clearInterval(timeintervel);
    timeintervel = setInterval(function() {
        counter = counter + 1;
        timing.textContent = counter;
    }, 1000);



    submitbutton.addEventListener('click', function() {

        let userentered = enteredvalue.value.trim();
        let systemgenerated = displayquote.textContent.trim();
        if (systemgenerated === userentered) {
            resultitem.textContent = `you typed in  ${counter} seconds`;
        } else {
            resultitem.textContent = "you typed incorrect sentence";
        }
        clearInterval(timeintervel);
    });


    resetaction.addEventListener('click', function() {
        enteredvalue.value = '';
        resultitem.textContent = '';
        clearInterval(timeintervel);
        counter = 0;
        timing.textContent = counter;
        randomquotegenerate();
        timersection();

    });
}

randomquotegenerate();
timersection();