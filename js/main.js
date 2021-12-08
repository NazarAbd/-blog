'use strict';

// Header toggler
let toggler = document.querySelector('header nav .icon');
let links = document.querySelector('header nav ul');
let icon1 = document.querySelector('header nav .icon span:first-child');
let icon2 = document.querySelector('header nav .icon span:nth-child(2)');
let icon3 = document.querySelector('header nav .icon span:last-child');
let rotate = 0;
toggler.addEventListener('click', function(){
	if(rotate == 0){
	icon1.style.transform = 'rotate(45deg) translate(5px)';
	icon2.style.display = 'none';
	icon3.style.transform = 'rotate(-45deg) translate(5px)';
	links.style.height = '180px';
	rotate = 1;
	} else{
	icon1.style.transform = 'rotate(0deg)';
	icon2.style.display = '';
	icon3.style.transform = 'rotate(0deg)';
	links.style.height ='0'; 
	rotate = 0;
}
whiteBorder();	
});


// Dark Mode Activator 
// dark-mode
let modeToggler = document.getElementById('mode');
let header = document.querySelector('header');
let blog = document.querySelector('.blog');
let blogContainer = document.querySelector('.blog .container');
let blogRow = document.querySelector('.blog .container .row');
let blogContent = document.querySelector('.blog-content');
let footer = document.querySelector('.footer');
let body = document.body;
let darkMode = 0;

modeToggler.checked = false;  //set the first dark mode toggler to false

modeToggler.addEventListener('change', function(e){
	if (darkMode==0) {
	body.classList.add('dark-mode');
	header.classList.add('dark-mode');
	blog.classList.add('dark-mode');
	blogContainer.classList.add('dark-mode');
	blogRow.classList.add('dark-mode');
	blogContent.classList.add('dark-mode');
	footer.classList.add('dark-mode');
	darkMode =1;
	}
	else{
	body.classList.remove('dark-mode');
	header.classList.remove('dark-mode');
	blog.classList.remove('dark-mode');
	blogContainer.classList.remove('dark-mode');
	blogRow.classList.remove('dark-mode');
	blogContent.classList.remove('dark-mode');
	footer.classList.remove('dark-mode');
	darkMode = 0;
	e.currentTarget.checked = false;
	}
	whiteBorder();
})


// a Function to draw a white border around the header ul in dark mood only
function whiteBorder(){
	if(rotate == 1 && darkMode==1){
		links.style.border = '1px white solid';
	}
	else if(rotate==0 || rotate==1 && darkMode==0){
		links.style.border = 'none';
	}
}
