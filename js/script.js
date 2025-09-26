const primaryNavigation = document.getElementById('primary-navigation');
const button = document.querySelector('.mobile-nav-toggle');
const times =document.querySelector('.close-nav-toggle');

button.addEventListener('click',()=>{
    primaryNavigation.classList.toggle('active')
    button.style.display='none'
    times.style.display='block'
});

times.addEventListener('click',()=>{
    primaryNavigation.classList.remove('active') 
    button.style.display='block'
    times.style.display='none'
});