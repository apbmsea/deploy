import React, { useState } from "react";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <>
      <div>Hello thats Main!</div>
      <h1>value = {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <div style={{display: 'flex', gap: 10}}>
        <Link to={"/about"}>about</Link>
        <Link to={"/order"}>order</Link>
      </div>
    </>
  );
};

export default Main;
