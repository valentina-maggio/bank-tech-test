const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  describe('Bank account opening', () => {
    it('returns an instance of the BankAccount class', () => {
      const account = new BankAccount();

      expect(account).toBeInstanceOf(BankAccount);
    });

    it('has an initial balance of 0', () => {
      const account = new BankAccount();

      expect(account.getBalance()).toBe(0);
    });
  });

  describe('Bank account management', () => {
    it('adds money to the bank account', () => {
      const account = new BankAccount();
      account.deposit(50);

      expect(account.getBalance()).toBe(50);
    });

    it('withdraws money from the bank account', () => {
      const account = new BankAccount();
      account.deposit(100);
      account.withdraw(30);

      expect(account.getBalance()).toBe(70);
    });

    it('records the transactions with amount and date', () => {
      const account = new BankAccount();
      const fakeDate = { format: '25/04/2022' };

      account.deposit(50, fakeDate.format);

      expect(account.transactions).toEqual([[50, '25/04/2022']]);
    });
  });
});
