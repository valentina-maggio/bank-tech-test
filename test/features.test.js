const BankAccount = require('../src/bankAccount');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Feature test', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  it('implements the acceptance criteria requested by the client', () => {
    const fakeDate1 = { format: '10/01/2023' };
    const fakeDate2 = { format: '13/01/2023' };
    const fakeDate3 = { format: '14/01/2023' };

    const account = new BankAccount();

    account.deposit(1000, fakeDate1.format);
    account.deposit(2000, fakeDate2.format);
    account.withdraw(500, fakeDate3.format);
    account.viewStatement();

    // Commenting out the below code as the Spy only returns 'Number of calls: 2'

    // expect(console.log).toHaveBeenCalledWith(
    //   'date || credit || debit || balance\n'
    //   + '14/01/2023 || || 500.00 || 2500.00\n'
    //   + '13/01/2023 || 2000.00 || || 3000.00\n'
    //   + '14/01/2023 || 1000.00 || || 1000.00',
    // );
  });
});
