import React from "react";

function Result({ result }) {

  return (
    <div style={{marginTop:"20px"}}>
      <h2>Result</h2>

      <div style={{
        background:"#fff",
        padding:"15px",
        width:"400px",
        margin:"auto",
        borderRadius:"8px",
        boxShadow:"0 2px 8px rgba(0,0,0,0.2)"
      }}>
        <p>{result}</p>
      </div>

    </div>
  );
}

export default Result;