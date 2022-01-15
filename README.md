# _The Laundromat Currency Exchange_

#### By _**Nick Sullivan**_

#### _This webpage allows users to convert USD to 5 different currencies, using data from ExchangeRate-API_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _Node.js_
* _WebPack_
* _ESLint_

## Description

_This webpage receives an amount of USD from the user along with a currency the user would like to convert that amount into. After the user submits these, the webpage will display the exchanged amount to the right of the input fields. Finally, if the API call results in an error, the user will be notified and given the relevant error information. This webpage was built to showcase my understanding of API calls, session storage, and asynchronous JavaScript._

## Setup Instructions

* _Open your terminal and navigate to the folder you'd like to download the files into._
* _Run the command below_
> git clone https://github.com/nicholassull/currency-exchange.git
* _Create a free account at [ExchangeRate-API](https://www.exchangerate-api.com/) to receive a free API key._
* _Open src/js/currency-service.js_
* _Replace the section of code below, found on line 6, with your own API key._
> ${process.env.API_KEY}
* _Navigate to the root directory of the project in your terminal._
* _Run the commands bellow, allowing them time to complete._

> npm install
<br />
> npm run build
<br />
> npm run start


## Known Bugs

* _NZD is not converting correctly._

## License

Copyright (c) _01/15/2022_ _by Nick Sullivan_


_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._