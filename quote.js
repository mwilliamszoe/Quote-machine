let text = document.querySelector('#text')
let author = document.querySelector('#author')
let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'



window.onload = function () {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            let generateRandomQuote = function () {
                randomQuote = jsonData.quotes[Math.floor(Math.random() * jsonData.quotes.length)]
                text.textContent = randomQuote.quote
                author.textContent = `- ${randomQuote.author}`
            }
            
            $('#new-quote').click(function () {
                generateRandomQuote();
            });
            generateRandomQuote() 
        });

}


/* body, #tweet-quote, #tumblr-quote: color */

// #new-quote: background-color


// let randomColor = generateRandomColor

// function generateRandomColor() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     return "rgb(" + r + "," + g + "," + b + ")"
// }
// console.log(theChosenColor, 'the chosen color')

// let r = Math.floor(Math.random() * 256);
// let g = Math.floor(Math.random() * 256);
// let b = Math.floor(Math.random() * 256);
// let theChosenColor = "rgb(" + r + "," + g + "," + b + ")"
// console.log(theChosenColor)


// let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
// var color = Math.floor(Math.random() * colors.length)