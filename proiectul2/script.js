
    function Imagines(src, r, x, y){
        if (src === undefined)
            throw("Must provide a valid link for 'src'");
        this.src=src;
        this.img = $("<img>").appendTo("body");
        this.img.attr('src',src);
        this.img.css('position','absolute').css('margin','auto');
        this.position(x,y);
        this.rotation(r);

        this.img.show();
        this.img.css('transform-origin', (this.img.height()/2)+'px '+(this.img.width()/2)+'px');
        this.img.css('margin','-'+(this.img.height()/2)+'px 0px 0px -'+(this.img.width()/2)+'px');
    }
    Imagines.prototype.position = function(x,y){
        console.log('position called',x,y)
        this.x = x;
        this.y = y;
        this.img.css('top',y).css('left',x);
        return this;

        //TODO change actual image position
    }
    Imagines.prototype.rotation = function(r){
        console.log('actual rotation',r)
        this.r = r;
        this.img.css('transform', 'rotate('+r+'deg)');
        return this;
        
        //TODO change actual image rotation
    }
    Imagines.prototype.show = function(){
        this.img.show();
        return this;
    }
    Imagines.prototype.hide = function(){
        this.img.hide();
        return this;
    }
    
    Imagines.prototype.kill = function(){
        this.img.remove();
        return this;
    }
        //TODO add methods: show, hide
        //TODO add method 'kill' - removes image from DOM


$(document).ready(function(){

    	a = new Imagines("wifi.png", 0, 0, 0);

   
});


