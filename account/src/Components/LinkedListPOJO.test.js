import LinkedListPOJO from "./LinkedListPOJO";

test("Test the constructor", () => {
    const tempLinkedList = new LinkedListPOJO();
    expect(tempLinkedList.head).toBe(null);
    expect(tempLinkedList.tail).toBe(null);
    expect(tempLinkedList.current).toBe(null);
    expect(tempLinkedList.length).toBe(0);
    expect(tempLinkedList.startTemp).toBe(null);
    expect(tempLinkedList.endTemp).toBe(null);
});

test("Test the showCurrentNode() method", () => {
    const tempLinkedList = new LinkedListPOJO();
    expect(tempLinkedList.showCurrentNode()).toBe("There are no Nodes in the list --> Add a Node")
    tempLinkedList.addNode("A", 1);
    expect(tempLinkedList.showCurrentNode()).toBe("A")
    tempLinkedList.addNode("B", 2);
    expect(tempLinkedList.showCurrentNode()).toBe("B")
});

test("Test the addNode() and showCompleteLinkedListArray() method", () => {
    const tempLinkedList = new LinkedListPOJO();
    tempLinkedList.addNode("A", 1);
    tempLinkedList.addNode("B", 2);
    tempLinkedList.addNode("C", 7);
    tempLinkedList.showCompleteLinkedListArray();
});

test("Test the currentMoveBack() method", () => {
    const tempLinkedList = new LinkedListPOJO();
    tempLinkedList.addNode("A", 1);
    tempLinkedList.addNode("B", 2);
    tempLinkedList.addNode("C", 7);
    tempLinkedList.showCurrentNode();
    tempLinkedList.currentMoveBack();
    tempLinkedList.showCurrentNode();
});

test("Test the currentMoveForward() method", () => {
    const tempLinkedList = new LinkedListPOJO();
    tempLinkedList.addNode("A", 1);
    tempLinkedList.addNode("B", 2);
    tempLinkedList.addNode("C", 7);
    tempLinkedList.showCurrentNode();
    tempLinkedList.currentMoveToFirst();
    tempLinkedList.showCurrentNode();
    tempLinkedList.currentMoveForward();
    tempLinkedList.showCurrentNode();
});

test("Test the currentMoveToFirst() method", () => {
    const tempLinkedList = new LinkedListPOJO();
    tempLinkedList.addNode("A", 1);
    tempLinkedList.addNode("B", 2);
    tempLinkedList.addNode("C", 7);
    tempLinkedList.addNode("D", 10);
    tempLinkedList.showCurrentNode();
    tempLinkedList.currentMoveToFirst();
    tempLinkedList.showCurrentNode();
});
    
test("Test the currentMoveToLast() method", () => {
    const tempLinkedList = new LinkedListPOJO();
    tempLinkedList.addNode("A", 1);
    tempLinkedList.addNode("B", 2);
    tempLinkedList.addNode("C", 7);
    tempLinkedList.addNode("D", 10);
    tempLinkedList.showCurrentNode();
    tempLinkedList.currentMoveToFirst();
    tempLinkedList.showCurrentNode();
    tempLinkedList.currentMoveToLast();
    tempLinkedList.showCurrentNode();
});
        
test("Test the insertNodeAFter() method", () => {
    // console.log("Irechecking the Insert Node after")
    const tempLinkedList = new LinkedListPOJO();
    tempLinkedList.addNode("A", 1);
    tempLinkedList.addNode("B", 2);
    tempLinkedList.addNode("C", 3);
    tempLinkedList.addNode("D", 4);
    // const temp = tempLinkedList.showCompleteLinkedListArray();
    // console.log("This is the current array:", temp)
    // console.log("This is the current node:", tempLinkedList.showCurrentNode());
    tempLinkedList.currentMoveToFirst();
    // console.log("This is the current node:", tempLinkedList.showCurrentNode());
    tempLinkedList.currentMoveForward();
    // console.log("This is the current node:", tempLinkedList.showCurrentNode());
    tempLinkedList.insertNodeAfter('W', 5);
    // console.log("This is the current node:", tempLinkedList.showCurrentNode());
    const temp2 = tempLinkedList.showCompleteLinkedListArray();
    // console.log("This is the current array:", temp2)
    // console.log("This is the current node:", tempLinkedList.showCurrentNode());
});
       
test("Test the delete() method", () => {
    // console.log("In the delete method to test extra crap")
    const tempLinkedList = new LinkedListPOJO();
    tempLinkedList.addNode("A", 1);
    tempLinkedList.addNode("B", 2);
    tempLinkedList.addNode("C", 3);
    tempLinkedList.addNode("D", 4);
    const temp = tempLinkedList.showCompleteLinkedListArray();
    // console.log("This is the current array:", temp)
    tempLinkedList.currentMoveToFirst();
    // console.log("This is the current node:", tempLinkedList.showCurrentNode());
    tempLinkedList.currentMoveForward();
    // console.log("This is the current node:", tempLinkedList.showCurrentNode());
    tempLinkedList.insertNodeAfter("W", 5);
    const temp2 = tempLinkedList.showCompleteLinkedListArray();
    // console.log("This is the current array:", temp2)
    // console.log("This is the current node - should be W:", tempLinkedList.showCurrentNode());
    tempLinkedList.currentMoveToFirst();
    // console.log("This is the current node:", tempLinkedList.showCurrentNode());
    tempLinkedList.currentMoveForward();
    // console.log("This is the current node:", tempLinkedList.showCurrentNode());
    tempLinkedList.currentMoveForward();
    // console.log("This is the current node - this should also be W:", tempLinkedList.showCurrentNode());
    tempLinkedList.delete()
    const temp3 = tempLinkedList.showCompleteLinkedListArray();
    // console.log("This is the current array_z:", temp3)
    // console.log("This is the current node:", tempLinkedList.showCurrentNode());
    tempLinkedList.showCompleteLinkedListArray();
    // expect(tempLinkedList.length).toBe(3);
});

test("Test the addNodesTotals() method", () => {
    const tempLinkedList = new LinkedListPOJO();
    tempLinkedList.addNode("A", 10);
    tempLinkedList.addNode("B", 10);
    tempLinkedList.addNode("C", 5);
    tempLinkedList.addNode("D", 10);
    tempLinkedList.addNodeTotals();
    tempLinkedList.addNode("E", 20);
    const temp = tempLinkedList.addNodeTotals();
    // console.log( "THis is nodetotal", temp )
    tempLinkedList.currentMoveToFirst();
    tempLinkedList.currentMoveForward();
    tempLinkedList.delete()
    const temp2 = tempLinkedList.addNodeTotals();
    // console.log( "THis is nodetotal", temp2 )
});