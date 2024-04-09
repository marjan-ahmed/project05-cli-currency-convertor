#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//PKR = Pakistani Rupee (Rs)
//USD = United State Dollar ($)
//GBP =  Great British Pounds (£)
//SAR = Saudi Arabian Riyal (ر. س)
//EUR = The European Union (€)
const currencies = {
    USD: 1, //USD is our base currency
    PKR: 277.57,
    GBP: 0.79,
    SAR: 3.75,
    EUR: 0.92
};
console.log(chalk.green.underline.bold("                --------***-------____WELCOME TO CURRENCY CONVERTOR (BY MARJAN AHMED)--------***-------____                "));
console.log(chalk.yellow.bold("             *---****---*                        *---****---*                        *---****---* "));
console.log(chalk.yellowBright("-----------------------------*___****___*                              *___****___*--------------------------------"));
console.log("\n");
const userAns = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter your Currency to convert:",
        choices: ['PKR', 'USD', 'EUR', 'GBP', 'SAR']
    },
    {
        name: "to",
        type: "list",
        message: "Enter your convertional currency:",
        choices: ['PKR', 'USD', 'EUR', 'GBP', 'SAR']
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount:"
    }
]);
//Calculation
let formAmount = currencies[userAns.from];
let toAmount = currencies[userAns.to];
const baseAmount = userAns.amount / formAmount;
const converAmount = baseAmount * toAmount;
//Print
console.log(baseAmount);
console.log(converAmount);
