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












$('.features .owl-carousel').owlCarousel({
    items: 1,
	autoplay : true,
    loop : true,
	nav: true,
    dots : false,
    dotsEach : 1    
})
//
//$(document).ready(function(){
//	var firstprevbtn = document.querySelector('.owl-carousel:first-of-type .owl-prev');
//	var secondprevbtn = document.querySelector('.owl-carousel:last-of-type .owl-prev');
//	firstprevbtn.click(function() { 
//		secondprevbtn.trigger("click"); 
//    })
//});



//setting features heading fading up
window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos <  400){
        document.querySelector('.features > h3').style.opacity = '0';
		document.querySelector('.features > h3').style.marginTop = '190px';
		document.querySelector('.features > p').style.marginTop = '90px';
		document.querySelector('.features > p').style.opacity = '0';		
    }else{
        document.querySelector('.features > h3').style.opacity = '1';
		document.querySelector('.features > h3').style.marginTop = '0px';		
		document.querySelector('.features > p').style.marginTop = '40px';
		document.querySelector('.features > p').style.opacity = '1';		
    }
})


//setting features divs fading up
window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos <  700){
        document.querySelector('.features .container').style.marginTop = '200px';
    }else{
		document.querySelector('.features .container').style.marginTop = '0';
	}
})












//setting features heading fading up
window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos <  1300){
        document.querySelector('.team > h3').style.opacity = '0';
		document.querySelector('.team > h3').style.marginTop = '190px';
		document.querySelector('.team > p').style.marginTop = '90px';
		document.querySelector('.team > p').style.opacity = '0';		
    }else{
        document.querySelector('.team > h3').style.opacity = '1';
		document.querySelector('.team > h3').style.marginTop = '0px';		
		document.querySelector('.team > p').style.marginTop = '40px';
		document.querySelector('.team > p').style.opacity = '1';		
    }
})

var items = document.querySelector('.team .grid .team-item');
for(var i = 0; i < items.length; i++){
	items.style.transitionDuration = (i+1)*.4;
}

//setting features divs fading up
window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var items = document.querySelectorAll('.team .grid .team-item');
    if(currentScrollPos <  1700){
		for(var i = 0; i < items.length; i++){
			items[i].style.marginTop = `${50*i}px`;
		}
    }else{
		for(var i = 0; i < items.length; i++){
			items[i].style.marginTop = '0';		
		}
	}
})


//setting features divs fading up
window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var items = document.querySelectorAll('.team .grid:last-of-type .team-item');
    if(currentScrollPos <  2100){
		for(var i = 0; i < items.length; i++){
			items[i].style.marginTop = `${50*i}px`;
		}
    }else{
		for(var i = 0; i < items.length; i++){
			items[i].style.marginTop = '0';		
		}
	}
})

//setting the social icons sidebar
var imgicons = document.querySelectorAll('.img-icons');
for(var i = 0; i < imgicons.length; i++){
			imgicons[i].addEventListener('mouseover',function(){
				this.querySelector('div').style.zIndex = '1';
				this.querySelector('div').style.width = '40px';
			})
		}
for(var i = 0; i < imgicons.length; i++){
			imgicons[i].addEventListener('mouseout',function(){
				this.querySelector('div').style.zIndex = '-1';
				this.querySelector('div').style.width = '0px';

				
			})
		}



//setting the filter 
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
		var btn = document.querySelector('.btns .btn-primary');
		btn.classList.remove("btn-primary");
		btn.classList.add("btn-default");
		this.classList.add('btn-primary');
//   		alert(value);	     
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

});









//setting portofolio section fading

window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var heading = document.querySelector('.Portfolio h2');
	if(currentScrollPos <  2400){
		heading.style.opacity = '0';
    }else{
		heading.style.opacity = '1';
	}
})

//setting the portoflio fading up
window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var btns = document.querySelector('.Portfolio .btns');
    if(currentScrollPos <  2700){
		btns.style.marginTop = '90px';
		btns.style.opacity = '0';
    }else{
		btns.style.marginTop = '0px';
		btns.style.opacity = '1';		
	}
})

//showing and hiding the bckground of portofolio
var backs = document.querySelectorAll('.Portfolio .row .column > figure');
for(var i = 0; i < backs.length; i++){
			backs[i].addEventListener('mouseover',function(){
				this.querySelector('div').style.zIndex = '1';
			})
		}
for(var i = 0; i < backs.length; i++){
			backs[i].addEventListener('mouseout',function(){
				this.querySelector('div').style.zIndex = '-1';
			})
		}





