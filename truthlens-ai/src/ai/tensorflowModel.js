import * as tf from "@tensorflow/tfjs";

export async function detectFakeNews(text) {

  const fakeKeywords = ["shocking", "breaking", "secret", "miracle"];

  let score = 0;

  fakeKeywords.forEach(word => {
    if(text.toLowerCase().includes(word)){
      score += 1;
    }
  });

  if(score > 1){
    return "⚠️ Possibly Fake News";
  }

  return "✅ Likely Real News";
}