//jQuery Robot v.01 - Original idea, graphics, mark-up, css and clunkified js script by: Anthony Calzadilla
//jQuery robot script completely rewritten by the very generous folks at: codingcyborg.com

$(document).ready(function(){ 
$('#cloud-01').css({backgroundPosition: '0 -80px'});
$('#cloud-02').css({backgroundPosition: '0 -30px'});
$('#mountains-03').css({backgroundPosition: '0 50px'});
$('#trees-04').css({backgroundPosition: '0 50px'});
$('#ground').css({backgroundPosition: 'left bottom'});
$('#branding').css({backgroundPosition: 'center 0'});
$('#content').css({backgroundPosition: 'center 0'});
$('#sec-content').css({backgroundPosition: 'center 0'});
$('#footer').css({backgroundPosition: 'center 0'});
$('#wrapper').css({overflow: "hidden"});

	$('#klicker').click(function(){
		$('#cloud-01').animate({backgroundPosition: '(-500px -80px)'}, 20000);
		$('#cloud-02').animate({backgroundPosition: '(-625px -30px)'}, 20000);
		$('#mountains-03').animate({backgroundPosition: '(-2500px 50px)'}, 20000);
		$('#ground').animate({backgroundPosition: '(-5000px bottom)'}, 20000);
	
	startHim();
	
	$("#full-robot").animate({left:"50%",marginLeft:"-150px"}, 2000);
	
	setTimeout("leaveScreen()",15000);
	
	});
		
});
	var num = 1;
function startHim(){
	num++;
	$("#sec-content").animate({top:"-=5px"},150).animate({top:"+=5px"},150);
	$("#content,#branding").animate({top:"-="+num+"px"},150).animate({top:"+="+num+"px"},150);
	if(num<4){
		setTimeout("startHim()",300);
	} else {
		setTimeout("bounceHim()",300);
	}
}
	
function bounceHim(){
	$("#sec-content,#branding").animate({top:"-=4px"},150).animate({top:"+=4px"},150);
		$("#content").animate({top:"-=8px"},150).animate({top:"+=8px"},150);
	setTimeout("bounceHim()",300);
}
	
function leaveScreen(){
	$("#full-robot").animate({left:"100%",marginLeft:"0px"}, 2000);
}
