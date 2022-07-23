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

      // setting recipe variables from data
      var drinkName = data.drinks[0].strDrink;
      var drinkGlass = data.drinks[0].strGlass;
      var drinkImg = data.drinks[0].strDrinkThumb;
      var instructions = data.drinks[0].strInstructions;
      // var id = data.drinks[i].idDrink;
      // var tags = data.drinks[i].strTags;

      // inserting variables into recipe html
      $("#titleName").html(drinkName);
      $("#subGlass").html("use a " + drinkGlass);
      $("#drinkImg").children(1).attr("src", drinkImg);
      // $("#drinkTags").html(drinkTags);
      $("#directions").html(instructions);
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

function writeToModal(url) {
  let tableRowsBody = [];
  let el = document.getElementById("modal-cocktail");

  callApi(url).then(function (response) {
      data = response.drinks;

      data.forEach(function (item) {
          let dataRow = [];
          dataRow.push(`<p><bold>Glass: </bold>${item.strGlass}</p>`);
          dataRow.push(`<p><bold>Category: </bold>${item.strCategory}</p>`);
          dataRow.push(`<p><bold>Instructions: </bold>${item.strInstructions}</p>`);
          dataRow.push(`<p><bold>Ingredients: </bold> <ul style="list-style-type:disc;"></p>`);

          // element to add to the modal
          const ingredientToLoop = [{
              "ingredient": item.strIngredient1,
              "measure": item.strMeasure1
          }, {
              "ingredient": item.strIngredient2,
              "measure": item.strMeasure2
          }, {
              "ingredient": item.strIngredient3,
              "measure": item.strMeasure3
          }, {
              "ingredient": item.strIngredient4,
              "measure": item.strMeasure4
          }, {
              "ingredient": item.strIngredient5,
              "measure": item.strMeasure5
          }, {
              "ingredient": item.strIngredient6,
              "measure": item.strMeasure6
          }, {
              "ingredient": item.strIngredient7,
              "measure": item.strMeasure7
          }, {
              "ingredient": item.strIngredient8,
              "measure": item.strMeasure8
          }, {
              "ingredient": item.strIngredient9,
              "measure": item.strMeasure9
          }];

          ingredientToLoop.forEach(pushIngredient);

          function pushIngredient(item) {
              if (item.ingredient !== null) {
                  if (item.measure !== null) {
                      dataRow.push(`<li>${item.measure} of ${item.ingredient}</li>`);
                  } else {
                      dataRow.push(`<li>${item.ingredient}</li>`);
                  }
              }
          }

          dataRow.push(`</ul>`);
          tableRowsBody.push(`${dataRow}`);
      });

      el.innerHTML = `${tableRowsBody}`.replace(/,/g, "");

  })
}