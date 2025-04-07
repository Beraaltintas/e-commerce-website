import { product1 } from "./glide.js";
function productsFunc() {
  const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  const productsContainer = document.getElementById("product-list");

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
            <a href="#" class="product-title">${item.name}</a>
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
            <strong class="new-price">$${item.price.newPrice.toFixed(2)}</strong>
            <span class="old-price">$${item.price.oldPrice.toFixed(2)}</span
            ><!-- s etiketi direkt çizer ama csste çizcez -->
            </div>
            <div class="product-discount">-${item.discount}%</div>
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
  product1();
}
export default productsFunc();
