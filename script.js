const card_detail = document.getElementsByClassName("card_payment")[0];
const paypal_detail = document.getElementsByClassName("paypal_payment")[0];
const card_radio = document.getElementById("select_card");
const paypal_radio = document.getElementById("select_paypal");


card_radio.addEventListener("click", () => {
    card_detail.style.display = "block";
    paypal_detail.style.display = "none";
});

paypal_radio.addEventListener("click", () => {
    card_detail.style.display = "none";
    paypal_detail.style.display = "block";
});