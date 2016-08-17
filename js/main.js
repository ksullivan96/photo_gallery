  var $display = $(".imageGallery li");
  var $overlay = $('<div class="overlay"></div>');
  var $prev = $('<button type="button" class="prev" aria-label="previous">Previous</button>');
  var $next = $('<button type="button" class="next" aria-label="next">Next</button>');
  var $image = $("<img class='image'>");
  var $span = $("<span class='close'></span>");
  var $caption = $("<p class='swipe'></p>");
  var imageSelect;
  

  $overlay.append($prev);
  $overlay.append($next);
  $overlay.append($image);
  $overlay.append($span);
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
  
  $overlay.fadeIn(600);
}

function nextImage() {
	$image.hide();
	$caption.hide();
    imageSelect = $(".started").closest('li').next().children();
	
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
	var $break = $(imageSelect).closest('li').length;
	$image.fadeIn(300);
	$caption.fadeIn(300);
	if ( $break === 0 ) {
		$(".next").hide();
		closeImage();
	}
    imageSelect.addClass("started");
	

  }
  
function prevImage() {
	$image.hide();
	$caption.hide();
	imageSelect = $(".started").closest('li').prev().children();
    $(".started").removeClass("started");  
    var imageLocation = imageSelect.attr("href");
    $image.attr("src", imageLocation);
    var captionText = imageSelect.children("img").attr("alt");
    $caption.text(captionText);
    imageSelect.addClass("started");
	$image.fadeIn(300);
	$caption.fadeIn(300);

	if ( (imageSelect).parent().is(":last-child") || (imageSelect).parent().is(":first-child")) {
		$(".prev").hide();
		
    } else {
      $(".next").show();
	  $(".prev").show();
    }
	
	var $break = $(imageSelect).closest('li').length;
	if ( $break === 0 ) {
		$(".prev").hide();
		closeImage();
	}
}

$('img').on('dragstart', function(event) {
    event.preventDefault();
});
function closeImage() {
	$overlay.fadeOut(600);
}
 
$display.click(loadImage);
$next.click(nextImage);
$prev.click(prevImage);
$span.click(closeImage);


document.onkeydown = function(event) {
	if (event.keyCode === 39) {
		nextImage();
	}
	else if (event.keyCode === 37) {
		prevImage();
	}
	else if (event.keyCode === 27) {
		closeImage();
	}
};




