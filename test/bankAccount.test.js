const BankAccount = require('../src/bankAccount');

describe('BankAccount', () => {
  let account;

  beforeEach(() => {
    account = new BankAccount();
  });

  describe('Bank account opening', () => {
    it('returns an instance of the BankAccount class', () => {
      expect(account).toBeInstanceOf(BankAccount);
    });

    it('has an initial balance of 0', () => {
      expect(account.getBalance()).toBe(0);
    });
  });

  describe('Bank account movements', () => {
    it('adds money to the bank account', () => {
      account.deposit(50);

      expect(account.getBalance()).toBe(50);
    });

    it('withdraws money from the bank account', () => {
      account.deposit(100);
      account.withdraw(30);

      expect(account.getBalance()).toBe(70);
    });
  });

  describe('Invalid inputs', () => {
    it('throws an error when customer inputs invalid amount for deposit', () => {
      expect(() => {
        account.deposit(0);
      }).toThrow('Invalid input, please enter a positive number');
    });

    it('throws an error  when customer inputs invalid type of amount for withdrawal', () => {
      expect(() => {
        account.withdraw('money');
      }).toThrow('Invalid input, please enter a positive number');
    });
  });

  describe('Account overdraft', () => {
    it('returns a message saying the account is in overdraft', () => {
      account.deposit(4000);
      console.log = jest.fn();
      account.withdraw(6000);

      expect(console.log).toHaveBeenCalledWith('Your balance is negative. You are now using your overdraft allowance');
    });
  });

  describe('Negative balance', () => {
    it('throws an error if the balance is negative when trying to withdraw money', () => {
      account.deposit(4000);
      account.withdraw(6000);

      expect(() => {
        account.withdraw(1000);
      }).toThrow('Your balance is negative, please make a deposit first');
    });
  });

  describe('Transactions statement', () => {
    it('calls the statement methods to print the transactions statement', () => {
      Date.now = jest.fn(() => new Date('2022-04-27T12:33:37.000Z'));

      console.log = jest.fn();

      account.deposit(5000);
      account.withdraw(200);
      account.viewStatement();

      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n'
      + '27/04/2022 || || 200.00 || 4800.00\n'
      + '27/04/2022 || 5000.00 || || 5000.00');
    });
  });
});
