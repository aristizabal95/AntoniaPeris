/*!
* Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
* Code licensed under the Apache License v2.0.
* For details, see http://www.apache.org/licenses/LICENSE-2.0.
*/

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
  var modal = this;
  var hash = modal.id;
  window.location.hash = hash;
  window.onhashchange = function() {
    if (!location.hash){
      $(modal).modal('hide');
    }
  }
});

$('.carousel.thumbnail-indicator').on('slide.bs.carousel', function() {
  var carousel = this;
  setTimeout(function() {
    // Get the thumbnails
    var thumbnails = $(carousel).find(".carousel-indicators").children();
    // Get the current thumbnail
    var currentThumbnail = $(carousel).find(".carousel-indicators .active");
    // Get thumbnail's position
    var activePos = currentThumbnail.offset().left;// + currentThumbnail.width()/2;

    // Obtain the offset between the thumbnail and the center of container
    var width = thumbnails.parent().width();
    var maxScroll = thumbnails.parent()[0].scrollWidth - width;
    var offset = activePos - width/2;
    var scrollPos = thumbnails.parent().scrollLeft() + offset;
    scrollPos = Math.max(Math.min(scrollPos, maxScroll), 0);
    thumbnails.parent().animate({scrollLeft: scrollPos}, 500);
    //thumbnails.parent().scrollLeft(scrollPos);
  }, 10);
});

$('.hover-expandable').hover(
  function() {
    var $prev = $(this).prev()
    var $next = $(this).next()
    var regexp = /col-sm-(\d+)/
    var expand_size = 0
    if ($prev.length) {
      var classes = $prev.attr("class");
      var match = regexp.exec(classes);
      var size = parseInt(match[1]);
      if (size > 1) {
        $prev.addClass("col-sm-".concat(size-1));
        $prev.removeClass(match[0]);
        expand_size += 1;
      }
      else {
        $prev.addClass("unshrinkable");
      }
    }
    if ($next.length) {
      var classes = $next.attr("class");
      var match = regexp.exec(classes);
      var size = parseInt(match[1]);
      if (size > 1) {
        $next.addClass("col-sm-".concat(size-1));
        $next.removeClass(match[0]);
        expand_size += 1;
      }
      else {
        $next.addClass("unshrinkable");
      }
    }
    var classes = $(this).attr("class");
    var match = regexp.exec(classes);
    var size = parseInt(match[1]);
    $(this).addClass("col-sm-".concat(size+expand_size));
    $(this).removeClass(match[0]);
  },
  function() {
    var $prev = $(this).prev()
    var $next = $(this).next()
    var regexp = /col-sm-(\d+)/
    var expand_size = 0
    if ($prev.length) {
      var classes = $prev.attr("class");
      var match = regexp.exec(classes);
      var size = parseInt(match[1]);
      if (!$prev.is(".unshrinkable")) {
        $prev.addClass("col-sm-".concat(size+1));
        $prev.removeClass(match[0]);
        expand_size -= 1;
      }
      else {
        $prev.removeClass("unshrinkable");
      }
    }
    if ($next.length) {
      var classes = $next.attr("class");
      var match = regexp.exec(classes);
      var size = parseInt(match[1]);
      if (!$next.is(".unshrinkable")) {
        $next.addClass("col-sm-".concat(size+1));
        $next.removeClass(match[0]);
        expand_size -= 1;
      }
      else {
        $next.removeClass("unshrinkable");
      }
    }
    var classes = $(this).attr("class");
    var match = regexp.exec(classes);
    var size = parseInt(match[1]);
    $(this).addClass("col-sm-".concat(size+expand_size));
    $(this).removeClass(match[0]);
  }
)

$(document).ready(function() {
  $('.parallax-window').parallax({
    naturalWidth: 600,
    naturalHeight: 400,
    speed: 0.4
  })

  setTimeout(function() {
    $('video')[0].play();
  }, 2000);

})
