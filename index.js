const slides = document.querySelectorAll(".carrousel-item");
const lightboximg = document.querySelector("#lightbox img");
const descrip = document.getElementsByTagName("p");
const lightbox = document.getElementById('lightbox');
const close = document.querySelector(".close");
let index = 0;
let time =setInterval(() => {showImg()}, 3000);

function showImg(){  
    
    if (index>=slides.length-1){index=0;};
    
    slides[index].classList.remove('active');
    descrip[index].classList.remove('active');
    index++;
    
    slides[slides.length-1].classList.remove('active');
    descrip[slides.length-1].classList.remove('active');
    slides[index].classList.add("active");
    descrip[index].classList.add("active")
    
    slides[index].classList.add('active');
    descrip[index].classList.add('active');  
};

slides.forEach(slide =>{
  slide.addEventListener("click",(e)=>{
  const img =e.target.src;
  lightboximg.src = img;
  lightbox.classList.add("show");
  clearInterval(time);
  })
});

close.addEventListener("click",()=>{
lightbox.classList.remove("show");
time=setInterval( ()=>{showImg()},3000);
});






