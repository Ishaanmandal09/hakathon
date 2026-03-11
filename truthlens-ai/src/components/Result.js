import React from "react";

function Result({ result }) {

  if(!result) return null;

  return (

    <div className="result-card"style={{
        background:"#fff",
        padding:"15px",
        width:"400px",
        margin:"auto",
        borderRadius:"8px",
        boxShadow:"0 2px 8px rgba(0,0,0,0.2)"
      }}>

      <h2>Analysis Result</h2>

      <p>{result}</p>
    </div>
  );

}

export default Result;
