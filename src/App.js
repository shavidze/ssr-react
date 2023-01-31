import React, { useState } from "react";

const App = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  console.log(initialValue);

  if (typeof window === "undefined") return <>x</>;
  return (
    <>
      <div className="App">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <div style={{ margin: "20px" }}>{count}</div>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </>
  );
};

App.getProps = async () => {
  // mock for apis
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ value: 10 });
    }, 1000);
  });
};
export default App;
