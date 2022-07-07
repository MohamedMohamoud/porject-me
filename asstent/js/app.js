const tabscontainer = document.querySelector (".about-tabs");
const aboutsection = document.querySelector(".about-section");
tabscontainer .addEventListener("click",(e)=>{
    if(e.target.classList.contains(".tab-item") && ! e.target.classList.contains("active")){
        tabscontainer.querySelector(".active").classList.remove ("active")
        e.target.classList.add("active");
        const target =e.target.getAttribute("data-target");
        aboutsection.querySelector(".tab-content.active").classList.remove("active");
        aboutsection.querySelector(target).classList.add ("active");
    }
});