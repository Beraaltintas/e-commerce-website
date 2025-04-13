export function thumbsActiveFunc() {
  const thumbs = document.querySelectorAll(".gallery-thumbs .img-fluid");
  const singleImage = document.querySelector("#single-image");//# işareti id seçer . işareti class seçer
  
  
  thumbs.forEach((item)=>{
    item.classList.remove("active"); //classlarnda değişiklik yapmaya yarar classList
    item.addEventListener("click", function(){
      thumbs.forEach((image)=>{
        image.classList.remove("active");
      })
      singleImage.src = item.src;
      item.classList.add("active");
    })
    
  })
}
