var quotes = [
  'I live my life a quarter mile at a time',
  'I said a ten-second car, not a ten-minute car',
  'You can have any brew you want... as long as it\'s a Corona.',
  'You almost had me? You never had me - you never had your car!',
  'I don\'t have friends. I have family.',
  'It don\'t matter if you win by an inch or a mile. Winning\'s winning.'
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  var randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1


  // Part 2


  // Part 3
    function faveThings() {
      var sidebar = document.querySelectorAll(".side-bar");
      let faveThings = sidebar. getElementByTagName('li');

      faveThings[5].style.display = "none";
    }

  faveThings();
  // Part 4
   function specialTile() {
   let titles = document.querySelectorAll(".special-title");
    
   for (let i = 0; i < titles.length; i++){
     titles[i].style.fontSize = "2rem";
     }
   }

   specialTile();
  // Part 5
  function passRaces() {
    var sidebar = document.querySelectorAll('.side-bar');
    let races = sideBar[1]
    let places = races.getElementByTagName('li');

    for(let i = 0; i < places.length; i++) {
         if(places[i].innerHTML === "Chicago") {
           places[i].style.display = "none";
         }
      }
    }
  
  passRaces();

  // Part 6
function addingDom () {
  var sideBar = document.querySelectorAll('.side-bar li');
 
  Array.from(sideBar).forEach(function(sideBar) {
    sideBar.textContent += '(New link)';
 });
}

addingDom () 

  // Part 7
  


  // Part 8


  // Part 9




});
