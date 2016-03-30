//DOC ready
$(document).ready(function() {
  // var visible = false;

  /* Push the body over by 285px over */
  openSideMenu = function() {
    $('.meny').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "220px"
    }, 200);
    // Add css style
    $('.meny_btn').addClass('meny_btn-open');

    // Change the onclick attribute to get ready to be closed next time it gets clicked
    $('.meny_btn').attr('onclick', 'closeSideMenu()');

    // Change the glyphicon to the cross
    $('.meny-glyph').attr('class', 'glyphicon glyphicon-remove meny-glyph');

    // visible = true;
  };

  /* Then push them back */
  closeSideMenu = function() {
    $('.meny').animate({
      left: "-220px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
    // Change back the glyphicon to the hamburger
    $('.meny-glyph').attr('class', 'glyphicon glyphicon-menu-hamburger meny-glyph');

    // Change back the onclick attribute to get ready to be opened next time it gets clicked
    $('.meny_btn').attr('onclick', 'openSideMenu()');

    // Remove the css style
    $('.meny_btn').removeClass('meny_btn-open');
    // visible = false;
  };





  /* Then push them back */
  // $('.meny_btn-close').click(function() {
  //   $('.meny').animate({
  //     left: "-285px"
  //   }, 200);
  //
  //   $('body').animate({
  //     left: "0px"
  //   }, 200);
  //   $('.meny_btn').removeClass('meny_btn-open')
  // });
}); // end DOC ready
