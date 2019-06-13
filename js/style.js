$(document).ready(function(){

	"use strict";
    
    
	$(".carousel").carousel({
		interval: 6000 
	});


});

//Start loading Section 

$(window).load(function(){
    $(".loading .spinner").fadeOut(1000,function(){
        $("body").css("overflow","auto"); 
        $(".loading").fadeOut(1000,function(){
            $(".loading").remove();
        });
    });

    

    //scroll Up - Down Icon


	$(window).scroll(function(){

	    if ($(window).scrollTop() >= 300) {

	        $(".scroll-top").fadeIn(2000);

	    }else{

	        $(".scroll-top").fadeOut(2000);
	    }

	});

	$(".scroll-top").click(function(){

	    $("html , body").animate({scrollTop:0},2000);
	});
});

//Start photo gellery Section
var elem = document.querySelector('.m-p-g');

document.addEventListener('DOMContentLoaded', function() {
	var gallery = new MaterialPhotoGallery(elem);
});


  (function(i,s,o,g,r,a,m){
  	i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46156385-1', 'cssscript.com');
  ga('send', 'pageview');

