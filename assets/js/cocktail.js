var searchByName = $('#search-button');
var recipe = $('#recipe');
var drunkSubmitEl = $('#drinkSubmit');

// set search param based on cocktail name
$("#drinkSubmit1").click(function (event) {
  event.preventDefault();
  var searchByName = $('#searchByName').val();

  searchParameters = "search.php?s=" + searchByName;

  getApi(searchParameters);
})

// set search parameters based on search by ingredient
$("#drinkSubmit2").click(function (event) {
  event.preventDefault();
  var searchIngredient = $('#searchByIngredient').val();

  searchParameters = "filter.php?i=" + searchIngredient;

  getApi(searchParameters);
})

// populate a random cocktail
$("#yolo").click(function (event) {
  event.preventDefault();

  searchParameters = "random.php"

  getApi(searchParameters);
})

// getting API based on the search parameters sent
function getApi(searchParameters) {

  var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/' + searchParameters;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // populates modal if there is 1> drink option
      if (data.drinks.length > 1) {
        // makes modal visible
        $("#multiplePop").css({
          "visibility": "visible"
        });
        //sends data to selectMultiple()
        selectMultiple(data);
      }
      // populates recipe if there is only one drink
      else {
        populateRecipe(data);
      }
    })
}

// populates the modal when there are multiple drink options
function selectMultiple(data) {
  // emptying the last search before populating more
  $("#drinkOptions").empty();

  // looping i through available drinks
  for (i = 0; i < data.drinks.length; i++) {
    var drinkOptions = data.drinks[i].strDrink;

    // appending drink names into an input checkbox
    $("#drinkOptions").append("<input type='checkbox' class ='xOption' name='" + drinkOptions + "' value='" + drinkOptions + "'> <label for='" + drinkOptions + "'>" + drinkOptions + "</label><br>");
  }

  // captures click on the multipleSub button
  $("#multipleSub").on("click", function () {

    // populateRecipe(data);

    // sets the selected box value into a variable
    var selected = $("input[type='checkbox']:checked").val();

    // adds the selected variable as search parameters
    searchParameters = "search.php?s=" + selected;

    // hides the modal
    $("#multiplePop").css({
      "visibility": "hidden"
    });

    if (searchParameters > 0) {
      populateRecipe(data);
    } else {
      // sends new search parameters to get Api
      getApi(searchParameters);
    }
  })
}

// populates the recipe field
function populateRecipe(data) {
  var query = data.drinks[0].strDrink;
  getNinja(query);

  $("article").css({
    "visibility": "visible"
  });

  for (var i = 0; i < data.drinks.length; i++) {
    // setting recipe variables from data
    var drinkName = data.drinks[0].strDrink;
    var drinkGlass = data.drinks[0].strGlass;
    var drinkImg = data.drinks[0].strDrinkThumb;
    var instructions = data.drinks[0].strInstructions;
    var drinks = data.drinks[0];
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

    // checks if the tags variable has value
    if (tags === null) {
      // inserts empty string instead of null
      $("#drinkTags").html(" ");

    } else {
      // inserts tags if it has value
      $("#drinkTags").html(tags);
    }

    // function rotating through populated ingredients
    function pushIngredient() {
      // emptying the ingredients before populating more
      $("#ingredients-container").empty();
      // rotating i though the number of available ingredients
      for (i = 0; i < ingredients.length; i++) {

        // checking that ingredients have value
        if (ingredients[i].ingredient !== null) {
          // checking that measure has value
          if (ingredients[i].measure !== null) {
            // only appending both when they have a string
            $("#ingredients-container").append(`<li> ● ${ingredients[i].measure} of ${ingredients[i].ingredient}</li>`);
          } else {
            // appends only ingredient when there is no measurement
            $("#ingredients-container").append(`<li> ● ${ingredients[i].ingredient}</li>`);
          }
        }
      }
    }

  }
  // rotating through the pushIngredient function for each ingredient 
  $.each(pushIngredient(ingredients));
}

function getNinja(query) {
  // LOCAL VARIABLES
  var APIKey = "K/T5UXdLDGG+gbua67VqQw==w2i8da76oBKobzcv";

  $.ajax({
    method: 'GET',
    url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
    headers: {
      'X-Api-Key': APIKey
    },
    contentType: 'application/json',
    success: function (data) {
      // CONSOLE LOG THE DATA
      console.log(data);

      // NUTRITION VARIABLES
      var calories = data.items[0].calories;
      var fat = data.items[0].fat_total_g;
      var carbs = data.items[0].carbohydrates_total_g;
      var protein = data.items[0].protein_g;
      var sugars = data.items[0].sugar_g;

      console.log(protein);
      console.log(fat);
      console.log(sugars);
      console.log(calories);
      console.log(carbs);

    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }

  });
}