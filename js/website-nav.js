;
/*网站导航悬停加载*/
!function(){
	var data = [['女装','男装','内衣','鞋靴','箱包','婴童','家电','数码','手机','美妆','珠宝','眼镜','手表','运动','户外','乐器','游戏','动漫','影视','美食','鲜花','宠物','农资','房产','装修','建材','家居','百货','汽车','二手车','办公','定制','教育','卡券','本地'],['iFashion','爱逛街','美妆秀','全球购','腔调','淘女郎','星店','极有家','特色中国','拍卖会','淘宝众筹','中国质造','飞猪','亲宝贝','闲鱼','农资','天天特价','Outlets','俪人购','聚名品','淘抢购','全球精选','非常大牌','试用','量贩团','阿里翻译'],['淘宝','天猫','支付宝','聚划算','飞猪','蚂蚁聚宝','旺信','闲鱼','阿里钱盾','钉钉','高德地图','点点虫','虾米音乐','淘票票','菜鸟裹裹','爱逛街','拍卖会','阿里云','网商银行','阿里邮箱','阿里众包'],['余额宝','大牌捡宝','淘公仔','浏览器','淘宝香港','淘宝台湾','淘宝全球','淘宝东南亚','闺蜜淘货','大众评审','淘工作']];
	var websiteNavList = document.getElementsByClassName('website-nav-list')[0];
	var themeMarket = websiteNavList.getElementsByClassName('theme-market')[0];
	var themeMarketUl = themeMarket.getElementsByTagName('ul')[0];
	var charcMarket = websiteNavList.getElementsByClassName('charc-market')[0];
	var charcMarketUl = charcMarket.getElementsByTagName('ul')[0];
	var aliApp = websiteNavList.getElementsByClassName('ali-app')[0];
	var aliAppUl = aliApp.getElementsByTagName('ul')[0];
	var guess = websiteNavList.getElementsByClassName('guess')[0];
	var guessUl = guess.getElementsByTagName('ul')[0];
	var hotTag = ['鞋靴','手机','游戏','淘宝众筹','全球精选','美妆秀','淘票票','淘宝','淘宝全球'];
	var newTag = ['婴童','定制','汽车','汽车','Outlets','iFashion','虾米音乐','阿里众包','蚂蚁聚宝','大牌捡宝','大牌捡宝','淘公仔'];
	for(var i = 0 ; i < data[0].length ; i++){
		if(hotTag.indexOf(data[0][i]) >= 0){
			themeMarketUl.appendChild(createNewLink(data[0][i],'hot'));
		}else if(newTag.indexOf(data[0][i]) >= 0){
			themeMarketUl.appendChild(createNewLink(data[0][i],'new'));
		}else{
			themeMarketUl.appendChild(createNewLink(data[0][i]));
		}
	}
	for(var i = 0 ; i<data[1].length ; i++){
		if(hotTag.indexOf(data[1][i]) >= 0){
			charcMarketUl.appendChild(createNewLink(data[1][i],'hot'));
		}else if(newTag.indexOf(data[1][i]) >= 0){
			charcMarketUl.appendChild(createNewLink(data[1][i],'new'));
		}else{
			charcMarketUl.appendChild(createNewLink(data[1][i]));
		}
	}
	for(var i = 0 ; i<data[2].length ; i++){
		if(hotTag.indexOf(data[2][i]) >= 0){
			aliAppUl.appendChild(createNewLink(data[2][i],'hot'));
		}else if(newTag.indexOf(data[2][i]) >= 0){
			aliAppUl.appendChild(createNewLink(data[2][i],'new'));
		}else{
			aliAppUl.appendChild(createNewLink(data[2][i]));
		}
	}
	for(var i = 0 ; i<data[3].length ; i++){
		if(hotTag.indexOf(data[3][i]) >= 0){
			guessUl.appendChild(createNewLink(data[3][i],'hot'));
		}else if(newTag.indexOf(data[3][i]) >= 0){
			guessUl.appendChild(createNewLink(data[3][i],'new'));
		}else{
			guessUl.appendChild(createNewLink(data[3][i]));
		}
	}

	function createNewLink(txt,tag){
		var li = document.createElement('li');
		var a = document.createElement('a');
		var txt = document.createTextNode(txt);
		a.appendChild(txt);
		li.appendChild(a);
		a.style.position = 'relative';
		if(	tag == 'hot'){
			var hotTag = document.createElement('i');
			a.appendChild(hotTag);
		}
		if(tag == 'new'){
			var newTag = document.createElement('span');
			a.appendChild(newTag);
		}
		return li ;
	}
}();