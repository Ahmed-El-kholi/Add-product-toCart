counter = 0;
totalPrice = 0;
var content_price = document.getElementById("content_price")
console.log(content_price);
const add_btns = document.querySelectorAll(".add-btn");
var table = document.querySelector(".table")
table.style.visibility = "hidden"

for (let i = 0; i < add_btns.length; i++) {

  add_btns[i].onclick = function () {

    table.style.visibility = "visible"
    counter++;

    let img = this.closest(".card").querySelector("img").src;
    let name = this.closest(".card").querySelector(".card-title").innerHTML;
    let price = this.closest(".card").querySelector("button").getAttribute("price");
    var intprice = parseInt(price)
    console.log(typeof intprice );
    content_price.innerHTML += intprice ;
    let t_body = document.querySelector(".cart_body").innerHTML;
    document.querySelector(".cart_body").innerHTML = t_body +
      "<tr><th scope='row'>" + counter + "</th><td><img src='" + img + "' style='width:100px'></td> <td>" + name + "</td><td>" + price + "</td></tr>";


  };
}
