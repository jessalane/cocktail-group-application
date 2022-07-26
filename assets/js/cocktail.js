var searchByName = $('#search-button');
// Update ID to our running list
var recipe = $('#recipe');
var drunkSubmitEl = $('#drinkSubmit');


function getApi(searchParameters) {
  var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/' + searchParameters;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // populateRecipe(data);

      if (data.drinks.length > 1) {
        $("#multiplePop").css({
          "visibility": "visible"
        });
        selectMultiple(data);
      }
      else {
        populateRecipe(data);
      }
    })
}

function selectMultiple(data) {

  for(i = 0; i < data.drinks.length; i++) {
    var drinkOptions = data.drinks[i].strDrink;

    $("#drinkOptions").append("<input type='checkbox' name='" + drinkOptions + "' value='" + drinkOptions + "'> <label for='" + drinkOptions + "'>"  + drinkOptions +  "</label>");
  }

  $("#multipleSub").click(function (event) {
    event.preventDefault();

    getApi(searchParameters);
  })
}

function populateRecipe(data) {
  for (var i = 0; i < data.drinks.length; i++) {

    // setting recipe variables from data
    var drinkName = data.drinks[0].strDrink;
    var drinkGlass = data.drinks[0].strGlass;
    var drinkImg = data.drinks[0].strDrinkThumb;
    var instructions = data.drinks[0].strInstructions;
    var drinks = data.drinks[0];
    // var id = data.drinks[i].idDrink;
    var tags = data.drinks[0].strTags;

    // setting ingredients  measurement into array
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
      "measure": drinks.strMeasure13
    }, {
      "ingredient": drinks.strIngredient14,
      "measure": drinks.strMeasure14
    }, {
      "ingredient": drinks.strIngredient15,
      "measure": drinks.strMeasure15
    }];

    // inserting variables into recipe html
    $("#titleName").html(drinkName);
    $("#subGlass").html("use a " + drinkGlass);
    $("#drinkImg").children(1).attr("src", drinkImg);
    $("#directions").html(instructions);

    if (tags === null) {
      $("#drinkTags").html(" ");

    } else {
      $("#drinkTags").html(tags);
    }

    function pushIngredient() {
      $("#ingredients-container").empty();
      for (i = 0; i < ingredients.length; i++) {

        if (ingredients[i].ingredient !== null) {
          if (ingredients[i].measure !== null) {
            $("#ingredients-container").append(`<li> ● ${ingredients[i].measure} of ${ingredients[i].ingredient}</li>`);
          } else {
            $("#ingredients-container").append(`<li> ● ${ingredients[i].ingredient}</li>`);
          }
        }
      }
    }
  }
  $.each(pushIngredient(ingredients));
}

$("#drinkSubmit1").click(function (event) {
  event.preventDefault();
  var searchByName = $('#searchByName').val();

  searchParameters = "search.php?s=" + searchByName;

  getApi(searchParameters);
})

$("#drinkSubmit2").click(function (event) {
  event.preventDefault();
  var searchIngredient = $('#searchByIngredient').val();

  searchParameters = "filter.php?i=" + searchIngredient;

  getApi(searchParameters);
})

$("#yolo").click(function (event) {
  event.preventDefault();

  searchParameters = "random.php"

  getApi(searchParameters);
})

function multipleDrinks() {

}


