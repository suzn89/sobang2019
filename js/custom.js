$(document).ready(function(){
  $(window).resize(function() {
    $("body").css({ minHeight: '1080' + 'px' });
  });
  panelOpen = true;
  $('.panelbtn').click(function (e) { 
    e.preventDefault();
    if (panelOpen) {
      $(this).addClass('open');
      $('.leftNav').stop(true,true).animate({'left':'-350px'},300,function(){        
        $('.contentWrap').addClass('short');
        panelOpen=false;
      });      
    } else {      
      $(this).removeClass('open');
      $('.leftNav').stop(true,true).animate({'left':'0px'},300,function(){        
        $('.contentWrap').removeClass('short');
        panelOpen=true;
      });
    }
  });  
});