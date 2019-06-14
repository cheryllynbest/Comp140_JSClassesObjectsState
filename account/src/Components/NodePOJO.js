class NodePOJO {
    constructor(subject, amount) {
        this.previous = null;
        this.subject = subject;
        this.amount = amount;
        this.next = null;
    }

    show() {
        const nodeString = `${this.previous} ${this.next} ${this.subject} ${this.amount}`;
        return nodeString;
    }
    
}
    export default NodePOJO;