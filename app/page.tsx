"use client";

import { useState } from 'react';

export default function Home() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result1, setResult1] = useState('');
  const [result2, setResult2] = useState('');

  const calcPercentOf = () => {
    const percent = parseFloat(value1);
    const total = parseFloat(value2);
    if (!isNaN(percent) && !isNaN(total)) {
      setResult1(`${percent}% ของ ${total} คือ ${(percent / 100) * total}`);
    }
  };

  const calcWhatPercent = () => {
    const part = parseFloat(value1);
    const total = parseFloat(value2);
    if (!isNaN(part) && !isNaN(total) && total !== 0) {
      setResult2(`${part} คือ ${(part / total) * 100}% ของ ${total}`);
    }
  };

  const reset = () => {
    setValue1('');
    setValue2('');
    setResult1('');
    setResult2('');
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '3rem auto',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 0 15px rgba(0,0,0,0.1)',
      backgroundColor: '#f9f9f9',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
        🧮 เครื่องคำนวณเปอร์เซ็นต์
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="number"
          placeholder="ค่าแรก (เช่น 20)"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          style={{
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
        <input
          type="number"
          placeholder="ค่าที่สอง (เช่น 100)"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          style={{
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          onClick={calcPercentOf}
          style={{
            flex: 1,
            padding: '0.75rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          % ของจำนวน
        </button>
        <button
          onClick={calcWhatPercent}
          style={{
            flex: 1,
            padding: '0.75rem',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          จำนวนคือกี่ %
        </button>
        <button
          onClick={reset}
          style={{
            flexBasis: '100%',
            padding: '0.75rem',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          ล้างค่า
        </button>
      </div>

      <div style={{ marginTop: '2rem', color: '#555', fontSize: '1.1rem' }}>
        {result1 && <p>📌 {result1}</p>}
        {result2 && <p>📌 {result2}</p>}
      </div>

      <div>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
          จัดทำโดย นายอธิวัฒน์ จันทะศรี
        </h1>
      </div>
    </div>
    
  );
}
