var ns = document.getElementById("nsec")
var open = document.getElementById("open")
var close = document.getElementById("close")
var retail = document.getElementsByClassName("sect")
var nav = document.getElementsByClassName("nsect")
var i;

function openNav() {
  msnav.classList.add("msnav");
  msnav.style.padding = "0 0 200% 0";
  snava.style.display = "block";
  close.style.display = "block";
  open.style.display = "none";
  document.body.style.overflow = "hidden";
}

function openProducts() {
  msnav.classList.add("msnav");
  msnav.style.padding = "0 0 200% 0";
  snava.style.display = "block";
  close.style.display = "block";
  open.style.display = "none";
  nsec[0].style.display = "block";
  nsec[1].style.display = "block";
  document.body.style.overflow = "hidden";
}

function cNav() {
  msnav.style.padding = "0 0 0 0";
  nsec[0].style.display = "none";
  nsec[1].style.display = "none";
  snava.style.display = "none";
  open.style.display = "block";
  close.style.display = "none";
  document.body.style.overflow = "auto";
}

for (i = 0; i < retail.length; i++) {
  retail[i].addEventListener("click", function() {
    this.classList.toggle("active-sec");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
}

for (i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function() {
    this.classList.toggle("active-nav");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  })
}

function undone() {
  alert("Under contruction!");
}

function noProductpage() {
  alert("There's no product page for this product.");
}
