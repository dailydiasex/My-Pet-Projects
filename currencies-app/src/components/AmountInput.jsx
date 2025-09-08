function AmountInput({ amount, setAmount }) {
  return (
    <div>
      <p>Enter Amount</p>
      <input
        className="rounded border-0"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  );
}

export default AmountInput;