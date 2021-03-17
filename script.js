

AOS.init({
  duration:1000,
  once : true ,
  easing : "ease-out"
})


// TOGGLE NAV
var menuBtn = document.getElementById("menu-btn")
var navList= document.getElementById("nav-list")

menuBtn.addEventListener("click", function(){
  menuBtn.classList.toggle("active")
  navList.classList.toggle("in-active")
})

// SKEW CONTENTS

const contents = document.getElementById('contents')
const titleTop = document.querySelector(".title-top")
const titleMain = document.querySelector(".title-main")
let pageYOffset = window.pageYOffset
function render() {
	const newPageOffset = window.pageYOffset
	const diff = newPageOffset - pageYOffset
	
	contents.style.transform = "skewY("+(diff*0.2)+"deg)"
	titleTop.style.transform = "translateY("+(-pageYOffset)+"px)"
	titleMain.style.transform = "translateX("+(-pageYOffset)+"px)"	
  pageYOffset = newPageOffset
  requestAnimationFrame(render)
}
//render()

// SMOOTH SCROLL
const links = document.querySelectorAll(".lists a");

for (let i = 0 ; i<links.length ; i++) {
  links[i].addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  })
   
   menuBtn.classList.toggle("active")
   navList.classList.toggle("in-active")
 
}







