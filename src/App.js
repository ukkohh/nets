import './App.css';
import {useState} from 'react'

function App() {
  const [Salary, setSalary] = useState();
  const [Tax, setTax] = useState();
  const [Taxed, setTaxed] = useState();
  const [Pension, setPension] = useState(0.0025);
  const [Pensioned, setPensioned] = useState();
  const [Insurance, setInsurance] = useState(0.0025);
  const [Insuranced, setInsuranced] = useState();
  const [Result, setResult] = useState();

  function Calculate(e) {
    e.preventDefault();
    const taxed = Salary * (Tax / 100);
    setTaxed(taxed + '€');
    const pensioned = Salary * Pension;
    setPensioned(pensioned + '€');
    const insuranced = Salary * Insurance;
    setInsuranced(insuranced + '€');
    const ans = Salary - taxed - pensioned - insuranced;
    setResult(ans);
  }

  return (
    <div className="App">
      <form onSubmit={Calculate}>
        <h3>Loan calculator</h3>
        <div>
          <label>Salary</label>
          <input type='number' value={Salary} onChange={e => setSalary(e.target.value)}></input>
        </div>
        <div>
          <label>Tax (%)</label>
          <output>{Taxed}</output>
          <input type='number' value={Tax} onChange={e => setTax(e.target.value)}></input>
        </div>
        <div>
          <label>Pension (%)</label>
          <output>{Pensioned}</output>
          <select value={Pension} onChange={e => setPension(e.target.value)}>
            <option value='0.0025'>0.25%</option>
            <option value='0.005'>0.5%</option>
            <option value='0.01'>1%</option>
            <option value='0.02'>2%</option>
            <option value='0.05'>5%</option>
          </select>
        </div>
        <div>
          <label>Insurance (%)</label>
          <output>{Insuranced}</output>
          <select value={Insurance} onChange={e => setInsurance(e.target.value)}>
            <option value='0.0025'>0.25%</option>
            <option value='0.005'>0.5%</option>
            <option value='0.01'>1%</option>
            <option value='0.02'>2%</option>
            <option value='0.05'>5%</option>
          </select>
        </div>
        <div><output>{Result}</output></div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
