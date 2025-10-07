const primaryNavigation = document.getElementById('primary-navigation');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const times =document.querySelector('.close-nav-toggle');
const photo = document.querySelectorAll('.galleryimg');
const leftBtn =document.querySelector('.left');
const rightBtn =document.querySelector('.right');
let currentPhotoIndex=0;

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
const showPhoto =(index)=>{
    photo.forEach((photo,i)=>{
        photo.classList.remove('action');
        if(i===index){
            photo.classList.add('action')
        };
    });
}
leftBtn.addEventListener('click',()=>{
    if(currentPhotoIndex>0){
        currentPhotoIndex--;
        showPhoto(currentPhotoIndex);
    }
});
rightBtn.addEventListener('click',()=>{
    if(currentPhotoIndex<(photo.length-1)){
        currentPhotoIndex++;
        showPhoto(currentPhotoIndex);
    }
});
showPhoto(currentPhotoIndex);

