import { useState } from "react";
import "./App.css";
import LineChart from "./components/LineChart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LineChart />
    </>
  );
}

export default App;
