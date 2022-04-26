const BankAccount = require('./bankAccount');

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

    it('records the transactions with date, amount and current balance', () => {
      const fakeDate = { format: '25/04/2022' };

      account.deposit(50, fakeDate.format);

      expect(account.transactions).toEqual([['deposit', '25/04/2022', 50, 50]]);
    });

    it('records the correct current balance', () => {
      const fakeDate = { format: '25/04/2022' };

      account.deposit(50, fakeDate.format);
      account.withdraw(20, fakeDate.format);

      expect(account.transactions).toEqual([['deposit', '25/04/2022', 50, 50], ['withdrawal', '25/04/2022', 20, 30]]);
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
      account.withdraw(6000);

      const logSpy = jest.spyOn(console, 'log');
      console.log('Your balance is negative. You are now using your overdraft allowance');

      expect(logSpy).toHaveBeenCalledWith('Your balance is negative. You are now using your overdraft allowance');
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
      const fakeDate1 = { format: '25/04/2022' };
      const fakeDate2 = { format: '26/04/2022' };

      account.deposit(5000, fakeDate1.format);
      account.withdraw(200, fakeDate2.format);

      const spy = jest.spyOn(account, 'viewStatement');

      account.viewStatement();

      expect(spy).toHaveBeenCalled();
    });
  });
});
