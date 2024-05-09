
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

// ......Function to show profile features
var profileFeatures = document.getElementById("profileFeatures");
var chevronDown = document.getElementById("chevronDown");
function displayProfileFeatures() {
  profileFeatures.style.display = "block";
  chevronDown.style.rotate = "180deg";
}
// ......Function to hide profile features
var profileFeatures = document.getElementById("profileFeatures");
function hideProfileFeatures() {
  profileFeatures.style.display = "none";
  chevronDown.style.rotate = "360deg";
}


  /*............................................Login / Create Account Forms ........................................*/
  var loginForm = document.getElementById("loginForm");
  var signupForm = document.getElementById("signupForm");
  var createAccount = document.getElementById("createAccount");
  var loginButton1 = document.getElementById("loginButton1");
  var loginButton2 =document.getElementById("loginButton2");
  
  createAccount.onclick = function(){
      loginForm.style.transform = "translateY(-120%)";
      signupForm.style.transform="translateY(-111%)";
  }
  loginButton2.onclick = function(){
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


   /*...............................Product image displays ON/OFF........................................*/
function displayImage(imageNumber) {
  var largeImage = document.getElementById("image1");
  var smallImage = document.getElementById("image" + imageNumber);
  largeImage.src = smallImage.src; // Update large image source
}

//....code to manupulate company logos.......................
var copy = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector(".company-logos").appendChild(copy);

//...................checkout proccess.....................................................................
function checkout(){
  alert("Checkout process will be implemented Here!");
  shoppingCart.style.display = "none";
}
/*--..................checkout process with stripe gateway.................
var stripe = stripe( //....stripe account required...!!!
  "pk_test_51P8fyHRogxYobEmx9IGf1WxTmcxBrI5mFf2CDNo1Z65SHiYuqWxKiUFBtuCQHVE61cIbBY07iE8KNem736BYOx5Q00Oz3Ctpfr"
);
document.getElementById("checkoutButton").addEventListener("click", function(){
  stripe.redirectToCheckout({
    lineItems: [
      {
price: " https://buy.stripe.com/test_bIYaI325CbPXbtK4gg"
      }
    ]
  })
});....*/

