  var $display = $(".imageGallery li");
  var $overlay = $('<div class="overlay"></div>');
  var $prev = $('<button type="button" class="prev" aria-label="previous">Previous</button>');
  var $next = $('<button type="button" class="next" aria-label="next">Next</button>');
  var $image = $("<img>");
  var $caption = $("<p></p>");
  

  
  $overlay.append($prev);
  $overlay.append($next);
  $overlay.append($image);
  $overlay.append($caption);
  $("body").append($overlay);
  
  
function loadImage(event) {
  event.preventDefault();
  $(this).addClass("started");
  var imageSelect = $(this).children();
  var imageLocation = imageSelect.attr("href");
  if ( $(this).is(":first-child") ) {
    $(".prev").hide();
  } else {
    $(".prev").show();
  }
    if ( $(this).is(":last-child") ) {
    $(".next").hide();
  } else {
    $(".next").show();
  }
  
  $image.attr("src", imageLocation);
  var captionText = imageSelect.children("img").attr("alt");
  $caption.text(captionText);
  
  $overlay.show();
  console.log(imageLocation);    
}

function nextImage() {
    var imageSelect = $(".started").closest('li').next().children();
	
	if ( (imageSelect).parent().is(":last-child") || (imageSelect).parent().is(":first-child")) {
		$(".next").hide();
		
    } else {
      $(".next").show();
	  $(".prev").show();
    }
	
    $(".started").removeClass("started");
    var imageLocation = imageSelect.attr("href");
    $image.attr("src", imageLocation);
    var captionText = imageSelect.children("img").attr("alt");
    $caption.text(captionText);  
    console.log(imageLocation);
    imageSelect.addClass("started");
	

  }
  
function prevImage() {
    var imageSelect = $(".started").closest('li').prev().children();
    $(".started").removeClass("started");  
    var imageLocation = imageSelect.attr("href");
    
  
    $image.attr("src", imageLocation);
    var captionText = imageSelect.children("img").attr("alt");
    $caption.text(captionText);
    imageSelect.addClass("started");
    console.log(imageLocation);
	
	if ( (imageSelect).parent().is(":last-child") || (imageSelect).parent().is(":first-child")) {
		$(".prev").hide();
		
    } else {
      $(".next").show();
	  $(".prev").show();
    }
}
 
$display.click(loadImage);
$next.click(nextImage);
$prev.click(prevImage); 

