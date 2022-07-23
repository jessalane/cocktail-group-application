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
      var drinks = data.drinks[0];
      // var id = data.drinks[i].idDrink;
      var tags = data.drinks[i].strTags;
      var ingredients = [{
              "ingredient": drinks.strIngredient1,
              "measure": drinks.strMeasure1
          }, {
              "ingredient": drinks.strIngredient2,
              "measure": drinks.strMeasure2
          }, {
              "ingredient": drinks.strIngredient3,
              "measure": drinks.strMeasure3
          }, {
              "ingredient": drinks.strIngredient4,
              "measure": drinks.strMeasure4
          }, {
              "ingredient": drinks.strIngredient5,
              "measure": drinks.strMeasure5
          }, {
              "ingredient": drinks.strIngredient6,
              "measure": drinks.strMeasure6
          }, {
              "ingredient": drinks.strIngredient7,
              "measure": drinks.strMeasure7
          }, {
              "ingredient": drinks.strIngredient8,
              "measure": drinks.strMeasure8
          }, {
              "ingredient": drinks.strIngredient9,
              "measure": drinks.strMeasure9
          }, {
              "ingredient": drinks.strIngredient10,
              "measure": drinks.strMeasure10
          }, {
              "ingredient": drinks.strIngredient11,
              "measure": drinks.strMeasure11
          }, {
              "ingredient": drinks.strIngredient12,
              "measure": drinks.strMeasure12
          }, {
              "ingredient": drinks.strIngredient13,
              "measure": drinks.strMeasure9
          }, {
              "ingredient": drinks.strIngredient14,
              "measure": drinks.strMeasure9
          }, {
              "ingredient": drinks.strIngredient15,
              "measure": drinks.strMeasure9
          }];

          // ingredients.forEach(ingredientsList);
          console.log(ingredients);



      // inserting variables into recipe html
      $("#titleName").html(drinkName);
      $("#subGlass").html("use a " + drinkGlass);
      $("#drinkImg").children(1).attr("src", drinkImg);
      $("#drinkTags").html(tags);
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


// https:github.com/severian5it/CocktailWebApp/blob/master/assets/js/apiCall.js
// function writeToModal(url) {
//   let tableRowsBody = [];
//   let el = document.getElementById("modal-cocktail");

//   callApi(url).then(function (response) {
//       data = response.drinks;

//       data.forEach(function (drinks) {
//           let dataRow = [];
//           dataRow.push(`<p><bold>Glass: </bold>${drinks.strGlass}</p>`);
//           dataRow.push(`<p><bold>Category: </bold>${drinks.strCategory}</p>`);
//           dataRow.push(`<p><bold>Instructions: </bold>${drinks.strInstructions}</p>`);
//           dataRow.push(`<p><bold>Ingredients: </bold> <ul style="list-style-type:disc;"></p>`);

//           // element to add to the modal
//           const ingredientToLoop = [{
//               "ingredient": drinks.strIngredient1,
//               "measure": drinks.strMeasure1
//           }, {
//               "ingredient": drinks.strIngredient2,
//               "measure": drinks.strMeasure2
//           }, {
//               "ingredient": drinks.strIngredient3,
//               "measure": drinks.strMeasure3
//           }, {
//               "ingredient": drinks.strIngredient4,
//               "measure": drinks.strMeasure4
//           }, {
//               "ingredient": drinks.strIngredient5,
//               "measure": drinks.strMeasure5
//           }, {
//               "ingredient": drinks.strIngredient6,
//               "measure": drinks.strMeasure6
//           }, {
//               "ingredient": drinks.strIngredient7,
//               "measure": drinks.strMeasure7
//           }, {
//               "ingredient": drinks.strIngredient8,
//               "measure": drinks.strMeasure8
//           }, {
//               "ingredient": drinks.strIngredient9,
//               "measure": drinks.strMeasure9
//           }, {
//               "ingredient": drinks.strIngredient10,
//               "measure": drinks.strMeasure10
//           }, {
//               "ingredient": drinks.strIngredient11,
//               "measure": drinks.strMeasure11
//           }, {
//               "ingredient": drinks.strIngredient12,
//               "measure": drinks.strMeasure12
//           }, {
//               "ingredient": drinks.strIngredient13,
//               "measure": drinks.strMeasure13
//           }, {
//               "ingredient": drinks.strIngredient14,
//               "measure": drinks.strMeasure14
//           }, {
//               "ingredient": drinks.strIngredient15,
//               "measure": drinks.strMeasure15
//           }];

//           ingredientToLoop.forEach(pushIngredient);

//           function pushIngredient(drinks) {
//               if (drinks.ingredient !== null) {
//                   if (drinks.measure !== null) {
//                       dataRow.push(`<li>${drinks.measure} of ${drinks.ingredient}</li>`);
//                   } else {
//                       dataRow.push(`<li>${drinks.ingredient}</li>`);
//                   }
//               }
//           }

//           dataRow.push(`</ul>`);
//           tableRowsBody.push(`${dataRow}`);
//       });

//       el.innerHTML = `${tableRowsBody}`.replace(/,/g, "");

//   })
// }