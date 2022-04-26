# Bank Tech Test

## Description

This is a simple application that allows the customer to manage a bank account. The customer can deposit, withdraw and also view a bank statement, which contains the transactions with details about the date, credit, debit and balance. The application can be run in Node REPL.

## How to run the program

1. Clone this repo and `cd` in the project directory
2. Run `npm install` to install the required dependencies (Jest, Eslint, Moment)
3. Run `node` on your Terminal
4. Run `const BankAccount = require('./src/bankAccount.js');` to run the file
5. Create a new instance of the BankAccount class
6. Run the following commands on the above instance to complete the bank account operations: `.deposit()` to deposit a chosen amount, `.withdraw()` to withdraw a chosen amount, `getBalance()` to check current balance and `viewStatement` to display a complete statement with all the transactions.

### Interface example

```
> ba = new BankAccount();
BankAccount { balance: 0, transactions: [] }
> ba.deposit(5000);
undefined
> ba.deposit(800);
undefined
> ba.withdraw(2000);
undefined
> ba.viewStatement();
date || credit || debit || balance
26/04/2022 || || 2000.00 || 3800.00
26/04/2022 || 800.00 || || 5800.00
26/04/2022 || 5000.00 || || 5000.00
```

## How to run the tests

1. Run `npm install`
2. Run `jest` to run all unit tests (a coverage table is also displayed)
3. Run ` npx eslint ./src/**.js` to run linting check

### Test coverage

![screenshot](https://github.com/valentina-maggio/bank-tech-test/blob/main/public/test-coverage.png)

## Design approach

1. After reading the client's requirements I started drafting the user stories and the domain modelling.
2. I decided to create two classes:
    - BankAccount class, with methods related to deposit money, withdraw money and view the statement.
    - Statement class, with methods related to print the statement header and the list of transactions.
3. Following a TDD approach I started building the BankAccount class:
    - The class is initialised with a balance with starting value at 0 and a transactions empty array. 
    - There are also two private properties for the statement (which is an instance of the Statement class) and the error message.
    - The first methods I implemented are the deposit() and withdraw():
        - Both methods take two parameters: an amount and a date, which is defaulted as current date (and directly formatted using the library Moment). Therefore the user only needs to add the amount when calling these functions.
        - When these two functions run they update the balance amount and the transactions array.
        - In the test some doubles are used to create fake dates and prevent any dependency on the Moment module.
    - I added a private errorMessage method to throw errors if the amount is <= 0 or if the input is not a number. The error method runs when the deposit or withdraw methods are called.
4. I then moved to the Statement class, still following a TDD approach:
    - The class is initialised with a statement as an empty array and a header.
    - There are two methods: printHeader, which returns the header for the statement, and printTransactions, that takes the transactions array and iterate over it to format the transactions list accordingly and return them.
    - A private method transactionFormatting is called by the printTransactions method to manage and format the transaction depending on their type (deposit or withdrwa).
5. After completing the Statement class I added more features to the BankAccount class. I first created the viewStatement method which console.log the Statement class methods printHeader and printStatement.
    - The test for this method uses a spy to return the output of the console.log.
6. Eventually I took into account some edge cases (withdrawing when the balance < 0 and withdrawing an amount that is > balance). I created a private checkOverdraft method in the BankAccount class to check for these scenarios. The first one throws an error preventing to withdraw money, while the second one allows to withdraw but displays a message informing about the overdraft.
7. Finally I added a feature test to simulate a sequence of operations as per the client's acceptance criteria, but I couldn't complete the mocking of the output for the console.log.

### User Stories

```
As a potential customer
So that I can manage my money and keep it safe
I would like to be able to open a bank account
```
```
As a bank customer
So that I can have my money saved in the same place
I would like to be able to deposit money in my bank account
```
```
As a bank customer
So that I can use my money whenever I need it
I would like to be able to withdraw money from my bank account
```
```
As a bank customer
So that I can see my account movements
I would like to see a statement with date, transactions and balance
```

### Edge cases implemented

- Invalid amount (negative or 0)
- Invalid input (not a number)
- Withdraw when amount is > balance
- Withdraw when balance < 0

#### Example of errors and messages displayed
```
> ba.withdraw(-1000)
Uncaught Error: Invalid input, please enter a positive number
```
```
> ba.withdraw(5000);
Your balance is negative. You are now using your overdraft allowance
```

### Unfinished parts

I haven't completed the feature test as I had issues with the mocking of the console log output.

### Future improvements

* I will definitely have to improve the use of mocks and spies and then update the tests.
* There may be some room to extract some logic from the BankAccount class and create another class.
* There are more edge cases that I could consider, eg. withdraw when balance = 0 or add a limit to allowed overdraft.
* I was planning to integrate Travis CI for the building of the software but I had some issues with the credits and couldn't use it. I will look for an alternative option and add it to the project.

## Technologies used

* JavaScript
* Node.js
* Jest
* ESLint
* Moment
