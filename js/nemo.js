var winW=winH=0;
$(document).ready(function(){
	getScreen();
	$('.jiance_close_btn').click(function(){
	    $('.fixed_jiance').hide();
	    $('.jiance_zhao').hide();
	  });
});
$(window).resize(function(){
	getScreen();
})
function getScreen(){
	winW=document.body.clientWidth;
	winH=document.body.clientHeight;
	changEle("leftPanle");
}
function changEle(_ele){
	var _e=document.getElementById(_ele);
	_e.style.width=(winW-802)/2+202+"px";
}