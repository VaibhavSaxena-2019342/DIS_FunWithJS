m = 500;
fx = 0;
fy = 0;
hx = 0;
hy = 0;
var curs = {'x':0,'y':0};
var zoom = 
{
    initialize: function($)
    {
        var $magnifyingglass = $('<div style="position:absolute;width:100px;height:100px;display:none;overflow:hidden;z-index:3;border-radius:50%;border:5px;border-style:solid;border-color:#707271;"/>')
            .append('<div style="position:absolute;"/>').appendTo(document.body)

        zoom.$magnifyingglass = {outer:$magnifyingglass,inner:$magnifyingglass.find('div:eq(0)'),image:null}

        $(document).bind('mousemove.trackmagnifier', function(e)
        {
            if(zoom.active)
                zoom.move(e)
        })
    },

    setup: function($,imgmain,optns)
    {
        var $imgmain = $(imgmain)

        $imgmain.mouseenter(function()
        {
            var $magnifyingglass = zoom.$magnifyingglass
            var offset = $imgmain.offset()

            $magnifyingglass.outer.css({width:100, height:100})
            $magnifyingglass.inner.html('<img src="'+optns.bigsrc+'"/>')
            $magnifyingglass.image = $magnifyingglass.outer.find('img:first').css({width:$imgmain.width()*3,height:$imgmain.height()*3})

            imgmain.cordinates = {left:offset.left,top:offset.top,right:offset.left+$imgmain.width(),bottom:offset.top+$imgmain.height()}
            zoom.active = imgmain
            $magnifyingglass.outer.show()
        })
    },

    move: function(e)
    {
        var cordinates = zoom.active.cordinates

        if(e.pageY>=cordinates.top && e.pageY<=cordinates.bottom && e.pageX<=cordinates.right && e.pageX>=cordinates.left)
            zoom.$magnifyingglass.outer.css({top:e.pageY-110,left:e.pageX+30})
        else
            zoom.$magnifyingglass.outer.hide()
        
        zoom.$magnifyingglass.inner.css({top:(-(e.pageY-cordinates.top) * 3+30),left:(-(e.pageX-cordinates.left) * 3+30)})
    }
}

function curtainUp()
{
    $('#crtn').css({visibility: "visible"}).animate({opacity: 0}, 1500);
    setTimeout(function()
    {
        document.getElementById("crtn").style.visibility = "hidden";
    }, 1500);
    
    document.getElementById("sc1").style.visibility = "hidden";
    document.getElementById("sc2").style.visibility = "visible";
    document.getElementById("onofftext").innerHTML = "ON";
    document.getElementById("onofftext").style.color = "red";
}
function curtainDown()
{
    $('#crtn').css({visibility: "visible"}).animate({opacity: 1}, 2000);
    //document.getElementById("crtn").style.visibility = "visible";
    document.getElementById("sc1").style.visibility = "visible";
    document.getElementById("sc2").style.visibility = "hidden";
    document.getElementById("onofftext").innerHTML = "OFF"
    document.getElementById("onofftext").style.color = "black";
}

function changeImg(x)
{
    x.src = "Resources/2masked.png";
    document.getElementById("img1.2").style.opacity = 1;
}
function changeImgBack(x)
{
    x.src = "Resources/2black.png";
    document.getElementById("img1.2").style.opacity = 0;
}

function changeImg2(x)
{
    x.src = "Resources/0SocialDistance.png";
}
function changeImgBack2(x)
{
    x.src = "Resources/0black.png";
}

function changeImg3(x)
{
    x.src = "Resources/2sleeping.png";
}
function changeImgBack3(x)
{
    x.src = "Resources/2black.png";
}

function changeImg4(x)
{
    x.src = "Resources/0crying.png";
}
function changeImgBack4(x)
{
    x.src = "Resources/0black.png";
}

function LaptopImg()
{
    document.getElementById("img3lap").style.opacity = 1;
}
function LaptopImgBack()
{
    document.getElementById("img3lap").style.opacity = 0;
}

function LossImg()
{
    document.getElementById("img4.2").style.opacity = 1;
}
function LossImgBack()
{
    document.getElementById("img4.2").style.opacity = 0;
}

$(document).bind('mousemove',function(e)
{
    curs = {'x':e.pageX,'y':e.pageY};
}
);

$('.person').each(function(index,vr)
{
    $(vr).data("hy",parseInt($(vr).position().top));
    $(vr).data("hx",parseInt($(vr).position().left));
}
);

$('.person').css('position','absolute');

setInterval(function()
{
    $('.person').each(function(index,vr)
    {
        vr = $(vr);
        ay = curs.y;
        ax = curs.x;
        by = vr.offset().top;
        bx = vr.offset().left;
        dy = ay-by;
        dx = ax-bx;

        d = Math.sqrt((dx*dx)+(dy*dy));
        py = by-(dy/d)*m/d;
        px = bx-(dx/d)*m/d;
        fy = (fy+(vr.data('hy')-by)/2)/2.1;
        fx = (fx+(vr.data('hx')-bx)/2)/2.1;
        
        vr.css('top',py+fy);
        vr.css('left',px+fx);
    }
    );

}, 10);

jQuery(document).ready(function($)
{
    zoom.initialize($)
})

jQuery.fn.addeffect = function()
{
    optns = {}

    if(optns.pre)
        optns.bigsrc = optns.pre.src
    else
        optns.bigsrc = $(this).attr('src')

    zoom.setup($,this,optns)
}
