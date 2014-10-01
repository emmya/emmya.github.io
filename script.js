
$(document).ready(function(){
    // $('header').mouseenter(function() {
    //     $('header').fadeTo('fast', .6);
    // });
    // $('header').mouseleave(function() {
    // 	$('header').fadeTo('fast', 1);
    // });
    $('button').mouseenter(function() {
    	$(this).fadeTo('fast', .4);
    });
    $('button').mouseleave(function() {
    	$(this).fadeTo('fast', 1);
    });
    var count=0;
    $('#dog').click(function() {
    	crazyDog(count);

    // 	$('#jamdog').html('<img src="DogGuitarGif.gif">');
    // 	animateDiv();
    // 	$('.whoa').html('stop it dog!');
    // 	$('#dog').addClass('stop');
    // });
    // $('#dog').click(function() {
    // 	$('#jamdog').toggle();
    });
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
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
};

function crazyDog(count) {
	if (count%2 === 0) {
		$('#jamdog').html('<img src="DogGuitarGif.gif" height=200px width=170px>');
		animateDiv();
		$('.whoa').html("can't stop the dog!");
		count++;
	} else {
		$('.whoa').html('you cant stop this dog!');
		count++;
	}
};