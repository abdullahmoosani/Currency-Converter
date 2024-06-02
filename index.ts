import inquirer from "inquirer";

const currency : any = {
    USD : 1, //base currency
    EUR : 0.92,
    GBP : 0.78,
    CNY : 7,
    PKR : 278,
}
let userAnswer = await inquirer.prompt(
    [
        {
            name : "from",
            type : "list",
            message : "which currency you want to convert from",
            choices : ["USD","EUR","GBP","CNY","PKR"]
        },
        {
            name : "to",
            type : "list",
            message : "which currency you want to convert into",
            choices : ["USD","EUR","GBP","CNY","PKR"]
        },
        {
            name : "amount",
            message : "Enter your amount",
            type : "number"
        }
    ]
)
let answerFrom = currency[userAnswer.from]
let answerTo = currency [userAnswer.to]
let answerAmount = userAnswer.amount
let baseCurrency = answerAmount / answerFrom
let convertedAmount = baseCurrency * answerTo

console.log(convertedAmount);
