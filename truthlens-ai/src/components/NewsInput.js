import React, { useState } from "react";

function NewsInput({ analyze }) {

  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => analyze(text)}>
        Check News
      </button>
    </div>
  );
}

export default NewsInput;