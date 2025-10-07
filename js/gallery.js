const primaryNavigation =document.getElementById('primary-navigation');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const times = document.querySelector('.close-nav-toggle');

mobileNavToggle.addEventListener('click',(event)=>{
    event.preventDefault();
    primaryNavigation.classList.toggle('active');
    times.style.display='block';
    mobileNavToggle.style.display='none';
})
times.addEventListener('click',(event)=>{
    event.preventDefault()
    primaryNavigation.classList.remove('active')
    mobileNavToggle.style.display='block';
    times.style.display='none'
});