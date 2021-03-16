import readlineSync from "readline-sync";
const greeting = () => {
    console.log('Welcome To The Brain Games');
    
    const playerName = readlineSync.question("May I have your name?");
    
    console.log(`Hello  ${playerName}!`);
};
export default greeting;