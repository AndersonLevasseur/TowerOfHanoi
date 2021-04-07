export default class Node {
    constructor(contents, previous = null, next = null) {
        this.next = next;
        this.contents = contents;
        this.previous = previous;
    }
}