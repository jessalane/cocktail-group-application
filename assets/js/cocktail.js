var repoList = document.querySelector('');
var searchByName = document.getElementById('');
// Update ID to our running list
var cocktailList = document.querySelector ('#cocktail-list');
cocktailList.appendChild (testCocktailCard);

function getApi() {
  var searchCocktail = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
}


function createCocktailCard (name, imageUrl, id) {
  var result = document.createElement ('div');

  // Setting the class
  result.classList.add ('card');
  
  var h3 = document.createElement ('h3');
  h3.textContent = name;
  result.appendChild (h3);

  var img = document.createElement ('img');
  img.src = imageUrl;
  result.appendChild (img);

  return result;
}
// Add one cocktail to the body element by calling the function with some arguments
var testCocktailCard = createCocktailCard ("Stinger", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2ahv791504352433.jpg", 17193);

document.body.appendChild (testCocktailCard);