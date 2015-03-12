var mydivs=new Array('.main-catalog','.big-list-catalog', '.small-list-catalog');

function opcl(arr, e){
    if ($(e).css('display') == 'none'){
        for(var i in arr){   
           $(arr[i]).hide();
        }
        $(e).show();       
    }
}

$(document).ready(function () {
  
	
	$('.main-nav a').click(function() {
    $('.main-nav a').removeClass('active');
    $(this).addClass('active');
  });
  $('.view').click(function() {
    $('.view').removeClass('active');
    $(this).addClass('active');
  });
 
 
/*------------Скрипт меню----------------*/
  $('.menu-li-1').hover(
          function () {
            $('.menu-li-2').children('#menu ul.category-dropdown').css("visibility","hidden");
            $('.menu-li-2').children('#menu .main-panel-link').css({'background-color':'transparent',
              'border':'2px solid transparent'});
            $(this).children('#menu ul.category-dropdown').css("visibility","visible");  
            $(this).children('#menu .main-panel-link').css({'background-color':'#fff',
              'border':'2px solid #ff9b01','border-bottom':'0'});
          }
          
          
        );

  $('.menu-li-2').hover(
          function () {
            $('.menu-li-1').children('#menu ul.category-dropdown').css("visibility","hidden");
            $('.menu-li-1').children('#menu .main-panel-link').css({'background-color':'transparent',
              'border':'2px solid transparent'});
            $(this).children('#menu ul.category-dropdown').css("visibility","visible");  
            $(this).children('#menu .main-panel-link').css({'background-color':'#fff',
              'border':'2px solid #ff9b01','border-bottom':'0'});
          }
          
          
        );
  $(document).mouseup(function (e) {
    var drop = $("#menu ul.category-dropdown");
    var link= $('#menu .main-panel-link');
    if (drop.has(e.target).length === 0){
        drop.css("visibility","hidden");
        link.css({'background-color':'transparent',
              'border':'2px solid transparent'})
    }
});
/*------------------------Конец скрипта меню--------*/

   $('.basket').hover(function(){
        $(".in-basket-block").css("display","block");
        $(".basket").css("background","#fff");
        $(".basket p img").css("display","none");
      },
      function(){
        $(".in-basket-block").css("display","none");
        $(".basket").css("background","none");
        $(".basket p img").css("display","block");
      });

   $('.in-basket-block').hover(function(){
        $(".basket").css("background","#fff");
        $(".basket p img").css("display","none");
      },
      function(){
        $(".basket").css("background","none");
        $(".basket p img").css("display","block");
      });


      $('.registration').hover(function(){
        $(".private-office").css("display","block");
        $(".registration").css("background","#fff");
      },
      function(){
        $(".private-office").css("display","none");
        $(".registration").css("background","none");

      });


        $('.private-office').hover(function(){
        $(".registration").css("background","#fff");
      },
      function(){
        $(".registration").css("background","none");

      });
var $nav2=$(".upper-band")
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90 && $nav2.hasClass("upper-band")) {
            $nav2.removeClass("nav").addClass("upper-band-fixed");
            
            
        } else if ($(this).scrollTop() <= 90 && $nav2.hasClass("upper-band-fixed")) {
            $nav2.removeClass("upper-band-fixed").addClass("upper-band");
            
        }
    }); //scroll
	   
});
  var top_show = 200; 
  var delay = 1300; 
  $(document).ready(function() {
    $(window).scroll(function () { 
      if ($(this).scrollTop() > top_show) $('#scrollup').fadeIn();
      else $('#scrollup').fadeOut();
    });

    $('#scrollup').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

