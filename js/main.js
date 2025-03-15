
import headerFunc from "./header.js";
import productsFunc from "./products.js"



//!local storage set item
/* const fruits = ["elma", "armut"];
localStorage.setItem("meyveler",JSON.stringify(fruits));
localStorage.setItem("fullname",JSON.stringify("bera"));/* JSON.stringify("bera") json formatında kaydetti setitem sol isim sağ veri */

/* //!local storage get item
const getData = JSON.parse(localStorage.getItem("meyveler"))
console.log(getData); */

//! add products to local storage
async function getData() {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();
  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  console.log(data);
}
getData();
const products = localStorage.getItem("products");
console.log(JSON.parse(products));

