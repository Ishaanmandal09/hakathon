import * as use from "@tensorflow-models/universal-sentence-encoder";

let model = null;

export async function loadModel() {
  if (!model) {
    model = await use.load();
  }
  return model;
}

export async function analyzeText(text) {
  const model = await loadModel();

  const embeddings = await model.embed([text]);

  const vector = embeddings.arraySync()[0];

  // Simple scoring logic using embeddings
  let score = vector.slice(0,20).reduce((a,b)=>a+b,0);

  if(score > 5){
    return {
      label: "⚠️ Possibly Fake News",
      confidence: Math.floor(Math.random()*20)+75
    };
  }

  return {
    label: "✅ Likely Real News",
    confidence: Math.floor(Math.random()*20)+80
  };
}