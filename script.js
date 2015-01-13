//this is intended to seamlessly manipulate the positioning of items (with equal sizes)
//given the size of the window.
document.addEventListener("DOMContentLoaded", function(event) {

function is_touch_device() {
   return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

$(function(){
  // Instantiate MixItUp:
  $('#Container').mixitup();
});

if (is_touch_device) {
    console.log(' touch device');
} else {
    console.log('not touch device');
}

    //DANCING DOG JQUERY
    $('#dog').click(function() {
        crazyDog();
    });

    //UPDATING POSITIONING WHEN WINDOW IS MOVED
window.addEventListener('resize', function() {
    w = window.innerWidth; // window width
    h = window.innerHeight;
    ctnrWidth = w-sideDiv.offsetWidth-ctnrMarginRight;
    nc = getColumns();
    nr = getRows(nc, numCircles);
    getTopSpacing(nr);
    getSideSpacing(nc);
});


//===================
//  BUTTON LOCATION
//===================

//INITIALIZING VARIABLES AND WIDTH
var circles = document.getElementsByClassName("butt"); //array of items
var numCircles = circles.length;
var buttons = document.getElementsByTagName("button"); //array of item buttons

var w = window.innerWidth; // window width
var h = window.innerHeight; //window height

var diameter = 100; //size of items
var minimumSides = 60;
var minimumSpace = 40;
var sideMargins;
var spacing;
var nr; //number of rows there should be
var nc; //number of columns there should be

var ctnrMarginRight = 0; //if container has a marginRight in the CSS
var sideDiv = document.getElementById("left"); //div on the side (can adjust width in CSS)
var ctnrWidth = w-sideDiv.offsetWidth-ctnrMarginRight; //item container width


//DETERMINING NUMBER OF COLUMNS AND ROWS
function getColumns() {
    for (var r=0; r<numCircles; r++) {
        if (r*(diameter+minimumSides)+minimumSides > ctnrWidth) {
            console.log("columns: "+nc);
            return (r-1);
        }
    }
}
function getRows(cols, numCircles) {
    if (numCircles%cols === 0) {
        console.log("rows: "+nr);
        return numCircles/cols;
    } else {
        console.log("rows: "+nr);
        return (numCircles-(numCircles%cols))/cols+1;
    }
}
nc = getColumns();
nr = getRows(nc, numCircles);
//DETERMINING TOP/BOTTOM SPACING
function getTopSpacing(nr) {
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
getTopSpacing(nr);
//DETERMINING SIDE SPACING
function getSideSpacing(nc) {
    sideMargins = (ctnrWidth-(diameter*nc))/(nc+1);
    for (var x=0; x<numCircles; x++) {
        circles[x].style.marginRight = (sideMargins+"px"); //right margin
    }
    sideDiv.style.marginRight = (sideMargins+"px"); //initializing left margin
}
getSideSpacing(nc);

//===================
//    DANCING DOG
//===================

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

//===================
//   INFO BALLOONS
//===================
$(':button').mouseenter(function() {
    var par = $(this).closest('.butt');
    par.children('.info').css("zIndex", 1);
    par.children('.info').animate({
        opacity: 1
    }, 300);
});
$('.butt').mouseleave(function() {
    $(this).children('.info').animate({
        opacity: 0,
        zIndex: -1
    }, 300);
    // $(this).children('.info').css("zIndex", -1);
});




});