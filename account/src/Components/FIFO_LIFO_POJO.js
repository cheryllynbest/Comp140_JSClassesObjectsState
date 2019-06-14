class WorkFlow {
    constructor (name) {
        this.arr = [];
    }

    createArray(name) {
        this.arr.push(name);
        return this.arr;
    }

    FIFO() {
        this.arr.shift();
        return this.arr;  
    }

    LIFO() {
        this.arr.pop();
        return this.arr;
    }

}

export default WorkFlow; 