const Statement = require('./statement');

describe('Statement', () => {
  it('returns an instance of the Statement class', () => {
    const statement = new Statement();

    expect(statement).toBeInstanceOf(Statement);
  });
});
