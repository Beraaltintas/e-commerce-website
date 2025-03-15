
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

