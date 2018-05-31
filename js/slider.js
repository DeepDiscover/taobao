/**
 *主副轮播图
 *container 轮播区域的ID
 *speed 自动轮播的速度，默认5秒
 *navActiveColor 页面按钮激活颜色，默认：#f40
 *
 */
 function Slider(container,speed,navActiveColor){
 	this.container = document.getElementById(container);
 	this.imgBox = this.container.getElementsByClassName('img-box');
 	this.bar = this.container.getElementsByClassName('slider-ctrl')[0];
 	this.leftBar = this.bar.getElementsByClassName('left-bar')[0];
 	this.rightBar = this.bar.getElementsByClassName('right-bar')[0];
 	this.navBtn = this.container.getElementsByClassName('slider-nav-btn');
 	this.currentPage = this.container.getElementsByClassName('current-page');

 	this.width = this.container.offsetWidth ;
 	this.imgBoxCount = this.imgBox.length ;
 	this.speed = speed || 5000 ;
 	this.color = navActiveColor || '#f40' ;
 	this.oldColor = null ;

 	this.status = 0 ;	
 	this.timer = null;
 	this.init();
 }
 Slider.prototype = {
 	constructor:Slider ,
 	init:function(){
 		var _this = this ;
 		this.imgBox[0].active = 1 ;
 		this.imgBox[0].index = 0 ;
 		this.navBtn[0].index = 0 ;
 		this.navBtn[0].style.backgroundColor = this.color ;
 		var navBtn = window.getComputedStyle?window.getComputedStyle(this.navBtn[1],null):this.navBtn[1].currentStyle;
 		this.oldColor = this.colorRGBtoHex(navBtn.backgroundColor);
 		this.leftBar.to = 'left' ;
 		this.rightBar.to = 'right' ;
 		for(var i = 1 ; i < this.imgBoxCount ; i++){
 			this.navBtn[i].index = i ;
 			this.imgBox[i].active = 0 ;
 			this.imgBox[i].index = i;
 			this.imgBox[i].style.left = this.width + 'px' ; 
 		}	
 		this.autoPlay();
 		this.addListener();
 	},
 	addListener:function(){
 		var _this = this ;
 		document.addEventListener("visibilitychange", function(){_this.autoPlayCtrl()});
 		this.container.addEventListener('mouseover',function(){_this.bar.style.display = 'block';clearInterval(_this.timer);});			
 		this.container.addEventListener('mouseout',function(){_this.bar.style.display = 'none';_this.autoPlay();});	
 		this.leftBar.addEventListener('click',function(){_this.moveReady(this)});
 		this.rightBar.addEventListener('click',function(){_this.moveReady(this)});
 		for(var i = 0 ;i < this.imgBoxCount ; i++){
 			this.navBtn[i].addEventListener('click',function(){_this.selectPlay(this)});
 		}
 	},
 	selectPlay:function(navBtn){
 		var imgActive = null ;
 		for(var i = 0 ; i < this.imgBoxCount ; i++){
 			if(this.imgBox[i].active == 1){
 				imgActive = this.imgBox[i] ;
 				break ;
 			}
 		}
 		if(navBtn.index != imgActive.index){
 			if(navBtn.index > imgActive.index){
 				this.move(imgActive,this.imgBox[navBtn.index],'left');
 			}else{
 				this.move(imgActive,this.imgBox[navBtn.index],'right');
 			}
		}
	},
	autoPlay:function(){
		var _this = this ;
		this.timer = setInterval(function(){_this.moveReady(_this.leftBar);},this.speed);
	},
	autoPlayCtrl:function(){
		var _this = this ;
		if(document.hidden){
			clearInterval(this.timer);
		}else{
			this.autoPlay();
		}
	},
	moveReady:function(clickBar){
		if(this.status == 0){			
			var i = 0 ;
			while(this.imgBox[i].active == 0){
				i++ ;
			}
			var currentImg = this.imgBox[i] ;
			var nextImg = null ;
			var moveTo = null ;
			if(clickBar.to == 'left'){					
				i == ( this.imgBoxCount - 1 ) ? nextImg = this.imgBox[0] : nextImg = this.imgBox[i+1] ;
				moveTo = 'left' ;	
			}else{
				i == 0 ? nextImg = this.imgBox[this.imgBoxCount-1] : nextImg = this.imgBox[i-1];
				moveTo = 'right' ;
			}
			this.move(currentImg,nextImg,moveTo);
		}
	},
	move:function (currentImg,nextImg,moveTo){
		this.status = 1 ;
		currentImg.active = 0 ;
		nextImg.active = 1 ;
		var position  = 0;	
		var _this = this ;
		if(moveTo == 'left'){				
			currentImg.timer = setInterval(function(){
				var speed = Math.ceil(Math.abs(currentImg.offsetLeft + _this.width)/4) ;
				position += speed ;
				currentImg.style.left = -position + 'px';
				nextImg.style.left = (-position + _this.width) + 'px';
				if(currentImg.offsetLeft == -_this.width){
					clearInterval(currentImg.timer);
					_this.status = 0 ;
				}			
			},20);
		}else if(moveTo == 'right'){
			currentImg.timer = setInterval(function(){
				var speed =   Math.ceil(Math.abs(currentImg.offsetLeft - _this.width)/4) ;
				position += speed ;
				currentImg.style.left = position + 'px';
				nextImg.style.left = (position - _this.width) + 'px';	
				if(currentImg.offsetLeft == _this.width){
					clearInterval(currentImg.timer);
					_this.status = 0 ;
				}
			},20);
		}
		this.navBtn[currentImg.index].style.backgroundColor = this.oldColor ;
		this.navBtn[nextImg.index].style.backgroundColor = this.color ;
		if(this.currentPage.length != 0){
			this.currentPage[0].innerHTML = nextImg.index + 1 ;
		}
	},
	colorRGBtoHex:function (color) {
		var rgb = color.split(',');
		var r = parseInt(rgb[0].split('(')[1]);
		var g = parseInt(rgb[1]);
		var b = parseInt(rgb[2].split(')')[0]);
		var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
		return hex;
	}
}
window.onload = function(){
	new Slider('ads-slider-one',4000);
	new Slider('ads-slider-two','','#222');
}