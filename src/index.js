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

function storeData(response) {
  if (response.result) {
    sessionStorage.setItem(1, response.conversion_rates.NZD);
    sessionStorage.setItem(2, response.conversion_rates.INR);
    sessionStorage.setItem(3, response.conversion_rates.JPY);
    sessionStorage.setItem(4, response.conversion_rates.MXN);
    sessionStorage.setItem(5, response.conversion_rates.ZAR);
  }
}

$(document).ready(function() {
  CurrencyService.getData()
    .then(function(response) {
      storeData(response);
    }).then(function(response){
      console.log(sessionStorage.getItem(1));
    });
  $('#exchange-btn').click(function() {
    let currency = $('#exchange-select').val();

  });
});
