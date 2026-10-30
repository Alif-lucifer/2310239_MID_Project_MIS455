

// ---------- Product Quantities ----------

var football = 0;
var cricketBat = 0;
var basketball = 0;
var runningShoes = 0;
var badmintonRacket = 0;
var dumbbell = 0;
var brazilJersey = 0;
var argentinaJersey = 0;
var portugalJersey = 0;

// ---------- Add to Cart (products page) ----------

function addToCart(price, name) {

  if (name == "Football") {
    football = football + 1;
  }

  else if (name == "Cricket Bat") {
    cricketBat = cricketBat + 1;
  }

  else if (name == "Basketball") {
    basketball = basketball + 1;
  }

  else if (name == "Running Shoes") {
    runningShoes = runningShoes + 1;
  }

  else if (name == "Badminton Racket") {
    badmintonRacket = badmintonRacket + 1;
  }

  else if (name == "Dumbbell Set") {
    dumbbell = dumbbell + 1;
  }

  else if (name == "Brazil Jersey") {
    brazilJersey = brazilJersey + 1;
  }

  else if (name == "Argentina Jersey") {
    argentinaJersey = argentinaJersey + 1;
  }

  else if (name == "Portugal Jersey") {
    portugalJersey = portugalJersey + 1;
  }

  updateCart();

}

// ---------- Update Cart ----------

function updateCart() {

  // Calculate total items

  var count = football + cricketBat + basketball +
    runningShoes + badmintonRacket + dumbbell +
    brazilJersey + argentinaJersey + portugalJersey;

  // Calculate total price

  var total =
    (football * 1500) +
    (cricketBat * 2500) +
    (basketball * 1500) +
    (runningShoes * 3500) +
    (badmintonRacket * 1800) +
    (dumbbell * 2200) +
    (brazilJersey * 4000) +
    (argentinaJersey * 3500) +
    (portugalJersey * 3000);

  // Calculate 10% discount

 var discount = parseInt(total * 10 / 100);

  var finalTotal = total - discount;

  // Show selected products

  var details = "";

  if (football > 0) {
    details += "<p>Football - Tk 1500 x " +
      football + " = Tk " + (football * 1500) + "</p>";
  }

  if (cricketBat > 0) {
    details += "<p>Cricket Bat - Tk 2500 x " +
      cricketBat + " = Tk " + (cricketBat * 2500) + "</p>";
  }

  if (basketball > 0) {
    details += "<p>Basketball - Tk 1500 x " +
      basketball + " = Tk " + (basketball * 1500) + "</p>";
  }

  if (runningShoes > 0) {
    details += "<p>Running Shoes - Tk 3500 x " +
      runningShoes + " = Tk " + (runningShoes * 3500) + "</p>";
  }

  if (badmintonRacket > 0) {
    details += "<p>Badminton Racket - Tk 1800 x " +
      badmintonRacket + " = Tk " + (badmintonRacket * 1800) + "</p>";
  }

  if (dumbbell > 0) {
    details += "<p>Dumbbell Set - Tk 2200 x " +
      dumbbell + " = Tk " + (dumbbell * 2200) + "</p>";
  }

  if (brazilJersey > 0) {
    details += "<p>Brazil Jersey - Tk 4000 x " +
      brazilJersey + " = Tk " + (brazilJersey * 4000) + "</p>";
  }

  if (argentinaJersey > 0) {
    details += "<p>Argentina Jersey - Tk 3500 x " +
      argentinaJersey + " = Tk " + (argentinaJersey * 3500) + "</p>";
  }

  if (portugalJersey > 0) {
    details += "<p>Portugal Jersey - Tk 3000 x " +
      portugalJersey + " = Tk " + (portugalJersey * 3000) + "</p>";
  }

  // Empty cart message

  if (count == 0) {
    details = "<p>Your cart is empty. Add some products!</p>";
  }

  // Display cart information

  document.getElementById("cartCount").innerText = count;

  document.getElementById("cartItems").innerHTML = details;

  document.getElementById("cartTotal").innerText = total;

  document.getElementById("discountAmount").innerText = discount;

  document.getElementById("finalTotal").innerText = finalTotal;

}

// ---------- Clear Cart (products page) ----------

function clearCart() {

  football = 0;
  cricketBat = 0;
  basketball = 0;
  runningShoes = 0;
  badmintonRacket = 0;
  dumbbell = 0;
  brazilJersey = 0;
  argentinaJersey = 0;
  portugalJersey = 0;

  document.getElementById("cartCount").innerText = 0;
  document.getElementById("cartTotal").innerText = 0;
  document.getElementById("discountAmount").innerText = 0;
  document.getElementById("finalTotal").innerText = 0;
  document.getElementById("cartItems").innerHTML = "<p>Your cart has been cleared!</p>";

}

// ---------- Show Cart ----------
function showCart() {
  var details = document.getElementById("cartDetails");

  if (details.style.display == "block") {
    details.style.display = "none";
  } else {
    details.style.display = "block";
  }
}




