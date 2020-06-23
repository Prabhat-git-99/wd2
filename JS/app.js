//testing conddn
//console.log("Hello World");
//*************SET DATE***************
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

//***********Nav BTN*************

const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

/*console.log(navBtn);
console.log(links);*/
navBtn.addEventListener("click",() =>{
    links.classList.toggle("show-links");
})

//********NAv Fixed***********/

const navbar = document.querySelector('.navbar');
//console.log(navbar);
window.addEventListener('scroll',()=>{
    //console.log(window.pageYOffset);
    if(window.pageYOffset > 54){
        navbar.classList.add("fixed");
    }
    else{
        navbar.classList.remove("fixed");
    }
})

//********Smooth Scroll**********/
const scrollLink = document.querySelectorAll(".scroll-link");
//console.log(scrollLink);
scrollLink.forEach((link)=>{
    link.addEventListener("click", e =>{
        e.preventDefault();
        links.classList.remove("show-links");
        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let position;
        if(navbar.classList.contains("fixed")){
            position = element.offsetTop - 52;
        }
        else{
            position = element.offsetTop - 120;
        }
        if(window.innerWidth < 992){
            position = element.offsetTop - 400;
        }
        window.scrollTo({
            left: 0,
            top: position,
            behavior:"smooth"
        });

    });
});