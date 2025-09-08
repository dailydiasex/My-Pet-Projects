function CurrencySelect({ label, currency, setCurrency }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <p>{label}</p>
      <select
        className="form-select form-color"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="UAH">UAH</option>
      </select>
    </div>
  );
}

export default CurrencySelect;