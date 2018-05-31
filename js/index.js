//APP二维码
! function () {
	var app = document.getElementsByClassName('app-qrc')[0];
	var close = app.getElementsByClassName('fa')[0];
	close.addEventListener('click',function(){
		app.style.display = 'none';		
	});
}();

//充话费、旅游、车险 悬停弹出框
! function(){
	var server = document.getElementsByClassName('server-menu')[0];
	var pay = server.getElementsByClassName('pay-tel-box')[0];
	var trip = server.getElementsByClassName('trip-box')[0];
	var ins = server.getElementsByClassName('auto-ins-box')[0];
	var show = server.getElementsByClassName('server-show')[0];
	var close = show.getElementsByClassName('fa-close')[0];
	
	var payNav = show.getElementsByClassName('pay-nav')[0];
	var payNavTitle = payNav.getElementsByTagName('li');	
	var payContent = show.getElementsByClassName('pay-content')[0];
	
	var tripNav = show.getElementsByClassName('trip-nav')[0];
	var tripNavTitle = tripNav.getElementsByTagName('li');
	var tripContent = show.getElementsByClassName('trip-content')[0];
	
	var insNav = show.getElementsByClassName('ins-nav')[0];
	var insNavTitle = insNav.getElementsByTagName('li');
	var insContent = show.getElementsByClassName('ins-content')[0];	

	pay.addEventListener('mouseover',function(){
		shown(payNav);
		for(var i = 0 ; i < payNavTitle.length ;i++){
			payNavTitle[i].style.width = 250/payNavTitle.length + 'px';
			payNavTitle[i].index = i ;
			payNavTitle[i].addEventListener('mouseover',function(){
				for(var j = 0 ; j < payNavTitle.length ;j++){
					payNavTitle[j].style.color = '#424242' ;
				}
				this.style.color = '#f40';
				move(payContent,-300*this.index);
			});
		}
		shown(payContent);
		payContent.style.width = 300*payNavTitle.length + 'px';
		hide(tripNav);		
		hide(insNav);		
		hide(tripContent);		
		hide(insContent);		
		changeBorder(this);
		backBorder(trip);
		backBorder(ins);
	},true);
	trip.addEventListener('mouseover',function(){
		shown(tripNav);
		for(var i = 0 ; i < tripNavTitle.length ;i++){
			tripNavTitle[i].style.width = 250/tripNavTitle.length + 'px';
			tripNavTitle[i].index = i ;
			tripNavTitle[i].addEventListener('mouseover',function(){
				for(var j = 0 ; j < tripNavTitle.length ;j++){
					tripNavTitle[j].style.color = '#424242' ;
				}
				this.style.color = '#f40';
				move(tripContent,-300*this.index);
			});
		}
		shown(tripContent);
		tripContent.style.width = 300*tripNavTitle.length + 'px';
		hide(payNav);		
		hide(insNav);		
		hide(payContent);		
		hide(insContent);	
		changeBorder(this);
		backBorder(pay);
		backBorder(ins);
	});
	ins.addEventListener('mouseover',function(){
		shown(insNav);
		for(var i = 0 ; i < insNavTitle.length ;i++){
			insNavTitle[i].style.width = 250/insNavTitle.length + 'px';
			insNavTitle[i].index = i ;
			insNavTitle[i].addEventListener('mouseover',function(){
				for(var j = 0 ; j < insNavTitle.length ;j++){
					insNavTitle[j].style.color = '#424242' ;
				}
				this.style.color = '#f40';
				move(insContent,-300*this.index);
			});
		}
		shown(insContent);
		insContent.style.width = 300*insNavTitle.length + 'px';
		hide(tripNav);		
		hide(payNav);		
		hide(tripContent);		
		hide(payContent);	
		changeBorder(this);
		backBorder(trip);
		backBorder(pay);
	});
	close.addEventListener('click',function(){
		show.style.display = 'none' ;
		backBorder(pay);
		backBorder(trip);
		backBorder(ins);
	});
	function changeBorder(obj){
		show.style.display = 'block';
		obj.style.zIndex = 2 ;
		obj.style.borderTopColor = '#f40' ;
		obj.style.borderLeftColor = '#f40' ;
		obj.style.borderRightColor = '#f40' ;
	}
	function backBorder(obj){
		obj.style.zIndex = 0 ;
		obj.style.borderTopColor = '#eee' ;
		obj.style.borderRightColor = '#eee';
		obj.style.borderLeftColor = '#fff';
	}
	function shown(obj){
		obj.style.display = 'block' ;
	}
	function hide(obj){
		obj.style.display = 'none' ;
	}
	
	function move(obj,moveTo){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var curr = obj.offsetLeft ;
			var speed = Math.ceil((moveTo-curr)/5);
			obj.style.left = obj.offsetLeft + speed +'px' ;
			if(speed == 0){
				clearInterval(obj.timer);
				obj.style.left = moveTo + 'px' ;
			}
			if(obj.offsetLeft == moveTo)
				clearInterval(obj.timer);
		},30);
	}
}();


