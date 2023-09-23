#! /usr/bin/env node
import * as inquirer from "inquirer";
import chalk from "chalk";
var Operators;
(function (Operators) {
    Operators["ADD"] = "Addition";
    Operators["SUBTRACT"] = "Subtraction";
    Operators["MULTIPLY"] = "Multiplication";
    Operators["DEVIDE"] = "Division";
})(Operators || (Operators = {}));
const prompt = inquirer.createPromptModule();
// }
async function main() {
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter the first number",
        },
        {
            type: "list",
            name: "operator",
            message: "select operation:",
            choices: Object.values(Operators)
        },
        {
            type: "input",
            name: "num2",
            message: "Enter the second number",
        }
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedOperator = input.operator;
    let result;
    if (selectedOperator === Operators.ADD) {
        result = num1 + num2;
        console.log(chalk.green.bgRedBright(`result is :${result}`));
    }
    else if (selectedOperator === Operators.MULTIPLY) {
        result = num1 * num2;
        console.log(chalk.green.bgBlueBright(`result is :${result}`));
    }
    else if (selectedOperator === Operators.SUBTRACT) {
        result = num1 - num2;
        console.log(chalk.green.bgCyanBright(`result is :${result}`));
    }
    else if (selectedOperator === Operators.DEVIDE) {
        result = num1 / num2;
        console.log(chalk.green.bgCyanBright(`result is :${result}`));
    }
}
main();
