const { randomInt } = require("crypto");

const words = [
  { word: "crystal", hint: "clear shiny mineral" },
  { word: "nebula", hint: "cosmic cloud in space" },
  { word: "harvest", hint: "gathering crops" },
  { word: "fortress", hint: "strong military building" },
  { word: "journey", hint: "long travel adventure" }
];

module.exports = (req, res) => {
  const idx = randomInt(0, words.length);
  res.status(200).json(words[idx]);
};
