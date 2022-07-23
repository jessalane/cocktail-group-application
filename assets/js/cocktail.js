var searchByName = $('#search-button');
// Update ID to our running list
var recipe = $('#recipe');
// cocktailList.appendChild (testCocktailCard);
var drunkSubmitEl = $('#drinkSubmit');


function getApi() {
  var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
  .then(function (data) {
    console.log(data);


    for (var i = 0; i < data.drinks.length; i++) {

      var drinkName = data.drinks[i].strDrink;
      var drinkImg = data.drinks[i].strDrinkThumb;
      var id = data.drinks[i].idDrink;
      var instructions = data.drinks[i].strInstructions + i;
      
      console.log(id);
    
      // var cocktailCard = function (drinkName, drinkImg, id, instructions)
      // recipe.append (cocktailCard);
    }
  });
}

$("#drinkSubmit").click(function(event) {
  event.preventDefault();

  var searchParam = "";

  if ($("#ingredient").val()) {
    searchParam += $("ingredient").val();
    console.log(searchParam);
}

// $( "#target" ).click(function() {
//   alert( "Handler for .click() called." );
// });

})



getApi();





// searchByName.click(getApi());

// function createCocktailCard (name, imageUrl, id) {
//   var result = document.createElement ('div');

//   // Setting the class
//   result.classList.add ('card');
  
//   var h3 = document.createElement ('h3');
//   h3.textContent = name;
//   result.appendChild (h3);

//   var img = document.createElement ('img');
//   img.src = imageUrl;
//   result.appendChild (img);

//   return result;
// }
// // I think we need this in the getApi function
// for (var i = 0; i < drinks.length; i++) {
//   var drink = drinks[i];
//   var name = drink.strDrink;
//   var imageUrl = drink.strDrinkThumb;
//   var id = drink.idDrink;

  // var cocktailCard = createCocktailCard (name, imageUrl, id);
  // cocktailList.appendChild (cocktailCard);
// }

// // Add one cocktail to the body element by calling the function with some arguments
// var testCocktailCard = createCocktailCard ("Stinger", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2ahv791504352433.jpg", 17193);

// document.body.appendChild (testCocktailCard);

