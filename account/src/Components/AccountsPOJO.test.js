import AccountsPOJO from "./AccountsPOJO";

test('Add an Initial Account', () => {
    const testObject = new AccountsPOJO();
    testObject.addAccounts(50, "Cheryls Chequing", 1);
    expect(testObject.arrControl[0].name).toBe("Cheryls Chequing");
    expect(testObject.arrControl[0].balance).toBe(50);
});

test('Test Delete Account', () => {
    const testObject = new AccountsPOJO();
    testObject.addAccounts(50, "Cheryls Chequing", 1);
    testObject.addAccounts(100, "Alexs Chequing", 2);

    testObject.deleteAccount(testObject.arrControl[0].id)
    // console.log("This is the testObject:", testObject);
    expect(testObject.arrControl[0].name).toBe("Alexs Chequing");
});

test('Test the min, max and total Account', () => {
    console.log("Hello World from min, max and total Account");
    const testObject = new AccountsPOJO();
    testObject.addAccounts(500, "Cheryls Chequing", 1);
    testObject.addAccounts(300, "Alexs Chequing", 2);
    testObject.addAccounts(100, "Lindens Chequing", 3);
    testObject.addAccounts(200, "Maddies Chequing", 4);

    const temp = testObject.minAccount(testObject.arrControl);
    console.log( "THis is the min, it should be 100:", temp)
    expect(testObject.arrControl[0].balance).toBe(500);

    const temp2 = testObject.maxAccount(testObject.arrControl);
    console.log( "THis is the max, it should be 500:", temp2)
    expect(testObject.arrControl[3].balance).toBe(200);
 
    const temp3 = testObject.totalAccount(testObject.arrControl);
    console.log( "THis is the total, it should be 1100:", temp3)
    expect(testObject.totalAccount()).toBe(1100);
});