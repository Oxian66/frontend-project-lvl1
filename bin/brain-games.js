#!/usr/bin/env node 
import readlineSync from "readline-sync";

console.log('Welcome To The Brain Games');

const playerName = readlineSync.question("May I have your name?");

console.log(`Hello  ${playerName}!`);
