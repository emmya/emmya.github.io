// var stumble = [
//   ['nevver', 'http://thisisnthappiness.com/'],
//   ['Google webfont combos', 'http://hellohappy.org/beautiful-web-type/'],
//   ['digg', 'http://digg.com/'],
//   ["The Players' Tribune", 'http://www.theplayerstribune.com/'],
//   ['the lab @ Bleacher Report', 'http://thelab.bleacherreport.com/'],
//   ['omnive', 'http://www.omive.com/'],
//   ['subtlepatterns.com', 'http://subtlepatterns.com/'],
//   ['Kuler', 'https://color.adobe.com/create/color-wheel/'],
//   ['hackertyper', 'http://hackertyper.net/'],
//   ['Polygraph', 'http://poly-graph.co/billboard/'],
//   ['@cassiethadoge', 'https://www.instagram.com/cassiethadoge/']
// ];

// var made = [
//   ['website for dad', 'http://www.armintrouthomes.com/'],
//   ['Fancy Fields', 'https://medium.com/whistle-product-engineering-blog/fancy-fields-d7cfc2f68e6d'],
//   ['Ultimate tic tac toe', 'http://emmyarm.tumblr.com/ultimatettt'],
//   ['Vector portrait', lightbox],
//   ['static site boilerplate', 'https://github.com/emmya/starter-static-site'],
//   ['Marshawn wisdom', 'http://beastmodewisdom.tumblr.com/'],
//   ['quick hackweek data site @ whistle', 'http://data.whistle.com.s3-website-us-west-1.amazonaws.com/'],
//   ['Epic Portrait Generator', 'http://epicportrait.herokuapp.com/'],
//   ['unleash the dog', unleash],
//   ["Christmas '15", lightbox]
// ];

// var lightbox = {
//   'Vector portrait': 'http://i.imgur.com/DWhDNgP.png',
//   "Christmas '15": ''
// };

var guitar = document.getElementById("guitar");

var unleash = function() {
    $('.jamdog').html('<img src="http://i.imgur.com/9DueHnf.gif" height=200px width=170px>');
    animateDoge();
    guitar.play();
};

function animateDoge() {
    var newq = makeNewPosition();
    $('.jamdog').animate({ top: newq[0], left: newq[1] }, 2000, function(){
      animateDoge();
    });
}

function makeNewPosition(){
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];
}

// var urler = function(url, txt) {
//   return '<a target="_blank" href="' + url + '">' + txt + '</a>';
// };

$(document).ready(function() {

  $('.icon.guitar').click(function() {
    unleash();
  });


  console.log('%cOoooooooo!', 'color: purple');
  console.log('');

  console.log('%cCool stuff:', 'color: green');
  // console.log('Polygraph');
  console.log('http://poly-graph.co/billboard/');
    // console.log('nevver');
  console.log('http://thisisnthappiness.com/');
  // console.log('digg');
  console.log('http://digg.com/');
  // console.log("The Players' Tribune");
  console.log('http://www.theplayerstribune.com/');
  // console.log('the lab @ Bleacher Report');
  console.log('http://thelab.bleacherreport.com/');
  // console.log('omnive');
  console.log('http://www.omive.com/');
  // console.log('hackertyper');
  console.log('http://hackertyper.net/');

  console.log('-- web/ux design-y:');
  console.log('http://hellohappy.org/beautiful-web-type/');
  console.log('http://subtlepatterns.com/');
  console.log('https://color.adobe.com/create/color-wheel/');


console.log('');

  console.log('%cstuff by me:', 'color: green');


  console.log('-- Fancy Fields:');
  console.log('https://medium.com/whistle-product-engineering-blog/fancy-fields-d7cfc2f68e6d');
  console.log('-- quick Whistle data site:');
  console.log('http://data.whistle.com.s3-website-us-west-1.amazonaws.com/');
  console.log('-- Epic Portrait Generator:');
  console.log('http://epicportrait.herokuapp.com/');
  console.log('-- static site boilerplate:');
  console.log('https://github.com/emmya/starter-static-site');
  console.log('-- website for dad:');
  console.log('http://www.armintrouthomes.com/');
  console.log('-- Battleship:');
  console.log('http://bship.herokuapp.com/');


  // var s = Math.floor(Math.random() * stumble.length);
  // var m = Math.floor(Math.random() * made.length);

  // execute(stumble, s, '#lucky-txt', 'string');
  // execute(made, m, '#made-txt', 'string');




  // $('.lucky .anotha').click(function() {
  //   execute(stumble, s, '#lucky-txt');
  // });

  // $('.made .anotha').click(function() {
  //   execute(made, m, '#made-txt');
  // });

  // function execute(arr, i, id, type) {
  //   type = type || null;
  //   i += 1;
  //   if (i >= arr.length) { i = 0; }
  //   if (type && typeof(arr[i][1] != type) {
  //     execute(arr, i, id, type);
  //   } else if (typeof(arr[i][1] == 'string')) {
  //     $(id).html(urler(arr[i][1], arr[i][0]));
  //   }
  // }

});
