$(document).ready(function () {
	
	$('.main-nav a').click(function() {
    $('.main-nav a').removeClass('active');
    $(this).addClass('active');
  });

  
	 $('.vopros-1').hover(function(){
        $(".podskazka-1").css("display","block");
      },
      function(){
        $(".podskazka-1").css("display","none");
      });

	 $('.vopros-2').hover(function(){
        $(".podskazka-2").css("display","block");
      },
      function(){
        $(".podskazka-2").css("display","none");
      });

	 $('.vopros-3').hover(function(){
        $(".podskazka-3").css("display","block");
      },
      function(){
        $(".podskazka-3").css("display","none");
      });

	 $('.vopros-4').hover(function(){
        $(".podskazka-4").css("display","block");
      },
      function(){
        $(".podskazka-4").css("display","none");
      });

	 $('.vopros-5').hover(function(){
        $(".podskazka-5").css("display","block");
      },
      function(){
        $(".podskazka-5").css("display","none");
      });

	 $('.vopros-6').hover(function(){
        $(".podskazka-6").css("display","block");
      },
      function(){
        $(".podskazka-6").css("display","none");
      });

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

	   
});