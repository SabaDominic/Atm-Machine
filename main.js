import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
console.log("\nWelcome to ATM\n");
let pinAnswer = await inquirer.prompt([
    { name: "pin",
        type: "number",
        message: "Enter your pin"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin number!");
    let transactionAns = await inquirer.prompt([
        {
            name: "transaction",
            message: "Select your transaction",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash",]
        }
    ]);
    if (transactionAns.transaction === "withdraw") {
        let withdrawAmount = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (withdrawAmount.amount > myBalance) {
            console.log("Insufficient balance");
        }
        else if (myBalance -= withdrawAmount.amount) {
            console.log(`Your new balance is: ${myBalance}`);
        }
    }
    else if (transactionAns.transaction === "check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
    else if (transactionAns.transaction === "fast cash") {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "list",
                choices: [500, 1000, 10000]
            }
        ]);
        myBalance -= fastCashAmount.amount;
        console.log(`Your new balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
