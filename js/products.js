import { product1 } from "./glide.js";
let products = [];
async function productsFunc() {
products = await localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
  const productsContainer = document.getElementById("product-list");
  console.log(productsContainer);
  let resaults = "";
  products.forEach((item) => {
    resaults += `              
    <li class="product-item glide__slide">
        <div class="product-image">
            <a href="#">
            <img
                src=${item.img.singleImage}
                alt=""
                class="img1"
            />
            <img
                src=${item.img.thumbs[1]}
                alt=""
                class="img2"
            />
            </a>
        </div>
        <div class="product-info">
            <a href="#" class="product-title">Analogue Resin Strap</a>
            <ul class="product-star">
            <li>
                <i class="bi bi-star-fill"></i>
            </li>
            <li>
                <i class="bi bi-star-fill"></i>
            </li>
            <li>
                <i class="bi bi-star-fill"></i>
            </li>
            <li>
                <i class="bi bi-star-fill"></i>
            </li>
            <li>
                <i class="bi bi-star-half"></i>
            </li>
            </ul>
            <div class="product-prices">
            <strong class="new-price">108.88</strong>
            <span class="old-price">$165.00</span
            ><!-- s etiketi direkt çizer ama csste çizcez -->
            </div>
            <div class="product-discount">-17%</div>
            <div class="product-links">
            <button>
                <i class="bi bi-basket-fill"></i>
            </button>
            <button>
                <i class="bi bi-heart-fill"></i>
            </button>
            <a href="#"><i class="bi bi-eye"></i></a>
            <a href="#"><i class="bi bi-share-fill"></i></a>
            </div>
        </div>
    </li>`;
    productsContainer.innerHTML = resaults;
  });
}
export default productsFunc();
