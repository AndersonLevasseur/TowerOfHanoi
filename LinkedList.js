const Node = require('./Node.js');
module.exports = class LinkedList {
  #head;
  #tail;
  constructor() {
    this.#head = null;
    this.length = 0;
    this.#tail = null;
  }

  // *[Symbol.iterator]() {
  //   let current = this.#head;
  //   while(current !== null) {
  //     yield current.contents;
  //     current = current.next;
  //   }
  // }

  [Symbol.iterator]() {
    let current = this.#head;
    return {
      next: () => {
        if(current !== null) {
          const result = {value: current.contents, done: false};
          current = current.next;
          return result;
        } else {
          return {done: true};
        }
      }
    };
  }

  // Adds an element to the head of the linked list and returns nothing
  push(element) {
    // element is the contents of the node
    let newNode = new Node(element);
    // link is the next node, but if there isn't one it needs to be null
    if (this.length === 0) {
      this.#tail = newNode;
    }

    if (!!this.#head) {
      newNode.next = this.#head;
    }

    this.#head = newNode;
    this.length++;
  }

  // Removes and returns the element at the head of the linked list
  pop() {
    let selectedNode = this.#head;
    if (!!this.#head) {
      // reassign this.head
      this.#head = this.#head.next;
    } else {
      throw "Nothing to Remove";
    }
    this.length--;
    if (this.length === 0) {
      this.#tail = null;
    }
    return selectedNode.contents;
  }

  // Returns the element at the head of the linked list without altering the list
  peek() {
    if (!!this.#head) {
      return this.#head.contents;
    } else {
      return undefined;
    }
  }

  addToEnd(element) {
    let newNode = new Node(element);
    if (this.length === 0) {
      this.push(element);
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    this.length++;
  }
  // Adds an element to the point in the linked list defined by the zero 
  // indexed location parameter and returns nothing
  insertAt(element, location) {
    // count from #head
    // TODO: test when location = 'z'
    // TODO: add validation

    let newNode = new Node(element);
    let count = 0;
    let currentNode = this.#head;
    let previousNode;
    if (location === 0) {
      this.push(element);
    } else if (location === this.length) {
      this.addToEnd(element);
    } else {
      while (count !== location) {
        if (!!currentNode) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          count++;
        } else {
          throw "Location not Found";
        }
      }
      previousNode.next = newNode;
      newNode.next = currentNode;
    }
    this.length++;
  }

  // Removes the element at the point in the linked list defined by the zero 
  // indexed location parameter
  removeFrom(location) {
    // TODO: add validation
    let count = 0;
    let currentNode = this.#head;
    let previousNode;
    if (this.#head === null) {
      throw "LinkedList Empty"
    }
    while (count !== location) {
      if (count < location) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count++;
      } else {
        throw "Location not Found";
      }
    }
    if (count === 0) {
      if (this.#head) {
        this.#head = this.#head.next;
      } else {
        throw "Location not Found";
      }
    } else {
      previousNode.next = currentNode.next;
    }
    this.length--;
  }

  // Removes and returns the first element that matches the element parameter
  // If no element is found, throws exception
  removeElement(element) {
    let count = 0;
    let currentNode = this.#head;
    let previousNode;
    let soughtElement;
    if (this.#head === null) {
      throw "LinkedList Empty"
    }
    while (currentNode.contents !== element) {
      if (currentNode.next === null) {
        throw "Element not Found";
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++
    }
    if (count === 0) {
      this.#head = this.#head.next;
      soughtElement = currentNode.contents;
    } else {
      soughtElement = currentNode.contents;
      previousNode.next = currentNode.next;
    }
    this.length--;
    return soughtElement;
  }

  // Returns a comma and space separated list of values representing the contents of the
  // LinkedList. E.g. if I add the integers 1 through 4, it would return the following:
  // 1, 2, 3, 4
  // Empty LinkedLists return an empty string
  toString() {
    let results = "";
    let currentNode = this.#head;
    while (!!currentNode) {
      // look at contents of Node
      if (currentNode.next === null) {
        results = results.concat(currentNode.contents.toString());
      } else {
        results = results.concat(currentNode.contents.toString() + ", ");
      }
      currentNode = currentNode.next;
    }
    return results;
  }
}