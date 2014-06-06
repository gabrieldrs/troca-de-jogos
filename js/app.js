$(document).foundation({
    orbit: {
      timer: false,
      bullets: false
    }
});

function Slider(id){
    this.id = id;//o id do slider
    this.w=$("#"+this.id+" a").children().length;//nro de itens
    this.l=parseInt($("#"+this.id+" a img").css('width'))+18;//o tanto q vai aumentar/diminuir a margem 8
    this.i=0;//onde estamos
    this.j=parseInt(parseInt($("#"+this.id+"-wrapper").css('width'))/this.l);//width da pagina (div externa)
    this.dataPanel = $("#"+this.id).attr('data-panel');//qual o painel vai receber a margem
    
    this.start = function(){
        $("#"+this.id).css('width',this.w*this.l+"px");
        this.w-=this.j;
        if(this.i>this.w) this.i=this.w;
        $("#"+this.dataPanel).css("marginLeft", this.i*this.l*-1+"px");
    }
    this.recalc = function(){
        this.l=parseInt($("#"+this.id+" a img").css('width'))+18;
        this.j=parseInt(parseInt($("#"+this.id+"-wrapper").css('width'))/this.l);
        this.w=$("#"+this.id+" a").children().length;
        this.start();
    }
    this.goLeft = function(){
        if(this.i>0){
            this.i--;
        }else {
            this.i=this.w;
        }
        $("#"+this.dataPanel).css("marginLeft", this.i*this.l*-1+"px");
        
    }
    this.goRight = function(){
        if (this.i<this.w){
            this.i++;
        }else {
            this.i=0;
        }
        $("#"+this.dataPanel).css("marginLeft",this.i*this.l*-1+"px");
    }
}
$(document).ready(function(){
    var slider = new Slider('partner');
    slider.start();
    $(window).resize(function(){
        slider.recalc();
    });
    $('.left-arrow').click(function(){
        slider.goLeft();
    });
    $('.right-arrow').click(function(){
        slider.goRight();
    });
});