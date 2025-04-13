const productsContainer = document.getElementById("product-list");
export function product1() {
  const config = {
    
    perView: 4,
    gap: 20,
    /* autoplay:3000 */
    
    breakpoints: {
      /* responsive kısmı kütüphaneli slider */
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };

  productsContainer && new Glide(".product-carousel", config).mount();
}

const config2 = {
  type: "carousel",
  perView: 4,
  gap: 20,
  /* autoplay:3000 */
  bound: true,
  breakpoints: {
    /* responsive kısmı kütüğhaneli slider */
    992: {
      perView: 3,
    },
    768: {
      perView: 2,
    },
    576: {
      perView: 1,
    },
  },
};

productsContainer && new Glide(".product-carousel2", config2).mount();

export function singleThumbs(){
  const config3 = {
  
    perView: 5,
    /* autoplay:3000 */
    bound: true,
    breakpoints: {
      /* responsive kısmı kütüğhaneli slider */
      992: {
        perView: 3,
      },

    },
  };
  
  new Glide(".product-thumb", config3).mount();
}