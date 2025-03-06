//! home sidebar start
const btnOpenSidebar = document.querySelector("#btn-menu"); //? #işareti id ye göre alır #btn-menu . direkt classı alır .header-mobile
const sidebar = document.querySelector("#sidebar");
const close_sidebar = document.querySelector("#close-sidebar");
btnOpenSidebar.addEventListener("click", function () {
  sidebar.style.left = "0";
});
close_sidebar.addEventListener("click", function () {
  sidebar.style.left = "-100%";
});
console.log(btnOpenSidebar);

/* click outside start */
document.addEventListener("click", function (event) {
  if (
    !event.composedPath().includes(sidebar) &&
    !event.composedPath().includes(btnOpenSidebar)
  ) {
    sidebar.style.left = "-100%";
  }
});
/* click outside end */
//! home sidebar start

//! search modal start
const btnOpenSearch = document.querySelector(".search-button");
const btnCloseSearch = document.getElementById("close-search");
const modalSearch = document.getElementsByClassName("modal-search");
const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");
btnOpenSearch.addEventListener("click", function () {
  modalSearch[0].style.visibility = "visible";
  modalSearch[0].style.opacity = "1";
});
btnCloseSearch.addEventListener("click", function () {
  modalSearch[0].style.visibility = "hidden";
  modalSearch[0].style.opacity = "1";
});

/* click outside start */
document.addEventListener("click", function (e) {
  //e=event
  if (
    !e.composedPath().includes(modalSearchWrapper[0]) &&
    !e.composedPath().includes(btnOpenSearch)
  ) {
    modalSearch[0].style.visibility = "hidden";
    modalSearch[0].style.opacity = "1";
  }
});
/* click outside end */
//! search modal end

//!slider start
let slideIndex = 1;
showSlides(slideIndex);
setInterval(() => {
  /* tekrar edilmesi istenen durumlarda kullanılr */
  showSlides((slideIndex += 1));
}, 7000); /* 7 saniyede bir fotoğraf geçişi */

function plusSlide(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slider-item");
  const dots = document.getElementsByClassName("slider-dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    //getElementsByClassName yerine querySelector nodelist döndürür foreach ile çalışır.hata vermez
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

/* slides.forEach(element => {
  console.log(element) //collection tam bir liste olmadığı için(nesnedir) böyle kullanışm hata verir foreach çalışmaz Array.from(slides) çalışır
}); */
//!slider end
