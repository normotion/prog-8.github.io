// JavaScript Document
	
//ドラッグ&ドロップで入れ替え部分の記述	
function dragstart()
{
	//ドラッグ元のIDを保存
	event.dataTransfer.setData("text/plain", event.target.id);
}
function dragover()
{
	event.preventDefault();
}
function drop(obj)
{
	event.preventDefault();
	//ドラッグしている画像のIDを取得
	var id = event.dataTransfer.getData("text/plain");
	//ドロップ先のsrcを保存
	var buff = obj.src;
	//ドロップ先のsrcにドラッグ元のsrcを上書き
	obj.src = document.getElementById(id).src;
	//保存していたsrcをドラッグ元のsrcへ上書き
	document.getElementById(id).src = buff;
}
	

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


