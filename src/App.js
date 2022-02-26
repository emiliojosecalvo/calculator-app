import React, { useState } from 'react';
import './App.css';

function App() {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        if (result.length < 12) {
            setResult(result.concat(e.target.value));
        }
    }

    function backspace() {
        setResult(result.slice(0, result.length - 1));
    }
    function calculate() {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult('Error');
        }
    }
    return (
        <>
            <div className='container'>
                <h1 id='title'>Calculator</h1>
                <input id='display' type='text' value={result} onChange={setResult} />
                <div className='keypad'>
                    <button onClick={backspace}>C</button>

                    <button onClick={handleClick} value='/'>&divide;</button>
                    <button onClick={handleClick} value='*'>&times;</button>
                    <button onClick={handleClick} value='-'>&ndash;</button>

                    <button onClick={handleClick} value='7'>7</button>
                    <button onClick={handleClick} value='8'>8</button>
                    <button onClick={handleClick} value='9'>9</button>

                    <button onClick={handleClick} value='4'>4</button>
                    <button onClick={handleClick} value='5'>5</button>
                    <button onClick={handleClick} value='6'>6</button>

                    <button onClick={handleClick} value='1'>1</button>
                    <button onClick={handleClick} value='2'>2</button>
                    <button onClick={handleClick} value='3'>3</button>
                    <button onClick={() => setResult('')}>Clear</button>
                    <button onClick={handleClick} id='zero' value='0'>0</button>
                    <button onClick={handleClick} value='.'>.</button>
                    <button onClick={calculate} value='=' id='equal'>=</button>
                    <button onClick={handleClick} value='+' id='plus'>+</button>

                </div>

            </div>
        </>
    )
}

export default App;