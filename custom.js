$(window).load(function() {  document.getElementById("loadcont").style.display = "none"; });
$(window).load(function() {  document.getElementById("nav").style.display = "block"; });

    $(".bgbox").bgswitcher({
  images: ["images/e1.jpg", "images/e2.jpg", "images/e3.jpg", "images/e4.jpg", "images/e5.jpg","images/e6.jpg"], // Background images
  effect: "fade", // fade, blind, clip, slide, drop, hide
  interval: 5000, // Interval of switching
  loop: true, // Loop the switching
  shuffle: false, // Shuffle the order of an images
  duration: 5000, // Effect duration
  easing: "swing" // Effect easing
});

$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});
 






$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


$(function() {
$('#myCarousel').hover(function() { 
    $('#controls').fadeIn(); 
}, function() { 
    $('#controls').fadeOut(); 
});
});


$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage'],#acontact").on('click', function(event) {
      
        
        var url = window.location;
 
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 80
    }, 900, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
            var url = window.location;
  
    });
  });
  
  // Slide in elements on scroll
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
    
   }
        else
            {
               $(this).removeClass("slide");
            }
    });
  });
})

$(document).ready(function () {
    $(window).scroll(function () {

        var y = $(this).scrollTop();

        $('.link').each(function (event) {
            var d=$($(this).attr('href')).offset().top;
            d=d-81;
            if (y >= d ) {
                $('.link').not(this).removeClass('active');
                $(this).addClass('active');
            }
        });

    });
});


