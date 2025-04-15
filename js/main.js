import headerFunc from "./header.js";
import productsFunc from "./products.js";
import arrivalsFunc from "./arrivals.js";
import searchFunc from "./search.js"

//!local storage set item
/* const fruits = ["elma", "armut"];
localStorage.setItem("meyveler",JSON.stringify(fruits));
localStorage.setItem("fullname",JSON.stringify("bera"));/* JSON.stringify("bera") json formatında kaydetti setitem sol isim sağ veri */

/* //!local storage get item
const getData = JSON.parse(localStorage.getItem("meyveler"))
console.log(getData); */

//! add products to local storage start
(async function() {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();
  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc(data);
  searchFunc(data);
})();
//! add products to local storage end

//! add cartItems to local storage start
const cartItems = document.querySelector(".header-cart-count");
cartItems.innerHTML = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : "0";
//! add cartItems to local storage end
//!Modal Dialog Start
const modalDialogDOM = document.querySelector(".modal-dialog");
const btnCloseDialog = document.querySelector(".modal-dialog .modal-close");
const modalContentDOM = document.querySelector(".modal-dialog .modal-content");
console.log(modalContentDOM);

btnCloseDialog.addEventListener("click",()=>{
  modalDialogDOM.classList.remove("show");
});
document.addEventListener("click",(e)=>{
  if(!e.composedPath().includes(modalContentDOM)){
    modalDialogDOM.classList.remove("show");
  }
  
})

setTimeout(()=>{
  modalDialogDOM.classList.add("show")


},3000);

//!Modal Dialog End