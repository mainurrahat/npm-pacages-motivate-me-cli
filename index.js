#!/usr/bin/env node

import chalk from "chalk";

const quotes = [
  "Code is like humor. When you have to explain it, it's bad. ",
  "The best way to predict the future is to invent it. ",
  "Every great developer you know once struggled to learn their craft. Keep going! ",
  "Talk is cheap. Show me the code. ",
  "First, solve the problem. Then, write the code. ",
  "Debugging is like being the detective in a crime movie where you are also the murderer. ",
  "Your code doesn't have to be perfect, it just has to work and improve over time. ",
  "Programming is the art of thinking before typing. ",
  "Don't worry if it doesn't work right. If everything worked, you'd be out of a job",
  "You don't have to be great to start, but you have to start to be great. ",
  "Write code as if the next person to maintain it is a crazy hacker who knows where you live. ",
  "Coding is like magic, but instead of spells, you write functions. ",
  "Failure is just another step in debugging life. ",
  "Don't fear errors, they are just stepping stones to mastery. ",
  "Every line of code you write is a step towards mastery. Keep coding! ",
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(chalk.green.bold(randomQuote));
