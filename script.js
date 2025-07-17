const card_detail = document.getElementsByClassName("card_payment")[0];
const paypal_detail = document.getElementsByClassName("paypal_payment")[0];
const card_radio = document.getElementById("select_card");
const paypal_radio = document.getElementById("select_paypal");
const card_input = document.getElementById("card_in");
const card_num_visble = document.getElementsByClassName("eye_icon")[0];
const card_icon = document.getElementsByClassName("card_icon")[0];



card_radio.addEventListener("click", () => {
    card_detail.style.display = "block";
    paypal_detail.style.display = "none";
});

paypal_radio.addEventListener("click", () => {
    card_detail.style.display = "none";
    paypal_detail.style.display = "block";
});

card_num_visble.addEventListener("click", () => {
    if (card_input.type == "password") {
        card_num_visble.src = "assets/view.png";
        card_input.type = "text";
    } else {
        card_num_visble.src = "assets/hide.png";
        card_input.type = "password";
    }
});

card_input.addEventListener("input", () => {
    if (card_input.value == 4) {
        card_icon.src = "assets/visa.png";
    } else if (card_input.value >= 51 && card_input.value <= 55){
        card_icon.src = "assets/mastercard.png";
    } else {
        card_icon.src = "assets/card.png";
    }
});

paypal.Buttons({
    createOrder: (data, actions) => {
        return actions.order.create({
            purchase_units: [{
                amount: {value: "20.00"}
            }]
        });
    },
    onApprove: () => {
        return actions.order.capture().then(function(details) {
          alert('Thank you, ' + details.payer.name.given_name + '!');
        });
    }
}).render("#paypal_auto");