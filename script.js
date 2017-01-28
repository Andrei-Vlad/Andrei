console.log("Hello World!");
$(document).ready(function(){

	$(".vlad").hover(function() 
	{
		$(".andrei").css("background-color","red"); 

	}, function()
				{
					$(".andrei").css("background-color","green");
				} );


	$(".andrei").hover(function() {
		$(".vlad").css("background-color","green");	
	}, function()
				{  	
						$(".vlad").css("background-color","red");
				});
});


