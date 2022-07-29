// MY API KEY AND THE URL
var APIKey = "K/T5UXdLDGG+gbua67VqQw==w2i8da76oBKobzcv";
 
var query = "mojito";
$.ajax({
    method: 'GET',
    url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
    headers: { 'X-Api-Key': APIKey },
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

    // // inserting variables into recipe html
    // $("#titleName").html(drinkName);
    // $("#subGlass").html("use a " + drinkGlass);
    // $("#drinkImg").children(1).attr("src", drinkImg);
    // $("#directions").html(instructions);




//   // checks if the tags variable has value
//   if (tags === null) {
//     // inserts empty string instead of null
//     $("#drinkTags").html(" ");

//   } else {
//     // inserts tags if it has value
//     $("#drinkTags").html(tags);
//   }

//   // function rotating through populated ingredients
//   function pushIngredient() {
//     // emptying the ingredients before populating more
//     $("#ingredients-container").empty();
//     // rotating i though the number of available ingredients
//     for (i = 0; i < ingredients.length; i++) {

//       // checking that ingredients have value
//       if (ingredients[i].ingredient !== null) {
//         // checking that measure has value
//         if (ingredients[i].measure !== null) {
//           // only appending both when they have a string
//           $("#ingredients-container").append(`<li> ● ${ingredients[i].measure} of ${ingredients[i].ingredient}</li>`);
//         } else {
//           // appends only ingredient when there is no measurement
//           $("#ingredients-container").append(`<li> ● ${ingredients[i].ingredient}</li>`);
//         }
//       }
//     }
//   }
