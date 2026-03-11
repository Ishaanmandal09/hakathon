import React, { useState } from "react";
import NewsInput from "./components/NewsInput";
import Result from "./components/Result";
import { analyzeText } from "./ai/bertModel";

function App() {

  const [result, setResult] = useState("");

  const analyzeNews = async (text) => {

    setResult("🤖 AI is analyzing the news...");

    try {

      const aiResult = await analyzeText(text);

      if (aiResult.label === "FAKE") {
        setResult(`⚠️ Fake News Detected
Confidence: ${aiResult.confidence}%`);
      } 
      else {
        setResult(`✅ Likely Real News
Confidence: ${aiResult.confidence}%`);
      }

    } catch (error) {

      console.error(error);
      setResult("❌ Error analyzing news");

    }
  };
return (
    <div className="container">

      <h1 className="title">TruthLens AI</h1>

      <div className="info-card">
        <h2>How to Use</h2>
        <p>
          Paste any news headline or article into the text box and click
          <b> "Check News"</b>.  
          Our AI analyzes the language patterns and detects whether the
          content might be misleading or trustworthy.
        </p>
      </div>

      <NewsInput analyze={analyzeNews} />

      <Result result={result} />

      <div className="info-card">
        <h2>How Results Work</h2>

        <p>
        ⚠️ <b>Fake News</b> means the system detected suspicious language,
        exaggerated claims, or patterns commonly found in misinformation.
        </p>

        <p>
        ✅ <b>Real News</b> means the content appears credible and does not
        match typical misinformation patterns.
        </p>

      </div>

    </div>
  );
}

export default App;