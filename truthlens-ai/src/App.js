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
    <div className="app">

      <h1>TruthLens AI</h1>

      <NewsInput analyze={analyzeNews} />

      <Result result={result} />

    </div>
  );
}

export default App;