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

	console.log("img")

	});
});

function string_chop(text, number){
	console.log(text, number)
	a=text.length/2;
	b=number/2;
	c=text.slice(a-b, a+b);
	return(c);

};

