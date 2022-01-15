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
        console.log(error);
        return error;
      });
  }
  static storeData(response) {
    if (response.result) {
      sessionStorage.setItem(1, parseInt(response.conversion_rates.NZD));
      sessionStorage.setItem(2, parseInt(response.conversion_rates.INR));
      sessionStorage.setItem(3, parseInt(response.conversion_rates.JPY));
      sessionStorage.setItem(4, parseInt(response.conversion_rates.MXN));
      sessionStorage.setItem(5, parseInt(response.conversion_rates.ZAR));
    } else if (response.message === "Not Found") {
      sessionStorage.setItem(6, `Currency not found`)
    } else {
      sessionStorage.setItem(7, `There was an error: ${response.message}`)
    }
  }

  static exchange(rate, amount) {
    return amount * rate;
  }
}

