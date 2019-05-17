(function ($) {
  "use strict";

  /* ------------------  Loading Screen ------------------ */

  $(window).on("load", function () {
    $(".preloader").fadeOut("slow");
    $(".preloader").remove();
  });

  /* ------------------ HEADER AFFIX ------------------ */

  var $navAffix = $(".header-onepage nav");
  $navAffix.affix({
    offset: {
      top: 50
    }
  });

  /* ------------------ HEADER One Page ------------------ */

  if ($('body').length > 0) {
    $(window).on("scroll", function () {

      $('section').each(function () {
        var sectionID = $(this).attr("id"),
          sectionTop = $(this).offset().top - 100,
          sectionHight = $(this).outerHeight(),
          wScroll = $(window).scrollTop();
        if (wScroll > sectionTop - 1 && wScroll < sectionTop + sectionHight - 1) {
          $("nav a[href='#" + sectionID + "']").parent().addClass("active");
        } else {
          $("nav a[href='#" + sectionID + "']").parent().removeClass("active");
        }

      });
    });
  }

  /* ------------------  Background ------------------ */

  var $bgSection = $(".bg-section");
  var $bgPattern = $(".bg-pattern");
  var $colBg = $(".col-bg");

  $bgSection.each(function () {
    var bgSrc = $(this).children("img").attr("src");
    var bgUrl = 'url(' + bgSrc + ')';
    $(this).parent().css("backgroundImage", bgUrl);
    $(this).parent().addClass("bg-section");
    $(this).remove();
  });

  $bgPattern.each(function () {
    var bgSrc = $(this).children("img").attr("src");
    var bgUrl = 'url(' + bgSrc + ')';
    $(this).parent().css("backgroundImage", bgUrl);
    $(this).parent().addClass("bg-pattern");
    $(this).remove();
  });

  $colBg.each(function () {
    var bgSrc = $(this).children("img").attr("src");
    var bgUrl = 'url(' + bgSrc + ')';
    $(this).parent().css("backgroundImage", bgUrl);
    $(this).parent().addClass("col-bg");
    $(this).remove();
  });

  /* ------------------  POPUP VIDEO ------------------ */

  $('.popup-video,.popup-gmaps').magnificPopup({
    disableOn: 700,
    mainClass: 'mfp-fade',
    removalDelay: 0,
    preloader: false,
    fixedContentPos: false,
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ewFUkNMoFLU?autoplay=1" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
        '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        }
      },
      srcAction: 'iframe_src',
    }
  });

}(jQuery));