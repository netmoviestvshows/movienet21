(function () {
	var projectID = 'player_with_navbar';
	var playerID = 'player-wrapper';
	document.write("<div id=" + playerID + "></div>");
	setTimeout(function () {
		var iframeHolder = document.getElementById(playerID);
		var iframe = document.createElement("iframe");
		var icontent = '<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><style>@-webkit-keyframes buffering-stripes{0%{background-position:0 0}to{background-position:30px 0}}@keyframes blink{0%{color:black}50%{color:white}100%{color:black}}@-webkit-keyframes blink{0%{color:black}50%{color:white}100%{color:black}}@keyframes buffering-stripes{0%{background-position:0 0}to{background-position:30px 0}}#rightText span{color:green}.myButton,a:hover{cursor:pointer}.myButton{font-family:Arial;font-size:13px;display:inline-block;padding:0 4px;text-decoration:none;color:#fff;border:1px solid #942911;border-radius:3px;background:-webkit-gradient(linear,left top,left bottom,color-stop(.05,#d0451b),color-stop(1,#bc3315));background:-webkit-linear-gradient(top,#d0451b 5%,#bc3315 100%);background:-o-linear-gradient(top,#d0451b 5%,#bc3315 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(5%,#d0451b),to(#bc3315));background:linear-gradient(to bottom,#d0451b 5%,#bc3315 100%);background-color:#d0451b;-webkit-box-shadow:inset 0 1px 0 0 #cf866c;box-shadow:inset 0 1px 0 0 #cf866c;text-shadow:0 1px 0 #854629;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#d0451b", endColorstr="#bc3315", GradientType=0)}.myButton:hover{background:-webkit-gradient(linear,left top,left bottom,color-stop(.05,#bc3315),color-stop(1,#d0451b));background:-webkit-linear-gradient(top,#bc3315 5%,#d0451b 100%);background:-o-linear-gradient(top,#bc3315 5%,#d0451b 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(5%,#bc3315),to(#d0451b));background:linear-gradient(to bottom,#bc3315 5%,#d0451b 100%);background-color:#bc3315;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#bc3315", endColorstr="#d0451b", GradientType=0)}.myButton:active{position:relative;top:1px}.mejs-overlay-play{width:100%;height:100%;cursor:pointer}.alinksxolor,.alinksxolor a,a:active,a:hover,a:link,a:visited{color:red}.mejs-overlay-button{position:absolute;top:50%;left:52%;width:90px;height:90px;margin:-45px 0 0 -75px;border-radius:50%;border:6px solid #fb02ba52;background:rgb(3,155,229,.75) url("'+imgSrc+'9EEI6RiDTo.png") no-repeat 58% 55%;-webkit-box-shadow:inset 0 15px 15px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.18);box-shadow:inset 0 15px 15px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.18)}.mejs-offscreen{position:absolute!important;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);width:1px;height:1px;-webkit-clip-path:polygon(0 0,0 0,0 0,0 0);clip-path:polygon(0 0,0 0,0 0,0 0)}.mejs-container{font-family:Helvetica,Arial;position:relative;overflow:hidden;text-align:left;vertical-align:top;text-indent:0;background:#000}.mejs-container *{outline:0}.mejs-container:focus{outline:0}.me-plugin{position:absolute}.mejs-embed,.mejs-embed body{overflow:hidden;width:100%;height:100%;margin:0;padding:0;background:#000}.mejs-fullscreen{overflow:hidden!important}.mejs-container-fullscreen{position:fixed;z-index:1000;top:0;right:0;bottom:0;left:0;overflow:hidden}.mejs-container-fullscreen .mejs-mediaelement,.mejs-container-fullscreen video{width:100%;height:100%}.mejs-clear{clear:both}.mejs-background,.mejs-mediaelement{position:absolute;top:0;left:0}.mejs-mediaelement{width:100%;height:100%}.mejs-poster{position:absolute;top:0;left:0;background-repeat:no-repeat;background-position:50% 50%;background-size:cover}:root .mejs-poster img{display:none}.mejs-poster img{padding:0;border:0}.mejs-overlay{position:absolute;top:0;left:0;background-size:cover;background-position:center;background-repeat:no-repeat;background-image: url("https://cdn.jsdelivr.net/gh/Fixlez/iptv.ny@main/Oscar%202022.jpg");}.mejs-overlay-loading{position:absolute;top:50%;left:50%;width:80px;height:80px;margin:-40px 0 0 -40px;background:#333;background:rgba(0,0,0,.9);background:-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(50,50,50,.9)),to(rgba(0,0,0,.9)));background:-webkit-linear-gradient(top,rgba(50,50,50,.9),rgba(0,0,0,.9));background:-o-linear-gradient(top,rgba(50,50,50,.9),rgba(0,0,0,.9));background:-webkit-gradient(linear,left top,left bottom,from(rgba(50,50,50,.9)),to(rgba(0,0,0,.9)));background:-webkit-linear-gradient(rgba(50,50,50,.9),rgba(0,0,0,.9));background:-o-linear-gradient(rgba(50,50,50,.9),rgba(0,0,0,.9));background:linear-gradient(rgba(50,50,50,.9),rgba(0,0,0,.9))}.mejs-overlay-loading span{display:block;width:80px;height:80px;background:url("'+imgSrc+'loading.gif") 50% 50% no-repeat}.mejs-container .mejs-controls {position:absolute;bottom:0;left:0;width:100%;height:48px;    margin:0;padding:0;list-style-type:none;background:transparent; /* background: -webkit-linear-gradient(top,#000 0%,#000 60%,#353535 62%,#292929 87%,#262626 100%); */ /* background:-webkit-gradient(linear,left top,left bottom,from(#000),color-stop(60%,#000),color-top(62%,#353535),color-stop(87%,#292929),to(#262626)); */ background:-o-linear-radient(top,#000 0%,#000 60%,#353535 62%,#292929 87%,#262626 100%); /* background: linear-gradient(to bottom,#000 0%,#000 60%,#353535 62%,#292929 87%,#262626 100%);*/ background-repeat: repeat-x;}.mejs-container .mejs-controls div{font-family:Helvetica,Arial;font-size:11px;line-height:11px;display:block;float:left;width:30px;height:30px;margin:0;padding:0;list-style-type:none;border:0;background-image:none}.mejs-container .mejs-controls div:last-child{padding-right:5px}.mejs-container .mejs-controls .mejs-playpause-button{width:36px;height:36px;margin:5px;border:4px solid #000;border-radius:50%;background:-webkit-linear-gradient(top,#737372 0%,#4a4a4b 100%);background:-webkit-gradient(linear,left top,left bottom,from(#737372),to(#4a4a4b));background:-o-linear-gradient(top,#737372 0%,#4a4a4b 100%);background:linear-gradient(to bottom,#737372 0%,#4a4a4b 100%)}.mejs-container .mejs-controls .mejs-playpause-button:hover{background:-webkit-linear-gradient(top,#7a797a 0%,#535353 100%);background:-webkit-gradient(linear,left top,left bottom,from(#7a797a),to(#535353));background:-o-linear-gradient(top,#7a797a 0%,#535353 100%);background:linear-gradient(to bottom,#7a797a 0%,#535353 100%)}.mejs-controls .mejs-button button,.mejs-duration-container:after{position:absolute;width:16px;height:16px;cursor:pointer;background:url("'+imgSrc+'xcontrols26cxb_rrWfu.png") no-repeat}.mejs-controls .mejs-button button{font-size:0;line-height:0;display:block;margin:7px;padding:0;text-decoration:none;border:0}.mejs-duration-container:after{z-index:20;right:5px;bottom:15px;content:""}.mejs-container .mejs-controls .mejs-time{font-weight:900;display:block;overflow:hidden;-webkit-box-sizing:content-box;box-sizing:content-box;width:auto;height:17px;padding:21px 3px 0;text-align:center;color:#dfd5d5}.mejs-container .mejs-controls .mejs-time a{font-size:11px;line-height:12px;display:block;float:left;width:auto;margin:1px 2px 0 0;color:#8f8f8f}.mejs-container .mejs-controls .mejs-playpause-button button{width:36px;height:36px;margin:0;background:url("'+imgSrc+'xplaypauseVxZTlREuM.png") no-repeat}.mejs-container .mejs-controls .mejs-play button,.mejs-controls .mejs-fullscreen-button button{background-position:0 0}.mejs-container .mejs-controls .mejs-pause button{background-position:0 -36px}.mejs-container .mejs-controls .mejs-stop button{background-position:0 -72px}.mejs-controls div.mejs-time-rail{position:relative;width:200px;padding-top:16px;direction:ltr}.mejs-controls .mejs-time-rail a,.mejs-controls .mejs-time-rail span{position:absolute;display:block;width:180px;height:8px;cursor:pointer;border-radius:1px}.mejs-controls .mejs-time-rail .mejs-time-total{overflow:hidden;width:99%;margin:6px;background:#333}.blink{-webkit-animation:blink 2s linear infinite;-moz-animation:blink 2s linear infinite;animation:blink 2s linear infinite}.mejs-controls .mejs-time-rail .mejs-time-buffering{width:100%;-webkit-animation:buffering-stripes 2s linear infinite;animation:buffering-stripes 2s linear infinite;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(.25,rgba(255,255,255,.15)),color-stop(.25,transparent),color-stop(.5,transparent),color-stop(.5,rgba(255,255,255,.15)),color-stop(.75,rgba(255,255,255,.15)),color-stop(.75,transparent),to(transparent));background-image:-webkit-linear-gradient(135deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(135deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:15px 15px}.mejs-controls .mejs-time-rail .mejs-time-loaded{width:0;background:#434343}.mejs-controls .mejs-time-rail .mejs-time-current,.mejs-controls .mejs-time-rail .mejs-time-current-fake{width:0;background:#da4747}.mejs-controls .mejs-time-rail .mejs-time-current{display:none}.mejs-controls .mejs-time-rail .mejs-time-handle{position:absolute;top:-2px;display:none;width:10px;margin:0;cursor:pointer;text-align:center;border:solid 2px #333;border-radius:5px;background:#da4747}.mejs-controls .mejs-time-rail .mejs-time-float{position:absolute;top:-26px;display:none!important;width:36px;height:17px;margin-left:-18px;text-align:center;color:#111;border:solid 1px #333;background:#eee}.mejs-controls .mejs-time-rail .mejs-time-float-current{left:0;display:block;width:30px;margin:2px;text-align:center}.mejs-controls .mejs-time-rail .mejs-time-float-corner{line-height:0;position:absolute;top:15px;left:13px;display:block;width:0;height:0;border:solid 5px #eee;border-color:#eee transparent transparent;border-radius:0}.mejs-long-video .mejs-controls .mejs-time-rail .mejs-time-float{width:48px}.mejs-long-video .mejs-controls .mejs-time-rail .mejs-time-float-current{width:44px}.mejs-long-video .mejs-controls .mejs-time-rail .mejs-time-float-corner{left:18px}.mejs-controls .mejs-unfullscreen button{background-position:0 -16px}.mejs-controls .mejs-fullscreen-button{opacity:0}.mejs-controls .mejs-mute button{background-position:0 -32px;margin-top: 17px;}.mejs-controls .mejs-unmute button{background-position:0 -48px}.mejs-controls .mejs-captions-button,.mejs-controls .mejs-volume-button{position:relative}.mejs-controls .mejs-volume-button .mejs-volume-slider{position:absolute;z-index:1;top:-115px;left:0;display:none;width:25px;height:115px;margin:0;border-radius:0;background:rgba(50,50,50,.7)}.mejs-controls .mejs-volume-button:hover{border-radius:0 0 4px 4px}.mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-total{position:absolute;top:8px;left:11px;width:2px;height:100px;margin:0;background:#ddd;background:rgba(255,255,255,.5)}.mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-current{position:absolute;top:8px;left:5px;width:10px;height:8px;margin:0;cursor:pointer;background:#ddd;background:rgba(255,255,255,.9)}.mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-handle{position:absolute;top:-3px;left:4px;width:11px;height:6px;margin:0;cursor:n-resize;-webkit-transition:all 2s linear;-o-transition:all 2s linear;transition:all 2s linear;border-radius:1px;background:#ddd;background:rgba(255,255,255,.9)}.mejs-controls a.mejs-horizontal-volume-slider{position:relative;display:block;float:left;width:56px;height:26px;vertical-align:middle}.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-total{font-size:1px;position:absolute;top:11px;left:0;width:50px;height:8px;margin:0;padding:0;border-radius:2px;background:#333;background:rgba(50,50,50,.8);background:-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(30,30,30,.8)),to(rgba(60,60,60,.8)));background:-webkit-linear-gradient(top,rgba(30,30,30,.8),rgba(60,60,60,.8));background:-o-linear-gradient(top,rgba(30,30,30,.8),rgba(60,60,60,.8));background:-webkit-gradient(linear,left top,left bottom,from(rgba(30,30,30,.8)),to(rgba(60,60,60,.8)));background:-webkit-linear-gradient(rgba(30,30,30,.8),rgba(60,60,60,.8));background:-o-linear-gradient(rgba(30,30,30,.8),rgba(60,60,60,.8));background:linear-gradient(rgba(30,30,30,.8),rgba(60,60,60,.8))}.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current{font-size:1px;position:absolute;top:11px;left:0;width:50px;height:8px;margin:0;padding:0;border-radius:2px;background:#fff;background:rgba(255,255,255,.8);background:-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(255,255,255,.9)),to(rgba(200,200,200,.8)));background:-webkit-linear-gradient(top,rgba(255,255,255,.9),rgba(200,200,200,.8));background:-o-linear-gradient(top,rgba(255,255,255,.9),rgba(200,200,200,.8));background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.9)),to(rgba(200,200,200,.8)));background:-webkit-linear-gradient(rgba(255,255,255,.9),rgba(200,200,200,.8));background:-o-linear-gradient(rgba(255,255,255,.9),rgba(200,200,200,.8));background:linear-gradient(rgba(255,255,255,.9),rgba(200,200,200,.8))}.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-handle{display:none}.mejs-controls .mejs-captions-button button{background-position:-48px 0}.mejs-controls .mejs-captions-button .mejs-captions-selector{position:absolute;right:-51px;bottom:26px;visibility:hidden;overflow:hidden;width:85px;height:100px;padding:10px 10px 0;border:solid 1px transparent;border-radius:0;background:rgba(50,50,50,.7)}.mejs-controls .mejs-captions-button:hover .mejs-captions-selector{visibility:visible}.mejs-controls .mejs-captions-button .mejs-captions-selector ul,.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul,.mejs-controls .mejs-speed-button .mejs-speed-selector ul{display:block;overflow:hidden;margin:0;padding:0;list-style-type:none!important}.mejs-controls .mejs-captions-button .mejs-captions-selector ul li,.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li,.mejs-controls .mejs-speed-button .mejs-speed-selector ul li{display:block;overflow:hidden;margin:0 0 6px;padding:0;list-style-type:none!important;color:#fff}.mejs-controls .mejs-captions-button .mejs-captions-selector ul li input,.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li input{float:left;clear:both;margin:3px 3px 0 5px}.mejs-controls .mejs-captions-button .mejs-captions-selector ul li label{font-family:helvetica,arial;font-size:10px;line-height:15px;float:left;width:55px;padding:4px 0 0}.mejs-controls .mejs-captions-button .mejs-captions-translations{font-size:10px;margin:0 0 5px}.mejs-chapters{position:absolute;z-index:1;top:0;left:0;width:10000px;-xborder-right:solid 1px #fff}.mejs-chapters .mejs-chapter{position:absolute;float:left;overflow:hidden;border:0;background:#222;background:rgba(0,0,0,.7);background:-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(50,50,50,.7)),to(rgba(0,0,0,.7)));background:-webkit-linear-gradient(top,rgba(50,50,50,.7),rgba(0,0,0,.7));background:-o-linear-gradient(top,rgba(50,50,50,.7),rgba(0,0,0,.7));background:-webkit-gradient(linear,left top,left bottom,from(rgba(50,50,50,.7)),to(rgba(0,0,0,.7)));background:-webkit-linear-gradient(rgba(50,50,50,.7),rgba(0,0,0,.7));background:-o-linear-gradient(rgba(50,50,50,.7),rgba(0,0,0,.7));background:linear-gradient(rgba(50,50,50,.7),rgba(0,0,0,.7));filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, startColorstr=#323232, endColorstr=#000000)}.mejs-chapters .mejs-chapter .mejs-chapter-block{font-size:11px;display:block;padding:5px;cursor:pointer;color:#fff;border-right:solid 1px #333;border-bottom:solid 1px #333}.mejs-chapters .mejs-chapter .mejs-chapter-block-last{border-right:none}.mejs-chapters .mejs-chapter .mejs-chapter-block:hover{background:#666;background:rgba(102,102,102,.7);background:-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(102,102,102,.7)),to(rgba(50,50,50,.6)));background:-webkit-linear-gradient(top,rgba(102,102,102,.7),rgba(50,50,50,.6));background:-o-linear-gradient(top,rgba(102,102,102,.7),rgba(50,50,50,.6));background:-webkit-gradient(linear,left top,left bottom,from(rgba(102,102,102,.7)),to(rgba(50,50,50,.6)));background:-webkit-linear-gradient(rgba(102,102,102,.7),rgba(50,50,50,.6));background:-o-linear-gradient(rgba(102,102,102,.7),rgba(50,50,50,.6));background:linear-gradient(rgba(102,102,102,.7),rgba(50,50,50,.6));filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, startColorstr=#666666, endColorstr=#323232)}.mejs-chapters .mejs-chapter .mejs-chapter-block .ch-title{font-size:12px;font-weight:700;line-height:12px;display:block;margin:0 0 3px;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis}.mejs-chapters .mejs-chapter .mejs-chapter-block .ch-timespan{font-size:12px;line-height:12px;display:block;margin:3px 0 4px;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis}.mejs-captions-layer{font-size:16px;line-height:20px;position:absolute;bottom:0;left:0;text-align:center;color:#fff}.mejs-captions-layer a{text-decoration:underline;color:#fff}.mejs-captions-layer[lang=ar]{font-size:20px;font-weight:400}.mejs-captions-position{position:absolute;bottom:15px;left:0;width:100%}.mejs-captions-position-hover{bottom:35px}.mejs-captions-text{padding:3px 5px;white-space:pre-wrap;background:rgba(20,20,20,.5)}.me-cannotplay a{font-weight:700;color:#fff}.me-cannotplay span{display:block;padding:15px}.mejs-controls .mejs-loop-off button{background-position:-64px -16px}.mejs-controls .mejs-loop-on button{background-position:-64px 0}.mejs-controls .mejs-backlight-off button{background-position:-80px -16px}.mejs-controls .mejs-backlight-on button{background-position:-80px 0}.mejs-controls .mejs-picturecontrols-button{background-position:-96px 0}.mejs-contextmenu{position:absolute;z-index:1001;top:0;left:0;width:150px;padding:10px;border:solid 1px #999;border-radius:4px;background:#fff}.mejs-contextmenu .mejs-contextmenu-separator{font-size:0;height:1px;margin:5px 6px;background:#333}.mejs-contextmenu .mejs-contextmenu-item{font-family:Helvetica,Arial;font-size:12px;padding:4px 6px;cursor:pointer;color:#333}.mejs-contextmenu .mejs-contextmenu-item:hover{color:#fff;background:#2c7c91}.mejs-controls .mejs-sourcechooser-button,html{position:relative}.mejs-controls .mejs-sourcechooser-button button{background-position:-128px 0}.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector{position:absolute;right:-10px;bottom:26px;visibility:hidden;overflow:hidden;width:130px;height:100px;padding:10px;border:solid 1px transparent;border-radius:0;background:rgba(50,50,50,.7)}.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li label,.mejs-controls .mejs-speed-button .mejs-speed-selector ul li label{font-family:helvetica,arial;font-size:10px;line-height:15px;float:left;width:100px;padding:4px 0 0}.mejs-postroll-layer{position:absolute;z-index:1000;bottom:0;left:0;overflow:hidden;background:rgba(50,50,50,.7)}.mejs-postroll-layer,.mejs-postroll-layer-content{width:100%;height:100%}.mejs-postroll-close{position:absolute;z-index:100;top:0;right:0;padding:4px;cursor:pointer;color:#fff;background:rgba(50,50,50,.7)}div.mejs-speed-button{position:relative;width:46px!important}.mejs-controls .mejs-button.mejs-speed-button button{font-size:11px;line-height:normal;width:36px;color:#fff;background:0 0}.mejs-controls .mejs-speed-button .mejs-speed-selector{position:absolute;top:-100px;left:-10px;display:none;overflow:hidden;width:60px;height:100px;padding:0;border:solid 1px transparent;border-radius:0;background:rgba(50,50,50,.7)}.mejs-controls .mejs-speed-button:hover>.mejs-speed-selector,.player-relative-container video{display:block}.mejs-controls .mejs-speed-button .mejs-speed-selector ul li label.mejs-speed-selected{color:#21f8f8}.mejs-controls .mejs-speed-button .mejs-speed-selector ul li{padding:0 10px}.mejs-controls .mejs-speed-button .mejs-speed-selector ul li input{display:none;float:left;clear:both;margin:3px 3px 0 5px}.mejs-controls .mejs-speed-button .mejs-speed-selector ul li label{font-size:11.5px;width:60px;margin-left:5px;cursor:pointer;color:#fff}.mejs-controls .mejs-speed-button .mejs-speed-selector ul li:hover{background-color:#c8c8c8!important;background-color:rgba(255,255,255,.4)!important}.mejs-controls .mejs-button.mejs-jump-forward-button,.mejs-controls .mejs-button.mejs-skip-back-button{background-position:3px 3px}.mejs-controls .mejs-button.mejs-jump-forward-button button,.mejs-controls .mejs-button.mejs-skip-back-button button{font-size:9px;line-height:normal;color:#fff;background:0 0}.mejs-time>span{display:block;min-width:38px;text-align:center}*{margin:0;padding:0}html{min-height:100%}.player-over{font-family:Arial;position:absolute;z-index:1000;top:0;right:0;bottom:0;left:0;display:none;padding:20px 6% 120px;color:#ccc;background-image:url(https://cdn.jsdelivr.net/gh/Fixlez/iptv.ny@main/over%20Oscar-%202022.jpg)}.player-over:after{position:absolute;right:0;bottom:105px;left:0;content:"";border-top:1px dashed rgba(255,255,255,.25)}.player-over-block{display:table;width:100%;height:100%;}.player-over .left,.player-over .right{display:table-cell;height:100%;vertical-align:middle}.player-over .right{padding-left:40px}#videoFormatText,.player-over h3{font-size:26px;text-decoration:underline}.player-over h3{font-weight:bolder;color:red;text-shadow: 2px 2px 1px blue}.player-over #button,.player_nav ul li a{text-align:center;text-decoration:none;color:#fff}.player-over #button{font-weight:700;position:absolute;right:25px;bottom:25px;left:25px;display:block;overflow:hidden;text-transform:uppercase;border-radius:3px;background-color:#2b8cd0;text-shadow:0 2px 0 rgba(0,0,0,.1);text-shadow:1px 1px #257ab5,2px 2px #257ab5,3px 3px #257ab5,4px 4px #257ab5,5px 5px #257ab5,6px 6px #257ab5,7px 7px #257ab5,8px 8px #257ab5,9px 9px #257ab5,10px 10px #257ab5,11px 11px #257ab5,12px 12px #257ab5,13px 13px #257ab5,14px 14px #257ab5,15px 15px #257ab5,16px 16px #257ab5,17px 17px #257ab5,18px 18px #257ab5,19px 19px #257ab5,20px 20px #257ab5,21px 21px #257ab5,22px 22px #257ab5,23px 23px #257ab5,24px 24px #257ab5,25px 25px #257ab5,26px 26px #257ab5,27px 27px #257ab5,28px 28px #257ab5,29px 29px #257ab5,30px 30px #257ab5;font-size:18px;padding:15px}.player_nav{display:none;position:relative;float:left;width:100%;padding:0;background:#0f0f0f}.player_nav ul li{float:left;width:11.1%;list-style:none}.player_nav ul li a{font-size:12px;float:left;width:100%;margin:0;padding:15px 0;background:#1d1d1d}.player_nav ul li a:hover{color:#0cb5ff}.player_nav ul li a.selected{color:#0cb5ff;background:#000}.right a[data-link]{font-size:20px;display:block;text-align:center}#downloadText:hover{color:#fff}#videoFormatText{margin-top:80px;color:red}@media only screen and (max-width:800px){#videoFormatText,.player-over h3,.right a[data-link]{font-size:12px}#videoFormatText{margin-top:0}.player-over #button{padding:5px}}@media only screen and (max-width:600px){.player-over:after,.player_nav{display:none}.mejs-container .mejs-controls{bottom:0!important;height: 47px;}.player-over .right{padding-left:0}.mejs-overlay-button,.mejs-overlay-loading,.mejs-overlay-loading span{width:55px;height:55px;left: 62%;}.mejs-controls .mejs-time-rail .mejs-time-total{width:90%}}@media only screen and (max-width:991px){.player-over .left{display:none}}</style></head><body><script type="text/javascript">"use strict";var _createClass=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var videoSrc="'+videoSrc+'",urlink="'+urlink+'",openLinks="'+openLinks+'";function setVariables(){var e=document.getElementById("button"),t=document.getElementById("titleText"),n=document.getElementById("downloadText"),i=document.getElementById("videoFormatText");document.getElementById("leftImg"),t.innerHTML="'+text.title+'",n.innerHTML="'+text.download+'",i.innerHTML="'+text.videoFormats+'",e.innerText="'+text.button+'",e.setAttribute("href",urlink),i.setAttribute("href",urlink)}var Player=function(){function i(){_classCallCheck(this,i),this.element=this.createPlayer(),i.playerScreen=this.element.querySelector("#screen"),i.inner=this.element.querySelector(".mejs-inner"),i.observers=[],i.aspectRatioCoef=2.0231822971549}return _createClass(i,[{key:"addContent",value:function(e){i.playerScreen.appendChild(e)}},{key:"addControls",value:function(e){i.inner.appendChild(e)}},{key:"addModal",value:function(e){this.element.appendChild(e)}},{key:"init",value:function(){document.body.appendChild(this.element),i.setHeight(this.element)}},{key:"readState",value:function(e){i.changePlayIcon(e,this.element)}},{key:"addObserver",value:function(e){i.observers.push(e)}},{key:"createPlayer",value:function(){var e=createElement("div",["mejs-container","mejs-video"],"mediaPlayer"),t=createElement("div","mejs-inner"),n=createElement("div","mejs-mediaelement","screen"),i=createElement("div","mejs-layers"),l=createElement("div",["mejs-overlay","mejs-layer"],"loading"),a=createElement("div","mejs-overlay-loading"),r=document.createElement("span"),o=createElement("div",["mejs-overlay","mejs-layer","mejs-overlay-play"],"largePlayButton"),s=createElement("div","mejs-overlay-button");return e.setAttribute("tabindex","0"),s.setAttribute("data-play",!0),l.style.display="none",l.style.width="100%",l.style.height="100%",o.style.width="100%",o.style.height="100%",e.appendChild(t),t.appendChild(n),t.appendChild(i),i.appendChild(l),i.appendChild(o),o.appendChild(s),l.appendChild(a),a.appendChild(r),e}}],[{key:"setHeight",value:function(t){var n=void 0;setTimeout(n=function(){var e=document.body.clientHeight-5+"px";t.style.maxHeight=e,t.style.height=t.offsetWidth/i.aspectRatioCoef+"px",setTimeout(n,100)},100)}},{key:"changePlayIcon",value:function(e,t){if(e){var n=t.querySelector("#loading"),i=t.querySelector("#largePlayButton");n.style.display="block",i.style.display="none",setTimeout(function(){e&&(n.style.display="none")},100)}}}]),i}(),Controls=function(){function a(){_classCallCheck(this,a),this.element=a.create(),this.volume=this.element.querySelector("#volume"),this.volumeSlider=this.element.querySelector("#volumeSlider"),this.volumeLine,a.element=this.element,a.timeLineWrapper=this.element.querySelector("#timeLine")}return _createClass(a,[{key:"addTimer",value:function(e){this.element.querySelector(".mejs-currenttime-container").appendChild(e)}},{key:"addTimeLine",value:function(e){a.timeLineWrapper.appendChild(e)}},{key:"readState",value:function(e){a.changePlayPauseButton(e,this.element)}},{key:"setTimeLineWidth",value:function(i){var l=void 0;setTimeout(l=function(){var e=i.children;e.map=[].map;var t=e.map(function(e){return e.classList.contains("mejs-time-rail")?0:e.offsetWidth+parseFloat(window.getComputedStyle(e,null)["margin-left"])+parseFloat(window.getComputedStyle(e,null)["margin-right"])}).reduce(function(e,t){return e+t}),n=document.getElementById("mediaPlayer").offsetWidth;document.getElementById("timeLine"),a.timeLineWrapper.style.width=n-t+"px",setTimeout(l,100)},100)}},{key:"hideControls",value:function(){var t=this;setTimeout(function(e){t.element.classList.add("mejs-offscreen")},4e3)}},{key:"showControls",value:function(e){this.element.classList.remove("mejs-offscreen")}},{key:"getCoords",value:function(e){var t=e.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left}}}],[{key:"changePlayPauseButton",value:function(e,t){var n=t.querySelector("#smallPlayButton");e?(n.classList.remove("mejs-play"),n.classList.add("mejs-pause")):(n.classList.add("mejs-play"),n.classList.remove("mejs-pause"))}},{key:"create",value:function(){var e=createElement("div","mejs-controls","controls"),t=createElement("div",["mejs-button","mejs-playpause-button","mejs-play"],"smallPlayButton"),n=document.createElement("button"),i=createElement("div",["mejs-time","mejs-currenttime-container"]),l=createElement("div","mejs-time-rail","timeLine"),a=createElement("div",["mejs-time","mejs-duration-container"],"totalTime"),r=createElement("span","mejs-duration-fake"),o=createElement("div",["mejs-button","mejs-volume-button","mejs-mute"]),s=createElement("button","_","volume"),m=createElement("span","mejs-volume-slider","volumeSlider"),d=createElement("div","mejs-volume-total"),u=createElement("div","mejs-volume-current"),c=(createElement("div","mejs-volume-handle"),createElement("div",["mejs-button","mejs-fullscreen-button"])),p=document.createElement("button");return u.style.top="28px",u.style.top="25px",r.innerText="<span class="blink">🔴</span>LIVE",n.setAttribute("type","button"),n.setAttribute("data-play",!0),s.setAttribute("type","button"),p.setAttribute("type","button"),p.setAttribute("title","Fullscreen"),e.appendChild(t),e.appendChild(i),e.appendChild(l),e.appendChild(a),e.appendChild(o),e.appendChild(c),t.appendChild(n),a.appendChild(r),o.appendChild(s),o.appendChild(m),m.appendChild(d),m.appendChild(u),m.appendChild(u),c.appendChild(p),e}}]),a}(),Modal=function(){function t(){_classCallCheck(this,t),this.element=t.create()}return _createClass(t,[{key:"readState",value:function(e){e||t.openModal(this.element)}}],[{key:"openModal",value:function(e){e.style.display="block"}},{key:"create",value:function(){var e=createElement("div","player-over","actionLayer"),t=createElement("div","player-over-block"),n=createElement("div","left","leftText"),i=createElement("img","_","leftImg"),l=createElement("div","right"),a=createElement("p","_","titleText"),r=createElement("a","_","downloadText"),o=createElement("a","_","videoFormatText"),s=createElement("a","_","button");return s.setAttribute("target","_top"),r.setAttribute("data-link",""),o.setAttribute("data-link",""),o.setAttribute("target",openLinks),e.appendChild(t),t.appendChild(n),t.appendChild(l),n.appendChild(i),l.appendChild(a),l.appendChild(r),l.appendChild(o),l.appendChild(s),e}}]),t}(),Video=function(){function n(){_classCallCheck(this,n),this.element=n.createVideo(),n.element=this.element}return _createClass(n,[{key:"isPlaying",value:function(){return!this.element.paused}},{key:"play",value:function(){this.element.play(),n.notify(this.isPlaying())}},{key:"stop",value:function(){this.element.pause(),this.element.setAttribute("src",""),n.notify(this.isPlaying())}},{key:"getCurrentTime",value:function(){return n.element.currentTime}},{key:"addObservers",value:function(e){n.observers=e.slice()}}],[{key:"notify",value:function(t){n.observers.forEach(function(e){e.readState(t)})}},{key:"createVideo",value:function(){var n=document.createElement("video"),e=videoSrc.lastIndexOf(".")+1,t=videoSrc.length,i=videoSrc.substring(e,t);return n.id="videoClip",n.setAttribute("width","100%"),n.setAttribute("height","100%"),["mp4","ogg","webm"].forEach(function(e){var t=document.createElement("source");videoSrc=videoSrc.replace(i,e),t.setAttribute("src",videoSrc),n.append(t)}),n}}]),n}(),TimeLine=function(){function a(){_classCallCheck(this,a),this.element=a.createTimeLine(),a.element=a.createTimeLine(),a.timeBuffer=this.element.querySelector("#timeBuffer"),a.timeLoaded=this.element.querySelector("#timeLoaded"),a.timeCurrent=this.element.querySelector("#timeCurrent"),a.videoState=!1}return _createClass(a,[{key:"readState",value:function(e){a.setState(e),e&&a.startTimeLine()}}],[{key:"startTimeLine",value:function(){a.timeBuffer.style.display="block",setTimeout(function(){a.timeBuffer.style.display="none",a.runTimeLine(timeLoaded,200,10),a.runTimeLine(timeCurrent,1e3,1)},2e3)}},{key:"runTimeLine",value:function(e,t,n){var i=0,l=void 0;setTimeout(l=function(){parseFloat(getComputedStyle(a.element).width)<=i||a.isPlaying()&&(i+=n,e.style.width=i+"px",setTimeout(l,t))},t)}},{key:"createTimeLine",value:function(){var e=createElement("span",["mejs-time-total","mejs-time-slider"],"timeSlider"),t=createElement("span","mejs-time-buffering","timeBuffer"),n=createElement("span","mejs-time-loaded","timeLoaded"),i=createElement("span","mejs-time-current-fake","timeCurrent");return t.style.display="none",e.setAttribute("tabindex","0"),e.appendChild(t),e.appendChild(n),e.appendChild(i),e}},{key:"setState",value:function(e){a.videoState=e}},{key:"isPlaying",value:function(){return a.videoState}}]),a}(),Timer=function(){function i(e){_classCallCheck(this,i),this.getTime=e,this.element=i.create(),i.timerIsRunning=!1,i.timerHolder=this.element}return _createClass(i,[{key:"readState",value:function(e){e?i.runTimer(this.getTime):i.stopTimer()}}],[{key:"runTimer",value:function(t){i.timerIsRunning||(i.timerIsRunning=!i.timerIsRunning),this.getTime;var n=void 0;i.timerRun=setTimeout(n=function(){var e=Math.floor(t());e<10&&(e="0"+e),i.timerHolder.innerText="00:"+e,i.timerRun=setTimeout(n,1e3)},1e3)}},{key:"stopTimer",value:function(){i.timerIsRunning&&(i.timerIsRunning=!i.timerIsRunning),i.timerRun&&(i.timerRun=null)}},{key:"create",value:function(){var e=createElement("div","mejs-currenttime","timer");return e.innerText="00:00",e}}]),i}(),Navigation=function(){function t(e){_classCallCheck(this,t),this.names=e,this.element=this.createNavigation(this.names)}return _createClass(t,[{key:"init",value:function(){insertAfter(this.element,player.element),controls.element.style.bottom=this.element.offsetHeight+"px",this.element.style.bottom=this.element.offsetHeight+"px"}},{key:"createNavigation",value:function(e){var t=createElement("div","player_nav","playerNav"),l=createElement("ul","idTabs");return e.forEach(function(e,t){var n=createElement("li"),i=createElement("a");0===t&&i.classList.add("selected"),i.innerText=e,i.setAttribute("target",openLinks),i.setAttribute("data-select",""),i.setAttribute("href",urlink),n.appendChild(i),l.appendChild(n)}),t.appendChild(l),t}}]),t}();function insertAfter(e,t){return t.parentNode.insertBefore(e,t.nextSibling)}function createElement(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"_",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"_",i=document.createElement(e);return t&&"_"!==t&&""!==t&&(t.forEach?t.forEach(function(e){i.classList.add(e)}):i.classList.add(t)),n&&"_"!==n&&""!==n&&(i.id=n),i}var player=new Player,video=new Video,controls=new Controls,timer=new Timer(video.getCurrentTime),timeLine=new TimeLine,modal=new Modal,navNames=["'+text.link1+'","'+text.link2+'","'+text.link3+'","'+text.link4+'"],navigation=new Navigation(navNames);player.addContent(video.element),player.addModal(modal.element),player.addControls(controls.element),controls.addTimer(timer.element),controls.addTimeLine(timeLine.element),video.addObservers([timer,timeLine,controls,player,modal]),player.addObserver(controls),player.init(),navigation&&navigation.init(),controls.setTimeLineWidth(controls.element),player.element.onclick=navigation.element.onclick=function(e){var t=void 0;video.isPlaying()&&(video.stop(),t=!0),e.target.hasAttribute("data-play")&&(t||video.play())},document.onclick=function(e){var t=e.target;if(t.hasAttribute("data-select")){var n=t.parentElement.parentElement.children;n.forEach=[].forEach,n.forEach(function(e){e.firstChild.classList.remove("selected")}),t.classList.add("selected")}},document.onkeydown=function(e){if(video.isPlaying())video.stop();else{var t=getComputedStyle(modal.element).display;32===e.keyCode&&"none"===t&&video.play()}},video.element.onended=function(){video.stop()},player.element.onmouseover=player.element.onmousemove=function(){controls.showControls()},player.element.onmouseout=function(e){controls.hideControls()},controls.volume.onmouseover=function(){controls.volumeSlider.style.display="inline",controls.volumeLine={top:controls.getCoords(controls.volumeSlider).top,right:controls.getCoords(controls.volumeSlider).right,bottom:controls.getCoords(volume).bottom,left:controls.getCoords(volume).left}},document.onmousemove=function(e){var t=controls.volumeLine;t&&(e.pageX>t.left&&e.pageX<t.right&&e.pageY>t.top&&e.pageY<t.bottom||(controls.volumeSlider.style.display="none"))},controls.volume.onmousedown=controls.volumeSlider.onmousedown=function(){video.stop()},setVariables();</script></body></html>';
		iframe.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(icontent);
		iframe.width = '100%';
		iframe.height = '100%';
		iframe.scrolling = 'no';
		iframe.style.backgroundColor = "transparent";
		iframe.allowTransparency = "true";
		iframe.frameBorder = 0;

		iframeHolder.appendChild(iframe);
		if (playerWidth === '100%') {
			var pad = '5px';
			iframeHolder.style.backgroundColor = 'black';
			iframeHolder.style.paddingTop = pad;
		}
		iframeHolder.style.width = playerWidth;
		iframeHolder.style.margin = 'auto';

		var aspectRatioCoef = 2.022316684378321;

		var timerID = setTimeout(function run() {
			iframeHolder.style.height = Math.ceil(iframeHolder.offsetWidth / aspectRatioCoef) + 'px';
			timerID = setTimeout(run, 100);
		}, 100);
	}, 100);
})();
