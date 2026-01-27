import { useState } from 'react';

export default function Counter({ defaultValue = 0 }) {
    const [count, setCount] = useState(defaultValue);

    return (
        <div className="counter">
            <button onClick={() => setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    ); 
}

