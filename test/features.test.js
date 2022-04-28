const BankAccount = require('../src/bankAccount');

describe('Feature test', () => {
  it('implements all the operations for the account management', () => {
    Date.now = jest.fn(() => new Date('2022-04-27T12:33:37.000Z'));

    const account = new BankAccount();

    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);

    console.log = jest.fn();

    account.viewStatement();

    expect(console.log).toHaveBeenCalledWith(
      'date || credit || debit || balance\n'
      + '27/04/2022 || || 500.00 || 2500.00\n'
      + '27/04/2022 || 2000.00 || || 3000.00\n'
      + '27/04/2022 || 1000.00 || || 1000.00',
    );
  });
});
