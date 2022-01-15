export default class CurrencyService {



  static getData() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
  static storeData(response) {
    if (response.result) {
      sessionStorage.setItem(1, response.conversion_rates.NZD);
      sessionStorage.setItem(2, response.conversion_rates.INR);
      sessionStorage.setItem(3, response.conversion_rates.JPY);
      sessionStorage.setItem(4, response.conversion_rates.MXN);
      sessionStorage.setItem(5, response.conversion_rates.ZAR);
    }
  }

  static exchange(rate, amount) {
    console.log(rate, amount);
    return amount * parseInt(rate);
  }
}

