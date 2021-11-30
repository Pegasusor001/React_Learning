import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BasicComponents.css";

function Clicker() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setTimeout(() => {
      setCount(count - 1);
    }, 250);
  };
  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

// perform the axios request
const useAxios = (url, setData) => {
  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      const result = await axios.get(url);
      if (mounted) {
        setData(result.data);
      }
    };
    loadData();

    return () => {
      mounted = false;
    };
  }, [url]);
};

function Fetch({ url }) {
  const [data, setData] = useState(null);
  useAxios(url, setData);

  if (!data) {
    return <span data-testid="loading">Loading data...</span>;
  }

  return <span data-testid="resolved">{data.greeting}</span>;
}

export { Clicker, Fetch };
