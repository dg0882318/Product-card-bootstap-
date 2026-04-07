// Go to product page
function goToProduct(name, price, img1, img2, img3, img4, desc){
  window.location.href =
  `product.html?name=${name}&price=${price}&img1=${img1}&img2=${img2}&img3=${img3}&img4=${img4}&desc=${desc}`;
}

// Run only on product page
if(window.location.pathname.includes("product.html")){

  const params = new URLSearchParams(window.location.search);

  const name = params.get("name");
  const price = params.get("price");
  const img1 = params.get("img1");
  const img2 = params.get("img2");
  const img3 = params.get("img3");
  const img4 = params.get("img4");
  const desc = params.get("desc");

  document.getElementById("productName").innerText = name;
  document.getElementById("productPrice").innerText = price;
  document.getElementById("productDesc").innerText = desc;

  document.getElementById("mainImg").src = img1;

  document.getElementById("img1").src = img1;
  document.getElementById("img2").src = img2;
  document.getElementById("img3").src = img3;
  document.getElementById("img4").src = img4;

  // Thumbnail click
  let thumbs = document.querySelectorAll(".thumb");
  thumbs.forEach(img => {
    img.onclick = function(){
      document.getElementById("mainImg").src = this.src;
    }
  });
}

// Quantity
let qty = 1;
function increaseQty(){
  qty++;
  document.getElementById("qty").innerText = qty;
}
function decreaseQty(){
  if(qty > 1){
    qty--;
    document.getElementById("qty").innerText = qty;
  }
}