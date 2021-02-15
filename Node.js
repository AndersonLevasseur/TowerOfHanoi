module.exports = class Node {
    constructor(contents, next = null) {
        this.next = next;
        this.contents = contents;
    }
}