(function($){

      // Init empty gallery array
      var container = [];

      // Loop over gallery items and push it to the array
      $('#gallery').find('figure').each(function(){
        var $link = $(this).find('a'),
            item = {
              src: $link.attr('href'),
              w: $link.data('width'),
              h: $link.data('height'),
              title: $link.data('caption')
            };
        container.push(item);
      });

      // Define click event on gallery item
      $('a').click(function(event){

        // Prevent location change
        event.preventDefault();

        // Define object and gallery options
        var $pswp = $('.pswp')[0],
            options = {
              index: $(this).parent('figure').index(),
              bgOpacity: 0.85,
              showHideOpacity: true
            };

        // Initialize PhotoSwipe
        var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
        gallery.init();
      });

    }(jQuery));


//setting the services section
window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var head = document.querySelector('.services h2');
    if(currentScrollPos <  4300){
		head.style.marginTop = '90px';
		head.style.opacity = '0';
    }else{
		head.style.marginTop = '0px';
		head.style.opacity = '1';		
	}
})





$('.testimonial .owl-carousel').owlCarousel({
    items: 1,
	autoplay : true,
    loop : true,
	nav: false,
    dots : true,
    dotsEach : 1    
})



//setting the tesimonial section
window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var head = document.querySelector('.testimonial h2');
    if(currentScrollPos < 5000){
		head.style.marginTop = '90px';
		head.style.opacity = '0';
    }else{
		head.style.marginTop = '0px';
		head.style.opacity = '1';		
	}
})




//setting the pricning section
window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var head = document.querySelector('.pricing h2');
    if(currentScrollPos < 5500){
		head.style.marginTop = '90px';
		head.style.opacity = '0';
    }else{
		head.style.marginTop = '0px';
		head.style.opacity = '1';		
	}
})

window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var items = document.querySelectorAll('.pricing .row> div');
    if(currentScrollPos <  5600){
		for(var i = 0; i < items.length; i++){
			items[i].style.marginTop = `${70*i}px`;
		}
    }else{
		for(var i = 0; i < items.length; i++){
			items[i].style.marginTop = '0';		
		}
	}
})



//setting faq section fading up

window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var head = document.querySelector('.faq h2');
    if(currentScrollPos < 6200){
		head.style.opacity = '0';
    }else{
		head.style.opacity = '1';		
	}
})


window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var items = document.querySelectorAll('.faq .grid > div');
    if(currentScrollPos <  6260){
		for(var i = 0; i < 2; i++){
			items[i].style.marginTop = `50px`;
		}
    }else{
		for(var i = 0; i < 2; i++){
			items[i].style.marginTop = '0';		
		}
	}
})



window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var items = document.querySelectorAll('.faq .grid > div');
    if(currentScrollPos <  6300){
		for(var i = 2; i < 4; i++){
			items[i].style.marginTop = `50px`;
		}
    }else{
		for(var i = 2; i < 4; i++){
			items[i].style.marginTop = '0';		
		}
	}
})

//setting intutive section fading up

window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var divs = document.querySelectorAll('.intuitive .container div');
    if(currentScrollPos < 6500){
		for(var i = 0; i < 2; i++){
			divs[i].style.marginTop = `${(60*i)+60}px`;;
		}
    }else{
		for(var i = 0; i < 2; i++){
			divs[i].style.marginTop = `0`;
		}		
	}
})


window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var divs = document.querySelectorAll('.intuitive .container div');
    if(currentScrollPos < 6600){
			divs[2].style.opacity = '0';
    }else{
			divs[2].style.opacity = '1';
	}
})






//setting the blog fadding up

window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var divs = document.querySelectorAll('.blog .grid  div');
    if(currentScrollPos < 6800){
		for(var i = 0; i < divs.length; i++){
			divs[i].style.marginTop = `${(60*i)+60}px`;;
		}
    }else{
		for(var i = 0; i < divs.length; i++){
			divs[i].style.marginTop = `0`;
		}		
	}
})





//settng the contact fadding up

window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var head = document.querySelector('.contact h2');
	var div = document.querySelector('.contact .grid');
    if(currentScrollPos < 7700){
		head.style.opacity = '0';
		div.style.opacity = '0'
    }else{
		head.style.opacity = '1';
		div.style.opacity = '1'
	}
})


window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
	var div = document.querySelector('.contact .grid');
    if(currentScrollPos < 7800){
		div.style.opacity = '0'
    }else{
		div.style.opacity = '1'
	}
})




//changing the color of the social platforms
var lasdivs = document.querySelectorAll('footer .row div:nth-of-type(3) div');
for(var i = 0; i < lasdivs.length; i++){
			lasdivs[i].addEventListener('mouseover',function(){
				this.querySelector('i').style.color = 'white';
			})
		}
for(var i = 0; i < lasdivs.length; i++){
			lasdivs[i].addEventListener('mouseout',function(){
				this.querySelector('i').style.color = '#818487';
			})
		}



