'use strict';
let toggler = document.querySelector('.navbar-toggler');
let icon1 = document.querySelector('.navbar-toggler span:first-child');
let icon2 = document.querySelector('.navbar-toggler span:nth-child(2)');
let icon3 = document.querySelector('.navbar-toggler span:last-child');
let rotate = 0;

toggler.addEventListener('click', function(){
	if(rotate == 0){
	icon1.style.transform = 'rotate(45deg) translate(5px)';
	icon2.style.display = 'none';
	icon3.style.transform = 'rotate(-45deg) translate(5px)';
	rotate = 1;
} else{
	icon1.style.transform = 'rotate(0deg)';
	icon2.style.display = '';
	icon3.style.transform = 'rotate(0deg)';
	rotate = 0;
}

});

