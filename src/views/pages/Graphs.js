import React from "react";
import Dashboard from "./graphs/dashboard";
const Graphs = () => {
  return (
    <div className="graphs-container">
      <div className="graphs-content">
        <h2>Graphs Page</h2>
        <p>This is the graphs page.</p>
        <Dashboard/>
      </div>
    </div>
  );
};

export default Graphs;
