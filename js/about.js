const primaryNavigation = document.getElementById('primary-navigation');
const button = document.querySelector('.mobile-nav-toggle');
const times =document.querySelector('.close-nav-toggle');
const images = document.querySelectorAll('.partner-img');
const prevBtn = document.querySelector('.prev');
const nextBtn =document.querySelector('.next');
let currentImagesIndex=0;
const showImages = (index)=>{
    images.forEach((images,i)=>{
        images.classList.remove('active')
        if(i==index){
            images.classList.add('active')
        }
    });
};
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
prevBtn.addEventListener('click',()=>{
    if(currentImagesIndex > 0){
        currentImagesIndex--;
        showImages(currentImagesIndex)
    }
})
nextBtn.addEventListener('click',()=>{
    if(currentImagesIndex < (images.length-1)){
        currentImagesIndex++;
        showImages(currentImagesIndex) 
    };
})

showImages(currentImagesIndex);
