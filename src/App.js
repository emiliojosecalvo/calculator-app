import React, { useState } from 'react';

function App() {
    const [result, setResult] = useState(0);
    return (
        <>
            <h1>Hola Emilio...!</h1>
            <form>
                <input type='text' value={result} />
            </form>
            <div className='keypad'>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
                <button>&divide;</button>
                <button>&ndash;</button>
                <button>+</button>
                <button>&times;</button>
                <button>.</button>
                <button>=</button>
                <button>C</button>
                <button>Clear</button>
            </div>
        </>
    )
}

export default App;