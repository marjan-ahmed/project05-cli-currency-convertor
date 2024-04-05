import inquirer from "inquirer";
//PKR = Pakistani Rupee (Rs)
//USD = United State Dollar ($)
//GBP =  Great British Pounds (£)
//SAR = Saudi Arabian Riyal (ر. س )
//EUR = The European Union (€)
const conversion = {
    "PKR": {
        "PKR": 1,
        "USD": 0.0036,
        "GPB": 0.0028,
        "SAR": 0.013,
        "EUR": 0.0033
    },
    "USD": {
        "USD": 1,
        "PKR": 278.40,
        "GBP": 0.79,
        "SAR": 3.75,
        "EUR": 0.92
    },
    "GBP": {
        "GBP": 1,
        "PKR": 351.02,
        "USD": 1.26,
        "SAR": 4.74,
        'EUR': 1.17
    },
    'SAR': {
        "SAR": 1,
        "PKR": 74.09,
        "USD": 0.27,
        "GBP": 0.21,
        "EUR": 0.25
    },
    "EUR": {
        "EUR": 1,
        "PKR": 301.15,
        "USD": 1.08,
        "GBP": 0.86,
        "SAR": 4.07
    }
};
const choice = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        option: ['PKR', 'USD', 'GBP', 'SAR', 'EUR'],
        message: "Enter your currency to convert:"
    },
    {
        name: "to",
        type: "list",
        option: ['PKR', 'USD', 'GBP', 'SAR', 'EUR'],
        message: "Enter your conversion currency:"
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your conversion to convert:"
    }
]);
const { from, to, amount } = choice;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`Your convertion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid Choice or input");
}
