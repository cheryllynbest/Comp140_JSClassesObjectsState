import AccountFIFOLIFO from "./FIFO_LIFO_POJO";

test('Test the FIFOLIFO createArray method', () => {
    const tempObj = new AccountFIFOLIFO();
    // console.log("This is tempArr before", tempObj)
    tempObj.createArray(50, "Cheryls Chequing")
    tempObj.createArray(100, "Lindens Chequing")
    // console.log("This is tempObj.Arr[0] after", tempObj.Arr[0])
    expect(tempObj.arr[0].name).toBe("Cheryls Chequing");
    expect(tempObj.arr[1].balance).toBe(100);
 });

 test('Test the FIFO method', () => {
    const tempObj = new AccountFIFOLIFO();
    tempObj.createArray(50, "Cheryls Chequing")
    tempObj.createArray(100, "Lindens Chequing")
    tempObj.createArray(300, "Alexs Chequing");
    tempObj.createArray(200, "Maddies Chequing");
    // console.log("This is tempObj.Arr before", tempObj)
    tempObj.FIFO();
    // console.log("This is tempObj.Arr after", tempObj)
});

test('Test the LIFO method', () => {
    const tempObj = new AccountFIFOLIFO();
    tempObj.createArray(50, "Cheryls Chequing")
    tempObj.createArray(100, "Lindens Chequing")
    tempObj.createArray(300, "Alexs Chequing");
    tempObj.createArray(200, "Maddies Chequing");
    // console.log("This is tempObj.Arr before", tempObj)
    tempObj.LIFO();
    // console.log("This is tempObj.Arr after", tempObj)
});