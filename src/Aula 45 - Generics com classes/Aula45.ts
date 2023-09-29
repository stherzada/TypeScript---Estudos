export default class Person<T, U> {
    constructor(
        public name: T,
        public age: U,
    ) {}
}

export class Stack<T> {
    private count = 0;
    private elements: { [k: number]: T } = {};

    push(elements: T): void {
        this.elements[this.count] = elements;
        this.count++;
    }

    pop(): T | void {
        if (this.itsIsEmpty()) return undefined;

        this.count--;
        const element = this.elements[this.count];
        delete this.elements[this.count];
        return element;
    }

    itsIsEmpty(): boolean {
        return this.count === 0;
    }

    size(): number {
        return this.count;
    }

    showStack(): void {
        for (const key in this.elements) {
            console.log(this.elements[key]);
        }
    }
}

const stack = new Stack();

stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
// const element1 = stack.pop()
stack.showStack();

while (!stack.itsIsEmpty()) {
    console.log(stack.pop());
}
