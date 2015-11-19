//this is intended to seamlessly manipulate the positioning of items (with equal sizes)
//given the size of the window.
$(document).ready(function() {
    $('.hey').css('display', 'none');

    // filters
    $('.filter').click(function(e) {
        e.preventDefault();
        var filter = $(this).attr('id');
        var filters = ['random', 'made', 'about', 'extra'];
        for (var i in filters) {
            $('.' + filters[i]).parent().fadeOut('fast');
        }
        setTimeout(function() {
            $('.' + filter).parent().fadeIn();
        }, 300);
    });

    //info balloons
    $(':button').mouseenter(function() {
        var par = $(this).closest('.butt');
        par.children('.info').animate({
            opacity: 1
        }, 300);
    });
    $('.button-wrap').mouseleave(function() {
        $(this).children('.butt').children('.info').animate({
            opacity: 0,
        }, 300);
    });


    //dancing dog
    $('#dog').click(function() {
        $('#dog').addClass('disabled');
        $(this).closest('.butt').children('.info').animate({
            opacity: 0,
        }, 300);
        crazyDog();
    });

    var guitar = document.getElementById("guitar");
    function crazyDog() {
        $('#jamdog').html('<img src="http://i.imgur.com/9DueHnf.gif" height=200px width=170px>');
        animateDiv();
        guitar.play();
        $('.whoa').html("you can't stop the dog!");
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

});