$(document).ready(function() {

  $('.promo__panel-heading').click(function() {
      $(this).toggleClass('in').next().slideToggle();
      $('.promo__panel-heading').not(this).removeClass('in').next().slideUp();
  });


  $('.promo__panel-heading').on('click', function(event) {
    event.preventDefault();

    $('.promo').toggleClass('promo-photo')


  });

  $('.promo__pc-link').on('click', function(event){
    event.preventDefault();

    $('.promo__title').animate({opacity: "0", top: "-=260"}, 3000)
    .hide('slow');
    $('.promo__pc-nav').animate({opacity: "0", top: "-=260"}, 3000)
    .hide('slow');
    $('.promo__pc-wrapper-js').animate({opacity: "0", top: "-=460"}, 1200)
    .hide('slow');

  });



  $('#link-1').on('click', function(event){
    event.preventDefault();

    $('#jsLink-1').toggleClass('active');
  });


  $('#link-2').on('click', function(event){
    event.preventDefault();

    $('#jsLink-2').toggleClass('active');
  });


  $('#link-3').on('click', function(event){
    event.preventDefault();

    $('#jsLink-3').toggleClass('active');
  });

});
