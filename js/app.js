// setting up the navbar
var list = document.querySelectorAll(".navbar a");
for(var i = 0; i < list.length; i++){
    list[i].style.color = "rgba(255, 255, 255, 0.7)"      
}
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos == 0) {
        document.querySelector(".navbar").style.backgroundColor = "transparent";
        for(var i = 0; i < list.length; i++){
            list[i].style.color = "rgba(255, 255, 255, 0.7)"      
        }
        document.querySelector('.navbar-brand').style.color = 'rgba(255, 255, 255, 0.7)';
        document.querySelector('.active .nav-link').style.color = 'rgba(255, 255, 255, 0.7)';
        document.querySelector('.navbar .fas').style.color = 'rgba(255,255,255,.7)';

    }else{
        document.querySelector(".navbar").style.backgroundColor = "white";
        for(var i = 0; i < list.length; i++){
            list[i].style.color = "black"      
        }
        document.querySelector('.navbar-brand').style.color = '#007bff';
        document.querySelector('.active .nav-link').style.color = '#007bff';
        document.querySelector('.navbar .fas').style.color = '#007bff';


  }
}


//setting aboutus heading fading up
window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos >  120){
        document.querySelector('.about h3').style.opacity = '1'
    }else{
        document.querySelector('.about h3').style.opacity = '0'
    }
})


//setting aboutus divs fading up
window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos >  180){
        document.querySelector('.about img').style.marginTop = '40px';
        document.querySelector('.about .txt').style.marginTop = '40px';

    }else{
        document.querySelector('.about img').style.marginTop = '120px';
        document.querySelector('.about .txt').style.marginTop = '120px';

    }
})












$('.owl-carousel').owlCarousel({
    items: 1,
	autoplay : true,
    loop : true,
	nav: true,
    dots : false,
    dotsEach : 1,	
	responsive:{
        0:{
            dots:false
        },
        480:{
            dots:true
        },
        1200:{
            dots:true
        }
    }    
})
;
$(document).ready(function(){
	var firstprevbtn = document.querySelector('.owl-carousel:first-of-type .owl-prev');
	var secondprevbtn = document.querySelector('.owl-carousel:last-of-type .owl-prev');
	firstprevbtn.click(function() { 
		secondprevbtn.trigger("click"); 
    })
	firstprevbtn.addEventListener('click',function(){
		alert('sec')
	})
});















