		 var i = 0;
		   var size=$(".container div").length;
		   $(".left").click(function(){
		     mover();
		   });
		
		    $(".right").click(function(){
		   	movel();
		  });
		  function movel(){
		     i++;
		   if(i==size){
		     i=0;
		   }
		   $(".container div").eq(i).fadeIn().siblings().fadeOut();
		   $(".fang li").eq(i).addClass("on").siblings().removeClass();
		 }
		  function mover(){
		   i--;
		   if(i==-1){
		     i=size-1;
		   }
		  $(".container div").eq(i).fadeIn().siblings().fadeOut();
		   $(".fang li").eq(i).addClass("on").siblings().removeClass();
		
		}
		var timer = setInterval(function(){
		    movel();
		},2000);
		
		$(".slide,.slide_box").hover(function(){
			$(".slide_box").stop().slideDown(1000)
		},function(){
			$(".slide_box").stop().slideUp(1000)
		})
		$(".slide>li").hover(function(){
			$(this).css("color","orange")
			var index = $(this).index()
			$(".nav .slide_box>li").eq(index).css("display","block")
			$(".nav .slide_box>li").eq(index).siblings().css("display","none")
			
		},function(){
			$(this).css("color","#000")
		
		})
		$(".aside,.aside_box").hover(function(){
			$(".aside_box").stop().css("display","block")
		},function(){
			$(".aside_box").stop().css("display","none")
		})
		$(".aside>li").hover(function(){
			$(this).css("background","orange")
			var index = $(this).index()
			$(".banner .aside_box>li").eq(index).css("display","block")
			$(".banner .aside_box>li").eq(index).siblings().css("display","none")
			
		},function(){
			$(this).css("background","none")
		
		})
		$(".list_box,.list_box>p").hover(function(){
			$(this).find("p").stop().slideDown(1000)
		},function(){
			$(this).find("p").stop().slideUp(1000)
		})
