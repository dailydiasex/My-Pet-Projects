import { useState } from "react";
import "../styles/CurrencyForm.css"
import AmountInput from "./AmountInput";
import CurrencySelect from "./CurrencySelect";
function CurrencyForm() {
    const [amount, setAmount] = useState(100);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("UAH");
    const [result, setResult] = useState(null);

    const getExchangeRate = async () => {
    try {
      const response = await fetch(
        `https://data.fixer.io/api/latest?access_key=b37ed08e80e762b0957d691d846e6f34&symbols=USD,EUR,UAH`
      );
      const data = await response.json();


      const rates = data.rates;
      const rate = rates[toCurrency] / rates[fromCurrency];
      const converted = (amount * rate).toFixed(2);

      setResult(`${amount} ${fromCurrency} = ${converted} ${toCurrency}`);
    } catch (err) {
      console.error("Error fetching rates:", err);
      setResult("Something went wrong!");
    }
  };

    
  return (

    
    <div className="currency-form d-flex my-3 py-3 text-center flex-column rounded">
        <div className="mb-3">
            <h4>Currency Convert</h4>
        </div>
        <div>
            <AmountInput amount={amount} setAmount={setAmount} />
        </div> 
        <div className="d-flex justify-content-evenly align-items-end my-3">
                <CurrencySelect
                label="From"
                currency={fromCurrency}
                setCurrency={setFromCurrency}
                />
            <img className="swap-icon mx-3 border border-warning rounded" src="./images/convert-icon.png" alt="Convert Icon"/>
                <CurrencySelect
                label="To"
                currency={toCurrency}
                setCurrency={setToCurrency}
                />
        </div>
        <div className="my-3">
            <button className="btn-convert py-1 " onClick={getExchangeRate}>Get Exchange Rate</button>
        </div>
        <div>
             <div>{result && <p className="convert-result unselectable">{result}</p>}</div>
        </div>

    </div>
  )
}

export default CurrencyForm;
