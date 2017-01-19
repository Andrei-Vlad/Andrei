console.log("Hello World!");
$(document).ready(function(){

	$(".vlad").mouseenter(function() {
		$(".andrei").hide() 
	});
	
	$(".vlad").mouseleave(function() {
		$(".andrei").show();	
	});




});