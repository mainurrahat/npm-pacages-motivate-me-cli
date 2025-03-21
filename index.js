#!/usr/bin/env node

import chalk from "chalk";

const quotes = [
  "Code is like humor. When you have to explain it, it's bad. - Mainur Islam Rahat",
  "The best way to predict the future is to invent it. - Mainur Islam Rahat",
  "Every great developer you know once struggled to learn their craft. Keep going! - Mainur Islam Rahat",
  "Talk is cheap. Show me the code. - Mainur Islam Rahat",
  "First, solve the problem. Then, write the code. - Mainur Islam Rahat",
  "Debugging is like being the detective in a crime movie where you are also the murderer. - Mainur Islam Rahat",
  "Your code doesn't have to be perfect, it just has to work and improve over time. - Mainur Islam Rahat",
  "Programming is the art of thinking before typing. - Mainur Islam Rahat",
  "Don't worry if it doesn't work right. If everything worked, you'd be out of a job. - Mainur Islam Rahat",
  "You don't have to be great to start, but you have to start to be great. - Mainur Islam Rahat",
  "Write code as if the next person to maintain it is a crazy hacker who knows where you live. - Mainur Islam Rahat",
  "Coding is like magic, but instead of spells, you write functions. - Mainur Islam Rahat",
  "Failure is just another step in debugging life. - Mainur Islam Rahat",
  "Don't fear errors, they are just stepping stones to mastery. - Mainur Islam Rahat",
  "Every line of code you write is a step towards mastery. Keep coding! - Mainur Islam Rahat",
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(chalk.green.bold(randomQuote));
