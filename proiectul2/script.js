    function Images(src, r, x, y){
        if (src === undefined)
            throw("Must provide a valid link for 'src'");
        this.img = $("<img>").appendTo("#pic");      //select option:selected but u need a css trick to remove inheritance 
        this.src=src;
        this.img.attr('src', src)
                    .css({position: 'absolute', 
                            'transform-origin': '50% 50%',
                            margin: '-'+this.img.height()/2+'px 0px 0px -'+this.img.width()/2+'px ',   //problem with first loaded img
                            })
                    .show();
        this.position(x,y);
        this.rotation(r);
        //TODO set image origin at the center of the image
        //TODO load image in web page (jquery)
    }
    Images.prototype.position = function(x,y){
        console.log('position called',x,y)
        this.x = x;
        this.y = y;
        this.img.css({'top':y, 'left':x});
        return this;

        //TODO change actual image position
    }
    Images.prototype.rotation = function(r){
        console.log('actual rotation',r)
        this.r = r;
        this.img.css('transform', 'rotate('+r+'deg)');
        return this;
        //TODO change actual image rotation
    }
    Images.prototype.show = function(){
        this.img.show();
        return this;
    }
    Images.prototype.hide = function(){
        this.img.hide();
        return this;
    }
    Images.prototype.kill = function(){
        this.img.remove();
        return this;
    }
        //TODO add methods: show, hide
        //TODO add method 'kill' - removes image from DOM

$(document).ready(function(){
          stock =[];
          // stock[0] = new Images('wifi.png' , 0, 150, 150);
          var i=0;

            $("input").keypress( function (e) {
                var key = e.which;
                if(key == 13){                                                        //for enter key
                value = $( this ).val();
                            $('#multiple').prepend('<option id="nr'+i+'"></option>')
                                      .children('option')                          
                                      .first()
                                      .text( value );                                                //add to <select> a new option

                                      if(i>4){ 
                                        $('#multiple').children('option').last().remove()};                   //remove the oldest option (max 5)
                                        i++;

                                      if(i>5){ 
                                        stock[0][0].kill();
                                        stock = stock.slice(1, stock.length);                       //remove the oldest pic ( max 5)
                                        i--;
                                      }
                             }
                });

           $( "select" ).change(function() {
           var str = "";                            
                    $( "select option:selected" ).each(function() {
                    str += $( this ).text() + " ";
                                 $(document).one("dblclick", function(event) {
                                          var mouseX = event.pageX,
                                                mouseY = event.pageY;                              // coordinates from mouse
                                          console.log( 'img nr=' + stock.length + ' and i=' + i) ;
                                          var helper =[new Images(str , 0, mouseX, mouseY), i]    // create an image in #pic. See line5
                                          stock.push( helper);
                                    })    
                      $( "#display" ).text( "Double click to create "+ str );

                    });
        });

});