import NodePOJO from "./NodePOJO";

test("Test the constructor", () => {
    const tempNode = new NodePOJO();
    expect(tempNode.previous).toBe(null);
    expect(tempNode.next).toBe(null);
    expect(tempNode.subject).toBe(undefined);
    expect(tempNode.amount).toBe(undefined);
        // console.log("This is the blank NodePOJO:", tempNode)

    const tempNode1 = new NodePOJO("A", 5);
    expect(tempNode1.previous).toBe(null);
    expect(tempNode1.next).toBe(null);
    expect(tempNode1.subject).toBe("A");
    expect(tempNode1.amount).toBe(5);   
        // console.log("This is the filled NodePOJO:", tempNode1)
});

test("Test the show() method", () => {
    const tempSingleNode = new NodePOJO("A", 6)
    const tempString = tempSingleNode.show();
        // console.log("This is your tempString:", tempString);
    expect(tempString).toBe("null null A 6");
});

