$(function(){
	var s=document.getElementById('s');
	var sao=document.getElementById("sao")
	var biao=document.getElementsByClassName("biao");
	var login=document.getElementsByClassName("deng");
	
	//点击扫码登录，显示扫码登录的页面
	s.onclick=function(){
		sao.style.display=block;
		login.style.color=gray;
		biao.style.display=none;
	}
	//点击登录注册，显示登录注册，扫码登录颜色变灰
	login.onmouseenter=function(){
		biao.style.display=block;
		s.style.color=gray;
		sao.style.display=none;
	}
})