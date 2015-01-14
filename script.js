//this is intended to seamlessly manipulate the positioning of items (with equal sizes)
//given the size of the window.
document.addEventListener("DOMContentLoaded", function(event) {

var w = window.innerWidth;

var circles = document.getElementsByClassName("butt"), //array of items
    numCircles = circles.length,
    buttons = document.getElementsByTagName("button"); //array of item buttons
var h = window.innerHeight;
var diameter = 100, //size of items
    minimumSides = 60,
    minimumSpace = 40,
    sideMargins,
    spacing,
    nr, //number of rows there should be
    nc; //number of columns there should be
var ctnrMarginRight = 0, //if container has a marginRight in the CSS
    sideDiv = document.getElementById("left"), //div on the side (can adjust width in CSS)
    ctnrWidth = w-sideDiv.offsetWidth-ctnrMarginRight; //item container width


//For wide screens
if (w >= 390) {
    nc = getColumns(numCircles, diameter, minimumSides, ctnrWidth);
    nr = getRows(nc, numCircles);
    getTopBottomSpacing(nr, diameter, minimumSpace, spacing, sideDiv, h, circles, numCircles);
    getSideSpacing(nc, sideMargins, ctnrWidth, diameter, circles, sideDiv, numCircles);

    window.addEventListener('resize', function() {
        w = window.innerWidth; // window width
        h = window.innerHeight;
        ctnrWidth = w-sideDiv.offsetWidth-ctnrMarginRight;
        nc = getColumns(numCircles, diameter, minimumSides, ctnrWidth);
        nr = getRows(nc, numCircles);
        getTopBottomSpacing(nr, diameter, minimumSpace, spacing, sideDiv, h, circles, numCircles);
        getSideSpacing(nc, sideMargins, ctnrWidth, diameter, circles, sideDiv, numCircles);
    });

    //dancing dog listener
    $('#dog').click(function() {
        crazyDog();
    });

    //info balloons
    $(':button').mouseenter(function() {
        var par = $(this).closest('.butt');
        par.children('.info').css("zIndex", 1);
        par.children('.info').animate({
            opacity: 1
        }, 300);
        par.children('.info').css("zIndex", 1);
    });
    $('.butt').mouseleave(function() {
        $(this).children('.info').animate({
            opacity: 0,
            zIndex: -1
        }, 300);
    });

//For thin (mobile) screens
} else {
    nc = getColumns(numCircles, diameter, 0, w);
    nr = getRows(nc, numCircles);
    getMobileSides(nc, w, diameter, circles, numCircles);

    $('#dog').click(function() {
        $('.whoa').html("sry dog is scared of phones but will play guitar 4 u");
        $('#dog').css('margin-top', '12px');
        guitar.play();
    });
}

//filter init
$(function(){
    $('#Container').mixitup();
});



//===================================
//      button location functions
//===================================
    function getColumns(numCircles, diameter, minimumSides, ctnrWidth) {
        for (var r=0; r<numCircles; r++) {
            if (r*(diameter+minimumSides)+minimumSides > ctnrWidth) {
                return (r-1);
    }   }   }
    function getRows(cols, numCircles) {
        if (numCircles%cols === 0) {
            return numCircles/cols;
        } else {
            return (numCircles-(numCircles%cols))/cols+1;
    }   }
    function getTopBottomSpacing(nr, diameter, minimumSpace, spacing, sideDiv, h, circles, numCircles) {
        if (nr*(diameter+minimumSpace)+minimumSpace > 600) {
            spacing = minimumSpace;
            sideDiv.style.height = ((nr*(diameter+minimumSpace)+minimumSpace)+"px");
        } else {
            h = window.innerHeight;
            if (h > 600) {
                sideDiv.style.height = (h+5+"px");
                spacing = (h-(diameter*nr))/(nr+1);
            } else {
                sideDiv.style.height = 600+'px';
                spacing = (600-(diameter*nr))/(nr+1);
            }
        } for (var x=0; x<numCircles; x++) {
            circles[x].style.marginTop = (spacing+"px");
        }
    }
    function getSideSpacing(nc, sideMargins, ctnrWidth, diameter, circles, sideDiv, numCircles) {
        sideMargins = (ctnrWidth-(diameter*nc))/(nc+1);
        for (var x=0; x<numCircles; x++) {
            circles[x].style.marginRight = (sideMargins+"px"); //right margin
        }
        sideDiv.style.marginRight = (sideMargins+"px"); //initializing left margin
    }
    function getMobileSides(nc, width, diameter, circles, numCircles) {
        sideMargins = (width - (nc*diameter))/(nc+1);
        for (var x=0; x<numCircles; x++) {
            circles[x].style.marginLeft = (sideMargins+"px");
        }
    }

//===========================
//   dancing dog functions
//===========================
    var guitar = document.getElementById("guitar");
    function crazyDog() {
        $('#jamdog').html('<img src="http://i.imgur.com/9DueHnf.gif" height=200px width=170px>');
        animateDiv();
        guitar.play();
        $('.whoa').html("can't stop the dog!");
    }
    function makeNewPosition(){
        var h = $(window).height() - 50;
        var w = $(window).width() - 50;
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
        return [nh,nw];
    }
    function animateDiv(){
        var newq = makeNewPosition();
        $('#jamdog').animate({ top: newq[0], left: newq[1] }, 2000, function(){
          animateDiv();
        });
    }


function isThin() {
    console.log('thin!!!');
}


});