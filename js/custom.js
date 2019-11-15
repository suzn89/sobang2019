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
	
	// main tab
	var tab = $('.board__etc .tab > li');
	var content = $('.content > div');
	
	tab.on('click',function(e){
		e.preventDefault();
		var tg = $(this);
		var tc = tg.find('a');
		tab.find('>a').removeClass('on');
		tc.addClass('on');
		i = tg.index();
		content.css('display','none');
		content.eq(i).css('display','block');
	});	//a에 거는거니까 preventDefault씀
  
});

//VISUAL
var vis = {
	init : function(){
			this.action();
	},
	action : function(){
			var roll = $('#_vis ._roll');
			roll.bxSlider({
					mode: 'fade',
					auto: true,
					useCSS: false,
					autoControls: true,
					autoControlsCombine: true,
					controls: false,
					pause: 5000,
					speed: 1500,
					touchEnabled : false,
					stopAutoOnClick: true,
					easing: 'easeInOutExpo'
			});
	}
}

