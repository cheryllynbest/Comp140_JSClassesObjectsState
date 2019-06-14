import NodePOJO from "./NodePOJO";

class LinkedListPOJO {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
        this.length = 0;
        this.startTemp = null;
        this.endTemp = null;
    }

    showCurrentNode() {
        if (this.length < 1) {
            return "There are no Nodes in the list --> Add a Node";
        } else {    
        return this.current.subject
        } 
    }

    showCompleteLinkedListArray() {
        const visArray = [];
        let tempCurrent = this.head;
        while (tempCurrent !== null) {
            const tempObject = {
                subject: tempCurrent.subject,
                value: tempCurrent.amount
        }
        visArray.push(tempObject);
        tempCurrent = tempCurrent.next;
        }
        return visArray;
    }

    addNode(subject, amount) {
        const newNode = new NodePOJO(subject, amount);
        if (this.head === null) {
            this.length++;
            this.next = this.tail;
            this.previous = this.head;
            this.head = newNode;
            this.tail = newNode;
            this.current = newNode;
        } else {
            this.length++;
            while (this.current.next !== null) {
                this.current = this.current.next;
            }
            this.tail = newNode;
            newNode.previous = this.current;
            this.current.next = newNode;
            this.current = newNode;
        }
        return this.length;
    }

    currentMoveBack() {
        if (this.length > 1 && this.current.previous !== null) {
            this.current = this.current.previous;
            return this.current
        } else {
            return this.current
        }
    }

    currentMoveForward() {
        if (this.length > 1 && this.current.next !== null) {
            this.current = this.current.next;
            return this.current
        } else {
            return this.current
        }    
    }

    currentMoveToFirst() {
        if (this.current === null) {
            this.current = null;
        } else {
            while (this.current.previous !== null) {
                this.current = this.current.previous;
            }
        return this.current;
        }
    }

    currentMoveToLast() {
        if (this.head === null) {
            this.current = null;
        } else {
            while (this.current.next !== null) {
                this.current = this.current.next;
            }
        return this.current;
        }
    }

    insertNodeAfter(subject, amount) {
        const newNode = new NodePOJO(subject, amount);
        this.length++;
        if (this.current.next === null) {
            // console.log('in insert if');
            this.tail = newNode;
            newNode.previous = this.current;
            this.current.next = newNode;
            this.current = newNode;
        } else {
            // console.log('in insert else');
            this.startTemp = this.current;
            this.endTemp = this.current.next;
            this.current = newNode;

            this.startTemp.next = newNode;
            this.endTemp.previous = newNode;

            this.current.previous = this.startTemp;
            this.current.next = this.endTemp;
        }
    }

    delete() {
        if (this.current.previous === null && this.current.next !== null) {
            this.length--;
            this.startTemp = this.current.previous;
            this.endTemp = this.current.next;
            this.current = this.endTemp;
            this.current.previous = this.startTemp;
            return this.current;
        } else if (this.current.next === null && this.current.previous !== null) {
            this.length--;
            this.startTemp = this.current.previous;
            this.endTemp = this.current.next;
            this.current = this.startTemp;
            this.current.next = this.endTemp
            return this.current;
        } else if (this.current.next === null && this.current.previous === null) {
            this.length--;
            this.head = null;
            this.tail = null;
            this.current = null;
            this.length = 0;
            this.startTemp = null;
            this.endTemp = null;
            return this.current;
        } else {
            this.length--;
            this.startTemp = this.current.previous;
            this.endTemp = this.current.next;
            this.current = this.startTemp;
            this.current.next = this.endTemp
            this.current.next.previous = this.current;
            return this.current;
        }   
    }

    addNodeTotals() {
        const visArray = [];
        let tempCurrent = this.head;
        while (tempCurrent !== null) {
            const tempObject = {
                subject: tempCurrent.subject,
                value: tempCurrent.amount
        }
        visArray.push(tempObject);
        tempCurrent = tempCurrent.next;
        }        
        let tempNodeTotal = 0;
        for (let i=0; i< visArray.length; i++) {
            tempNodeTotal = tempNodeTotal + Number(visArray[i].value);
        }
        return (tempNodeTotal);
    }

}

export default LinkedListPOJO;