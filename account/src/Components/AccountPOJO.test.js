import Account from "./AccountPOJO";

test('Test the Account balance and Account name', () => {
    const account = new Account(0, "Cheryl_Chequing");
    expect(account.balance).toBe(0);
    expect(account.name).toBe("Cheryl_Chequing");
 });

 test('Test the deposit', () => {
    const account = new Account(0, "Cheryl_Chequing");
    account.deposit(20);
    expect(account.balance).toBe(20);
 });

 test('Test the withdraw', () => {
    const account = new Account(30, "Cheryl_Chequing");
    account.withdraw(20);
    expect(account.balance).toBe(10);

    account.withdraw(40);
    expect(account.balance).toBe(10);

    account.withdraw(-20);
    expect(account.balance).toBe(10);

    account.withdraw("a");
    expect(account.balance).toBe(10);
 });

 test('Test the current balance', () => {
    const account = new Account(100, "Cheryl_Chequing");
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(100);
 });

