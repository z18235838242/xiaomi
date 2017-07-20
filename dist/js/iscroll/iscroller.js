var str = "";
			for(var i=0;i<30;i++){
				
				str += '<li>今天星期一'+i+'</li>';
			}
			$("#main ul").append(str);
			var myIscroll ;
			var flag = false;
			function loaded(){
				setTimeout(function(){
					myIscroll = new IScroll("#main",{
						probeType:3
					})
					myIscroll.on("scroll",function(){
						$("#main p").show();
						if (this.y>70) {
							flag = true;
						}
						
					})
					myIscroll.on("scrollEnd",function(){
						if (flag) {
							$("#main p").text("正在刷新。。。")
							setTimeout(function(){
								$("#main p").hide()
								$("<li>1</li>").insertAfter("#main p")
								$("#main p").text("松开刷新。。。。")
								myIscroll.refresh();
								flag = false
							},2000)
						} else{
							$("#main p").hide()
						}
					})
				},200)
				
			}
			window.addEventListener("load",loaded,false)