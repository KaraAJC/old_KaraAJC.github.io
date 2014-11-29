// var main = function() {
//     $('.ide').click(function() { 
//     	console.log("you clicked div.ide");
//         $(this).next('.description').hide();
//     });
// }
// $(document).ready(main);


$(document).ready(function() {
   $('.item').click(function() {
   	$('.description').hide();
    $(this).next('.description').show();
   }); 
});