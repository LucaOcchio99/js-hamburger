//REFERENZE
const menuToggle = document.querySelector('.header-right > a');
const hamburgerMenu = document.querySelector('.hamburger-menu')
const closeButton = document.querySelector('.close');

//Mostra menu
menuToggle.addEventListener('click', function(){
   hamburgerMenu.classList.add('active');    
});

//Nascondi manu
closeButton.addEventListener('click', function(){
    hamburgerMenu.classList.remove('active');
})

