import React, { useState } from 'react';
import MenstrualPeriodService from './MenstrualPeriodService';
import './MyComponent.css';

function MyComponent() {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [periodLength, setPeriodLength] = useState('');
  const [nextPeriodDate, setNextPeriodDate] = useState('');
  const [estimatedPeriodDates, setEstimatedPeriodDates] = useState([]);

  const handleCalculate = () => {
    const nextDate = MenstrualPeriodService.calculateNextPeriodDate(lastPeriodDate, cycleLength, periodLength);
    const estimatedDates = MenstrualPeriodService.getEstimatedPeriodDates(nextDate, cycleLength, periodLength);
    setNextPeriodDate(nextDate);
    setEstimatedPeriodDates(estimatedDates);
  }

  return (
    <div className="container">
      <div className='title'>
      <h1>Menstrual Period Calculator</h1>
      </div>
      <div className="form">
        <label htmlFor="lastPeriodDate">Last period date:</label>
        <input type="date" id="lastPeriodDate" value={lastPeriodDate} onChange={(e) => setLastPeriodDate(e.target.value)} />

        <label htmlFor="cycleLength">Cycle length (in days):</label>
        <input type="number" id="cycleLength" value={cycleLength} onChange={(e) => setCycleLength(e.target.value)} />

        <label htmlFor="periodLength">Period length (in days):</label>
        <input type="number" id="periodLength" value={periodLength} onChange={(e) => setPeriodLength(e.target.value)} />

        <div className='calculate'>
        <button onClick={handleCalculate}>Calculate</button>
        </div>
       
      </div>

      {nextPeriodDate && (
        <div className="result">
          <h2>Next period date:</h2>
          <p>{nextPeriodDate}</p>

          <h2>Estimated period dates:</h2>
          <ul>
            {estimatedPeriodDates.map((date) => (
              <li key={date}>{date}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MyComponent;

