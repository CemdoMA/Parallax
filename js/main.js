var backPic1 = document.querySelectorAll(".parallax1");
var backPic2 = document.querySelectorAll(".parallax2");
var backPic3 = document.querySelectorAll(".parallax3");
var text = document.querySelectorAll(".sec_2");
var fadeIn = document.querySelector(".text3");


text[1].style.transform = "translateX(-100%)";

var scroll = () => {
    var scrolling = window.pageYOffset;
    backPic1[0].style.backgroundPositionY = scrolling * -.5 + "px";
    backPic2[0].style.backgroundPositionY = scrolling * -.5 + "px";
    backPic3[0].style.backgroundPositionY = scrolling * -.5 + "px";
    text[1].style.transform = "translatex(" + (-scrolling * .4) + "px)";
    
    console.log(scrolling)
    
    
      if(scrolling > 200 && scrolling < 220)
        {
            fadeIn.style.opacity = 0;
        }
        else if(scrolling > 220 && scrolling < 240)
        {
            fadeIn.style.opacity = 0.1;
        }
        else if(scrolling > 240 && scrolling < 260)
        {
            fadeIn.style.opacity = 0.2;
        }
        else if(scrolling > 260 && scrolling < 280)
        {
            fadeIn.style.opacity = 0.3;
        }
        else if(scrolling > 280 && scrolling < 300)
        {
            fadeIn.style.opacity = 0.4;
        }
        else if(scrolling > 300 && scrolling < 320)
        {
            fadeIn.style.opacity = 0.5;
        }
        else if(scrolling > 320 && scrolling < 340)
        {
            fadeIn.style.opacity = 0.6;
        }
        else if(scrolling > 340 && scrolling < 360)
        {
            fadeIn.style.opacity = 0.7;
        }
        else if(scrolling > 360 && scrolling < 380)
        {
            fadeIn.style.opacity = 0.8;
        }
        else if(scrolling > 380 && scrolling < 400)
        {
            fadeIn.style.opacity = 0.9;
        }
        else if(scrolling > 400)
        {
            fadeIn.style.opacity = 1;
        }
};



window.addEventListener("scroll", scroll);





