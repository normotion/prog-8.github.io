// JavaScript Document

//色の切り替え
let fileName_rotation = [
  "video/rotation_circle_blue.mp4",
  "video/rotation_circle_green.mp4",
  "video/rotation_circle.mp4"
]
let fileName_border = [
  "video/Diagonal_border_green.mp4",
  "video/Diagonal_border_yellow.mp4",
  "video/Diagonal_border.mp4"
]
let fileName_marni = [
  "video/MARNI_blue.mp4",
  "video/MARNI_red.mp4",
  "video/MARNI.mp4"
]
let fileName_triangle = [
  "video/triangle_3_red.mp4",
  "video/triangle_3_yellow.mp4",
  "video/triangle_3.mp4"
]

$(function(){
  $(".rotation").click(function(){
    let i = Math.floor(Math.random() * 3);
    $(this).attr("src",fileName_rotation[i]);
	return false;
  });

   $(".border").click(function(){
     let i = Math.floor(Math.random() * 3);
     $(this).attr("src",fileName_border[i]);
   return false;
   });
	
  $(".marni").click(function(){
     let i = Math.floor(Math.random() * 3);
     $(this).attr("src",fileName_marni[i]);
   return false;
   });
	
  $(".triangle").click(function(){
     let i = Math.floor(Math.random() * 3);
     $(this).attr("src",fileName_triangle[i]);
   return false;
   });
	

//ナビ非表示
var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
		if(winScrollTop >= 200){
        $('.nav-move').addClass('hide');
			}
    } else {
        $('.nav-move').removeClass('hide');
    }
    startPos = winScrollTop;
});


//screen full 

$(function () {
			

			$('#canvas').dblclick(function () {
				screenfull.toggle(this);
			});

			function fullscreenchange() {
				var elem = screenfull.element;

				$('#status').text('Is fullscreen: ' + screenfull.isFullscreen);

				if (elem) {
					$('#element').text('Element: ' + elem.localName + (elem.id ? '#' + elem.id : ''));
				}

				if (!screenfull.isFullscreen) {
					$('#external-iframe').remove();
					document.body.style.overflow = 'auto';
				}
			}

			screenfull.on('change', fullscreenchange);

			// Set the initial values
			fullscreenchange();
		});


//Web font
	
(function(d) {
    var config = {
      kitId: 'faa8ayi',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

//google analytics

window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-Z8R5SRRYK0');


});