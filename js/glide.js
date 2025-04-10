export function product1() {
  const config = {
    
    perView: 4,
    gap: 20,
    /* autoplay:3000 */
    bound: true,
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

  new Glide(".product-carousel", config).mount();
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

new Glide(".product-carousel2", config2).mount();

// glide.js
export function product2() {
  const config = {
    type: "carousel",
    perView: 4,
    gap: 20,
    breakpoints: {
      992: { perView: 3 },
      768: { perView: 2 },
      576: { perView: 1 },
    },
  };

  new Glide(".product-carousel2", config).mount();
}
