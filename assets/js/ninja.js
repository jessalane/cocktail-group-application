// function getNinja() {
//     // LOCAL VARIABLES
//     var query = "mojito";
//     var APIKey = "K/T5UXdLDGG+gbua67VqQw==w2i8da76oBKobzcv";

//     $.ajax({
//         method: 'GET',
//         url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
//         headers: {
//             'X-Api-Key': APIKey
//         },
//         contentType: 'application/json',
//         success: function (data) {
//             // CONSOLE LOG THE DATA
//             console.log(data);

//             // NUTRITION VARIABLES
//             var calories = data.items[0].calories;
//             var fat = data.items[0].fat_total_g;
//             var carbs = data.items[0].carbohydrates_total_g;
//             var protein = data.items[0].protein_g;
//             var sugars = data.items[0].sugar_g;

//         },
//         error: function ajaxError(jqXHR) {
//             console.error('Error: ', jqXHR.responseText);
//         }

//     });
// }


// getNinja();