$(document).ready(function() {
  /* For sticky navigation */
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "30px"
    }
  );

  /* Scroll on button clicks */
  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top - 10 },
      1000
    );
  });
  $(".js--scroll-to-start").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top - 10 },
      1000
    );
  });

  /* Navigation Scroll (Using Smooth scrolling--css-tricks.com) */
  $(function() {
    $("a[href*=#]:not([href=#])").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 10
            },
            1000
          );
          return false;
        }
      }
    });
  });

  /* Animations on scroll (Using animate.css) */
  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );
  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );
  $(".js--wp-3").waypoint(
    function(direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );
  $(".js--wp-4").waypoint(
    function(direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );

  /* For mobile navigation */
  $(".js--nav-icon").click(function() {
    const nav = $(".js--main-nav");
    const icon = $(".js--nav-icon i");
    nav.slideToggle(200);
    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
  $(window).resize(function() {
    var nav = $(".js--main-nav");

    var icon = $(".js--nav-icon i");

    if ($(window).width() > 767) {
      nav.css("display", "block");

      icon.addClass("ion-close-round");

      icon.removeClass("ion-navicon-round");
    } else {
      nav.css("display", "none");

      icon.addClass("ion-navicon-round");

      icon.removeClass("ion-close-round");
    }
  });
});
