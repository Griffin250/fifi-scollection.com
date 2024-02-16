

/*................................................................Details section...................*/

var Size = document.getElementById("SizePage");
var Details = document.getElementById("DetailsPage");
function openPage2(){
  SizePage.style.display = "block";
  DetailsPage.style.display = "none";
  ReviewPage.style.display = "none";
}

var Size = document.getElementById("SizePage");
var Details = document.getElementById("DetailsPage");
function openPage1(){
  SizePage.style.display = "none";
  DetailsPage.style.display = "block";
  ReviewPage.style.display = "none";
}

var Reviews = document.getElementById("ReviewPage");
function openPage3(){
  SizePage.style.display = "none";
  DetailsPage.style.display = "none"; 
  ReviewPage.style.display = "block";
}

  
  /*............................................Login / Create Account Forms ........................................*/
  let loginForm = document.getElementById("loginForm");
  let signupForm = document.getElementById("signupForm");
  let createAccount = document.getElementById("createAccount");
  let loginButton = document.getElementById("loginButton");
  
  createAccount.onclick = function(){
      loginForm.style.transform = "translateY(-120%)";
      signupForm.style.transform="translateY(-111%)";
  }
  loginButton.onclick = function(){
      signupForm.style.transform="translateY(120%)";
      loginForm.style.transform="translateY(0%)";
  }
  
  /*.....................................................................Shopping Cart..................................*/
  var Cart = document.getElementById("shoppingCart");
  var closeButton = document.getElementById("shoppingCart");

  function openCart(){
    shoppingCart.style.transform = "translateY(0%)";
    shoppingCart.style.display = "block"
    MenuLinks.style.display = "none";
  }
  function closeCart(){
    shoppingCart.style.transform = "translateY(-200%)";
    shoppingCart.style.display = "none"
  }
  /*...............................show password........................................*/

const password = document.getElementById ("password");
const checkbox = document.getElementById("checkbox");
checkbox.onchange = function (e) {
password. type = checkbox.checked ? "text" : "password";
};

const password2 = document.getElementById ("password2");
const checkbox2 = document.getElementById("checkbox2");
checkbox2.onchange = function (e) {
password2. type = checkbox2.checked ? "text" : "password";
};

 /*...............................Menu........................................*/
 var Menu = document.getElementById("MenuLinks");
 function openMenu(){
  MenuLinks.style.display = "block";
  Main.style.display = "none";
  siteInfo.style.display = "none";
  Contents.style.display = "none";
  shoppingCart.style.display = "none";
 }
 var closeButton = document.getElementById("MenuLinks");
 function closeMenu(){
  MenuLinks.style.display = "none";
  Main.style.display = "block";
  siteInfo.style.display = "block";
 }