import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/currency-service';

// 1 : NZD : New Zealand Dollar
// 2 : INR : Indian Roupee
// 3 : JPY : Japanese Yen
// 4 : MXN : Mexican Peso
// 5 : ZAR : South Agrican Rand

function postExchange(currency, amount) {
  let finalValue = CurrencyService.exchange(sessionStorage.getItem(currency), amount);
  if (sessionStorage.getItem(6)) {
    $("#error-display").text("Currency not found");
    $("#sidebar").fadeIn();
  } else if (!sessionStorage.getItem(7)) {
    $("#exchange-output").text(finalValue);
  } else {
    $("#error-display").text(sessionStorage.getItem(7));
    $("#sidebar").fadeIn();
  }
}

$(document).ready(function() {
  CurrencyService.getData()
    .then(function(response) {
      CurrencyService.storeData(response);
    });
  $('#exchange-btn').click(function() {
    let currency = parseInt($('#exchange-select').val());
    let amount = parseInt($("#amount-input").val());
    postExchange(currency, amount);
  });
});
