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