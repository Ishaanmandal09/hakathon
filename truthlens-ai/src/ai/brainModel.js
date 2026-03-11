import brain from "brain.js";

const net = new brain.NeuralNetwork();

net.train([
  { input: { clickbait: 1 }, output: { fake: 1 } },
  { input: { verified: 1 }, output: { fake: 0 } }
]);

export function predict(text){

  const result = net.run({
    clickbait: text.includes("shocking") ? 1 : 0
  });

  return result.fake;
}