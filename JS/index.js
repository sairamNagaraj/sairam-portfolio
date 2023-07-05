var userName = prompt("Namaste🙏 and welcome, please enter your name");
if(userName != null){
    document.querySelector("#greeting").innerHTML = userName
}

document.querySelector("#dark-light-mode").addEventListener("click",function(){changeTheme();});
document.querySelector("#dark-light-mode-2").addEventListener("click",function(){changeTheme();});

function changeTheme(){
    var currentTheme = document.querySelector("#cssStyle").getAttribute("href");
    console.log(currentTheme);
    if(currentTheme.includes("dark")){
        document.querySelector("#cssStyle").setAttribute("href", "static/css/styles_light.css");
        document.querySelector("#feedback1").setAttribute("src", "static/images/Feedback/Feedback1_lightmode.png");
        document.querySelector("#feedback2").setAttribute("src", "static/images/Feedback/Feedback2_lightmode.png");
        document.querySelector("#carouselExampleIndicators").classList.add("carousel-dark");
        document.querySelectorAll(".dark-light-mode-img").forEach(imgTag => {
            imgTag.setAttribute("src","static/images/General/darkMode.png")
        })
    }else{
        document.querySelector("#cssStyle").setAttribute("href", "static/css/styles_dark.css");
        document.querySelector("#feedback1").setAttribute("src", "static/images/Feedback/Feedback1.png");
        document.querySelector("#feedback2").setAttribute("src", "static/images/Feedback/Feedback2.png");
        document.querySelector("#carouselExampleIndicators").classList.remove("carousel-dark");
        document.querySelectorAll(".dark-light-mode-img").forEach(imgTag => {
            imgTag.setAttribute("src","static/images/General/lightMode.png")
        })
    }
}
