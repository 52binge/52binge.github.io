(function($){

  // Caption
  $('.article-entry').each(function(i){
    $(this).find('img').each(function(){

      if (index === 0) {
        $(this).removeClass('fancybox'); // blair add this 3 line @2019-06-01
      }
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  // Mobile nav
  $('#main-nav-toggle').click(function () {
    $('#header').toggleClass('mobile-on');
  });

  // 2018-01-12 add by blair
  $('.j_handlclick').on('click', function(){ 
    //alert(111)
    window.open($(this).attr('href') + location.href);
  })

})(jQuery);


