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



