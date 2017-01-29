console.log("Hello World!");
$(document).ready(function(){
    $('div').hover(
        function(){
            color = $(this).css('background-color');
            $('div').css('background-color', color);
        },
        function(){
            $('div').css('background-color', '');
        }
        );
    });

/*
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
*/


