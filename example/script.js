$(document).ready(function() {
	var columnizeDone = false;
	/* MENU */
	/*$(".menu-item").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});*/
	
	$("#btn-demo").click(function(){
		goToByScroll('demo');
	});
	
	$("#btn-download").click(function(){
		goToByScroll('download');
	});
	
	$("#btn-support").click(function(){
		goToByScroll('support');
	});
	
	$("#btn-author").click(function(){
		window.open("http://promatik.no.sapo.pt");
	});
	
	/* DEMO */ 
	$("button").first().attr("disabled", false);
	
	$("#action-columnize").click(function(){
		columnizeDone = true;
		$('.lorem-ipsum').columnize({ width:210, height:300 });
		$("this").attr("disabled", true);
	});

	$("#action-getColumns").click(function(){
		var n = $('.lorem-ipsum').columnize('getColumns') + " columns!";
		if(columnizeDone) $('.lorem-ipsum').columnize({ width:210, height:300 });
		alert(n);
	});
	
	function goToByScroll(id){
		$('html,body').animate({scrollTop: $("#"+id).offset().top-80},'slow');
	}
});