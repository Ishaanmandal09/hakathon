import React, { useState } from "react";

function NewsInput({ analyze }) {

  const [text, setText] = useState("");

  return (
    <div className="input-card">

      <textarea
        placeholder="Paste news article or headline here..."
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => analyze(text)}>
        Check News
      </button>

    </div>
  );
}

export default NewsInput;