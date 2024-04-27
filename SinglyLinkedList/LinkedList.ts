class ListNode {
  data: number;
  next: ListNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  private head: ListNode | null;
  constructor() {
    this.head = null;
  }

  printList() {
    let current: ListNode | null = this.head;
    while (current != null) {
      console.log(current.data + "-->");

      current = current.next as ListNode;
    }
    console.log("null");
  }

  findLength() {
    if (this.head == null) return 0;

    let current = this.head;
    let counter: number = 0;

    while (current != null) {
      counter++;
      current = current.next as ListNode;
    }
    return counter;
  }

  insertStart(nodeValue: number) {
    const newNode = new ListNode(nodeValue);
    newNode.next = this.head;
    this.head = newNode;
  }
  insertEnd(nodeValue: number) {
    const newNode = new ListNode(nodeValue);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current: ListNode | null = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertAtPosition(nodeValue: number, position: number) {
    const newNode = new ListNode(nodeValue);
    if (this.head === null || position === 1) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let previous: ListNode | null = this.head;
      let count = 1;
      while (count < position - 1 && previous.next !== null) {
        count++;
        previous = previous.next;
      }
      if (previous === null) {
        console.log("Position is out of range.");
        return;
      }
      let current: ListNode | null = previous.next;
      previous.next = newNode;
      newNode.next = current;
    }
  }
}

const list1 = new LinkedList();
list1.insertStart(1);
list1.insertEnd(2);
list1.insertEnd(3);
list1.insertStart(0);
list1.printList();
console.log(list1.findLength());
list1.insertAtPosition(1, 1);
list1.printList();
