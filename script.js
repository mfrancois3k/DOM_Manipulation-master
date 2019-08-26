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
function changeTitle() {
  var title = document.getElementById('main-title');

  title.innerHTML = "Dom\'s  page"
  
}
changeTitle()
  // Part 2
function backgroundChange() {
  var colorChange = document.querySelector('body').style.background = "#FF9E77";
   console.log(colorChange);
}
backgroundChange();

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
var myNewListItem = document.createElement('li');

const myul4 = document.getElementsByClassName('side-bar')[1].getElementsByTagName('ul')[0];
myNewListItem.textContent = "New York";
myul4.appendChild(myNewListItem);

}

addingDom () 

  // Part 7
  function newBlog() {
    let post = document.createElement('div');
    console.log(post)
    post.className ="blog-post";

    let title =document.createElement('hi');
    title.innerHTML = 'The Bronx'

    let p = document.createElement('p')
    p.innerHTML = "I DROVE MY CAR INTO A BODEGA AND PICKED UP A BACONEEGGANDCHEESE"

    let main =document.querySelector('.main')

    main.appendChild(post);
    post.appendChild(title);
    post.appendChild(p)

  }

  newBlog()


  // Part 8
   function randomQuote() {
     let button = document.querySelector(#quate-title);
     console.log(button)
     button.addEventListener('click', randomQuote)
   }

   randomQuote()

  // Part 9




});
