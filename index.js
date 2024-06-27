const carrouImg = document.querySelectorAll(".carrousel-item");
const descrip = document.getElementsByTagName("p");

let index = 0;

function showImg(){  
    carrouImg[index].classList.remove('active');
    descrip[index].classList.remove('active');
    index++;

    if (index>=carrouImg.length-1){
        index=0;
        carrouImg[carrouImg.length-1].classList.remove('active');
        descrip[carrouImg.length-1].classList.remove('active');
        carrouImg[index].classList.add("active");
        descrip[index].classList.add("active")
    }

    carrouImg[index].classList.add('active');
    descrip[index].classList.add('active');
        
    carrouImg[index].addEventListener("click",(e)=>{
        console.log(e);
        clearInterval(t);
    });
};

let t = setInterval(() => {showImg()}, 3000);


// close.addEventListener("click",(e)=>{
//     lightboxBg.remove("show");
//     setInterval(() => {showImg()}, 3000);
// })