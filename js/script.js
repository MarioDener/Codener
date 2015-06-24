$(function(){
	var token = 1;
	$('.button a').click(function(event){
		event.preventDefault();
		if (token == 1) {
			$('.navegation').animate({left:'0%'});
			token = 0;
		}
		else
		{
			$('.navegation').animate({left:'100%'});
			token = 1;
		}
		
	})
});