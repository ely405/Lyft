var logo = document.getElementById("logo");

var elemFormNone = document.getElementsByName("form-none");
var inpPhoneNumber = document.getElementById("inp-phone");
var inpName = document.getElementById("inp-name");
var inpEmail = document.getElementById("inp-email");
var inpCity = document.getElementById("inp-city");

var regPhone = /^[9]\d{8}$/;
var regFirstCapLet = /^[A-Z][a-z]+$/;
var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


function validateEachInput(regEx){
    var input = event.target;
    var elemParent = input.parentElement;
    if(!regEx.test(input.value)){
      input.style.borderBottom = "2px solid #FEA4AD";
      // input:after.style.content = "error";
    }else{
      input.style.borderBottom = "2px solid #CCC3E2";
    }
}


window.addEventListener("load", function(){
  inpPhoneNumber.addEventListener("focus", function(){
    for (var i = 0; i < elemFormNone.length; i++) {
      elemFormNone[i].className = "input-box block";
    }
  });

  inpPhoneNumber.addEventListener("blur", function(){
    validateEachInput(regPhone);
  });

  inpName.addEventListener("blur", function(){
    validateEachInput(regFirstCapLet);
  });

  inpEmail.addEventListener("blur", function(){
    validateEachInput(emailRegex);
  });

  inpCity.addEventListener("blur", function(){
    validateEachInput(regFirstCapLet);
  });

  var lastScrollTop = 0;

  window.addEventListener("scroll", function(){
    var currentScroll = window.pageYOffset || document.body.scrollTop;
    if(currentScroll > lastScrollTop){
      document.getElementById("header").className = "header-down-scroll";
      logo.src = "assets/image/logo-pink.png";
    }else if (currentScroll <=3){
      document.getElementById("header").className = "header-up-scroll";
      logo.src = "assets/image/logo-white.png";
    }
    lastScrollTop = currentScroll;
  }, false);
});
