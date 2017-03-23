// Problem: user goes to a dead end when clicking on an img
// Solution: overlay

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);

//add overlay
$("#about").append($overlay);

    //an image
    //a caption


//capture the click event on a link to an image
$('.open-lightbox').click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    //update overlay with image linked in link
    $image.attr("src", imageLocation);
    //show the overlay
    $overlay.show();
    //Get child's alt attribute and set caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});


//when overlay is clicked
$overlay.click(function(){
    //hide overlay
    $overlay.hide();
});


