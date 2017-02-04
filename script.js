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
	$('#portocaliu').hover(function(){
		$(this).text('hello');
	});


	$("input").change(function(){
		console.log("change")
		$("#para").html( string_chop($("#text").val(), $("#number").val()) );
	});


	
	$(".valori").change(function(){
		console.log("change")
		$("#img").css("top", $('#y').val()+ "px")
			     .css("left", $('#x').val()+ "px")
			     .css("transform", "rotate("+ $('#r').val()+"deg)");
	});
});

function string_chop(text, number){
	console.log(text, number)
	a=text.length/2;
	b=number/2;
	c=text.slice(a-b, a+b);
	return(c);

};

